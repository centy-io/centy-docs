---
sidebar_position: 4
---

# Configuration

Centy is configured through the `.centy/config.json` file in your project root.

## Configuration File

After running `centy init`, a `config.json` file is created:

```json
{
  "version": "0.1.0",
  "priorityLevels": 3,
  "customFields": [],
  "defaults": {},
  "allowedStates": ["open", "in-progress", "closed"],
  "defaultState": "open",
  "stateColors": {},
  "priorityColors": {},
  "llm": {
    "autoCloseOnComplete": true,
    "updateStatusOnStart": false,
    "allowDirectEdits": false
  }
}
```

## Configuration Options

### `version`

**Type:** `string`

The Centy configuration version. This is managed automatically.

### `priorityLevels`

**Type:** `number`
**Default:** `3`

The number of priority levels available for issues. Priority 1 is always the highest priority.

```json
{
  "priorityLevels": 5
}
```

With 5 priority levels, you can assign priorities 1-5 to issues.

### `customFields`

**Type:** `array`
**Default:** `[]`

Define custom metadata fields for issues.

```json
{
  "customFields": [
    {
      "name": "assignee",
      "type": "string"
    },
    {
      "name": "estimated_hours",
      "type": "number"
    },
    {
      "name": "labels",
      "type": "array"
    }
  ]
}
```

### `allowedStates`

**Type:** `array`
**Default:** `["open", "in-progress", "closed"]`

Define the workflow states available for issues.

```json
{
  "allowedStates": ["backlog", "todo", "in-progress", "review", "done"]
}
```

### `defaultState`

**Type:** `string`
**Default:** `"open"`

The initial state for newly created issues.

```json
{
  "defaultState": "backlog"
}
```

### `stateColors`

**Type:** `object`
**Default:** `{}`

Assign colors to states for CLI output visualization.

```json
{
  "stateColors": {
    "open": "yellow",
    "in-progress": "blue",
    "closed": "green"
  }
}
```

### `priorityColors`

**Type:** `object`
**Default:** `{}`

Assign colors to priority levels.

```json
{
  "priorityColors": {
    "1": "red",
    "2": "orange",
    "3": "yellow"
  }
}
```

### `defaults`

**Type:** `object`
**Default:** `{}`

Set default values for issue fields.

```json
{
  "defaults": {
    "priority": 2,
    "assignee": "unassigned"
  }
}
```

## LLM Configuration

The `llm` section configures behavior when AI assistants work with your project.

### `llm.autoCloseOnComplete`

**Type:** `boolean`
**Default:** `true`

When enabled, AI assistants can automatically close issues when they complete the associated work.

```json
{
  "llm": {
    "autoCloseOnComplete": true
  }
}
```

### `llm.updateStatusOnStart`

**Type:** `boolean`
**Default:** `false`

When enabled, AI assistants will automatically update issue status to "in-progress" when they begin work.

```json
{
  "llm": {
    "updateStatusOnStart": true
  }
}
```

### `llm.allowDirectEdits`

**Type:** `boolean`
**Default:** `false`

Controls whether AI assistants can directly edit files in the `.centy/` folder. When `false` (recommended), AI assistants must use CLI commands.

```json
{
  "llm": {
    "allowDirectEdits": false
  }
}
```

## Environment-Specific Configuration

You can override configuration per environment using environment variables:

```bash
CENTY_PRIORITY_LEVELS=5 centy create issue
```

## Example Configurations

### Minimal Setup

```json
{
  "version": "0.1.0",
  "priorityLevels": 3,
  "allowedStates": ["open", "closed"],
  "defaultState": "open"
}
```

### Agile Workflow

```json
{
  "version": "0.1.0",
  "priorityLevels": 4,
  "allowedStates": ["backlog", "sprint", "in-progress", "review", "done"],
  "defaultState": "backlog",
  "customFields": [
    { "name": "story_points", "type": "number" },
    { "name": "sprint", "type": "string" },
    { "name": "epic", "type": "string" }
  ],
  "llm": {
    "autoCloseOnComplete": false,
    "updateStatusOnStart": true
  }
}
```

### Bug Tracking Focus

```json
{
  "version": "0.1.0",
  "priorityLevels": 5,
  "allowedStates": ["new", "confirmed", "in-progress", "fixed", "verified", "closed"],
  "defaultState": "new",
  "customFields": [
    { "name": "severity", "type": "string" },
    { "name": "affected_version", "type": "string" },
    { "name": "fixed_version", "type": "string" }
  ]
}
```

## Next Steps

- [Managing Issues](./issues/) - Learn how to create and manage issues
- [Templates](./templates) - Create templates for consistent issue creation
