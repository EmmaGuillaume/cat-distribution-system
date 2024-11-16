const GRANNY_PRICE = 10;
const GRANNY_PRODUCTION = 1;

type GrannyState = { cats: number; grannies: number };

const buyGranny = <T extends GrannyState>(state: T): T => {
  const newGameState = { ...state };
  if (newGameState.cats < GRANNY_PRICE) {
    throw new Error("Not enough cats");
  }
  newGameState.cats -= GRANNY_PRICE;
  newGameState.grannies++;

  return newGameState;
};

const makeGranniesWork = <T extends GrannyState>(state: T): T => {
  const newGameState = { ...state };
  newGameState.cats += granniesPerIteration(state);

  return newGameState;
};

const canBuyGranny = <T extends GrannyState>(state: T): boolean => {
  return state.cats >= GRANNY_PRICE;
};

const granniesPerIteration = (state: GrannyState): number => {
  return state.grannies * GRANNY_PRODUCTION;
};

export {
  GRANNY_PRICE,
  GRANNY_PRODUCTION,
  buyGranny,
  canBuyGranny,
  granniesPerIteration,
  makeGranniesWork,
  type GrannyState,
};
