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

const initialState = Home()

export default (state = initialState, action) => {
  return state.matchWith({
    Home: () => {
      switch (action.type) {
        case PLAYER_ENTERED:
          return Home()
        case PLAYER_SELECTED:
          return SearchingForPlayer()
        default:
          return state
      }
    },
    SearchingForPlayer: () => {
      switch (action.type) {
        case ERROR_OCCURRED:
          return ErrorMessage()
        case PLAYER_FOUND:
          return QueryingMatches()
        case NO_PLAYER_FOUND:
          return NoPlayer()
        default:
          return state
      }
    },
    NoPlayer: () => {
      switch (action.type) {
        case START_OVER:
          return Home()
        default:
          return state
      }
    },
    QueryingMatches: () => {
      switch (action.type) {
        case ERROR_OCCURRED:
          return ErrorMessage()
        case MATCHES_FOUND:
          return MatchList()
        default:
          return state
      }
    },
    MatchList: () => {
      switch (action.type) {
        case MATCH_SELECTED:
          return LoadingMatch()
        case START_OVER:
          return Home()
        default:
          return state
      }
    },
    LoadingMatch: () => {
      switch (action.type) {
        case ERROR_OCCURRED:
          return ErrorMessage()
        case MATCH_LOADED:
          return PlayingMatch()
        default:
          return state
      }
    },
    PlayingMatch: () => {
      switch (action.type) {
        case START_OVER:
          return Home()
        case PLAYER_MATCHES_CLICKED:
          return MatchList()
        default:
          return state
      }
    },
    ErrorMessage: () => {
      switch (action.type) {
        case START_OVER:
          return Home()
        default:
          return state
      }
    },
  })
}
