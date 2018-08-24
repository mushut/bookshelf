$(document).ready(function(){
    $("#form").submit(function(){
        let book_name = $("#book_name").val();
        let book_authors = $("#book_authors").val();

        $("#bookshelf_tbody").append("<tr><td>",book_name,"</td><td>",book_authors,"</td></tr>");
    });
});