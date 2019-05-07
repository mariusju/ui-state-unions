import React from 'react'
import { connect } from 'react-redux'
import actionTypes from './actionTypes'

const UI = ({ panelState, dispatch }) => (
  <div
    style={{
      border: '1px solid lightsalmon',
      width: '400px',
      height: '100px',
    }}
  >
    <h3>Actual UI</h3>
    {panelState.matchWith({
      Home: ({ name }) => (
        <div>
          <form
            onSubmit={e =>
              e.preventDefault() ||
              dispatch({ type: actionTypes.PLAYER_SELECTED, name })
            }
          >
            <label>Enter player </label>
            <input
              onChange={e =>
                dispatch({
                  type: actionTypes.PLAYER_ENTERED,
                  name: e.target.value,
                })
              }
            />
            <button>Search</button>
          </form>
        </div>
      ),

      SearchingForPlayer: ({ name }) => <div>Searching for {name}...</div>,

      NoPlayer: ({ name }) => (
        <div>
          No such player found - {name}
          <button
            onClick={() => dispatch({ type: actionTypes.START_OVER, name })}
          >
            New search
          </button>
        </div>
      ),

      QueryingMatches: ({ name }) => <div>Searching for {name} matches...</div>,

      ErrorMessage: () => (
        <div>
          <div>Oops! Something went wrong.</div>
          <button onClick={() => dispatch({ type: actionTypes.START_OVER })}>
            New search
          </button>
        </div>
      ),

      MatchList: ({ name, matches = ['labas'] }) => (
        <div>
          <div>{name} matches:</div>
          {matches.map((match, i) => (
            <button
              key={i}
              onClick={() =>
                dispatch({ type: actionTypes.MATCH_SELECTED, match })
              }
            >
              {match}
            </button>
          ))}
        </div>
      ),

      LoadingMatch: ({ name, match }) => (
        <div>
          Loading {name} match {match}...
        </div>
      ),

      PlayingMatch: ({ name, matches, match }) => (
        <div>
          <div>
            Playing {name} match {match}
          </div>
          <button
            onClick={() =>
              dispatch({ type: actionTypes.PLAYER_MATCHES_CLICKED, name })
            }
          >
            Go back
          </button>
          <button
            onClick={() => dispatch({ type: actionTypes.START_OVER, name })}
          >
            Start over
          </button>
        </div>
      ),
    })}
  </div>
)

export default connect()(UI)
