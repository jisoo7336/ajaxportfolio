$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "해리포터" },
  headers: { Authorization: "KakaoAK 49589a251b92786e2edf497d0092b009" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('box');

    for (var i = 0; i < boxs.length; i++) {

      $("#lista >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $("#lista >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
      $("#lista >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 60);

      $("#lista >.box").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
      $("#lista >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

    }

  });


  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "에세이" },
    headers: { Authorization: "KakaoAK 49589a251b92786e2edf497d0092b009" }
  })
    .done(function (msg) {
  
      var boxs = document.getElementsByClassName('box');
  
      for (var i = 0; i < boxs.length; i++) {
  
        $("#listb >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#listb >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
        $("#listb >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
  
  
        var str = msg.documents[i].contents;
        var str2 = str.substring(0, 60);
  
        $("#listb >.box").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
        $("#listb >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");
  
      }
  
    });



$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "자기" },
  headers: { Authorization: "KakaoAK 49589a251b92786e2edf497d0092b009" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('box');

    for (var i = 0; i < boxs.length; i++) {

      $("#listc >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $("#listc >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
      $("#listc >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 60);

      $("#listc >.box").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
      $("#listc >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

    }

  });


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "ARTS" },
  headers: { Authorization: "KakaoAK 49589a251b92786e2edf497d0092b009" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('box');

    for (var i = 0; i < boxs.length; i++) {

      $("#listd >.boxa").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $("#listd >.boxa").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
      $("#listd >.boxa").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 60);

      $("#listd >.boxa").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
      $("#listd >.boxa").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

    }

  });
  




$(function () {

  $('#booklist li:nth-of-type(1)').click(function () {
    $('#lista').show();
    $('#listb').hide();
    $('#listc').hide();
  });


  $('#booklist li:nth-of-type(2)').click(function () {
    $('#lista').hide();
    $('#listb').show();
    $('#listc').hide();
  });


  $('#booklist li:nth-of-type(3)').click(function () {
    $('#lista').hide();
    $('#listb').hide();
    $('#listc').show();
  });

});
