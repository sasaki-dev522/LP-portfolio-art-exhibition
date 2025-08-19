$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
    autoplay: true,
  autoplaySpeed: 5000,
});


// Intersection Observer APIで要素を監視
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // 一度だけアニメーションしたい場合
    }
  });
});

// 監視対象の要素を全て取得
// document.querySelectorAll('h2,.fadeup').forEach(el => observer.observe(el));

// 'h2'タグと'.fadeup'クラスの両方を持つ要素を取得
const targetElements = document.querySelectorAll('h2, .fadeup');

// 各要素をループ処理で監視対象に追加
targetElements.forEach(el => observer.observe(el));
