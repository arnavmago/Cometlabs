import { CardContainer } from '@/styles/theme'
import ReactPlayer from "react-player/lazy";
import React from 'react'

function VideoPlayer() {
    return (
        <div>
            <CardContainer sx={{ border: 0 }} elevation={1}>
                <ReactPlayer
                    // url="https://youtu.be/RtsxnRoxKS4"
                    url="https://www.youtube.com/watch?v=RtsxnRoxKS4"
                    height="260px"
                    width="inherit"
                />
            </CardContainer>
        </div>
    )
}

export default VideoPlayer