import { union, derivations } from 'folktale/adt/union'

const PanelState = union('PanelState', {
  Home: () => ({}),
  SearchingForPlayer: () => ({}),
  NoPlayer: () => ({}),
  QueryingMatches: () => ({}),
  ErrorMessage: () => ({}),
  MatchList: () => ({}),
  LoadingMatch: () => ({}),
  PlayingMatch: () => ({}),
}).derive(derivations.debugRepresentation)

export default PanelState
