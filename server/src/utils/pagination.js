const DEFAULT_NUMBER_PER_PAGE = 0
const DEFAULT_PAGE_NUMBER = 1

function paginate(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER
  const limit = Math.abs(query.limit) || DEFAULT_NUMBER_PER_PAGE
  const skip = (page - 1) * limit

  return {
    page,
    limit,
    skip,
  }
}

module.export = {
  paginate,
}
