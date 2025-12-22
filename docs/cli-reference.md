---
sidebar_position: 9
---

# CLI Reference

Complete reference for all Centy CLI commands.

## Global Options

These options are available for most commands:

| Option | Description |
|--------|-------------|
| `--help`, `-h` | Show help for a command |
| `--version`, `-v` | Show Centy version |
| `--json` | Output results as JSON |

## Project Management

### `centy init`

Initialize Centy in the current directory.

```bash
centy init [options]
```

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--force`, `-f` | Skip interactive prompts and use defaults | `false` |

**Examples:**

```bash
centy init
centy init --force
```

### `centy info`

Get Centy daemon info and version.

```bash
centy info [options]
```

**Options:**

| Option | Description |
|--------|-------------|
| `--json` | Output as JSON |

### `centy version`

Get project version info and comparison with daemon.

```bash
centy version [options]
```

**Options:**

| Option | Description |
|--------|-------------|
| `--json` | Output as JSON |

### `centy config`

Get the project configuration.

```bash
centy config [options]
```

**Options:**

| Option | Description |
|--------|-------------|
| `--json` | Output as JSON |

### `centy manifest`

Get the project manifest.

```bash
centy manifest [options]
```

**Options:**

| Option | Description |
|--------|-------------|
| `--json` | Output as JSON |

### `centy update`

Update project to a target version (runs migrations).

```bash
centy update [options]
```

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--target`, `-t` | Target version to update to | Daemon version |
| `--force`, `-f` | Skip confirmation prompt | `false` |

**Examples:**

```bash
centy update
centy update --target 0.2.0
centy update --force
```

## Daemon Commands

### `centy start`

Start the Centy daemon.

```bash
centy start [options]
```

**Options:**

| Option | Description |
|--------|-------------|
| `--foreground`, `-f` | Run daemon in foreground (blocks terminal) |

### `centy restart`

Restart the Centy daemon.

```bash
centy restart [options]
```

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--delay`, `-d` | Delay in seconds before restart | `0` |

### `centy shutdown`

Shutdown the Centy daemon gracefully.

```bash
centy shutdown [options]
```

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--delay`, `-d` | Delay in seconds before shutdown | `0` |

## Issue Commands

### `centy create issue`

Create a new issue.

```bash
centy create issue [options]
```

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--title`, `-t` | Issue title | Interactive prompt |
| `--description`, `-d` | Issue description | None |
| `--priority`, `-p` | Priority level (low/medium/high) | Config default |
| `--status`, `-s` | Initial status | `open` |

**Examples:**

```bash
centy create issue
centy create issue --title "Fix login bug"
centy create issue --title "Fix login bug" --priority high
centy create issue -t "Add dark mode" -d "Implement dark theme support" -p medium
```

### `centy list issues`

List all issues in the project.

```bash
centy list issues [options]
```

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--status`, `-s` | Filter by status | All |
| `--priority`, `-p` | Filter by priority level (1 = highest) | All |
| `--json` | Output as JSON | `false` |

**Examples:**

```bash
centy list issues
centy list issues --status open
centy list issues --priority 1
centy list issues --json
```

### `centy get issue`

Display details of a specific issue.

```bash
centy get issue <id> [options]
```

**Arguments:**

- `id`: Issue display number or UUID

**Options:**

| Option | Description |
|--------|-------------|
| `--json` | Output as JSON |

**Examples:**

```bash
centy get issue 1
centy get issue 6a740dbd-ec2d-45f9-9927-fdcb6c3d3801
centy get issue 1 --json
```

### `centy update issue`

Update issue metadata.

```bash
centy update issue <id> [options]
```

**Arguments:**

- `id`: Issue display number or UUID

**Options:**

| Option | Description |
|--------|-------------|
| `--title`, `-t` | New title |
| `--description`, `-d` | New description |
| `--status`, `-s` | New status (e.g., open, in-progress, closed) |
| `--priority`, `-p` | New priority (low/medium/high or 1-3) |

**Examples:**

