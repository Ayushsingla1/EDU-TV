import React from "react";

interface MovieInfoProps {
  title: string;
  owner: string;
  amount: string;
  imdbRating: string;
  description: string;
  posterUrl: string;
}

const MovieInfo: React.FC<MovieInfoProps> = ({
  title,
  owner,
  amount,
  imdbRating,
  description,
  posterUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row p-6 w-10/12 max-w-[1440px] rounded-lg shadow-lg">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <img
          src={posterUrl}
          alt={`${title} poster`}
          className="w-full h-auto max-w-[240px] border-2 border-green-500 rounded-lg"
        />
      </div>
      
      <div className="flex flex-col text-white">
        <h2 className="text-2xl font-bold mb-4 text-green-500">
          About the Movie
        </h2>

        <div className="mb-2">
          <span className="font-bold text-green-500">Movie:</span> {title}
        </div>

        <div className="mb-2">
          <span className="font-bold text-green-500">Owner:</span> {owner}
        </div>

        <div className="mb-2">
          <span className="font-bold text-green-500">Amount:</span> {amount}
        </div>

        <div className="mb-4">
          <span className="font-bold text-green-500">IMDB:</span> {imdbRating}
        </div>

        <div className="mb-2">
          <span className="font-bold text-green-500">Description:</span>
          <p className="text-white leading-snug">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
