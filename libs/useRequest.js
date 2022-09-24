import useSWR from "swr"
import useSWRInfinite from 'swr/infinite'

const fetcher = url => fetch(url).then(res => res.json())

export function useGetUser(name) {
  if (!name) {
    throw new Error("Name is required")
  }
  const { data, error } = useSWR(`/api/users/${name}`, fetcher)
  return { data, error }
}

export function useGetRepo(name) {
  if (!name) {
    throw new Error("Name is required")
  }
  const { data, error } = useSWR(`/api/repos/${name}`, fetcher)
  return { data, error }
}

const baseUrl = "https://jsonplaceholder.typicode.com"

export function usePaginatePosts(path) {
  if (!path) {
    throw new Error("Path is required")
  }

  const url = baseUrl + path
  const PAGE_LIMIT = 10
  // The request key(index) is what SWR uses to know what data(page) to retrieve.
  // The initial value of the request key is 0, so we have to increment it by 1 upon each request.
  // The second argument to define on the URL is PAGE_LIMIT, which is the number of items to fetch per request.
  const { data, error, size, setSize } = useSWRInfinite(
    index => `${url}?_page=${index + 1}&_limit=${PAGE_LIMIT}`,
    fetcher
  )
  // posts is the array of the data fetched from the server.
  // isLoadingInitialData checks if there is still data to retrieve.
  // isLoadingMore checks if we're currently retrieving data.
  // isEmpty checks whether the array of data is empty or not.
  // isReachingEnd checks if the page limit is reached or not.
  const posts = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined")
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT)

  return { posts, error, isLoadingMore, size, setSize, isReachingEnd }
}