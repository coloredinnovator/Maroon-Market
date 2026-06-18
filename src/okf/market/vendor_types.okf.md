# Maroon Vendor Types — OKF Bundle
version: 1.0
domain: commerce.vendor_types
owner: Maroon Technologies

## Summary
Defines the different classifications of vendors operating within the Maroon ecosystem, detailing their operational capacities, cultural footprint, and integration requirements.

## Vendor Archetypes

### 1. Micro-Agri Producer
type: vendor_archetype
description: Small-scale farmers, urban gardeners, and foragers.
primary_offerings: Fresh Produce, Raw Herbs
shipday_integration: batch_pickup
forage_certified: highly_likely
cultural_role: seed_keeper

### 2. Heritage Culinary Creator
type: vendor_archetype
description: Chefs and cooks preparing traditional, culturally significant hot meals or baked goods.
primary_offerings: Prepared Foods
shipday_integration: on_demand
forage_certified: unlikely
cultural_role: tradition_bearer

### 3. Artisan / Maker
type: vendor_archetype
description: Creators of physical goods, textiles, and artifacts that hold cultural significance.
primary_offerings: Cultural Artifacts
shipday_integration: scheduled_shipping
forage_certified: false
cultural_role: storyteller

### 4. Apothecary / Healer
type: vendor_archetype
description: Producers of natural medicines, teas, and wellness products.
primary_offerings: Wellness & Apothecary
shipday_integration: scheduled_shipping
forage_certified: false
cultural_role: healer

## Agent Actions
actions:
  - route_onboarding_flow
  - match_delivery_logistics
  - assign_cultural_badge
