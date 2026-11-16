# Agent instructions

## Personal repository delivery

This is Mario's personal repository (`marioisbeck/wedding`). Default:
**edit → check → commit → push directly to `master`**.

An implementation or fix request authorizes scoped commits and a normal push
without another permission question. Honor explicit local-only, no-push,
draft-only or advice-only limits. PRs, workbench branches, release branches and
second-agent reviews are optional. Use isolation when useful, then integrate
owned changes onto `master`. This supersedes older Gitflow or mandatory-PR
instructions for this personal repository.

Preserve dirty work, other workers and existing branches. Stage only owned
paths or hunks, run relevant checks and secret scans, keep hooks active, and
verify the remote commit after pushing. Never force-push `master` or bypass
a guard. Report the commit, checks and push status. Create version bumps and
release tags only for requested releases. Agent-launch, connector and deployment
approval boundaries remain separate.
