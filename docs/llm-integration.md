---
sidebar_position: 7
---

# LLM Integration

Centy is designed from the ground up to work seamlessly with AI assistants and Large Language Models (LLMs). This page explains how to configure and optimize Centy for AI-assisted workflows.

## Why AI-Native?

Traditional issue trackers require human interaction through web interfaces. Centy's file-based approach means:

- AI assistants can read and understand issues directly from the filesystem
- Structured JSON metadata is machine-parseable
- Markdown content is human-readable and LLM-friendly
- CLI commands provide a safe interface for AI modifications

## Configuration Options

Configure AI behavior in `.centy/config.json` under the `llm` section:

```json
{
  "llm": {
    "autoCloseOnComplete": true,
    "updateStatusOnStart": false,
    "allowDirectEdits": false
  }
}
```

### autoCloseOnComplete

**Default:** `true`

When enabled, AI assistants can automatically close issues after completing the associated work.

**Recommended:** `true` for automation, `false` for manual review workflows.

### updateStatusOnStart

**Default:** `false`

When enabled, AI assistants will automatically change issue status to "in-progress" when they begin working on it.

**Recommended:** `true` for real-time status tracking, `false` if you prefer manual status management.

### allowDirectEdits

**Default:** `false`

Controls whether AI assistants can directly modify files in the `.centy/` folder.

**Recommended:** `false` - Always use CLI commands to ensure proper validation and manifest synchronization.

## Instructions for AI Assistants

When AI assistants encounter a Centy project, they should follow these guidelines:

### DO

- Use `centy` CLI commands to manage issues and documentation
- Read issues to understand project context and current work
- Update issue status as work progresses
- Close issues when work is complete (if `autoCloseOnComplete` is enabled)
- Reference issue numbers in commit messages and code comments

### DON'T

- Directly edit files in the `.centy/` folder (unless `allowDirectEdits` is `true`)
- Modify the `.centy-manifest.json` file manually
- Create issue folders without using the CLI
- Delete issues without user confirmation

## Common AI Workflows

### Starting Work on an Issue

```bash
# List open issues to find work
centy list issues --status open

# View issue details
centy show issue 1

# Update status to in-progress
centy update issue 1 --status in-progress
```

### Completing an Issue

```bash
# After finishing the work
centy close issue 1 --comment "Implemented feature as specified"
```

### Creating Issues from AI Analysis

```bash
# AI discovers a bug during code review
centy create issue "Memory leak in user session handler" --priority 2

# AI identifies refactoring opportunity
centy create issue "Refactor database connection pooling" --priority 3
```

## Reading Project Context

AI assistants can read the `.centy/` folder to understand:

1. **Project Configuration** (`.centy/config.json`)
   - Available states and priorities
   - Custom fields in use
   - LLM-specific settings

2. **Current Issues** (`.centy/issues/`)
   - What work is planned
   - What's currently in progress
   - Historical context from closed issues

3. **Documentation** (`.centy/docs/`)
   - Project documentation
   - Technical decisions
   - API documentation

## Manifest

The `.centy-manifest.json` file tracks project metadata:

```json
{
  "schemaVersion": 1,
  "centyVersion": "0.1.0",
  "createdAt": "2025-01-01T00:00:00Z",
  "updatedAt": "2025-01-01T00:00:00Z"
}
```

AI assistants should **never** modify this file directly. The CLI automatically updates it when the project is initialized or modified.

## Integration Examples

### With Claude

```
When working with this Centy project:
1. Check open issues: centy list issues --status open
2. Update status when starting: centy update issue N --status in-progress
3. Close when done: centy close issue N --comment "reason"
```

### With GitHub Copilot

Centy issues can inform Copilot suggestions by providing context about current work and project requirements.

### With Custom AI Agents

Build automation that:
1. Reads issues to determine priorities
2. Executes work based on issue descriptions
3. Updates status and closes issues upon completion

## Best Practices

1. **Review AI changes**: Even with automation, periodically review AI-created issues and status changes

2. **Use templates**: Provide templates so AI creates consistent, well-structured issues

3. **Set appropriate permissions**: Use `allowDirectEdits: false` in production projects

4. **Monitor automation**: Track AI issue closures to ensure work is actually complete

5. **Provide context**: Include detailed descriptions in issues so AI understands requirements

## Troubleshooting

### AI is not updating issues

- Check `llm.updateStatusOnStart` and `llm.autoCloseOnComplete` settings
- Verify AI has access to run CLI commands
- Check that issue numbers/UUIDs are correct

### Manifest out of sync

If the manifest becomes out of sync:

```bash
centy repair manifest
```

### AI creating duplicate issues

Implement issue search before creation:

```bash
centy search issues "login bug"
```

## Next Steps

- [CLI Reference](./cli-reference) - Complete list of Centy commands
- [Configuration](./configuration) - All configuration options
