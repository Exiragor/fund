import { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import MediaPlayer from "./MediaPlayer";

const MediaPortal = ({ media }) => {
    const
        sources = [
            {src: media.dataset.url, type: 'audio/mpeg'},
        ],
        config = {},
        tracks = {}
    ;

    return ReactDOM.createPortal(
        <MediaPlayer
            id={"player" + media.dataset.number}
            mediaType="audio"
            preload="none"
            controls
            width="370"
            height="40"
            poster=""
            sources={JSON.stringify(sources)}
            options={JSON.stringify(config)}
            tracks={JSON.stringify(tracks)}
        />,
        media
    );
};

export default ({audios}) => {
    return (
        <div>
            {audios.map((audio, index) => <MediaPortal key={index} media={audio} />)}
        </div>
    );
}
