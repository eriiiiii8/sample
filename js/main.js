$(function () {
  /*=================================================
  スマホメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $(".toggle_btn").on("click", function () {
    // .toggle_btnをクリックしたときに実行する
    //  function:実行する

    ($("#header").toggleClass("open"));
  });
  // headerに対してopenクラスを追加または削除する。
  // クラスの追加と削除は、ハンバーガーメニューの表示と非表示を切り替えるために使用される。

  // toggleClassメソッドを使用することで、hamburgerクラスにopenクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる


  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    // #maskをクリックしたときに実行する
    $("#header").toggleClass("open");

  });

  // リンクをクリックした時にメニューを閉じる
  $("#navi a").on("click", function () {
    // #navi aをクリックしたときに実行する

    $("#header").toggleClass("open");
  });

  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/
  $(".slick-area").slick({
    arrows: false,
    // arrows: false：矢印ナビゲーションを非表示にします。

    // (dots: true,)
    // スライドショーにドットナビゲーション（現在のスライドを示すドット）が表示されます。

    centerMode: true,
    // centerMode: true：現在のスライドを中央に配置します。
    centerPadding: "100px",
    // centerPadding: "100px"：中央に配置されたスライドの左右の余白を指定します。
    slidesToShow: 3,
    // slidesToShow: 3：表示するスライドの数を指定します（1度に表示されるスライドの数）。
    autoplay: true,
    // autoplay: true：自動再生を有効にします。
    autoplaySpeed: 2700,
    // autoplaySpeed: 3000：自動再生の速度を指定します（ミリ秒単位）。
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // ブレークポイント（デバイスの幅が768ピクセル以下の場合）では、
          centerPadding: "50px",
          slidesToShow: 1,
          // centerPaddingとslidesToShowの値が変更され、中央余白が"50px"に、表示されるスライドの数が1になります。
        },
      },
    ],
  });


  $('a[href*=#]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });
});


// 行程

$(window).scroll(function () {
  $(".inview-slide-left").each(function () {

    var scroll = $(window).scrollTop();

    var target = $(this).offset().top;

    var windowHeight = $(window).height();

    if (scroll > target - windowHeight + $(this).outerHeight()) {
      // outerHeight()はpaddingを含めた高さを取得する
      $(this).addClass("slide-left");
    }
  });
});

$(window).scroll(function () {

  $(".inview-slide-right").each(function () {
    var scroll = $(window).scrollTop();

    var target = $(this).offset().top;

    var windowHeight = $(window).height();

    if (scroll > target - windowHeight + $(this).outerHeight()) {
      $(this).addClass("slide-right");
    }
  });
});

// 受講生の声（ふきだし）

$(window).scroll(function () {

  $(".inview-balloon").each(function () {
    var scroll = $(window).scrollTop();

    var target = $(this).offset().top;

    var windowHeight = $(window).height();

    if (scroll > target - windowHeight + $(this).outerHeight()) {
      $(this).addClass("balloon");
    }
  });


  let pagetop = $(".to_top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 1700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    };

    // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function () {
      // 0.5秒かけてページトップへ移動
      $("body,html").animate({ scrollTop: 0 }, 600);

      // イベントが親要素へ伝播しないための記述
      // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
      return false;
    });
  });
});
