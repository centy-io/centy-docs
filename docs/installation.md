---
sidebar_position: 3
---

# Installation

Get Centy up and running in your development environment.

## Install via Shell Script (recommended)

The fastest way to install the Centy daemon — no Node.js required:

```bash
curl -fsSL https://github.com/centy-io/installer/releases/latest/download/install.sh | sh
```

This detects your OS and architecture, downloads the correct binary, and installs the daemon to `~/.centy/bin/`.

To also use the CLI, install it via pnpm:

```bash
pnpm add -g centy
```

## Install via pnpm

If you already have Node.js, you can install everything through pnpm:

```bash
# Install the CLI
pnpm add -g centy

# Install the daemon
centy install daemon
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

To update the daemon to the latest version, re-run the install script:

```bash
curl -fsSL https://github.com/centy-io/installer/releases/latest/download/install.sh | sh
```

To update the CLI:

```bash
pnpm update -g centy
```

## Uninstalling

To remove Centy from your system:

```bash
# Remove the CLI
pnpm remove -g centy

# Remove the daemon
rm -rf ~/.centy/bin
```

## Supported Platforms

| OS      | Architecture         |
|---------|----------------------|
| macOS   | Intel, Apple Silicon |
| Linux   | x86_64, ARM64        |
| Windows | x86_64               |

## Next Steps

After installation, proceed to [Configuration](./configuration) to customize Centy for your project.
