import Video from "../components/Video";
import Navbar from "../components/Navbar";
import MovieInfo from "../components/MovieInfo";
import johnWickImg from '../assets/johnWick.jpg'
import { video, videos } from "@/DummyData/videosData";
import MovieCard from "@/components/MovieCard";

const Player = () => {

  const dummyVid = {
    name: "John Wick",
    description: "John Wick, a retired legendary hitman seeking vengeance after a group of Russian gangsters, led by Iosef Tarasov, steal his car and kill his beloved dog, a final gift from his late wife. This act reignites Wick\'s past and sets him on a relentless, high-octane mission against the criminal underworld that once feared him.",
    thumbnail: johnWickImg,
    price: 250,
    coin: 'GAS',
    owner: "John Doe",
    video: "",
    trailer: ""
  }

  return (
    <div className="w-full h-full pb-10">
      <Navbar />
      <div className="flex flex-col gap-y-12 justify-center items-center">
        <div className="flex flex-col w-full relative items-center bg-[#292929] h-[130vh]">
          <img src={dummyVid.thumbnail} className="w-full absolute blur-3xl h-[90vh]"/>
          <div className="flex gap-y-6 flex-col absolute top-0 w-full justify-center items-center">
            <Video />
            <div className="w-full justify-center items-center flex bottom-[0] font-hanalei">
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
        <div className="px-10 w-10/12 max-w-[1600px] flex flex-col gap-y-2">
          <div className="flex justify-between text-xl">
            <h2 className="font-hanalei text-3xl text-[#1EFF00]">Movies to Rent</h2>
          </div>
          <div className="flex w-full gap-5">
            {
              videos.slice(0,5).map((video:video | any, index)  => {
                  return (
                      <MovieCard key={index} video={video}/>
                  )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
