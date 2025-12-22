---
sidebar_position: 1
slug: /
---

# Introduction

**Centy** is an AI-powered issue tracking and project management CLI designed to work seamlessly with modern development workflows and AI assistants.

## Why Centy?

Traditional issue trackers are built for humans clicking through web interfaces. Centy takes a different approach:

- **File-based**: All data lives in your repository as structured files
- **AI-native**: Designed from the ground up for LLM integration
- **Version controlled**: Issues and docs are tracked alongside your code
- **Offline-first**: Works without internet connectivity
- **Portable**: No vendor lock-in, your data is always yours

## Key Features

### Issue Tracking
Create, manage, and track issues directly from your terminal. Each issue is stored as a combination of Markdown content and JSON metadata, making it both human-readable and machine-parseable.

### Documentation Management
Maintain project documentation in a structured folder system with automatic manifest synchronization.

### LLM Integration
Built-in support for AI assistants with configurable behaviors like auto-closing issues on completion and automatic status updates.

### Templates
Use Handlebars-powered templates for consistent issue and documentation creation.

## Quick Start

**Want to try it first?** [Explore the demo](./demo-mode) with sample data - no installation required.

```bash
# Install Centy CLI (pnpm recommended)
pnpm add -g centy

# Or run directly without installing
pnpm dlx centy init

# Initialize in your project
centy init

# Create your first issue
centy create issue
```

## Project Structure

When you initialize Centy in a project, it creates a `.centy/` folder:

```
.centy/
├── config.json          # Project configuration
├── .centy-manifest.json # File tracking manifest
├── issues/              # Project issues
├── docs/                # Project documentation
├── assets/              # Shared assets
└── templates/           # Custom templates
    ├── issues/          # Issue templates
    └── docs/            # Doc templates
```

## Next Steps

- [Installation](./installation) - Install and set up Centy
- [Configuration](./configuration) - Configure Centy for your project
- [Managing Issues](./issues/) - Learn how to work with issues
- [Organizations](./organizations) - Group projects into organizations
- [Templates](./templates) - Create custom templates
- [LLM Integration](./llm-integration) - Configure AI assistant behavior
