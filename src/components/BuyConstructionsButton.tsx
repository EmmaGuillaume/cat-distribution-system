type Props = {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  price: number;
  quantity: number;
};

export const BuyConstructionButton = ({
  title,
  price,
  disabled,
  onClick,
  quantity,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="border rounded-xl bg-white h-full min-w-72 overflow-hidden flex flex-col disabled:opacity-40 transform transition-transform duration-200 ease-in-out active:scale-95"
    >
      <div className="bg-slate-100 h-1/2 w-full"></div>

      <section className="p-4 flex flex-col gap-4 w-full justify-between h-1/2">
        <div className="flex justify-between w-full items-center text-xl">
          <h3 className="">{title}</h3>
          {quantity != 0 && <p>{quantity}</p>}
        </div>
        {price != 0 && <p className="text-3xl">{price} cats</p>}
      </section>
    </button>
  );
};
