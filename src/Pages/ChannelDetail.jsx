import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { fetchFromAPI } from '../utils/APIcalls'
import { Instagram, List } from 'react-content-loader';

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState([])
  const [ischannelDetailLoading, setischannelDetailLoading] = useState(true)

  const [channelVideos, setchannelVideos] = useState([])
  const [ischannelVideosLoading, setischannelVideosLoading] = useState(true)

  const param = useLocation();
  const id = param.pathname.split('/')[2]

  useEffect(() => {
    fetchFromAPI(`channels?id=${id}&part=snippet,statistics`)
      .then((data) => {
        setischannelDetailLoading(false)
        setChannelDetail(data.items[0])
      })


    fetchFromAPI(`search?channelId=${id}&part=snippet,id&order=date`)
      .then((data) => {
        setischannelVideosLoading(false)
        setchannelVideos(data.items)
      })
  }, [id])
  return (
    <div>
      <img className="w-full m-0 md:object-cover md:h-48 h-full" src={channelDetail?.brandingSettings?.image?.bannerExternalUrl} alt="channel banner" />
      <div className="container py-5 bg-slate-700">
        <div className="profileImg">
          <h3 className='text-center text-4xl text-white'>{channelDetail.snippet?.title}</h3>
          <p className='text-md md:px-10 px-5 py-3 text-white'>{channelDetail.snippet?.description}</p>

          <div className="flex flex-col md:flex-row px-5 justify-between text-lg text-white md:px-20">

            {ischannelDetailLoading ? <List /> : <>
              {/* <p>{channelDetail.snippet?.publishedAt}</p> */}
              <p class="md:p-0 py-2">Subscribers: {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}</p>
              <p class="md:p-0 py-2">Total videos: {parseInt(channelDetail?.statistics?.videoCount).toLocaleString()}</p>
              <p class="md:p-0 py-2"><VisibilityIcon fontSize='medium' />{parseInt(channelDetail?.statistics?.viewCount).toLocaleString()}</p>
            </>}

          </div>

        </div>
      </div>

      <div className="container my-5 px-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        {ischannelVideosLoading ? 
        <>
        <Instagram/>
        <Instagram/>
        <Instagram/>
        </>
        :
          <>
            {channelVideos.map((video, id) => {
              return (
                <VideoCard id={id} videoDetail={video} />
              )
            })}</>}
      </div>
    </div>
  )
}

export default ChannelDetail