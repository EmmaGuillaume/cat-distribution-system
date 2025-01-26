type Props = {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  price: number;
  quantity: number;
  imgName: string;
};

export const BuyConstructionButton = ({
  title,
  price,
  disabled,
  onClick,
  quantity,
  imgName,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="rounded-xl bg-pink-50  min-w-72 overflow-hidden flex flex-col disabled:opacity-40 transform transition-transform duration-200 ease-in-out active:scale-95 "
    >
      <div className="bg-slate-100 h-full w-full overflow-hidden">
        <img className="w-full" src={`/game/${imgName}.png`} />
      </div>

      <section className="px-4 py-2 flex flex-col gap-4 w-full justify-between">
        <div className="flex justify-between gap-8">
          <div className="flex gap-1 items-center text-xl text-bordeaux font-lexend overflow-hidden ">
            <h3 className="truncate">{title}</h3>
            {quantity != 0 && <p className="opacity-45">{quantity}</p>}
          </div>
          {price != 0 && (
            <p className="text-3xl text-bordeaux font-bayon">{price}</p>
          )}
        </div>
      </section>
    </button>
  );
};
