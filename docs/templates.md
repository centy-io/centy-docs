---
sidebar_position: 6
---

# Templates

Templates allow you to create consistent issues and documentation using [Handlebars](https://handlebarsjs.com/) syntax.

## Template Location

Templates are stored in the `.centy/templates/` folder:

```
.centy/templates/
├── README.md
├── issues/      # Issue templates
│   ├── bug-report.md
│   └── feature-request.md
└── docs/        # Documentation templates
    └── api.md
```

## Using Templates

Specify a template when creating an issue or document:

```bash
# Create issue using bug-report template
centy create issue "Login fails on Safari" --template bug-report

# Create doc using api template
centy create doc "Users API" --template api
```

## Available Placeholders

### Issue Templates

| Placeholder | Description |
|-------------|-------------|
| `{{title}}` | Issue title |
| `{{description}}` | Issue description |
| `{{priority}}` | Priority number (1 = highest) |
| `{{priority_label}}` | Priority label (e.g., "high", "medium", "low") |
| `{{status}}` | Issue status |
| `{{created_at}}` | Creation timestamp |
| `{{custom_fields}}` | Map of custom field key-value pairs |

### Doc Templates

| Placeholder | Description |
|-------------|-------------|
| `{{title}}` | Document title |
| `{{content}}` | Document content |
| `{{slug}}` | URL-friendly slug |
| `{{created_at}}` | Creation timestamp |
| `{{updated_at}}` | Last update timestamp |

## Handlebars Features

Templates support full Handlebars syntax for dynamic content generation.

### Conditionals

Show content only when a value exists:

```text
{{#if description}}
## Description
{{description}}
{{/if}}
```

### If-Else

Provide fallback content:

```text
{{#if assignee}}
**Assigned to:** {{assignee}}
{{else}}
**Assigned to:** Unassigned
{{/if}}
```

### Loops

Iterate over arrays or objects:

```text
{{#each custom_fields}}
- **{{@key}}:** {{this}}
{{/each}}
```

### Comparison Helpers

Use comparison operators:

```text
{{#if (eq priority 1)}}
## CRITICAL PRIORITY
{{/if}}
```

## Example Templates

### Bug Report Template

Create `templates/issues/bug-report.md`:

```text
# Bug: {{title}}

**Priority:** {{priority_label}} | **Status:** {{status}}

## Description
{{description}}

## Steps to Reproduce
1.
2.
3.

## Expected Behavior


## Actual Behavior


## Environment
- OS:
- Browser:
- Version:

{{#if custom_fields}}
## Additional Info
{{#each custom_fields}}
- **{{@key}}:** {{this}}
{{/each}}
{{/if}}
```

### Feature Request Template

Create `templates/issues/feature-request.md`:

```text
# Feature: {{title}}

**Priority:** {{priority_label}} | **Status:** {{status}}

## Summary
{{description}}

## Problem Statement
What problem does this feature solve?

## Proposed Solution
How should this feature work?

## Alternatives Considered
What other approaches were considered?

## Additional Context
Any other information that helps understand the request.
```

### API Documentation Template

Create `templates/docs/api.md`:

```text
---
title: "{{title}}"
slug: "{{slug}}"
---

# {{title}} API

{{content}}

## Endpoints

### GET /api/{{slug}}

Retrieve {{title}} data.

### POST /api/{{slug}}

Create a new {{title}}.

---
*Last updated: {{updated_at}}*
```

## Creating Custom Templates

1. Create a new `.md` file in the appropriate templates folder
2. Use Handlebars syntax for dynamic content
3. Test the template with `centy create issue "Test" --template your-template`

### Tips for Writing Templates

- Use clear section headers with `##`
- Include placeholder comments for fields users should fill in
- Use conditionals to handle optional fields gracefully
- Keep templates focused on a single type of issue or document

## Managing Templates

```bash
# List available templates
centy list templates

# Show template content
centy show template bug-report

# Validate template syntax
centy validate template bug-report
```

## Next Steps

- [Configuration](./configuration) - Configure custom fields for templates
- [LLM Integration](./llm-integration) - How AI assistants use templates
