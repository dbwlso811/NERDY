$(function(){
    // <!-- swiper --> 
    let swiper = new Swiper('.swiper-container', {
      autoplay: {  delay: 3000 },//자동 슬라이드
      loop:true,//반복
      pagination: { 
        el: '.swiper-pagination', 
        clickable: true,
        // dynamicBullets: true,
        // type: 'fraction'
      },
      navigation: {//좌 우 화살표
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    // menu page //////////////////////////////////////////
    $('.menu_open').on('click',function(){
      $('.menupg').animate({ top: 0 },2000);
      $('.menu_open').css('display','flex');
    });
  
    $('.menu_close').on('click',function(){
      $('.menupg').animate({ top: -9999 },2000);
      $('.menu_open').css('display','flex');
    });
    // $('.menupg_list > .list_box > a').on('click',function(){
    //     $(this).children('.list_txt').stop().slideToggle();
    //   });
    $('.menupg_list .list_txt').hide();
    $('.menupg_list > .list_box').on('click',function(){
      $(this).children('.list_txt').stop().slideToggle();
    });
// 
      $('.menupg_list .list_txt > a').on('click',function(e){
        e.preventDefault();

        const style = $(this).hasClass('on');
        if(style == false) {//.on이 없는 경우
          $('.menupg_list .list_txt > a').removeClass('on');
          $(this).addClass('on');

          $('.menupg_list .list_txt').stop().slideUp();
          $(this).next().stop().slideDown();
        } else {//.on인 경우, 이미 클릭된 title
          $(this).removeClass('on');
          $(this).next().slideUp();
        }
      });

    // menu
    // $('.headergridbox .mn_1').hide();

      // $('.headergridbox #menu_box > a').on('click',function(e){
      //   e.preventDefault();

      //   const style = $(this).hasClass('on');
      //   if(style == false) {//.on이 없는 경우
      //     $('.headergridbox > #menu_box > a').removeClass('on');
      //     $(this).addClass('on'); 

      //     $('.headergridbox .mn_1').stop().slideUp();
      //     $(this).next().stop().slideDown();
      //   } else {//.on인 경우, 이미 클릭된 title
      //     $(this).removeClass('on');
      //     $(this).next().slideUp();
      //   }
      // });

      // $('.headergridbox #menu_box').on('click',function(){
      //   $(this).children('.mn_1').stop().slideToggle();
      // });


      // 스크롤 위로
      $('.pageTop a[href="#"]').on('click', function(e){
        e.preventDefault();
      });

      $('#top').on('click',function(){
        $('html, body').animate({ scrollTop:0 }, 400);
      });

      
// info 메뉴리스트
      $('.infots_txt a[href="#"]').click(function(){
        event.preventDefault();
      });

      // $('.infocenter li').removeClass('on');
      //$('.infocenter .infots_txt').addClass('on');
      
      $('.infocenter h3').on('click',function(){
        $('.infocenter li').removeClass('on');//일단 모든 li의 클래스 'on' 제거
        $(this).parent().addClass('on');//내가 선택한 h2의 부모인 li에만 적용
      });

      
  });