import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';
import { FiPlayCircle } from 'react-icons/fi';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Text>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>

          <ContentAreaContainer.Video>
            <VideoIframeResponsive
              youtubeID={youTubeID}
            />

            <WatchButton>
              <FiPlayCircle />
            </WatchButton>
          </ContentAreaContainer.Video>
        </ContentAreaContainer.Text>

        {/* <ContentAreaContainer.Video>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Video> */}
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
