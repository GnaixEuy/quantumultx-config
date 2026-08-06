# Filter

Store Quantumult X routing rule lists here.

Suggested split:

- `reject.list`: ads, trackers, and blocked domains
- `direct.list`: services that should always connect directly
- `proxy.list`: services that should use a proxy policy
- `ai-all-in-one.list`: AI services routed to the `AI` policy
- `moviepilot.list`: MoviePilot metadata and control-plane services routed to `Proxy`; download traffic stays direct
- `moviepilot-direct.list`: the never-proxy set that guards upstream quota (downloads, cloud drives, registries, domestic sites). Consumed by the server-side sing-box, which evaluates it before every acceleration list; registered with `enabled=false` in the Quantumult X profile
- `homelab.list`: the home hosts (`nas` / `home` / `home_v6`) routed to the `HomeLab` policy so SSH / RDP survive the company DPI, which RST-injects on the SSH banner. Must be registered as the **first** line of `[filter_remote]`: home is China Telecom AS4134, and `ASN.China.list` (`tag=国内网站`) carries 5077 `IP-ASN` rules with no `no-resolve`, so anything after it — including all of `[filter_local]` — never matches. Exact `HOST` entries only; the `gnaixeuy.cn` apex is not all home
- `公司音乐媒体分流.list`: music services that can be enabled on company networks and routed to `Proxy`

Keep high-risk custom rules small and documented so unexpected routing changes are easy to trace.
