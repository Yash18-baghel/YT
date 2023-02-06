import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from 'react'
import { InfinitySpin } from "react-loader-spinner"


const Feed = lazy(() => import('./Pages/Feed'))
const NotFound = lazy(() => import('./Pages/NotFound'))
const VideoDetail = lazy(() => import('./Pages/VideoDetail'))
const SearchVideos = lazy(() => import('./Pages/SearchVideos'))
const ChannelDetail = lazy(() => import('./Pages/ChannelDetail'))

const AppRoutes = () => {
    return (
        <Suspense fallback={<div className="w-full h-full flex justify-center items-center"><InfinitySpin width='200' color="#4fa94d" /></div>}>
            <div >
                <Routes>
                    <Route exact path="/" element={<Feed />} />
                    <Route exact path="/YT/" element={<Feed />} />
                    <Route exact path="/YT/video/:id" element={<VideoDetail />} />
                    <Route exact path="/YT/channel/:id" element={<ChannelDetail />} />
                    <Route exact path="/YT/search/:search" element={<SearchVideos />} />
                    <Route exact path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Suspense>

    )
}

export default AppRoutes