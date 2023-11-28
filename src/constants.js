function createSortBy(id, label, sortKey) {
    return { id, label, sortKey }
}

const SORT_BY = {
    PRICE: createSortBy("PRICE", "Price", "price"),
    DATE: createSortBy("DATE", "Date", "publishedDate"),
    TITLE: createSortBy("TITLE", "Title", "title"),
}

function createCategory(id, label) {
    return { id, label }
}

const CATEGORIES = [
    createCategory("ACTION", "Action"),
    createCategory("HORROR", "Horror"),
    createCategory("SCIENCE_FICTION", "Science Fiction"),
    createCategory("DYSTOPIAN", "Dystopian"),
    createCategory("FICTION", "Fiction"),
    createCategory("FANTASY", "Fantasy"),
    createCategory("THRILLER", "Thriller"),
    createCategory("MYSTERY", "Mystery"),
    createCategory("NON_FICTION", "Non-Fiction"),
    createCategory("PHILOSOPHY", "Philosophy"),
    createCategory("CLASSIC", "Classic"),
    createCategory("POST_APOCALYPTIC", "Post-Apocalyptic"),
    createCategory("YOUNG_ADULT", "Young Adult"),
    createCategory("SATIRE", "Satire"),
    createCategory("MAGICAL_REALISM", "Magical Realism"),
]

const PRICE_RANGE = {
    MIN: 0,
    MAX: 50,
}

export {
    SORT_BY,
    CATEGORIES,
    PRICE_RANGE,
}