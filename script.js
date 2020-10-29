class BookShelf {
    constructor() {
        this.favoriteBooks = [];
    }
    addFavoriteBook(bookName){
        if(!(bookName.toLowerCase()).includes('great')){
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks(){
        console.log('favoriteBooks length',this.favoriteBooks.length)
        for(let bookName of this.favoriteBooks){
            console.log(bookName);
        }
    }
}

function loadBooks(){
    const bookShelf = new BookShelf();
    var theBookShelf = ["A Song of Ice and Fire","The Great Hatsby","Crime and Punishment","great Expectations","You Dont know JS"]
    for(let i=0; i<theBookShelf.length; i++){
        bookShelf.addFavoriteBook(theBookShelf[i]);
    }
    bookShelf.printFavoriteBooks();
}
loadBooks();