```bash
centy update issue 1 --status in-progress
centy update issue 1 --status closed
centy update issue 1 --title "Updated title" --priority high
```

### `centy delete issue`

Delete an issue permanently.

```bash
centy delete issue <id> [options]
```

**Arguments:**

- `id`: Issue display number or UUID

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--force`, `-f` | Skip confirmation | `false` |

**Examples:**

```bash
centy delete issue 1
centy delete issue 1 --force
```

## Documentation Commands

### `centy create doc`

Create a new document.

```bash
centy create doc [options]
```

**Options:**

| Option | Description | Required |
|--------|-------------|----------|
| `--title`, `-t` | Doc title | Yes |
| `--content`, `-c` | Doc content (markdown) | No |
| `--slug` | Custom URL-friendly slug | No (auto-generated) |
| `--template` | Template name to use | No |

**Examples:**

```bash
centy create doc --title "API Reference"
centy create doc -t "Getting Started" -c "# Welcome"
centy create doc --title "Users API" --slug users
```

### `centy list docs`

List all documents.

```bash
centy list docs [options]
```

**Options:**

| Option | Description |
|--------|-------------|
| `--json` | Output as JSON |

### `centy get doc`

Display a document.

```bash
centy get doc <slug> [options]
```

**Arguments:**

- `slug`: Document slug

**Options:**

| Option | Description |
|--------|-------------|
| `--json` | Output as JSON |

**Examples:**

```bash
centy get doc getting-started
centy get doc api-reference --json
```

### `centy update doc`

Update an existing document.

```bash
centy update doc <slug> [options]
```

**Arguments:**

- `slug`: Document slug

**Options:**

| Option | Description |
|--------|-------------|
| `--title`, `-t` | New title |
| `--content`, `-c` | New content (markdown) |
| `--new-slug` | Rename to a new slug |

**Examples:**

```bash
centy update doc getting-started --title "New Title"
centy update doc api-docs --new-slug api-reference
```

### `centy delete doc`

Delete a document.

```bash
centy delete doc <slug> [options]
```

**Arguments:**

- `slug`: Document slug

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--force`, `-f` | Skip confirmation | `false` |

## Asset Commands

### `centy add asset`

Add an asset to an issue or as a shared asset.

```bash
centy add asset <file> [options]
```

**Arguments:**

- `file`: Path to the file to add

**Options:**

| Option | Description |
|--------|-------------|
| `--issue`, `-i` | Issue ID or display number to attach the asset to |
| `--shared`, `-s` | Add as a shared asset (accessible by all issues) |
| `--name`, `-n` | Custom filename (defaults to original filename) |

**Examples:**

```bash
centy add asset screenshot.png --issue 1
centy add asset diagram.svg --shared
centy add asset ./error-log.txt -i 1 -n "debug-log.txt"
```

### `centy list assets`

List assets for an issue or shared assets.

```bash
centy list assets [options]
```

**Options:**

| Option | Description |
|--------|-------------|
| `--issue`, `-i` | Issue ID or display number |
| `--shared`, `-s` | List only shared assets |
| `--include-shared` | Include shared assets when listing issue assets |
| `--json` | Output as JSON |

**Examples:**

```bash
centy list assets --issue 1
centy list assets --shared
centy list assets -i 1 --include-shared
```

### `centy get asset`

Get an asset and save it to a file.

```bash
centy get asset <filename> [options]
```

**Arguments:**

- `filename`: Asset filename

**Options:**

| Option | Description |
|--------|-------------|
| `--issue`, `-i` | Issue ID or display number |
| `--shared`, `-s` | Get a shared asset |
| `--output`, `-o` | Output file path (defaults to asset filename) |

**Examples:**

```bash
centy get asset screenshot.png --issue 1
centy get asset logo.svg --shared --output ./my-logo.svg
```

### `centy delete asset`

Delete an asset.

```bash
centy delete asset <filename> [options]
```

**Arguments:**

- `filename`: Asset filename

**Options:**

| Option | Description |
|--------|-------------|
| `--issue`, `-i` | Issue ID or display number |
| `--shared`, `-s` | Delete a shared asset |
| `--force`, `-f` | Skip confirmation prompt |

