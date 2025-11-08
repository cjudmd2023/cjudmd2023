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

    const myElement = document.querySelector(".box");

    function showContent() {
        myElement.style.display = "block";
    }
    
    // 사용자 에이전트 확인하여 디바이스 타입 식별
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // 모바일 디바이스에서 클릭 이벤트 설정
        myElement.addEventListener("click", showContent);
    } else {
      // PC에서 마우스 오버 이벤트 설정
        myElement.addEventListener("mouseover", showContent);
    }

    $(document).ready(function(){
        $(".inner1").hide();
        $(".cube1").mouseover(function(){
            $(".inner1").stop().slideDown(100);
        }).mouseout(function(){
            $(".inner1").stop().slideUp(100);
        })
    });
    $(document).ready(function(){
        $(".inner2").hide();
        $(".cube2").mouseover(function(){
            $(".inner2").stop().slideDown(100);
        }).mouseout(function(){
            $(".inner2").stop().slideUp(100);
        })
    });
    $(document).ready(function(){
        $(".inner3").hide();
        $(".cube3").mouseover(function(){
            $(".inner3").stop().slideDown(100);
        }).mouseout(function(){
            $(".inner3").stop().slideUp(100);
        })
    });
    $(document).ready(function(){
        $(".inner4").hide();
        $(".cube4").mouseover(function(){
            $(".inner4").stop().slideDown(100);
        }).mouseout(function(){
            $(".inner4").stop().slideUp(100);
        })
    });
    $(document).ready(function(){
        $(".inner5").hide();
        $(".cube5").mouseover(function(){
            $(".inner5").stop().slideDown(200);
        }).mouseout(function(){
            $(".inner5").stop().slideUp(200);
        })
    });
    $(document).ready(function(){
        $(".inner6").hide();
        $(".cube6").mouseover(function(){
            $(".inner6").stop().slideDown(200);
        }).mouseout(function(){
            $(".inner6").stop().slideUp(200);
        })
    });
    $(document).ready(function(){
        $(".inner7").hide();
        $(".cube7").mouseover(function(){
            $(".inner7").stop().slideDown(200);
        }).mouseout(function(){
            $(".inner7").stop().slideUp(200);
        })
    });
    $(document).ready(function(){
        $(".inner8").hide();
        $(".cube8").mouseover(function(){
            $(".inner8").stop().slideDown(200);
        }).mouseout(function(){
            $(".inner8").stop().slideUp(200);
        })
    });
    $(document).ready(function(){
        $(".inner9").hide();
        $(".cube9").mouseover(function(){
            $(".inner9").stop().slideDown(200);
        }).mouseout(function(){
            $(".inner9").stop().slideUp(200);
        })
    });
});


function applyEffect(target) {
    // 모든 요소를 어두운 상태 및 작아진 크기로 설정
    const boxes = document.querySelectorAll('.image');
    boxes.forEach(box => {
        if (box !== target) {
        box.classList.add('dark');
        }
    });
    }

    function resetEffect(target) {
    // 모든 요소의 어두운 상태 및 크기를 초기화
    const boxes = document.querySelectorAll('.image');
    boxes.forEach(box => {
        if (box !== target) {
        box.classList.remove('dark');
        }
    });
    }

    const block = document.querySelector('.box');

    block.addEventListener('click', function() {
        this.classList.toggle('active');
    });