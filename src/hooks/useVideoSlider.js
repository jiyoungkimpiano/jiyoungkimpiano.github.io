import { useCallback, useEffect } from "react";

export default function useVideoSlider({ wrapperRef, itemRefs, onSelect }) {
  const scrollItemToCenter = useCallback(
    (item, videoId) => {
      const wrapper = wrapperRef.current;
      if (!wrapper || !item) {
        return;
      }

      const wrapperRect = wrapper.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const offsetX =
        itemRect.left +
        itemRect.width / 2 -
        (wrapperRect.left + wrapperRect.width / 2);

      wrapper.scrollBy({
        left: offsetX,
        behavior: "smooth",
      });

      window.setTimeout(() => {
        if (videoId) {
          onSelect(videoId);
        }
      }, 400);
    },
    [onSelect, wrapperRef]
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return;
    }

    const items = itemRefs.current.filter(Boolean);
    if (items.length === 0) {
      return;
    }

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const updateMainVideo = () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      let centerItem = null;
      let minDiff = Infinity;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const diff = Math.abs(
          itemRect.left +
            itemRect.width / 2 -
            (wrapperRect.left + wrapperRect.width / 2)
        );

        if (diff < minDiff) {
          minDiff = diff;
          centerItem = item;
        }
      });

      if (centerItem) {
        const videoId = centerItem.getAttribute("data-video");
        if (videoId) {
          onSelect(videoId);
        }
      }
    };

    const handleMouseDown = (event) => {
      if (event.button !== 0) {
        return;
      }

      event.preventDefault();
      isDragging = true;
      startX = event.pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
      wrapper.style.cursor = "grabbing";
    };

    const handleMouseMove = (event) => {
      if (!isDragging) {
        return;
      }

      if (event.buttons === 0) {
        isDragging = false;
        wrapper.style.cursor = "grab";
        return;
      }

      event.preventDefault();
      const x = event.pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.5;
      wrapper.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      if (!isDragging) {
        return;
      }

      isDragging = false;
      wrapper.style.cursor = "grab";
      updateMainVideo();
    };

    const handleMouseLeave = () => {
      if (!isDragging) {
        return;
      }

      isDragging = false;
      wrapper.style.cursor = "grab";
    };

    const handleTouchStart = (event) => {
      isDragging = true;
      startX = event.touches[0].pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
    };

    const handleTouchMove = (event) => {
      if (!isDragging) {
        return;
      }

      event.preventDefault();
      const x = event.touches[0].pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.5;
      wrapper.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      if (!isDragging) {
        return;
      }

      isDragging = false;
      updateMainVideo();
    };

    wrapper.addEventListener("mousedown", handleMouseDown);
    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseup", handleMouseUp);
    wrapper.addEventListener("mouseleave", handleMouseLeave);
    wrapper.addEventListener("touchstart", handleTouchStart, { passive: false });
    wrapper.addEventListener("touchmove", handleTouchMove, { passive: false });
    wrapper.addEventListener("touchend", handleTouchEnd);

    return () => {
      wrapper.removeEventListener("mousedown", handleMouseDown);
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseup", handleMouseUp);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      wrapper.removeEventListener("touchstart", handleTouchStart);
      wrapper.removeEventListener("touchmove", handleTouchMove);
      wrapper.removeEventListener("touchend", handleTouchEnd);
    };
  }, [wrapperRef, itemRefs, onSelect]);

  return { scrollItemToCenter };
}