**Examples:**

```bash
centy delete asset screenshot.png --issue 1
centy delete asset logo.svg --shared --force
```

## Project Commands

### `centy list projects`

List all tracked Centy projects.

```bash
centy list projects [options]
```

**Options:**

| Option | Description |
|--------|-------------|
| `--include-stale` | Include projects where path no longer exists |
| `--json` | Output as JSON |

### `centy get project`

Get info about a specific project.

```bash
centy get project [path] [options]
```

**Arguments:**

- `path`: Path to the project (defaults to current directory)

**Options:**

| Option | Description |
|--------|-------------|
| `--json` | Output as JSON |

### `centy register project`

Register a project for tracking.

```bash
centy register project [path]
```

**Arguments:**

- `path`: Path to the project (defaults to current directory)

### `centy untrack project`

Remove a project from tracking.

```bash
centy untrack project [path] [options]
```

**Arguments:**

- `path`: Path to the project (defaults to current directory)

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--force`, `-f` | Skip confirmation prompt | `false` |

## Organization Commands

Organizations let you group related projects together, similar to how GitHub organizes repositories under organizations like `centy-io/centy-daemon`.

### `centy create org`

Create a new organization to group projects.

```bash
centy create org <name> [options]
```

**Aliases:** `centy create organization`

**Arguments:**

- `name`: Organization display name

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--slug`, `-s` | Custom URL-friendly slug | Auto-generated from name |
| `--description`, `-d` | Organization description | None |
| `--json` | Output as JSON | `false` |

**Examples:**

```bash
centy create org "My Company"
centy create org "Centy.io" --slug centy-io
centy create org "My Org" --description "Official projects"
```

### `centy list orgs`

List all organizations.

```bash
centy list orgs [options]
```

**Aliases:** `centy list organizations`

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--json` | Output as JSON | `false` |

**Examples:**

```bash
centy list orgs
centy list organizations --json
```

### `centy get org`

Get organization details by slug.

```bash
centy get org <slug> [options]
```

**Aliases:** `centy get organization`

**Arguments:**

- `slug`: Organization slug

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--json` | Output as JSON | `false` |

**Examples:**

```bash
centy get org centy-io
centy get organization my-org --json
```

### `centy update org`

Update an organization's details.

```bash
centy update org <slug> [options]
```

**Aliases:** `centy update organization`

**Arguments:**

- `slug`: Organization slug

**Options:**

| Option | Description |
|--------|-------------|
| `--name`, `-n` | New organization name |
| `--description`, `-d` | New organization description |
| `--new-slug` | Rename the organization slug |
| `--json` | Output as JSON |

At least one of `--name`, `--description`, or `--new-slug` is required.

**Examples:**

```bash
centy update org my-org --name "New Name"
centy update org my-org --description "Updated description"
centy update org my-org --new-slug new-slug
```

### `centy delete org`

Delete an organization. The organization must have no projects assigned.

```bash
centy delete org <slug> [options]
```

**Aliases:** `centy delete organization`

**Arguments:**

- `slug`: Organization slug

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--force`, `-f` | Skip confirmation prompt | `false` |

**Examples:**

```bash
centy delete org my-org --force
centy delete organization old-org -f
```

### `centy project org`

Assign or remove a project from an organization.

```bash
centy project org [slug] [options]
```

**Aliases:** `centy project organization`

**Arguments:**

- `slug`: Organization slug to assign (omit to remove from organization)

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--path`, `-p` | Path to the project | Current directory |
| `--remove`, `-r` | Remove project from its organization | `false` |
| `--json` | Output as JSON | `false` |

**Examples:**

```bash
centy project org centy-io
centy project org my-org --path /path/to/project
centy project org --remove
```

## Exit Codes

| Code | Description |
|------|-------------|
| `0` | Success |
| `1` | General error |
| `2` | Invalid arguments |

## Next Steps

- [Configuration](./configuration) - Configure Centy behavior
- [LLM Integration](./llm-integration) - AI assistant integration
