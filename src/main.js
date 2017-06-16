export default
  function createReducerReducer( initialState, reducer, ...initialArgs ) {
    return ( state = initialState, action, ...reducerArgs ) =>
      reducer(state, action, ...initialArgs, ...reducerArgs)
  }