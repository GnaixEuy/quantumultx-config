# Quantumult X Config

Personal Quantumult X configuration repository.

This repository separates configuration by purpose:

- `config/`: main Quantumult X profile
- `rewrite/`: rewrite snippets and remote rewrite modules
- `script/`: JavaScript scripts used by rewrites and tasks
- `filter/`: routing, proxy, direct, and reject rule lists
- `task/`: scheduled task scripts and task examples
- `mitm/`: MITM hostname notes
- `resource/`: icons and other static assets

## Usage

Import the main profile in Quantumult X after replacing the placeholder GitHub raw URLs:

```text
https://raw.githubusercontent.com/GnaixEuy/quantumultx-config/refs/heads/main/config/quantumultx.conf
```

For single modules, use the raw URL of the corresponding file, for example:

```text
https://raw.githubusercontent.com/GnaixEuy/quantumultx-config/refs/heads/main/rewrite/example.snippet
```

## Safety

Do not commit sensitive values:

- node subscription URLs
- personal API tokens
- cookies
- device identifiers
- private account data

Keep secrets in Quantumult X local settings or in a private external vault.
