# Waffle
Immutable playground

Things learned:
- Reselect works like a cache, it memorizes query on the state. it's useful when there are difficult nesting and querying.
- Each component you connect separately to the store will not render the others on its own state update.
- Connect is a pure component, thus if the state is a nested structure, every change will trigger rendering on entire component (it does shallow comparison).
- When you use combineReducers, the state should look like the object you're sending as arguments to this function.
- It's easier to implement shouldComponentUpdate with Immutable.js and this is its major plus, along with keeping state immutable.
- You can call connect on any component in the react tree and reduce props propagated down 
Most valueble thing learned: https://stackoverflow.com/questions/48148975/how-immutable-js-knows-when-not-to-render-a-component
