# Maroon Product Categories — OKF Bundle
version: 1.0
domain: commerce.product_categories
owner: Maroon Technologies

## Summary
The universal product categorization schema that maps items sold across all Maroon ecosystem divisions (Onita's Market, Safe-space, etc.) to their cultural, nutritional, and logistical profiles.

## Categories

### 1. Fresh Produce
type: category
subcategories:
  - Fruits
  - Vegetables
  - Herbs & Roots
cultural_weight: high
forage_eligible: true
storage_requirements: refrigerated

### 2. Prepared Foods
type: category
subcategories:
  - Hot Meals
  - Baked Goods
  - Preserves & Pickles
cultural_weight: very_high
forage_eligible: false (usually)
storage_requirements: variable

### 3. Cultural Artifacts
type: category
subcategories:
  - Textiles
  - Ceramics
  - Literature
  - Spiritual Tools
cultural_weight: essential
forage_eligible: false
storage_requirements: dry

### 4. Wellness & Apothecary
type: category
subcategories:
  - Tinctures
  - Salves
  - Teas
cultural_weight: high
forage_eligible: false
storage_requirements: variable

## Agent Actions
actions:
  - map_category_to_snap_eligibility
  - suggest_cross_category_bundles
  - flag_storage_requirements
