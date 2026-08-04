# Filter

Store Quantumult X routing rule lists here.

Suggested split:

- `reject.list`: ads, trackers, and blocked domains
- `direct.list`: services that should always connect directly
- `proxy.list`: services that should use a proxy policy
- `ai-all-in-one.list`: AI services routed to the `AI` policy
- `moviepilot.list`: MoviePilot metadata and control-plane services routed to `Proxy`; download traffic stays direct
- `moviepilot-direct.list`: the never-proxy set that guards upstream quota (downloads, cloud drives, registries, domestic sites). Consumed by the server-side sing-box, which evaluates it before every acceleration list; registered with `enabled=false` in the Quantumult X profile
- `公司音乐媒体分流.list`: music services that can be enabled on company networks and routed to `Proxy`

Keep high-risk custom rules small and documented so unexpected routing changes are easy to trace.
