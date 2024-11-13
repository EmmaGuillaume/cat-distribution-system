const GRANNY_PRICE = 10;

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
  newGameState.cats += state.grannies;

  return newGameState;
};

const canBuyGranny = <T extends GrannyState>(state: T): boolean => {
  return state.cats >= GRANNY_PRICE;
};

export {
  buyGranny,
  makeGranniesWork,
  type GrannyState,
  canBuyGranny,
  GRANNY_PRICE,
};
