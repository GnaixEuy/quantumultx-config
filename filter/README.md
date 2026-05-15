# Filter

Store Quantumult X routing rule lists here.

Suggested split:

- `reject.list`: ads, trackers, and blocked domains
- `direct.list`: services that should always connect directly
- `proxy.list`: services that should use a proxy policy
- `ai-all-in-one.list`: AI services routed to the `AI` policy
- `公司音乐媒体分流.list`: music services that can be enabled on company networks and routed to `Proxy`

Keep high-risk custom rules small and documented so unexpected routing changes are easy to trace.
