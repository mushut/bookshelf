$(document).ready(function(){
    // List of book objects
    var bookshelf = [];
    var book1 = {title: "Book 1", author: "Author 1"};
    var book2 = {title: "Book 2", author: "Author 2"};
    bookshelf.push(book1);
    bookshelf.push(book2);

    // Form: Add element to the table
    $("#form_add").submit(function(event){
        let book_name = $("#book_name").val();
        let book_authors = $("#book_authors").val();
        let new_book = {title: book_name, author: book_authors};

        let markup = "<tr class='book'><td>" + book_name + "</td><td>" + book_authors + "</td></tr>";

        bookshelf.push(new_book);
        $("#bookshelf_tbody").append(markup);
        event.preventDefault(); // Prevents page to refresh (and delete the added element)
    });

    // Form: Reorder elements of the table
    // Cannot check if works yet. Page refreshes and clears all changes.
    $("#form_reorder").submit(function(event) {
        // Check which option is checked
        let attr_title = $("input[title='reorder_name']").attr("checked");
        let attr_author = $("input[title='reorder_author']").attr("checked");

        // Temporarily remove table contents
        $(".book").remove();

        if (typeof attr_title !== typeof undefined && attr_title !== false) {
            // Reorganize bookshelf array by title
            bookshelf.sort(function (first, second) {
                let first_lowercase = first.title.type.toLowerCase();
                let second_lowercase = second.title.type.toLowerCase();
                if (first_lowercase < second_lowercase) {
                    return -1;
                }
                if (first_lowercase > second_lowercase) {
                    return 1;
                }
                return 0;
            });
        }

        if (typeof attr_author !== typeof undefined && attr_author !== false) {
            // Reorganize bookshelf array by author
            bookshelf.sort(function (first, second) {
                let first_lowercase = first.author.type.toLowerCase();
                let second_lowercase = second.author.type.toLowerCase();
                if (first_lowercase < second_lowercase) {
                    return -1;
                }
                if (first_lowercase > second_lowercase) {
                    return 1;
                }
                return 0;
            });
        }

        // Add reorginzed elements to the table
        let element = "";
        bookshelf.forEach(addBook);

        function addBook(value, index, array) {
            element = "<tr class='book'><td>" + value.title + "</td><td>" + value.author + "</td></tr>";

            $("#bookshelf_tbody").append(element);
        }

        event.preventDefault(); // Prevents page to refresh (and delete the added element)
    });

    // Remove element from the table
    // TBD
});