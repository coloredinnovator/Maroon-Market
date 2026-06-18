# Maroon Market — OKF Bundle
version: 1.0
domain: commerce.marketplace
owner: Maroon Technologies

## Summary
Maroon Market is the unified commerce layer connecting all Maroon divisions, enabling local vendors, cultural producers, and micro‑entrepreneurs to transact through a Shopify-native architecture.

## Knowledge Units

### KU1: Marketplace Entities
type: schema
entities:
  - Vendor
  - Product
  - CulturalTag
  - DeliveryZone
  - PaymentEligibility
  - IdentityCluster

### KU2: Marketplace Logic
type: process
steps:
  1. Customer enters Hydrogen storefront.
  2. OKF bundles load vendor, product, and cultural metadata.
  3. Forage validates SNAP/EBT.
  4. Shipday assigns delivery.
  5. Shopify processes payment.
  6. Maroon Intelligence Layer logs cultural + economic signals.

### KU3: Agent Actions
type: agent_actions
actions:
  - recommend_products
  - match_vendors
  - explain_cultural_context
  - optimize_checkout
