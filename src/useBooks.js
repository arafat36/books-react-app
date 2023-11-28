import { useEffect, useState } from "react";
import { CATEGORIES, PRICE_RANGE, SORT_BY } from "./constants";
import { booksData } from "./db";
import { createObjectCompareFunction, isBetweenYears } from "./helpers";


// Default: no active category
const initialActiveCategoriesMap = {};

CATEGORIES.forEach(({ id }) => initialActiveCategoriesMap[id] = false)

const initialSorting = {
  sortBy: SORT_BY.TITLE,
  ascendingOrder: true,
}

const initialPriceRange = {
  // from: PRICE_RANGE.MIN,
  // to: PRICE_RANGE.MAX,
  range: [PRICE_RANGE.MIN, PRICE_RANGE.MAX],
}

const initialYearBetween = {
  from: undefined,
  to: undefined,
}

const useBooks = () => {
  const [books, setBooks] = useState(booksData);
  const [activeCategoriesMap, setActiveCategoriesMap] = useState(initialActiveCategoriesMap)
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState(initialSorting);
  const [priceRange, setPriceRange] = useState(initialPriceRange)
  const [yearRange, setYearRange] = useState(initialYearBetween)

  useEffect(() => {
    const activeCategoriesByLabel = CATEGORIES.filter(({ id }) => activeCategoriesMap[id]).map(({ label }) => label)
    let newBooks = [...booksData]
      // filter by category
      .filter(
        activeCategoriesByLabel.length
          ? ({ category }) => activeCategoriesByLabel.includes(category)
          : () => true)
      // filter by search
      .filter(
        search
          ? ({ title }) => title.toLowerCase().startsWith(search.toLowerCase())
          : () => true)
      // filter by price
      .filter(({ price }) => price >= priceRange.range[0] && price <= priceRange.range[1])

      // filter by year 
      .filter(({ publishedDate }) => isBetweenYears(publishedDate.getFullYear(), yearRange.from, yearRange.to))

      // apply sorting
      .sort(createObjectCompareFunction(sorting.sortBy.sortKey, sorting.ascendingOrder))

    setBooks(newBooks)
  }, [search, activeCategoriesMap, priceRange, yearRange])


  useEffect(() => {
    setBooks(books => [...books.sort(createObjectCompareFunction(sorting.sortBy.sortKey, sorting.ascendingOrder))]);
  }, [sorting])


  const categories = CATEGORIES.map(({ id, label }) => ({
    id, label, active: activeCategoriesMap[id],
    toggleHandler: () => setActiveCategoriesMap(current => ({ ...current, [id]: !current[id] })),
  }))

  const sorters = Object.entries(SORT_BY).map(([_, { id, label, sortKey }]) => ({
    id, label, ascendingOrder: sorting.ascendingOrder, selected: id === sorting.sortBy.id,
    toggleHandler: () => {
      setSorting(current => {
        // if selected already, toggle sort order
        if (current.sortBy.id === id)
          return { ...current, ascendingOrder: !current.ascendingOrder }
        else
          return { ...current, sortBy: { id, label, sortKey } }
      })
    }
  }))

  const priceBetween = {
    ...priceRange,
    handleRangeChange(_e, range) {
      setPriceRange({ range })
    }
  }

  const yearBetween = {
    ...yearRange,
    handleFromYearChange(value) {
      setYearRange(current => ({...current, from: value["$y"] }))
      console.log("handleYearFrom", value["$y"])
    },

    handleToYearChange(value) {
      setYearRange(current => ({...current, to: value["$y"] }))
      console.log("handleYearTo", value["$y"])
    },
  }

  const handleSearch = (e) => setSearch(e.target.value);

  return {
    books,
    sorters,
    categories,
    priceBetween,
    yearBetween,
    handleSearch,
  }
}

export { useBooks };