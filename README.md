# reducer-generator-reducer

A `reducer-generator` which builds a reducer that reduces a reducer.  In most 
cases this is not useful.  It is, however, useful for libraries that are building 
reducers from various object types.

### Installation

```
yarn add reducer-generator-reducer
```

**or**

```
npm install --save reducer-generator-reducer
```

### Simple Example

```js
import createReducerReducer from 'reducer-generator-reducer'

const system = createReducerReducer({ /* initial state */ },
  (state, action) => {
    switch(action.type) {
      case 'SYSTEM_ONLINE': {
        return {
          ...state,
          isOnline: true
        }
      }
      case 'SYSTEM_OFFLINE': {
        return {
          ...state,
          isOnline: false
        }
      }
    }
    return state
  })
```