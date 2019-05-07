import PanelState from './panelState'
import actionTypes from './actionTypes'

const {
  START_OVER,
  PLAYER_ENTERED,
  ERROR_OCCURRED,
  PLAYER_SELECTED,
  PLAYER_FOUND,
  NO_PLAYER_FOUND,
  MATCHES_FOUND,
  MATCH_SELECTED,
  MATCH_LOADED,
  PLAYER_MATCHES_CLICKED,
} = actionTypes

const {
  Home,
  SearchingForPlayer,
  NoPlayer,
  QueryingMatches,
  ErrorMessage,
  MatchList,
  LoadingMatch,
  PlayingMatch,
} = PanelState

const initialState = Home({ name: '' })

export default (state = initialState, action) => {
  return state.matchWith({
    Home: ({ name }) => {
      switch (action.type) {
        case PLAYER_ENTERED:
          return Home({ name: action.name })
        case PLAYER_SELECTED:
          return SearchingForPlayer({ name })
        default:
          return state
      }
    },
    SearchingForPlayer: ({ name }) => {
      switch (action.type) {
        case ERROR_OCCURRED:
          return ErrorMessage()
        case PLAYER_FOUND:
          return QueryingMatches({ name, id: action.id })
        case NO_PLAYER_FOUND:
          return NoPlayer({ name })
        default:
          return state
      }
    },
    NoPlayer: () => {
      switch (action.type) {
        case START_OVER:
          return Home({ name: '' })
        default:
          return state
      }
    },
    QueryingMatches: ({ name, id }) => {
      switch (action.type) {
        case ERROR_OCCURRED:
          return ErrorMessage()
        case MATCHES_FOUND:
          return MatchList({ name, id, matches: action.matches })
        default:
          return state
      }
    },
    MatchList: ({ name, id, matches }) => {
      switch (action.type) {
        case MATCH_SELECTED:
          return LoadingMatch({ name, id, matches, match: action.match })
        case START_OVER:
          return Home({ name: '' })
        default:
          return state
      }
    },
    LoadingMatch: ({ name, id, matches, match }) => {
      switch (action.type) {
        case ERROR_OCCURRED:
          return ErrorMessage()
        case MATCH_LOADED:
          return PlayingMatch({ name, id, matches, match })
        default:
          return state
      }
    },
    PlayingMatch: ({ name, id, matches }) => {
      switch (action.type) {
        case START_OVER:
          return Home({ name: '' })
        case PLAYER_MATCHES_CLICKED:
          return MatchList({ name, id, matches })
        default:
          return state
      }
    },
    ErrorMessage: () => {
      switch (action.type) {
        case START_OVER:
          return Home({ name: '' })
        default:
          return state
      }
    },
  })
}
