// script.js
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const textContainer = document.querySelector(".text-container");
  const imageContainer = document.querySelector(".image-container");

  // 페이지 로딩 후 프로필 이미지 애니메이션 트리거
  window.onload = function () {
    imageContainer.classList.add("show");
  };

  // 스크롤 시 헤더 스타일 변경
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 텍스트 애니메이션 초기화 (이미 CSS에서 적용됨)
  textContainer.style.opacity = "0";
  textContainer.style.transform = "translateY(-3rem)";

  setTimeout(() => {
    textContainer.style.opacity = "1";
    textContainer.style.transform = "translateY(0)";
    textContainer.style.transition =
      "opacity 1.5s ease-out, transform 1.5s ease-out";
  }, 500);
});
