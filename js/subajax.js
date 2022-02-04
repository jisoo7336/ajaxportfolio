$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "위쳐" },
    headers: { Authorization: "KakaoAK 49589a251b92786e2edf497d0092b009" }
  })
    .done(function (msg) {
      console.log(msg.documents[1].title);
      console.log(msg.documents[1].thumbnail);

      $(".subbox").append("<img src='" + msg.documents[0].thumbnail + "'/>");
      $(".contextbox").append("<h6>" + msg.documents[0].authors[0] + "</h6>");
      $(".pricenum").append(msg.documents[0].price + "원");

      var str = msg.documents[0].contents;
      var str2 = str.substring(0, 600);
      $(".contextbox").append("<p>" + str2 + "</p>");
      $(".contextbox").append("<span>" + "자세히보기" + "</span>");
});


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "위쳐" },
 headers: { Authorization: "KakaoAK 49589a251b92786e2edf497d0092b009" }
})
  .done(function (msg) {
  
    var boxs = document.getElementsByClassName('boxa');
  
    for (var i = 0; i < boxs.length; i++) {
  
      $("#listf >.boxa").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      
    }
  
});




$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "해리포터" },
 headers: { Authorization: "KakaoAK 49589a251b92786e2edf497d0092b009" }
})
  .done(function (msg) {
  
    var boxs = document.getElementsByClassName('box');
  
    for (var i = 0; i < boxs.length; i++) {
  
      $("#liste >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $("#liste >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
      $("#liste >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
  
  
      var str = msg.documents[i].contents;
      var str2 = str.substring(0, 60);
  
      $("#liste >.box").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
      $("#liste >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");
  
    }
  
});


$(function () {

  $('#booklist2 li:nth-of-type(1)').click(function () {
    $('.contextbox').show();
    $('.review').hide();
  });


  $('#booklist2 li:nth-of-type(2)').click(function () {
    $('.contextbox').hide();
    $('.review').show();
  });

});
