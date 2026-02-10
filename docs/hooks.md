---
sidebar_position: 8
---

# Hooks

Hooks let you run custom shell scripts before or after Centy operations. Use them to enforce policies, trigger notifications, sync with external systems, or automate workflows.

## How Hooks Work

Hooks are defined in `.centy/config.json` under the `hooks` array. Each hook has a **pattern** that determines when it fires and a **command** that runs via `bash -c`.

```json
{
  "hooks": [
    {
      "pattern": "post:issue:create",
      "command": "echo \"Issue $CENTY_ITEM_ID created\""
    }
  ]
}
```

There are two phases:

- **Pre-hooks** run before the operation. A non-zero exit code **blocks** the operation.
- **Post-hooks** run after the operation completes. Failures are logged but never block the response.

## Pattern Format

Patterns follow the format `phase:item_type:operation`. Use `*` as a wildcard for any segment.

- **Phases:** `pre`, `post`
- **Item types:** `issue`, `doc`, `pr`, `user`, `link`, `asset`
- **Operations:** `create`, `update`, `delete`, `soft-delete`, `restore`, `move`, `duplicate`

For the full list of valid values, see the [hook config source](https://github.com/centy-io/centy-daemon/blob/main/src/hooks/config.rs).

### Pattern Examples

```
post:issue:create       # After an issue is created
pre:doc:delete          # Before a document is permanently deleted
*:*:delete              # Before and after any item is deleted
post:*:create           # After any item is created
pre:issue:*             # Before any operation on issues
*:*:*                   # Every operation (use sparingly)
```

## Hook Definition

Each hook in the `hooks` array has a `pattern`, a `command`, and optional fields for `async`, `timeout`, and `enabled`. See the [`HookDefinition` struct](https://github.com/centy-io/centy-daemon/blob/main/src/hooks/config.rs) for all fields and defaults.

## Data Available to Hook Scripts

Hook scripts receive context through both **environment variables** and **stdin JSON**. The full context structure is defined in [`HookContext`](https://github.com/centy-io/centy-daemon/blob/main/src/hooks/context.rs).

### Environment Variables

Environment variables prefixed with `CENTY_` are set for every hook: `CENTY_PHASE`, `CENTY_ITEM_TYPE`, `CENTY_OPERATION`, `CENTY_PROJECT_PATH`, and `CENTY_ITEM_ID` (when available).

### Stdin JSON

The full context is also piped to stdin as JSON, including `request_data` (the original request payload) and `success` (post-hooks only, indicates whether the operation succeeded).

You can read stdin JSON using tools like `jq`:

```bash
cat | jq -r '.request_data.title'
```

## Pre-Hooks

Pre-hooks run **before** the operation. If a pre-hook exits with a non-zero code, the operation is **blocked** and the error is returned to the caller. Pre-hooks always run synchronously.

See the [pre-hook runner](https://github.com/centy-io/centy-daemon/blob/main/src/hooks/runner.rs) for implementation details.

## Post-Hooks

Post-hooks run **after** the operation completes. They receive a `success` field indicating whether the operation succeeded or failed. Failures are logged but never block the response.

- **Synchronous** (default): The response waits for the hook to finish.
- **Async** (`"async": true`): The hook runs in the background. The response returns immediately. Use this for slow operations like HTTP requests.

See the [post-hook runner](https://github.com/centy-io/centy-daemon/blob/main/src/hooks/runner.rs) for implementation details.

## Execution Order

When multiple hooks match the same event, they run in order of **specificity** (most specific first):

1. `post:issue:create` (specificity 3 — all segments exact)
2. `post:issue:*` (specificity 2)
3. `post:*:create` (specificity 2)
4. `*:*:*` (specificity 0)

Hooks with equal specificity run in the order they appear in the config.

## Examples

All examples go inside the `hooks` array in `.centy/config.json`.

### Log All Deletions

```json
{
  "pattern": "post:*:delete",
  "command": "echo \"$(date) - $CENTY_ITEM_TYPE $CENTY_ITEM_ID deleted\" >> .centy/audit.log"
}
```

### Notify Slack on Issue Creation

```json
{
  "pattern": "post:issue:create",
  "command": "TITLE=$(cat | jq -r '.request_data.title') && curl -s -X POST \"$SLACK_WEBHOOK\" -d \"{\\\"text\\\": \\\"New issue: $TITLE\\\"}\"",
  "async": true,
  "timeout": 10
}
```

### Prevent Deletion Without Soft-Delete First

```json
{
  "pattern": "pre:*:delete",
  "command": "echo 'Direct deletion is not allowed. Use soft-delete first.' >&2; exit 1"
}
```

### Auto-Commit After Changes

```json
{
  "pattern": "post:*:create",
  "command": "cd $CENTY_PROJECT_PATH && git add .centy/ && git commit -m \"centy: $CENTY_ITEM_TYPE created\"",
  "async": true
}
```

## Working Directory

Hook commands execute with the working directory set to the project's `.centy/` folder. Use `$CENTY_PROJECT_PATH` to reference the project root.

## Next Steps

- [Configuration](./configuration) - Configure your project settings
- [Templates](./templates) - Create templates for consistent issue creation
- [CLI Reference](./cli-reference) - Full command reference
