import actionTypes from './actionTypes'

export const searchForPlayer = name => ({
  run: () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve({ name, id: Math.floor(Math.random() * 1000) })
      }, 2000)
    )
  },
  resultActionCreator: (error, { name, id }) => {
    return error
      ? { type: actionTypes.ERROR_OCCURRED }
      : { type: actionTypes.PLAYER_FOUND, name, id }
  },
  isQueued: true,
})

export const searchForPlayerMatches = id => ({
  run: () => {
    return new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            matches: Array.from(new Array(5), () =>
              Math.floor(Math.random() * 1000)
            ),
          }),
        2000
      )
    )
  },
  resultActionCreator: (error, { matches }) => {
    return error
      ? { type: actionTypes.ERROR_OCCURRED }
      : { type: actionTypes.MATCHES_FOUND, id, matches }
  },
  isQueued: true,
})

export const loadMatch = () => ({
  run: () => {
    return new Promise(resolve => setTimeout(resolve, 2000))
  },
  resultActionCreator: error => {
    return error
      ? { type: actionTypes.ERROR_OCCURRED }
      : { type: actionTypes.MATCH_LOADED }
  },
  isQueued: true,
})
