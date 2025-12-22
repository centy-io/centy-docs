---
sidebar_position: 8
---

# Organizations

Organizations allow you to group related projects together, similar to how GitHub organizes repositories under organizations like `centy-io/centy-daemon`.

## Why Organizations?

As the number of projects you manage grows, organizing them becomes essential for:

- **Team structure**: Group projects by team, department, or business unit
- **Client work**: Separate projects by client or customer
- **Project types**: Organize by project category (microservices, libraries, apps)
- **Filtering**: Quickly find and focus on relevant projects

## Concepts

### Organization

An organization is a logical grouping with:

- **Name**: Human-readable display name (e.g., "My Company")
- **Slug**: URL-friendly identifier (e.g., `my-company`)
- **Description**: Optional description of the organization
- **Project count**: Number of projects assigned to the organization

### Project Assignment

Each project can belong to:

- **One organization**: The project appears under that organization
- **No organization**: The project is "ungrouped" and appears independently

Projects are assigned to organizations, not copied. The project data stays in its original location.

## Managing Organizations

### Using the CLI

Create an organization:

```bash
centy create org "My Company"
centy create org "Centy.io" --slug centy-io --description "Official projects"
```

List organizations:

```bash
centy list orgs
```

Assign a project to an organization:

```bash
# From within the project directory
centy project org my-company

# Or specify the project path
centy project org my-company --path /path/to/project
```

Remove a project from an organization:

```bash
centy project org --remove
```

See [CLI Reference - Organization Commands](./cli-reference#organization-commands) for the complete command reference.

### Using the Web App

#### Organizations Page

Navigate to the **Organizations** page from the header navigation to:

- View all organizations in a table format
- See project counts for each organization
- Create new organizations
- Edit or delete existing organizations

#### Org Switcher

The **Org Switcher** in the header provides quick filtering:

- **All Organizations**: Show projects from all organizations
- **Ungrouped Projects**: Show only projects not assigned to any organization
- **Specific Organization**: Show only projects from the selected organization

The selected filter persists across sessions and affects the project selector dropdown.

#### Project Grouping

When "All Organizations" is selected, projects in the project selector are grouped by organization for easier navigation.

#### Assigning Projects

To assign a project to an organization:

1. Open your project
2. Go to **Project Config** (Settings)
3. Find the **Organization** section
4. Select an organization from the dropdown
5. The change is saved automatically

## Best Practices

### Naming Conventions

- Use clear, descriptive names that identify the group
- Keep slugs lowercase with hyphens (auto-generated from name)
- Add descriptions for context, especially in larger teams

### Organization Structure

Consider organizing by:

- **Team**: `frontend-team`, `backend-team`, `devops`
- **Product**: `product-a`, `product-b`, `internal-tools`
- **Client**: `client-acme`, `client-globex` (for agencies)
- **Environment**: `production`, `staging`, `experiments`

### When to Use Organizations

Organizations work best when:

- You have 10+ projects to manage
- Multiple people work on different project groups
- You need to filter views by logical groupings
- Different projects have different stakeholders

For smaller setups, ungrouped projects may be sufficient.

## Next Steps

- [CLI Reference](./cli-reference#organization-commands) - Complete command reference
- [Web App](./web-app) - Using the Centy web interface
- [Configuration](./configuration) - Configure project settings
