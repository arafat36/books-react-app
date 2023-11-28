function createObjectCompareFunction(sortKey, ascendingOrder) {
  return (a, b) => {
    const index = ascendingOrder ? 1 : -1;
    // console.log("Compare function:", sortKey, a[sortKey] > b[sortKey])

    if (a[sortKey] > b[sortKey]) return 1 * index;
    else if (b[sortKey] > a[sortKey]) return -1 * index;
    else return 0;
    // return index * (a[sortKey] - b[sortKey]) > 0;
  }
}

// Check if year is between 'from' and 'to'
function isBetweenYears(year, from, to) {
  if (from && year < from)
    return false
  else if (to && year > to)
    return false
  else
    return true
}


export {
  createObjectCompareFunction,
  isBetweenYears,
}