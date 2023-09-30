import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const onReady = event => {
    const player = event.target;
    player.playVideo();
  };

  const onError = error => {
    console.error('YouTube Player Error:', error);
  };

  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onReady}
      onError={onError}
      playVideo
    />
  );
};

export default YouTubePlayer;
