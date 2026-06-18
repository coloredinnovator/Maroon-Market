function resolveCulturalContext(tags) {
  if (!tags) return null;
  
  // Maps individual tags against the master ontology.okf.md file
  const ontologyMappings = {
    "resistance_practice": "Practices historically used to maintain identity under systemic pressure.",
    "community_binder": "Activities or foods that bring the community together.",
    "survival_technology": "Agricultural or preparation methods essential for survival."
  };

  const meaning = tags.map(t => ontologyMappings[t] || t).join(" ");
  return {
    tags,
    meaning
  };
}

module.exports = { resolveCulturalContext };