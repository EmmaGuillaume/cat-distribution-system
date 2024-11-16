const RESEARCH_CENTER_PRICE = 10_000;
const RESEARCH_CENTER_PRODUCTION = 500;

type ResearchCenterState = { cats: number; researchCenters: number };

const buyResearchCenter = <T extends ResearchCenterState>(state: T): T => {
  const newGameState = { ...state };
  if (newGameState.cats < RESEARCH_CENTER_PRICE) {
    throw new Error("Not enough cats");
  }
  newGameState.cats -= RESEARCH_CENTER_PRICE;
  newGameState.researchCenters++;

  return newGameState;
};

const makeResearchCentersWork = <T extends ResearchCenterState>(
  state: T
): T => {
  const newGameState = { ...state };
  newGameState.cats += researchCentersPerIteration(state);

  return newGameState;
};

const canBuyResearchCenter = <T extends ResearchCenterState>(
  state: T
): boolean => {
  return state.cats >= RESEARCH_CENTER_PRICE;
};

const researchCentersPerIteration = (state: ResearchCenterState): number => {
  return state.researchCenters * RESEARCH_CENTER_PRODUCTION;
};

export {
  RESEARCH_CENTER_PRICE,
  RESEARCH_CENTER_PRODUCTION,
  buyResearchCenter,
  canBuyResearchCenter,
  makeResearchCentersWork,
  researchCentersPerIteration,
  type ResearchCenterState,
};
