import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import image from "../assets/Group 1.png";
import Footer from "@/components/Footer";
import { video, videos } from "@/DummyData/videosData";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center text-center">
        <div>
          <img src={image} alt="" />
          <h1 className="font-hanalei text-4xl text-white">
            WELCOME TO <span className="text-[#1ff000]">WEB3TV</span>
          </h1>
          <p className="text-white text-lg">
            Buy Movies and TV Shows in a decentralised way
          </p>
          <div className="flex justify-center gap-5">
            <input
              type="text"
              placeholder="TRUE MAN SHOW..."
              className="rounded text-center outline-none border-none p-1 opacity-60 w-96"
            />
            <button className="font-hanalei bg-[#1EFF00] px-3 rounded">
              SEARCH
            </button>
          </div>
          <div className="px-10">
            <div className="flex justify-between text-xl">
              <h2 className="font-hanalei text-[#1EFF00]">RENTED MOVIES</h2>
              <button className="font-hanalei bg-[#1EFF00] px-3 rounded">
                MORE
              </button>
            </div>
            <div className="flex gap-5">
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
      <Footer />
    </div>
  );
};

export default Home;
