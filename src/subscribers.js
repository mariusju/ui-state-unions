import { any } from 'folktale/adt/union/union'
import * as effects from './effects'

const searchForPlayer = ({ from, to }) =>
  from.matchWith({
    Home: () =>
      to.matchWith({
        SearchingForPlayer: ({ name }) => effects.searchForPlayer(name),
        [any]: () => {},
      }),
    [any]: () => {},
  })

const searchForPlayerMatches = ({ from, to }) =>
  from.matchWith({
    SearchingForPlayer: () =>
      to.matchWith({
        QueryingMatches: ({ id }) => effects.searchForPlayerMatches(id),
        [any]: () => {},
      }),
    [any]: () => {},
  })

const loadMatch = ({ from, to }) =>
  from.matchWith({
    MatchList: () =>
      to.matchWith({
        LoadingMatch: ({ match }) => effects.loadMatch(match),
        [any]: () => {},
      }),
    [any]: () => {},
  })

export default [searchForPlayer, searchForPlayerMatches, loadMatch]
