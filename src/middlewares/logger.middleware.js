export default store=>next=>action=>{
	console.groupCollapsed("ACTION ", action.type)
	console.log("PREVIOUS STATE ", store.getState())
	next(action)
	console.log("CURRENT STATE", store.getState())
	console.groupEnd()
}