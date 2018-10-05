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

    renderingPoint.empty();

    for(var i = 0; i< arrBooks.length; i++){
      var titleDiv = getTitleDiv(arrBooks[i]);
      var descriptionDiv = getDescriptionDiv();

      renderingPoint.append(titleDiv);
      renderingPoint.append(descriptionDiv);
    }
  }

  function getTitleDiv(bookObj){
    var titleDiv = $("<div class='title'>");
    titleDiv.text(bookObj.title);

    return titleDiv;
  }

  function getDescriptionDiv(){
    var descriptiondDiv = $("<div class='description'>");

    return descriptiondDiv;
  }

});
