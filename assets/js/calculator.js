/* ==========================================================================
   Plant-Based Prides — Impact Calculator engine
   Shared by the homepage mini-calculator and the full Impact Calculator page.

   METHODOLOGY (rough estimate — see Further Reading / the full sources
   document linked on the Impact Calculator page for details):

   Baseline per-meal footprint (a standard, non-plant-based event meal):
     - Land use:   200 ft²  per meal
     - Water use:  450 litres per meal
     - CO2e:       4.9 kg   per meal
   These baseline figures are carried over from the campaign's original
   calculator and are based on published Pride catering data alongside
   general food-system land/water/carbon studies.

   Reduction potential when a meal is swapped to fully plant-based, based on
   Alae-Carew et al., Nature Communications (2024), which found plant-rich
   diets reduce greenhouse gas emissions by 30–52%, land use by 20–45% and
   freshwater use by 14–27% versus a standard diet, with a fully vegan diet
   at the top end of every range:
     - CO2e reduction:   52%
     - Land reduction:   45%
     - Water reduction:  27%

   The "% plant-based" tabs (100 / 60 / 30) represent the share of an event's
   meals that are switched to fully plant-based options. Only that share of
   meals receives the reduction — e.g. at "60% plant-based", 60% of meals
   get the full reduction applied, 40% remain at the standard baseline.
   ========================================================================== */

const PBP_CALC = (() => {
  const BASELINE = {
    landFt2: 200,
    waterL: 450,
    co2Kg: 4.9,
  };

  const REDUCTION = {
    co2: 0.52,
    land: 0.45,
    water: 0.27,
  };

  const EQUIVALENTS = {
    poolLitres: 2500000, // approx. Olympic swimming pool
    pitchFt2: 107639 * 0.7, // approx. football pitch in ft² (0.7 ha)
    treeKgCo2PerYear: 21,
  };

  function compute(attendees, mealPercent, planetPercent) {
    attendees = Math.max(0, Number(attendees) || 0);
    mealPercent = Math.min(100, Math.max(0, Number(mealPercent) || 0));
    planetPercent = Math.min(100, Math.max(0, Number(planetPercent) || 0));

    const mealCount = attendees * (mealPercent / 100);
    const convertedMeals = mealCount * (planetPercent / 100);

    const currentLand = mealCount * BASELINE.landFt2;
    const currentWater = mealCount * BASELINE.waterL;
    const currentCo2 = mealCount * BASELINE.co2Kg;

    const landSaved = convertedMeals * BASELINE.landFt2 * REDUCTION.land;
    const waterSaved = convertedMeals * BASELINE.waterL * REDUCTION.water;
    const co2Saved = convertedMeals * BASELINE.co2Kg * REDUCTION.co2;

    return {
      mealCount,
      convertedMeals,
      currentLand,
      currentWater,
      currentCo2,
      landSaved,
      waterSaved,
      co2Saved,
      remainingLand: currentLand - landSaved,
      remainingWater: currentWater - waterSaved,
      remainingCo2: currentCo2 - co2Saved,
      equivalents: {
        poolsSaved: waterSaved / EQUIVALENTS.poolLitres,
        pitchesSaved: landSaved / EQUIVALENTS.pitchFt2,
        treesSaved: co2Saved / EQUIVALENTS.treeKgCo2PerYear,
      },
    };
  }

  function fmt(num, digits = 0) {
    return Number(num).toLocaleString(undefined, {
      maximumFractionDigits: digits,
      minimumFractionDigits: 0,
    });
  }

  return { compute, fmt, BASELINE, REDUCTION };
})();
