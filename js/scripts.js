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
  let isScrolling = false; // 중복 스크롤 방지
  let currentPage = 1; // 현재 페이지 index (1부터 시작)
  const sections = document.querySelectorAll(".page, .page2");
  const lastPage = sections.length;
  let isHalfScrolled = false; // page2에서 중앙까지 스크롤되었는지 여부

  // 페이지 시작 시 맨 위로
  window.scrollTo({ top: 0, behavior: "instant" });

  // 브라우저 스크롤 기본동작 제거 (수동으로 제어하기 위함)
  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
    },
    { passive: false }
  );

  window.addEventListener("wheel", (e) => {
    if (isScrolling) return; // 현재 스크롤 중이면 무시
    isScrolling = true;

    const currentSection = sections[currentPage - 1];
    const delta = e.deltaY; // 휠 방향: 양수(내림), 음수(올림)

    // ─────────────────────────────────────────────────────
    // 1. page2(높이 200vh)인 경우
    // ─────────────────────────────────────────────────────
    if (currentSection.classList.contains("page2")) {
      // page2의 절댓값(문서상 위치)
      const page2Top = currentSection.offsetTop; // page2의 시작
      const page2Height = currentSection.offsetHeight; // page2의 실제 높이 (200vh)
      const page2Half = page2Top + page2Height * (2 / 5); // page2 중앙(절반) 지점

      if (!isHalfScrolled) {
        // 아직 중앙까지 안 간 상태
        if (delta > 0) {
          // 아래로 휠 → 중앙(절반) 지점까지 이동
          window.scrollTo({ top: page2Half, behavior: "smooth" });
          isHalfScrolled = true;
        } else {
          // 위로 휠 → 이전 페이지로 이동 (page2 맨 위로 올 필요가 있는지 논의)
          // 만약 page2의 맨 위로 가고 싶다면:
          if (currentPage > 1) currentPage--;
          sections[currentPage - 1].scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // 이미 중앙까지 스크롤 된 상태
        if (delta > 0) {
          // 아래로 휠 → 다음 페이지로 이동
          if (currentPage < lastPage) {
            currentPage++;
          }
          isHalfScrolled = false;
          sections[currentPage - 1].scrollIntoView({ behavior: "smooth" });
        } else {
          // 위로 휠 → page2 맨 위로 이동
          window.scrollTo({ top: page2Top, behavior: "smooth" });
          isHalfScrolled = false;
        }
      }
    }
    // ─────────────────────────────────────────────────────
    // 2. 일반 .page (100vh)
    // ─────────────────────────────────────────────────────
    else {
      if (delta > 0) {
        // 아래로 스크롤 (다음 페이지)
        if (currentPage < lastPage) {
          currentPage++;
        }
      } else {
        // 위로 스크롤 (이전 페이지)
        if (currentPage > 1) {
          currentPage--;
        }
      }
      sections[currentPage - 1].scrollIntoView({ behavior: "smooth" });
    }

    // 0.8초 후 스크롤 잠금 해제
    setTimeout(() => {
      isScrolling = false;
    }, 500);
  });
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
        }, index * 400); // 0.2초 간격으로 각 아이템 등장
      });
    } else {
      resetConcertAnimation(); // 다시 페이지를 벗어나면 초기화
    }
  }

  window.addEventListener("scroll", handleConcertScroll);
  handleConcertScroll(); // 페이지 로딩 시 확인
});
