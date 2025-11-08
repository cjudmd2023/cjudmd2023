document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navigation-items');

    menuButton.addEventListener('click', function () {
        if (menu.style.right === '0px') {
            menu.style.right = '-400px';
            menuButton.style.backgroundImage = 'url(img/menu.png)';
        } else {
            menu.style.right = '0px';
            menuButton.style.backgroundImage = 'url(img/close.png)';
        }
    });

    function updateVideo() {
        const videoPlayer = document.getElementById("videoPlayer");
        const videoSource = document.getElementById("videoSource");
    
        if (window.innerWidth <= 768) { // 화면 크기가 768px 이하인 경우
            videoSource.src = "img/poster_mobile.mp4";
        } else {
            videoSource.src = "img/poster_pc.mp4";
        }
    
        videoPlayer.load(); // 비디오 다시 로드
    }

    // 초기화 및 윈도우 크기 변경 이벤트 리스너 추가
    updateVideo();
    window.addEventListener("resize", updateVideo);

});