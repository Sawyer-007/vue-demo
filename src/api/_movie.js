import mock from '../mock'

let getInTheaterMovies = (cb) => {
  let data = mock.movies
  setTimeout(() => {
    cb(data)
  }, 1000)
}

let getMovieDetail = (id, cb) => {
  let data = mock.details
  console.log(`正在获取${id}...`)
  setTimeout(() => {
    cb(data)
  }, 1000)
}

export default {
  getInTheaterMovies,
  getMovieDetail
}
