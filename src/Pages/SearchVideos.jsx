
import { useEffect, useState } from "react";
import { Instagram } from "react-content-loader";
import { useLocation } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { fetchFromAPI } from '../utils/APIcalls'



const Feed = () => {

    const [videos, SetVideos] = useState([])
    const [isLoading, SetisLoading] = useState(true)

    const param = useLocation();
    const searchtext = param.pathname.split('/')[2];


    useEffect(() => {
        fetchFromAPI(`search?q=${searchtext}&part=snippet,id&regionCode=IN`)
            .then((data) => {
                SetisLoading(false)
                SetVideos(data.items)
            })
    }, [searchtext])

    return (
        <div className="container my-5 px-4 grid md:grid-cols-3 grid-cols-1 gap-4">
            {isLoading ?
                <>
                    <Instagram />
                    <Instagram />
                    <Instagram />
                    <Instagram />
                    <Instagram />
                </> :
                <>
                    {
                        videos.map((video, id) => {
                            return (
                                <VideoCard id={id} videoDetail={video} />
                            )
                        })
                    }
                </>
            }
        </div>
    )
}

export default Feed;