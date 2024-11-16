const FACTORY_PRICE = 1200;
const FACTORY_CATS_PRODUCTION = 150;

type FactoryState = { cats: number; factories: number };

const buyFactory = <T extends FactoryState>(state: T): T => {
  const newGameState = { ...state };
  if (newGameState.cats < FACTORY_PRICE) {
    throw new Error("Not enough cats");
  }
  newGameState.cats -= FACTORY_PRICE;
  newGameState.factories++;

  return newGameState;
};

const factoriesPerIteration = (state: FactoryState): number => {
  return state.factories * FACTORY_CATS_PRODUCTION;
};

const makeFactoriesWork = <T extends FactoryState>(state: T): T => {
  const newGameState = { ...state };
  newGameState.cats += factoriesPerIteration(newGameState);

  return newGameState;
};

const canBuyFactory = <T extends FactoryState>(state: T): boolean => {
  return state.cats >= FACTORY_PRICE;
};

export {
  FACTORY_PRICE,
  buyFactory,
  canBuyFactory,
  factoriesPerIteration,
  makeFactoriesWork,
  type FactoryState,
};
