$(document).ready(function(){
    $("#form").submit(function(event){
        let book_name = $("#book_name").val();
        let book_authors = $("#book_authors").val();

        let markup = "<tr><td>" + book_name + "</td><td>" + book_authors + "</td></tr>";

        $("#bookshelf_tbody").append(markup);
        event.preventDefault();
    });
});