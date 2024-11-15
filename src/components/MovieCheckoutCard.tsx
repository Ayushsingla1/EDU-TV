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
    <div className="max-w-md mx-auto p-8 font-hanalei rounded-xl text-white space-y-4">
      <h1 className="text-2xl">MOVIE CHECKOUT</h1>
      <h2 className="text-xl">{title}</h2>
      <p className="text-[#1EFF00] text-lg">{gas} GAS</p>

      <div className="text-left space-y-2">
        <p>
          <span className="text-gray-400">OWNER:</span> <br />{owner}
        </p>

        <p>
          <span className="text-gray-400">DESCRIPTION:</span>
          <br />
          {description}
        </p>

        <p>
          <span className="text-gray-400">NO OF BUYERS:</span>{" "}
          {buyers.toLocaleString()}
        </p>
      </div>

      <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full text-white text-lg">
        BUY NOW
      </button>
    </div>
  );
};

export default MovieCheckout;
