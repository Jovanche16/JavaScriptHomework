let book = {
    title: "The Robots of dawn",
    author: "Isaac Asimov",
    readingStatus: false,
    getReadingStatus: function () {
        if (this.readingStatus) {
            return `Already read '${this.title}' by ${this.author}.`;
        }
        else {
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    }
}

console.log(book.getReadingStatus());