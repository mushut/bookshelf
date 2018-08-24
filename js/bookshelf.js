$(document).ready(function(){
    // Add element to the table
    $("#form_add").submit(function(event){
        let book_name = $("#book_name").val();
        let book_authors = $("#book_authors").val();

        let markup = "<tr><td>" + book_name + "</td><td>" + book_authors + "</td></tr>";

        $("#bookshelf_tbody").append(markup);
        event.preventDefault(); // Prevents page to refresh (and delete the added element)
    });

    // Remove element from the table
    // TBD

    // Reorder elements of the table
    // TBD
});