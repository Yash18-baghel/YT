import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from 'react'


const Feed = lazy(() => import('./Pages/Feed'))
const VideoDetail = lazy(() => import('./Pages/VideoDetail'))
const SearchVideos = lazy(() => import('./Pages/SearchVideos'))
const ChannelDetail = lazy(() => import('./Pages/ChannelDetail'))
const NotFound = lazy(() => import('./Pages/NotFound'))

const AppRoutes = () => {
    return (
        <Suspense fallback={<>Loding...</>}>
            <div >
                <Routes>
                    <Route exact path="/" element={<Feed />} />
                    <Route exact path="/video/:id" element={<VideoDetail/>} />
                    <Route exact path="/channel/:id" element={<ChannelDetail />} />
                    <Route exact path="/search/:search" element={<SearchVideos/>} />
                    <Route exact path="*" element={<NotFound/>} />
                </Routes>
            </div>
        </Suspense>

    )
}

export default AppRoutes