import React from 'react';
import { VideoCardContainer, VideoCardContainerTitle, WatchButton } from './styles';
import { FiPlayCircle } from 'react-icons/fi';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <>
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'gray' }}
        title={videoTitle}
      />
      <VideoCardContainerTitle
        style={{ backgroundColor: categoryColor || 'gray' }}
      >
        {videoTitle}
      </VideoCardContainerTitle>

      <WatchButton>
        <FiPlayCircle />
      </WatchButton>
    </>
  );
}

export default VideoCard;
