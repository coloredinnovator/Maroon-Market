# Maroon Identity Graph — OKF Bundle
version: 1.0
domain: identity_graph
owner: Maroon Technologies

## Summary
The Identity Graph maps individuals, communities, and cultural lineages using public signals and contextual metadata.

## Knowledge Units

### KU1: Identity Entities
type: schema
entities:
  - Person
  - Alias
  - Affiliation
  - CulturalLineage
  - PublicSignal
  - TrustScore

### KU2: Graph Logic
type: process
steps:
  1. Collect public signals.
  2. Cluster identities.
  3. Map cultural lineage.
  4. Score authenticity.
  5. Generate contextual insights.

### KU3: Agent Actions
type: agent_actions
actions:
  - map_identity
  - detect_lineage
  - score_authenticity
  - generate_insights
