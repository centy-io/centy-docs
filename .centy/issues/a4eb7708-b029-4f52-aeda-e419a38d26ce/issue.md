# Docs: Document organization feature

Add documentation for the organization feature:

## Documentation to add:
- Overview: What are organizations and why use them
- CLI Commands:
  - `centy create org <name>` - Create organization
  - `centy list orgs` - List all organizations  
  - `centy get org <slug>` - Get organization details
  - `centy update org <slug>` - Update organization
  - `centy delete org <slug>` - Delete organization
  - `centy project org <slug>` - Assign project to organization
  - `centy list projects --org <slug>` - Filter by organization
  - `centy list projects --ungrouped` - Show ungrouped projects

## Technical details:
- Organizations stored in ~/.centy/projects.json
- Per-project .centy/organization.json enables clone workflow
- Schema version 2 for registry file

## Related
- Issue #29 (Projects organization - CLI implementation)
