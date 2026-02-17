import { useRef } from "react";
import useVideoSlider from "../hooks/useVideoSlider";

export default function VideoSlider({ videoIds, onSelect }) {
  const wrapperRef = useRef(null);
  const itemRefs = useRef([]);

  const { scrollItemToCenter } = useVideoSlider({
    wrapperRef,
    itemRefs,
    onSelect,
  });

  return (
    <div className="video-slider-wrapper" ref={wrapperRef}>
      <div className="video-slider">
        {videoIds.map((videoId, index) => (
          <div
            key={videoId}
            className="video-item"
            data-video={videoId}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            onClick={() => scrollItemToCenter(itemRefs.current[index], videoId)}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
              alt={`Video ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
