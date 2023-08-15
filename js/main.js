$(function () {
  const langMenu = $(".menu_top .menu_top_02 .drop_lang");
  const gnbMenu = $(".gnb_wrap .gnb_area > li");
  const gnbList = $(".gnb_area .gm_list > ul > li ");
  const btnMenu = $(".btn_menu");
  const btnClose = $(".sitemap_wrap .sitemap_header .btn_close");
  const sitemapList = $(".sitemap_wrap .sitemap_body .all_menu_list > ul > li ");
  const btnGroup = $(".footer_wrap .footer_info .select_area .btn_group ");
  const btnTop = $(".btn_top");

  topButton();
  function toggleMenu() {
    $(this).find("ul").toggleClass("none");
  }
  function gnbReturn() {
    $.each(gnbMenu, function (index, item) {
      gnbMenu
        .find(".gm_wrap")
        .eq(index - 1)
        .addClass("none");
    });
  }
  function sitemapClose(e) {
    $("body").removeClass("overflow");
    $("header .sitemap_wrap").removeClass("slide");
  }
  function topButton() {
    $(window).scroll(function () {
      let h = $(this).scrollTop();
      if (h > 300) {
        $(".btn_top").addClass("show");
      } else {
        $(".btn_top").removeClass("show");
      }
    });
    btnTop.click(function () {
      $("html, body").animate({ scrollTop: 0 }, 400);
      return false;
    });
  }

  //헤더
  //메인메뉴 열기
  gnbMenu.on("mouseenter focusin", function () {
    $(this).find(".gm_wrap").removeClass("none");
  });
  gnbList.on("click", function () {
    $(this).find("ul").toggleClass("none");
    $(this).find("a").toggleClass("btn_open");
  });
  gnbMenu.on("mouseleave", gnbReturn);
  $.each(gnbMenu, function (index, item) {
    gnbMenu.eq(index).find("a").last().on("focusout", gnbReturn);
  });
  langMenu.on("click", toggleMenu);

  //사이트맵 열기
  btnMenu.on("click", function () {
    $("body").addClass("overflow");
    $("header .sitemap_wrap").toggleClass("slide");
    sitemapList.on("click", function () {
      $(this).find("ul").toggleClass("none");
      $(this).find("a").toggleClass("btn_open");
    });
  });
  //사이트맵 닫기
  btnClose.on("click", sitemapClose);
  $(document).keydown(function (e) {
    if (e.keyCode == 27 || e.which == 27) {
      sitemapClose();
      gnbReturn();
    }
  });
  //footer 토글
  btnGroup.on("click", toggleMenu);
});
