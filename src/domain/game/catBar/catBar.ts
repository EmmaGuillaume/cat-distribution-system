const CATBAR_PRICE = 100;
const CATBAR_PRODUCTION = 5;

type CatBarState = { cats: number; catBars: number };

const buyCatBar = <T extends CatBarState>(state: T): T => {
  const newGameState = { ...state };
  if (newGameState.cats < CATBAR_PRICE) {
    throw new Error("Not enough cats");
  }
  newGameState.cats -= CATBAR_PRICE;
  newGameState.catBars++;

  return newGameState;
};

const makeCatBarsWork = <T extends CatBarState>(state: T): T => {
  const newGameState = { ...state };

  newGameState.cats += catBarsPerIteration(state);
  return newGameState;
};

const canBuyCatBar = <T extends CatBarState>(state: T): boolean => {
  return state.cats >= CATBAR_PRICE;
};

const catBarsPerIteration = (state: CatBarState): number => {
  return state.catBars * CATBAR_PRODUCTION;
};

export {
  CATBAR_PRICE,
  CATBAR_PRODUCTION,
  buyCatBar,
  canBuyCatBar,
  catBarsPerIteration,
  makeCatBarsWork,
  type CatBarState,
};
