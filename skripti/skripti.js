//loading JSON file function -----------------------------------------
function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
//------------------------------------------------------------------------------------------------------
let allBooks = [];


//skripta za loadiranje json vo jquery----------------------------------------------------------------------------
$(() => {
    $.ajax("gbooks.json", {
        complete: (data) => {
            allBooks = data.responseJSON;
            clearTable();
            allBooks.forEach(b => displayBook(b));
        }
    });

//skripta za searchanje-----------------------------------------------------------------------------------
    $("#search").on("click", () => {
        let searchTerm = $("#searchTerm").val().toLowerCase();
        let books = allBooks.filter(b => {
            if (b.author.toLowerCase().indexOf(searchTerm) !== -1)
                return true;
            return false;
        });
        clearTable();
        books.forEach(b => displayBook(b));
    })
})

//skripta za loadiranje na tabela----------------------------------------------------------------------------
let displayBook = (book) => {
    let bookList = $("#book-list");

    bookList.append(`<tr>
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td>0</td>
        <td><img src="${book.img}"></td>
    </tr>`)
}

//skripta za cistenje na tabela--------------------------------------------------------------------------------
let clearTable = () => {
    let bookList = $("#book-list");
    bookList.html("");
}
