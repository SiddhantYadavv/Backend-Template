module.exports = {
  extends: ['@commitlint/config-conventional',"@commitlint/cli"],
  rules: {
    'type-enum': [2, 'always', [
      'feat',    // A new feature
      'fix',     // A bug fix
      'docs',    // Documentation only changes
      'style',   // Code style changes (e.g., formatting)
      'refactor',// Code changes that neither fix a bug nor add a feature
      'perf',    // Performance improvements
      'test',    // Adding or modifying tests
      'build',   // Changes that affect the build system or external dependencies
      'ci',      // Changes related to CI configuration files and scripts
      'chore',   // Routine changes that don't modify code
      'revert',  // Revert a previous commit
      'wip'      // Work in progress
    ]],
    'subject-case': [2, 'always', ['sentence-case', 'lower-case']] // enforce sentence case for the subject line
  }
};
