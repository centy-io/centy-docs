---
sidebar_position: 2
---

# Installation

Get Centy up and running in your development environment.

## Requirements

- Node.js 18 or higher
- pnpm (recommended), npm, or yarn

## Install via pnpm (Recommended)

```bash
pnpm add -g centy-cli
```

### Run without Installing

You can also run Centy directly without global installation:

```bash
pnpm dlx centy-cli init
pnpm dlx centy-cli create issue
```

## Install via npm

```bash
npm install -g centy-cli
```

## Install via yarn

```bash
yarn global add centy-cli
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
# pnpm (recommended)
pnpm update -g centy-cli

# npm
npm update -g centy-cli

# yarn
yarn global upgrade centy-cli
```

## Uninstalling

To remove Centy from your system:

```bash
# pnpm
pnpm remove -g centy-cli

# npm
npm uninstall -g centy-cli

# yarn
yarn global remove centy-cli
```

## Next Steps

After installation, proceed to [Configuration](./configuration) to customize Centy for your project.
