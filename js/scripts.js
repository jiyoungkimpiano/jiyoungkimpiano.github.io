// script.js
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const textContainer = document.querySelector(".text-container");
  const imageContainer = document.querySelector(".image-container");
  const logo = document.querySelector(".logo");

  // 페이지 로딩 후 프로필 이미지 애니메이션 트리거
  window.onload = function () {
    imageContainer.classList.add("show");
  };

  // 스크롤 시 헤더 스타일 변경
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      logo.src = "img/logo.png";
    } else {
      header.classList.remove("scrolled");
      logo.src = "img/logo_white.png";
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

document.addEventListener("DOMContentLoaded", function () {
  const biographySection = document.getElementById("biography");
  const biographyTitle = document.querySelector(".biography-title");
  const biographyTexts = document.querySelectorAll(".biography-text");

  function resetAnimation() {
    biographyTitle.classList.remove("show");
    biographyTexts.forEach((text) => text.classList.remove("show"));
  }

  function handleScroll() {
    const sectionTop = biographySection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
      biographyTitle.classList.add("show");
      biographyTexts.forEach((text) => text.classList.add("show"));
    } else {
      resetAnimation(); // 다시 페이지를 벗어나면 초기화
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 페이지 로딩 시 확인
});

document.addEventListener("DOMContentLoaded", function () {
  const biographySection = document.getElementById("biography"); // 섹션 선택
  const biographyText = document.getElementById("biography-text");
  const biographyFull = document.getElementById("biography-full");
  const toggleButton = document.getElementById("toggle-biography");

  toggleButton.addEventListener("click", function () {
    if (biographyFull.classList.contains("hidden")) {
      biographyText.style.display = "none"; // 기존 요약본 숨기기
      biographyFull.style.display = "block"; // 원본 보이기
      biographyFull.classList.remove("hidden");

      // 페이지 크기 변경
      biographySection.classList.remove("page");
      biographySection.classList.add("page2");

      toggleButton.innerHTML = `<img src="img/hide.png" alt="Hide">`;
    } else {
      biographyText.style.display = "block"; // 요약본 보이기
      biographyFull.style.display = "none"; // 원본 숨기기
      biographyFull.classList.add("hidden");

      // 페이지 크기 원래대로 복귀
      biographySection.classList.remove("page2");
      biographySection.classList.add("page");

      toggleButton.innerHTML = `<img src="img/read_more.png" alt="Read More">`;
    }

    // 📌 버튼 클릭 후 #biography 섹션으로 스크롤 이동
    biographySection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const concertSection = document.getElementById("concerts");
  const concertItems = document.querySelectorAll(".concert-item");

  function resetConcertAnimation() {
    concertItems.forEach((item) => {
      item.classList.remove("show");
    });
  }

  function handleConcertScroll() {
    const sectionTop = concertSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
      concertItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("show");
        }, index * 200); // 0.2초 간격으로 각 아이템 등장
      });
    } else {
      resetConcertAnimation(); // 다시 페이지를 벗어나면 초기화
    }
  }

  window.addEventListener("scroll", handleConcertScroll);
  handleConcertScroll(); // 페이지 로딩 시 확인
});
