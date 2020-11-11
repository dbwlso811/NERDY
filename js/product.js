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

    // $('#gnb li').on('click',function(){
    //   let i = $(this).index();
    //   swiper.slideToLoop(i);
    //   swiper.autoplay.start();
    // });



    // <!-- info_list menu -->
    $('a[href="#"]').click(function(){
      event.preventDefault();
    });

    $('#infos #detail').addClass('on');

    $('#infos h3').on('click',function(){
      $('#infos li').removeClass('on');//일단 모든 li의 클래스 'on' 제거
      $(this).parent().addClass('on');//내가 선택한 h2의 부모인 li에만 적용
    });


    // 후기 txt
    $('#review_txtt').dotdotdot();

  });