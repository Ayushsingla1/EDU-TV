import Video from "../components/Video";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import MovieInfo from "../components/MovieInfo";

const Player = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center">
          <Video />
        </div>
        <div className="font-hanalei">
          <MovieInfo
            title="John Wick"
            owner="0x567a027b2f96b8fbd47c133e13a5482d565b6dc6"
            amount="250 GAS"
            imdbRating="8.8/10"
            description="John Wick, a retired legendary hitman seeking vengeance after a group of Russian gangsters, led by Iosef Tarasov, steal his car and kill his beloved dog, a final gift from his late wife. This act reignites Wick's past and sets him on a relentless, high-octane mission against the criminal underworld that once feared him."
            posterUrl="https://upload.wikimedia.org/wikipedia/en/1/12/The_Queen%27s_Gambit_%28miniseries%29.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
