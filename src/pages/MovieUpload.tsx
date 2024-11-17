import Navbar from "@/components/Navbar"
import { useState } from "react"
import FileUploadField from "./FileUploadField";
import axios from "axios";
import { useWriteContract , useWaitForTransactionReceipt} from "wagmi";
import { ABI, contractAddress } from "@/utils/contractDetails";

const MovieUpload = () => {
    const [details, setDetails] = useState({ 
        movieName: "", 
        movieDescription: "", 
        price: "", 
        age: "", 
        releaseDate: "", 
        genre: "" 
    });
    
    const [previews, setPreviews] = useState({
        movie: null,
        trailer: null,
        poster: null
    });

    const [files, setFiles] = useState({
        movie: null,
        trailer: null,
        poster: null
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setDetails(prev => ({
            ...prev,
            [name]: value
        }))

    }

    const changeFileHandler = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreviews(prev => ({
                ...prev,
                [type]: previewUrl
            }));
            setFiles(prev => ({
                ...prev,
                [type]: file
            }));
        }

    }

    const removeFile = (type) => {
        if (previews[type]) {
            URL.revokeObjectURL(previews[type]);
            setPreviews(prev => ({
                ...prev,
                [type]: null
            }));
            setFiles(prev => ({
                ...prev,
                [type]: null
            }));
        }
    }


    const { writeContract, isPending, data: hash } = useWriteContract();
    const { isSuccess, isError } = useWaitForTransactionReceipt({
      hash
    });


    const submitHandler = async(e : any) => {
        e.preventDefault();

        console.log("uploading to ipfs")
        const movieHash = await uploadToPinata(files.movie);
        const trailerHash = await uploadToPinata(files.trailer);
        const posterHash = await uploadToPinata(files.poster);
        console.log(movieHash , trailerHash , posterHash)

        await writeContract({
            abi: ABI,
            address: contractAddress,
            functionName: "addMovie",
            args: [details.movieName , details.movieDescription , details.price , movieHash.replace("ipfs://","") , trailerHash.replace("ipfs://","") , posterHash.replace("ipfs://","")],
          });

          console.log("bella ciao")
    }

    const uploadToPinata = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
    
            const response = await axios.post(
                "https://api.pinata.cloud/pinning/pinFileToIPFS",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${import.meta.env.VITE_REACT_JWT_SECRET}`
                    }
                }
            );
    
            return `ipfs://${response.data.IpfsHash}`;
        } catch (error) {
            console.error("Error uploading to Pinata:", error);
            throw new Error("Failed to upload file to IPFS");
        }
    };

    if(isError) {
        return <div>Error while uploading</div>
    }
    if(isSuccess) {
        return <div>Uploaded Successfully</div>
    }
    if(isPending) {
        return <div>loading....</div>
    }

    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="bg-[#292929] flex flex-col justify-around gap-y-12 p-10 mx-28 rounded-md font-hanalei text-white">
                <div className="text-center text-[#1EFF00] text-3xl">Upload A Movie</div>
                <div className="flex justify-around">
                    <div className="flex flex-col gap-y-10 items-center">
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="movieName">Movie Name</label>
                            <input 
                                className="p-1 rounded-md bg-[#3b3b3b] w-80" 
                                type="text" 
                                value={details.movieName} 
                                id="movieName" 
                                name="movieName" 
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="movieDescription">Movie Description</label>
                            <input 
                                className="p-1 rounded-md bg-[#3b3b3b] w-80" 
                                type="text" 
                                value={details.movieDescription} 
                                id="movieDescription" 
                                name="movieDescription" 
                                onChange={changeHandler}
                            />
                        </div>
                        <FileUploadField 
                            label="Upload Movie"
                            onChange={(e) => changeFileHandler(e, 'movie')}
                            preview={previews.movie}
                            onRemove={() => removeFile('movie')}
                            accept="video/*"
                            type="video"
                        />
                    </div>
                    <div className="flex flex-col gap-y-10 items-center">
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="price">Price</label>
                            <input 
                                className="p-1 rounded-md bg-[#3b3b3b] w-80" 
                                type="text" 
                                value={details.price} 
                                id="price" 
                                name="price"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="age">Age Category</label>
                            <input 
                                className="p-1 rounded-md bg-[#3b3b3b] w-80" 
                                type="text" 
                                value={details.age} 
                                id="age" 
                                name="age"
                                onChange={changeHandler}
                            />
                        </div>
                        <FileUploadField 
                            label="Upload Trailer"
                            onChange={(e) => changeFileHandler(e, 'trailer')}
                            preview={previews.trailer}
                            onRemove={() => removeFile('trailer')}
                            accept="video/*"
                            type="video"
                        />
                    </div>
                    <div className="flex flex-col gap-y-10 items-center">
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="releaseDate">Release Date</label>
                            <input 
                                className="p-1 rounded-md bg-[#3b3b3b] w-80" 
                                type="text" 
                                value={details.releaseDate} 
                                id="releaseDate" 
                                name="releaseDate"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="genre">Genre</label>
                            <input 
                                className="p-1 rounded-md bg-[#3b3b3b] w-80" 
                                type="text" 
                                value={details.genre} 
                                id="genre" 
                                name="genre"
                                onChange={changeHandler}
                            />
                        </div>
                        <FileUploadField 
                            label="Movie Poster"
                            onChange={(e) => changeFileHandler(e, 'poster')}
                            preview={previews.poster}
                            onRemove={() => removeFile('poster')}
                            accept="image/*"
                            type="image"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button 
                        className="bg-[#1EFF00] text-black px-6 py-2 rounded-md hover:bg-[#19CC00] transition-colors"
                        onClick={(e)=> submitHandler(e)}
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieUpload;