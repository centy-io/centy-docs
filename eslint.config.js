import config from 'eslint-config-agent'

/**
 * Incremental adoption of eslint-config-agent.
 *
 * This repository previously shipped with no ESLint setup at all. Enabling
 * the full strict ruleset at once would surface a backlog of pre-existing
 * issues (no spec files, optional chaining, etc.), so every rule is
 * downgraded to "warn" here. This keeps `pnpm lint` (and CI) green while
 * still reporting the full ruleset, so the warnings can be burned down
 * gradually. Remove `toWarnings` (or run `eslint . --max-warnings 0`) to
 * enforce the rules as errors once the backlog is cleared.
 *
 * Pinned to eslint-config-agent@3.0.4 rather than the newer
 * `recommended-incremental` preset: the published 3.0.5 tarball is missing
 * `rules/require-spec-file-tsx/helpers.js` (a packaging bug already fixed on
 * the package's `main` branch but not yet released), which crashes on import.
 * Bump back to the caret range once a release newer than 3.0.5 is published.
 *
 * @param {import('eslint').Linter.Config} block A flat-config block.
 * @returns {import('eslint').Linter.Config} The block with error-level rules downgraded to warnings.
 */
const toWarnings = (block) => {
  if (block.rules === undefined) {
    return block
  }
  const rules = {}
  for (const [name, value] of Object.entries(block.rules)) {
    if (Array.isArray(value)) {
      const [severity, ...options] = value
      rules[name] = [severity === 'error' || severity === 2 ? 'warn' : severity, ...options]
    } else {
      rules[name] = value === 'error' || value === 2 ? 'warn' : value
    }
  }
  return { ...block, rules }
}

export default [
  { ignores: ['build/**', '.docusaurus/**', 'i18n/**'] },
  ...config.map(toWarnings),
]
