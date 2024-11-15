const TRUCK_PRICE = 500;
const TRUCK_CATS_PRODUCTION = 20;

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
  newGameState.cats += state.trucks * TRUCK_CATS_PRODUCTION;

  return newGameState;
};

const canBuyTruck = <T extends TruckState>(state: T): boolean => {
  return state.cats >= TRUCK_PRICE;
};

export { buyTruck, canBuyTruck, makeTrucksWork, TRUCK_PRICE, type TruckState };
