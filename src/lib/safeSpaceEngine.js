function applySafeSpaceFilter(entities, userProfile) {
  // The Safe Space Layer ensures customers only interact with individuals/vendors they want to interact with.
  // It filters out any entity that violates the user's belief alignments or safety boundaries.

  if (!userProfile || !userProfile.required_alignments) {
    return entities; // No active Safe Space profile provided, return all
  }

  return entities.filter(entity => {
    // 1. Must contain at least one required alignment (if specified)
    const hasRequiredAlignment = userProfile.required_alignments.length === 0 || userProfile.required_alignments.some(alignment => 
      entity.cultural_tags && entity.cultural_tags.includes(alignment)
    );
    
    // 2. Must NOT contain any dealbreakers
    const hasDealbreaker = userProfile.dealbreakers && userProfile.dealbreakers.some(dealbreaker =>
      entity.cultural_tags && entity.cultural_tags.includes(dealbreaker)
    );

    return hasRequiredAlignment && !hasDealbreaker;
  });
}

module.exports = { applySafeSpaceFilter };
