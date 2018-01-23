import storage from 'good-storage'
const SEARCH_KEY = '__search__' // 定义的搜索key 内部
const SEARCH_MAX_LEN = 15 // 设置存储数据长度

const PLAY_KEY = '__play__'
const PLAY_MAX_LEN = 200

const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LEN = 200

function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val) // 插入到最前面
  if (maxLen && arr.length > maxLen) {
    arr.pop() // 删除最后一位
  }
}

function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

export function saveSearch(query) {
  // 当前列表情况
  let searches = storage.get(SEARCH_KEY, [])
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LEN)
  storage.set(SEARCH_KEY, searches)
  return searches
}

export function deleteSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  deleteFromArray(searches, (item) => {
    return item === query
  }
)
  storage.set(SEARCH_KEY, searches)
  return searches
}

export function clearSearch() {
  storage.remove(SEARCH_KEY)
  return []
}
// 本地读localstorage取初始值
export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}

export function savePlay(song) {
  let songs = storage.get(PLAY_KEY, [])
  insertArray(songs, song, (item) => {
    return song.id === item.id
  }, PLAY_MAX_LEN
)
  storage.set(PLAY_KEY, songs)
  return songs
}

export function loadPlay() {
  return storage.get(PLAY_KEY, [])
}

export function saveFavorite(song) {
  let songs = storage.get(FAVORITE_KEY, [])
  insertArray(songs, song, (item) => {
    return song.id === item.id
  }, FAVORITE_MAX_LEN
)
  storage.set(FAVORITE_KEY, songs)
  return songs
}

export function deleteFavorite(song) {
  let songs = storage.get(FAVORITE_KEY, [])
  deleteFromArray(songs, (item) => {
    return item.id === song.id
  }
)
  storage.set(FAVORITE_KEY, songs)
  return songs
}

export function loadFavorite() {
  return storage.get(FAVORITE_KEY, [])
}
