# Rewrite

Put Quantumult X rewrite snippets in this folder.

Recommended format:

```text
[rewrite_local]
^https?:\/\/example\.com\/api\/ url script-response-body https://raw.githubusercontent.com/GnaixEuy/quantumultx-config/refs/heads/main/script/example.js

[mitm]
hostname = example.com
```

Keep each service in its own snippet so it can be enabled or disabled independently.
