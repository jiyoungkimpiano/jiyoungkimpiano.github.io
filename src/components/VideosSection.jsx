import { useEffect, useState } from "react";
import videosData from "../../info/videos.json";
import VideoSlider from "./VideoSlider";

export default function VideosSection() {
  const [currentVideoId, setCurrentVideoId] = useState(
    videosData.videos[0] || ""
  );

  useEffect(() => {
    if (!currentVideoId && videosData.videos.length > 0) {
      setCurrentVideoId(videosData.videos[0]);
    }
  }, [currentVideoId]);

  return (
    <section id="videos">
      <a href={videosData.channelUrl} target="_blank" rel="noreferrer">
        <div className="videos-header" />
      </a>

      <div className="video-container">
        <div className="main-video">
          <iframe
            id="main-video-iframe"
            src={`https://www.youtube.com/embed/${currentVideoId}`}
            title="Main video"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <VideoSlider
          videoIds={videosData.videos}
          onSelect={(videoId) => setCurrentVideoId(videoId)}
        />
      </div>
    </section>
  );
}
