document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');

    // スクロール時のアニメーション
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // 各セクションの位置を調整
            const sectionOffsetTop = targetSection.offsetTop; // 位置保存

            window.scrollTo({
                top: sectionOffsetTop - 10, // いい感じの高さに調整
                behavior: 'smooth' // スムーズスクロール
            });
        });
    });

    // スクロール時にセクションを表示
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (scrollPosition > section.offsetTop + 50) {
                section.classList.add('visible');
            }
        });
    });

    // Discordリンクの動作
    const discordLink = document.querySelector('#discord-link');
    if (discordLink) {
        discordLink.addEventListener('click', function (e) {
            e.preventDefault(); // デフォルトの動作をキャンセル
            window.open('https://discord.gg/fcNx9HaZyX', '_blank'); // 新しいタブでDiscordリンクを開く
        });
    }
});
