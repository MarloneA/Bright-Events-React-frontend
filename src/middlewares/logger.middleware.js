export default store => next => action => {
  console.groupCollapsed('TUNADISPACTCH ', action)
  console.log('Before action is performed , data is ', store.getState())
  next(action)
  console.log('After the action is dispatched data is  ', store.getState())
  console.groupEnd()
}
