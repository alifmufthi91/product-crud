const pagedData = (items, totalItems, totalPages) => {
  return {
    items: items,
    total_items: totalItems,
    total_pages: totalPages
  }
}

export default pagedData
