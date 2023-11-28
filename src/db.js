const booksData = [
    {
        title: "The Catcher in the Rye",
        description: "A classic novel about teenage angst and rebellion.",
        author: "J.D. Salinger",
        publishedDate: new Date("1951-07-16T00:00:00Z"),
        price: 11.99,
        category: "Fiction"
    },
    {
        title: "1984",
        description: "A dystopian masterpiece exploring the dangers of totalitarianism.",
        author: "George Orwell",
        publishedDate: new Date("1949-06-08T00:00:00Z"),
        price: 10.95,
        category: "Dystopian"
    },
    {
        title: "Pride and Prejudice",
        description: "A timeless romantic novel by Jane Austen.",
        author: "Jane Austen",
        publishedDate: new Date("1813-01-28T00:00:00Z"),
        price: 13.50,
        category: "Romance"
    },
    {
        title: "The Hobbit",
        description: "An adventurous fantasy novel by J.R.R. Tolkien.",
        author: "J.R.R. Tolkien",
        publishedDate: new Date("1937-09-21T00:00:00Z"),
        price: 14.99,
        category: "Fantasy"
    },
    {
        title: "The Girl on the Train",
        description: "A psychological thriller about a woman entangled in a missing person's investigation.",
        author: "Paula Hawkins",
        publishedDate: new Date("2015-01-13T00:00:00Z"),
        price: 12.75,
        category: "Thriller"
    },
    {
        title: "The Da Vinci Code",
        description: "A gripping mystery that explores hidden secrets of history.",
        author: "Dan Brown",
        publishedDate: new Date("2003-03-18T00:00:00Z"),
        price: 16.25,
        category: "Mystery"
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        description: "A thought-provoking journey through the history of our species.",
        author: "Yuval Noah Harari",
        publishedDate: new Date("2014-02-10T00:00:00Z"),
        price: 19.99,
        category: "Non-Fiction"
    },
    {
        title: "The Alchemist",
        description: "A philosophical novel about following one's dreams.",
        author: "Paulo Coelho",
        publishedDate: new Date("1988-04-25T00:00:00Z"),
        price: 9.95,
        category: "Philosophy"
    },
    {
        title: "The Martian",
        description: "A science fiction novel about an astronaut stranded on Mars.",
        author: "Andy Weir",
        publishedDate: new Date("2011-09-27T00:00:00Z"),
        price: 15.50,
        category: "Science Fiction"
    },
    {
        title: "Gone Girl",
        description: "A psychological thriller about a husband's search for his missing wife.",
        author: "Gillian Flynn",
        publishedDate: new Date("2012-05-24T00:00:00Z"),
        price: 13.99,
        category: "Thriller"
    },

    {
        title: "The Lord of the Rings",
        description: "An epic fantasy trilogy by J.R.R. Tolkien.",
        author: "J.R.R. Tolkien",
        publishedDate: new Date("1954-07-29T00:00:00Z"),
        price: 29.99,
        category: "Fantasy"
    },
    {
        title: "The Great Gatsby",
        description: "A classic novel exploring the American Dream in the Jazz Age.",
        author: "F. Scott Fitzgerald",
        publishedDate: new Date("1925-04-10T00:00:00Z"),
        price: 12.99,
        category: "Classic"
    },
    {
        title: "The Chronicles of Narnia",
        description: "A beloved series of seven fantasy novels by C.S. Lewis.",
        author: "C.S. Lewis",
        publishedDate: new Date("1950-10-16T00:00:00Z"),
        price: 18.50,
        category: "Fantasy"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        description: "The first book in the magical Harry Potter series by J.K. Rowling.",
        author: "J.K. Rowling",
        publishedDate: new Date("1997-06-26T00:00:00Z"),
        price: 15.99,
        category: "Fantasy"
    },
    {
        title: "Brave New World",
        description: "A dystopian novel exploring a futuristic society's challenges.",
        author: "Aldous Huxley",
        publishedDate: new Date("1932-01-01T00:00:00Z"),
        price: 14.25,
        category: "Dystopian"
    },
    {
        title: "The Shining",
        description: "A psychological horror novel by Stephen King.",
        author: "Stephen King",
        publishedDate: new Date("1977-01-28T00:00:00Z"),
        price: 16.99,
        category: "Horror"
    },
    {
        title: "The Kite Runner",
        description: "A novel about friendship, betrayal, and redemption by Khaled Hosseini.",
        author: "Khaled Hosseini",
        publishedDate: new Date("2003-05-29T00:00:00Z"),
        price: 13.75,
        category: "Fiction"
    },
    {
        title: "The Road",
        description: "A post-apocalyptic novel by Cormac McCarthy.",
        author: "Cormac McCarthy",
        publishedDate: new Date("2006-09-26T00:00:00Z"),
        price: 17.50,
        category: "Post-Apocalyptic"
    },
    {
        title: "The Art of War",
        description: "A classic treatise on military strategy by Sun Tzu.",
        author: "Sun Tzu",
        publishedDate: new Date("0800-09-26T00:00:00Z"),
        price: 9.95,
        category: "Philosophy"
    },
    {
        title: "A Game of Thrones",
        description: "The first book in the epic fantasy series A Song of Ice and Fire by George R.R. Martin.",
        author: "George R.R. Martin",
        publishedDate: new Date("1996-08-06T00:00:00Z"),
        price: 21.99,
        category: "Fantasy"
    },

    {
        title: "The Handmaid's Tale",
        description: "A dystopian novel exploring a theocratic society's oppression of women.",
        author: "Margaret Atwood",
        publishedDate: new Date("1985-06-14T00:00:00Z"),
        price: 13.99,
        category: "Dystopian"
    },
    {
        title: "The Fault in Our Stars",
        description: "A heartwarming yet tragic novel about two teenagers with cancer.",
        author: "John Green",
        publishedDate: new Date("2012-01-10T00:00:00Z"),
        price: 11.50,
        category: "Young Adult"
    },
    {
        title: "The Silence of the Lambs",
        description: "A psychological horror novel featuring the character Hannibal Lecter.",
        author: "Thomas Harris",
        publishedDate: new Date("1988-05-05T00:00:00Z"),
        price: 14.75,
        category: "Horror"
    },
    {
        title: "The Joy Luck Club",
        description: "A novel exploring the relationships between Chinese-American immigrant families.",
        author: "Amy Tan",
        publishedDate: new Date("1989-03-08T00:00:00Z"),
        price: 12.25,
        category: "Fiction"
    },
    {
        title: "The Catch-22",
        description: "A satirical novel about the absurdities of war by Joseph Heller.",
        author: "Joseph Heller",
        publishedDate: new Date("1961-11-10T00:00:00Z"),
        price: 15.99,
        category: "Satire"
    },
    {
        title: "The Color Purple",
        description: "A novel addressing racism and sexism in the American South.",
        author: "Alice Walker",
        publishedDate: new Date("1982-02-25T00:00:00Z"),
        price: 16.50,
        category: "Fiction"
    },
    {
        title: "One Hundred Years of Solitude",
        description: "A magical realist novel exploring the Buendía family over seven generations.",
        author: "Gabriel García Márquez",
        publishedDate: new Date("1967-05-30T00:00:00Z"),
        price: 18.99,
        category: "Magical Realism"
    },
    {
        title: "Jurassic Park",
        description: "A science fiction thriller featuring genetically engineered dinosaurs.",
        author: "Michael Crichton",
        publishedDate: new Date("1990-11-20T00:00:00Z"),
        price: 14.99,
        category: "Science Fiction"
    },
    {
        title: "Fahrenheit 451",
        description: "A dystopian novel depicting a future society where books are banned.",
        author: "Ray Bradbury",
        publishedDate: new Date("1953-10-19T00:00:00Z"),
        price: 12.95,
        category: "Dystopian"
    },
    {
        title: "The Odyssey",
        description: "An ancient Greek epic poem attributed to Homer.",
        author: "Homer",
        publishedDate: new Date("0100-10-19T00:00:00Z"),
        price: 9.50,
        category: "Classic"
    },
];

// function getCategoriesFromBooksData(booksData) {
//     const bookCategories = new Set()
//     for (const book of booksData) {
//         bookCategories.add(book.category);
//     }

//     return bookCategories
// }

export { booksData }