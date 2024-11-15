import React from "react";

type MovieCheckoutProps = {
  title: string;
  gas: number;
  owner: string;
  description: string;
  buyers: number;
};

const MovieCheckout: React.FC<MovieCheckoutProps> = ({
  title,
  gas,
  owner,
  description,
  buyers,
}) => {
  return (
    <div className="max-w-md p-6 font-hanalei rounded-xl bg-[#C2C2C2] hover:bg-[#d6d6d6] hover:scale-105 transition-all ease-in-out text-white space-y-4">
      <h1 className="text-4xl blackStroke">MOVIE CHECKOUT</h1>
      <h2 className="text-3xl blackStroke">{title}</h2>
      <p className="text-[#1EFF00] text-3xl blackStroke">{gas} GAS</p>

      <div className="text-left flex flex-col gap-y-3">
        <p>
          <span className="text-white text-3xl blackStroke">OWNER:</span> <br />
          <span className="blackStroke text-lg">{owner}</span>
        </p>

        <p>
          <span className="text-white blackStroke text-3xl">DESCRIPTION:</span>
          <br />
          <span className="blackStroke text-lg font-bold">{description}</span>
        </p>

        <p className="text-3xl">
          <span className="text-white blackStroke">NO OF BUYERS:</span>{" "}
          <span className="blackStroke">{buyers.toLocaleString()}</span>
        </p>
      </div>

      <button className="bg-green-600 w-full blackStroke  hover:bg-green-500 px-4 py-2 rounded-full text-white text-3xl font-bold">
        BUY NOW
      </button>
    </div>
  );
};

export default MovieCheckout;
