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

const makeCatBarWork = <T extends CatBarState>(state: T): T => {
  const newGameState = { ...state };

  for (let i = 0; i < state.catBars; i++) {
    newGameState.cats += CATBAR_PRODUCTION;
  }

  return newGameState;
};

const canBuyCatBar = <T extends CatBarState>(state: T): boolean => {
  return state.cats >= CATBAR_PRICE;
};

export {
  type CatBarState,
  buyCatBar,
  makeCatBarWork,
  CATBAR_PRICE,
  CATBAR_PRODUCTION,
  canBuyCatBar,
};
