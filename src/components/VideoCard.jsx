import React from 'react'
import { NavLink } from 'react-router-dom'

const VideoCard = ({ videoDetail }) => {
    return (

        <NavLink to={videoDetail?.id?.videoId ? `/video/${videoDetail?.id?.videoId}` : `/channel/${videoDetail?.id.channelId}`}>
            <div className='w-68 rounded-md  mt-3  bg-zinc-800 h-80'>
                <div className="w-full">
                    <img className="w-full h-48 rounded-tl-md rounded-tr-md " src={videoDetail.snippet.thumbnails.medium.url} alt="" />
                </div>
                <div className="content p-3">
                    <h3 className='text-2xl truncate text-white'>{videoDetail.snippet.title}</h3>
                    <p className='text-1xl text-white'>{videoDetail.snippet.channelTitle}</p>
                    {videoDetail?.id.videoId && <p className='text-1xl text-white'>{videoDetail.snippet.publishTime}</p>}
                </div>
            </div>
        </NavLink>
    )
}

export default VideoCard