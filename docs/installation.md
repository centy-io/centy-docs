---
sidebar_position: 3
---

# Installation

Get Centy up and running in your development environment.

## Requirements

- Node.js 18 or higher
- pnpm (recommended)

## Install via pnpm

```bash
pnpm add -g centy
```

### Run without Installing

You can also run Centy directly without global installation:

```bash
pnpm dlx centy init
pnpm dlx centy create issue
```

## Verify Installation

After installation, verify that Centy is available:

```bash
centy --version
```

## Initialize a Project

Navigate to your project directory and initialize Centy:

```bash
cd your-project
centy init
```

This creates the `.centy/` folder structure with default configuration.

## Updating Centy

To update to the latest version:

```bash
pnpm update -g centy
```

## Uninstalling

To remove Centy from your system:

```bash
pnpm remove -g centy
```

## Next Steps

After installation, proceed to [Configuration](./configuration) to customize Centy for your project.
