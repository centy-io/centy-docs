---
sidebar_position: 5
---

# Issues

Issues are the core unit of work tracking in Centy. Each issue is stored as a folder containing a Markdown file for content and a JSON file for metadata.

## Issue Structure

Each issue is stored in `.centy/issues/` with a UUID-based folder name:

```
.centy/issues/
└── 6a740dbd-ec2d-45f9-9927-fdcb6c3d3801/
    ├── issue.md       # Issue content (title + description)
    ├── metadata.json  # Issue metadata
    └── assets/        # Issue-specific assets
```

### issue.md

The Markdown file contains the issue title and description:

```markdown
# Fix authentication bug

Users are unable to log in when using SSO.
The error appears after the OAuth callback.

## Steps to Reproduce
1. Click "Login with Google"
2. Complete Google authentication
3. Observe redirect failure
```

### metadata.json

The JSON file contains structured metadata:

```json
{
  "displayNumber": 1,
  "status": "open",
  "priority": 1,
  "createdAt": "2025-01-15T10:30:00.000Z",
  "updatedAt": "2025-01-15T10:30:00.000Z"
}
```

## Creating Issues

Use the CLI to create a new issue:

```bash
# Interactive mode
centy create issue

# With title
centy create issue "Fix login bug"

# With title and priority
centy create issue "Fix login bug" --priority 1

# Using a template
centy create issue "Fix login bug" --template bug-report
```

## Listing Issues

View all issues in your project:

```bash
# List all issues
centy list issues

# Filter by status
centy list issues --status open

# Filter by priority
centy list issues --priority 1

# Sort by date
centy list issues --sort created
```

## Viewing an Issue

View details of a specific issue:

```bash
# By display number
centy show issue 1

# By UUID
centy show issue 6a740dbd-ec2d-45f9-9927-fdcb6c3d3801
```

## Updating Issues

Modify issue status or metadata:

```bash
# Update status
centy update issue 1 --status in-progress

# Update priority
centy update issue 1 --priority 2

# Update multiple fields
centy update issue 1 --status in-progress --priority 1
```

## Closing Issues

Mark an issue as resolved:

```bash
# Close by display number
centy close issue 1

# Close with comment
centy close issue 1 --comment "Fixed in commit abc123"
```

## Deleting Issues

Remove an issue from the project:

```bash
# Delete by display number
centy delete issue 1

# Force delete without confirmation
centy delete issue 1 --force
```

## Issue Metadata Fields

| Field | Type | Description |
|-------|------|-------------|
| `displayNumber` | number | Human-friendly issue number |
| `status` | string | Current workflow state |
| `priority` | number | Priority level (1 = highest) |
| `createdAt` | string | ISO 8601 creation timestamp |
| `updatedAt` | string | ISO 8601 last update timestamp |

Custom fields defined in `config.json` will also appear in metadata.

## Working with Assets

Attach files to issues:

```bash
# Add an asset
centy add asset 1 ./screenshot.png

# List assets
centy list assets 1

# Remove an asset
centy remove asset 1 screenshot.png
```

## Best Practices

1. **Use descriptive titles**: The title should summarize the issue in one line
2. **Set appropriate priorities**: Reserve priority 1 for critical issues
3. **Update status regularly**: Keep issue status current for accurate project tracking
4. **Use templates**: Create templates for common issue types (bugs, features, etc.)
5. **Link related issues**: Reference other issues by number in descriptions

## Next Steps

- [Templates](../templates) - Create issue templates
- [LLM Integration](../llm-integration) - Configure AI assistant behavior with issues
