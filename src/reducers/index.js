const initState = {items:[]};
export default (state = initState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          items: [...state.items , action.item]
        }
      case 'DELETE_ITEM':
        return {
          items: state.items.filter(item => action.id !== item.id)
        }
      case 'MARK_ITEM':
        console.log(state.items[action.id].status)
        state.items[action.id].status = !state.items[action.id].status;
        return {items:[...state.items]}
      case 'LOADING_TOGGLE':
        console.log(action.payload)
        return state
      default:
        return state
    }
  }