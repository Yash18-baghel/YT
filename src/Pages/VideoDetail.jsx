import './index.css'
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { NavLink, useParams, } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { fetchFromAPI } from '../utils/APIcalls'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import { Instagram, List } from 'react-content-loader';
// import { CleaningServices } from "@mui/icons-material";

const VideoDetail = () => {
    const [largeScreen, SetlargeScreen] = useState(true)

    window.onresize = () => {


        if (window.innerWidth < 768) {
            SetlargeScreen(false)
        }
        else{
            SetlargeScreen(true)
        }
    }

    const param = useParams('search')
    const id = param.id;

    const [handleButton, sethandleButton] = useState('comment')

    const [videoDetail, SetVideoDetail] = useState([])
    const [isvideoDetailLoading, SetisvideoDetailLoading] = useState(true)

    const [videoComment, SetVideocomment] = useState([])
    const [isvideoCommentloading, SetisvideoCommentloading] = useState(true)

    const [Suggvideo, SetSuggVideo] = useState([])
    const [isSuggvideoLoading, SetisSuggvideoLoading] = useState(true)

    useEffect(() => {
        fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`)
            .then((data) => {
                SetisvideoDetailLoading(false)
                SetVideoDetail(data.items[0])
            })
        fetchFromAPI(`commentThreads?videoId=${id}&part=snippet&maxResults=200`)
            .then((data) => {
                SetisvideoCommentloading(false)
                SetVideocomment(data.items)
            })
        fetchFromAPI(`search?relatedToVideoId=${id}&part=snippet,id&type=video&order=date`)
            .then((data) => {
                SetisSuggvideoLoading(false)
                SetSuggVideo(data.items)
            })
    }, [id])

    return (



        <div className="container flex flex-col md:flex-row p-4 space-x-3">
            <div className="container text-white flex flex-col w-full md:w-8/12">
                <div className="w-full">
                    <div className="flex w-full justify-center items-align">
                        <ReactPlayer controls className="react-player" url={`https://www.youtube.com/watch?v=${id}`} />

                    </div>
                    <div className="detail my-4 ">
                        {isvideoDetailLoading ? <List /> :

                            <>

                                <h1 className="text-1xl md:text-3xl">{videoDetail.snippet?.localized?.title}</h1>

                                <div className="flex justify-between mt-5 md:mr-16">
                                    <NavLink className={"cursor-pointer"} to={`/YT/channel/${videoDetail.snippet?.channelId}`}>
                                        <h2 className="text-md md:text-2xl">{videoDetail.snippet?.channelTitle}</h2>
                                    </NavLink>

                                    <div className="flex justify-end w-full text-sm md:text-1xl md:space-x-5 space-x-2">
                                        <p><ThumbUpIcon fontSize="small" /> {parseInt(videoDetail.statistics?.likeCount).toLocaleString()}</p>
                                        <p><CommentIcon fontSize="small" /> {parseInt(videoDetail.statistics?.commentCount).toLocaleString()}</p>
                                        {/* <p>likes</p> */}
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className="decription w-full bg-slate-500 rounded-lg p-4 container mr-16">
                    {isvideoDetailLoading ? <List /> :
                        <>
                            <div className="flex  md:space-x-4 space-x-1">
                                <h2 className="flex items-center" ><VisibilityIcon fontSize="small" className="text-xs mr-1" /> {parseInt(videoDetail.statistics?.viewCount).toLocaleString()}</h2>
                                {/* <h2>time : {videoDetail.snippet?.publishedAt}</h2> */}
                            </div>
                            <h2 className="mt-3 text-md"> {videoDetail.snippet?.description}</h2>
                        </>
                    }


                </div>

                <div className={largeScreen ? "hidden" : "btn-container  mx-auto  my-4"}>
                    <button onClick={() => sethandleButton('comment')} className='border-r-2 rounded-l-full px-3 bg-zinc-500 hover:bg-zinc-600 py-2 ' >
                        comments
                    </button>
                    <button onClick={() => sethandleButton('suggested')} className='rounded-r-full  bg-zinc-500 px-3  py-2 hover:bg-zinc-600 '>
                        suggested
                    </button>
                </div>

                <div className={largeScreen || handleButton === 'comment' ? "container  " : "container  hidden"}>
                    {isvideoCommentloading ?
                        <>
                            <div className='my-5'>
                                <List />

                            </div><div className='my-5'>
                                <List />

                            </div><div className='my-5'>
                                <List />

                            </div><div className='my-5'>
                                <List />

                            </div>
                        </> :
                        <>
                            {videoComment?.map((comment) => {
                                return (
                                    <div className="comment bg-red my-5 w-full">

                                        <div className="flex items-center space-x-3">
                                            <img className="rounded-full" src={comment.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} width={'25px'} height="25px" alt="" />
                                            <NavLink to={`/channel/${comment.snippet?.topLevelComment?.snippet?.authorChannelId?.value}`}>
                                                <h4 className="text-lg flex items-center" >{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h4>

                                            </NavLink>
                                            <p className="text-sm">{comment?.snippet?.topLevelComment?.snippet?.updatedAt}</p>
                                            {/* parseInt(likeCount).toLocaleString() */}
                                        </div>
                                        <p className="ml-10 mt-2">{comment?.snippet?.topLevelComment?.snippet?.textOriginal}</p>

                                    </div>
                                )
                            })}</>

                    }
                </div>

            </div>
            <div className={largeScreen || handleButton === 'suggested' ? " w-12/12 md:w-4/12" : " w-12/12 hidden md:w-4/12"}>
                {
                    isSuggvideoLoading ?
                        <>
                            <Instagram />
                            <Instagram />
                            <Instagram />
                        </> :
                        <>
                            {Suggvideo.map((video, id) => {
                                return (
                                    <VideoCard id={id} videoDetail={video} />
                                )
                            })}
                        </>
                }
            </div>
        </div >
    )
}

export default VideoDetail;