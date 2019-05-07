// @ts-nocheck
import { union, derivations } from 'folktale/adt/union'

const PanelState = union('PanelState', {
  Home: ({ name }) => ({ name }),
  SearchingForPlayer: ({ name }) => ({ name }),
  NoPlayer: ({ name }) => ({ name }),
  QueryingMatches: ({ name, id }) => ({ name, id }),
  ErrorMessage: () => ({}),
  MatchList: ({ name, id, matches }) => ({ name, id, matches }),
  LoadingMatch: ({ name, id, matches, match }) => ({
    name,
    id,
    matches,
    match,
  }),
  PlayingMatch: ({ name, id, matches, match }) => ({
    name,
    id,
    matches,
    match,
  }),
}).derive(derivations.debugRepresentation)

export default PanelState
