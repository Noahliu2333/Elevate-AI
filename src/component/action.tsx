export const setData = (data) => ({
  type: "SET_DATA",
  payload: data,
});

export const setIsLoading = (isLoading) => ({
  type: "SET_IS_LOADING",
  payload: isLoading,
});

export const setIsError = (isError) => ({
  type: "SET_IS_ERROR",
  payload: isError,
});

export const setCurrentPage = (currentPage) => ({
  type: "SET_CURRENT_PAGE",
  payload: currentPage,
});

export const setItemsPerPage = (itemsPerPage) => ({
  type: "SET_ITEMS_PER_PAGE",
  payload: itemsPerPage,
});

export const setSearch = (search) => ({
  type: "SET_SEARCH",
  payload: search,
});
