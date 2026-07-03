import { useState } from "react";
import Serchbar from "../Components/Serchbar";
import Navbar from "../Components/Navbar";
import { fetchGif, fetchPhotos } from "../Api";

const Home = () => {

    const [photos, setPhotos] = useState([]);
    const [gifs, setGifs] = useState([]);

    const [activeTab, setActiveTab] = useState("photos");

    const [loading, setLoading] = useState(false);


    const handleSearch = async (query) => {
        try {

            setLoading(true);
            if (activeTab === "photos") {
                const data = await fetchPhotos(query);
                setPhotos(data.results);
            } else {
                const data = await fetchGif(query);
                setGifs(data.data);
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };


    // console.log(photos);
    // console.log(gifs);


    return (
        <>
            <div>

                <Navbar />

                <Serchbar onSearch={handleSearch} />

                <div className="flex justify-center gap-5 px-10">
                    <button
                        onClick={() => setActiveTab("photos")}
                        className={`px-5 py-2 rounded ${activeTab === "photos" ? "bg-blue-700 text-white": "bg-gray-200"  }`}  >
                        Photos
                    </button>

                    <button
                        onClick={() => setActiveTab("gifs")}
                        className={`px-5 py-2 rounded ${activeTab === "gifs"  ? "bg-blue-700 text-white"  : "bg-gray-200"  }`} >
                        GIFs
                    </button>
                </div>
    
                {loading && (
                    <div className="flex justify-center py-20">
                        <div className="w-20 h-20 border-t-3 border-b-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Empty State */}
                {!loading &&
                    activeTab === "photos" &&
                    photos.length === 0 && (
                        <h1 className="text-center text-2xl text-gray-500 mt-10">
                            Search Photos to get started 📸
                        </h1>
                    )}

                {!loading &&
                    activeTab === "gifs" &&
                    gifs.length === 0 && (
                        <h1 className="text-center text-2xl text-gray-500 mt-10">
                            Search GIFs to get started 🎬
                        </h1>
                    )}


                <div>
                     {!loading && activeTab === "photos" && photos.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                            {photos.map((photo) => (
                                <div key={photo.id}>
                                    <img src={photo.urls.small} alt={photo.alt_description}  loading="lazy" className="w-full h-64 object-cover rounded" />
                                </div>
                            ))}
                        </div>
                    )}

                    {!loading && activeTab === "gifs" && photos.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                            {gifs.map((gif) => (
                                <div key={gif.id}>
                                    <img src={gif.images.fixed_height.url} alt={gif.title}  loading="lazy" className="w-full h-64 object-cover rounded" />
                                </div>
                            ))}
                        </div>

                    )}
                </div>


            </div>
        </>
    );
};

export default Home;