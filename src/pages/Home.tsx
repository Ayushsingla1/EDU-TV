import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
        <div>
          <img src="" alt="" />
          <h1 className="font-hanalei text-3xl">
            WELCOME TO <span>WEB3TV</span>
          </h1>
          <p>Buy Movies and TV Shows in a decentralised way</p>

          <div>
            <div className="">
              <h3>RENTED MOVIES</h3>
              <button className="bg-[#1EFF00] px-3 rounded">MORE</button>
            </div>
            <div className="flex gap-5 px-10">
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
