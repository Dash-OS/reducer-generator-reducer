export default
  ( initialState, reducer, pcontext ) => 
    ( state = initialState, action, context ) =>
      reducer(state, action, { ...pcontext, ...context })