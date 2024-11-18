import { useNavigate } from "react-router-dom";
const TrailerCard = ({video, noOfVideos} : any) => {
  console.log(video)
  console.log(noOfVideos)

  const navigate = useNavigate();

  console.log(video)
  return (
    <div className="hover:scale-105 image-container transition-all ease-in-out">
      <img
        src={`https://maroon-fashionable-warbler-188.mypinata.cloud/ipfs/${video.ipfsHash.replace("ipfs://","")}?pinataGatewayToken=gVQfpvbN3IXW52kARQuLO50y78ginsP31oSkPQT78K23fingxRmnt7u0tHk2lnFk`}
        className={` transition-all ease-in-out ${noOfVideos < 5 ? "w-[240px] h-[320px]" : "w-[240px] h-[321px]"} object-contain rounded-lg`}
        alt=""
      />
      <div className="hover-text w-full">
        <div className='font-hanalei gap-y-1 text-lg flex flex-col justify-center items-center w-full'>
          <div className='text-2xl'>{video.name}</div>
          <div className='text-[#1EFF00]'>{parseInt(video.price)} Gas</div>
          <div className='text-sm'>{video.description.slice(0,100)+"..."}</div>
          <div className='happy-monkey-regular text-xl w-full flex flex-col gap-y-1'>
            <button className='bg-white hover:bg-gray-300 active:bg-gray-50 px-3 py-1 text-black rounded-lg' onClick={() => navigate(`/payment/${parseInt(video.movieId)}`)}>Buy</button>
            <button className='bg-white hover:bg-gray-300 active:bg-gray-50 px-3 py-1 text-black rounded-lg' onClick={() => navigate(`/trailerPlayer/${parseInt(video.movieId)}`)}>Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerCard;
