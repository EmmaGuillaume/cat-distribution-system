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
  newGameState.cats += truckProductionPerSecond(state);

  return newGameState;
};

const canBuyTruck = <T extends TruckState>(state: T): boolean => {
  return state.cats >= TRUCK_PRICE;
};

const truckProductionPerSecond = (state: TruckState): number => {
  return state.trucks * TRUCK_PRODUCTION;
};

export {
  buyTruck,
  canBuyTruck,
  makeTrucksWork,
  TRUCK_PRICE,
  type TruckState,
  TRUCK_PRODUCTION,
  truckProductionPerSecond,
};
