$(document).ready(function(){

  refreshBookList();

  function refreshBookList(){
    $.ajax({
      url: "http://localhost:8282/books/",
      type: "GET",
      data: "",
      dataType: "json",
    }).done(function(books){
      var bookListRenderingPoint = $("#book-list");
      renderBookList(bookListRenderingPoint, books);
    }).fail(function(xhr, status, err){
      console.log("ERR", xhr, status, err);
    })
  }

  function renderBookList(renderingPoint, arrBooks){
    console.log(arrBooks);
  }
});
