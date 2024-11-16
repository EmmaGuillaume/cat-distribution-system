const TRUCK_PRICE = 500;
const TRUCK_PRODUCTION = 20;

type TruckState = { cats: number; trucks: number };

const buyTruck = <T extends TruckState>(state: T): T => {
  const newGameState = { ...state };
  if (newGameState.cats < TRUCK_PRICE) {
    throw new Error("Not enough cats");
  }
  newGameState.cats -= TRUCK_PRICE;
  newGameState.trucks++;

  return newGameState;
};

const makeTrucksWork = <T extends TruckState>(state: T): T => {
  const newGameState = { ...state };
  newGameState.cats += trucksPerIteration(state);

  return newGameState;
};

const canBuyTruck = <T extends TruckState>(state: T): boolean => {
  return state.cats >= TRUCK_PRICE;
};

const trucksPerIteration = (state: TruckState): number => {
  return state.trucks * TRUCK_PRODUCTION;
};

export {
  TRUCK_PRICE,
  TRUCK_PRODUCTION,
  buyTruck,
  canBuyTruck,
  makeTrucksWork,
  trucksPerIteration,
  type TruckState,
};
