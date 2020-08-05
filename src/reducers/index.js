const initState = {items:[]};
export default (state = initState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
          console.log(action.item)
        return {
          items: [...state.items , action.item]
        }
      case 'DELETE_ITEM':
          console.log(action.index)
        return {
          items: state.items.filter((item, index) => action.index !== index)
        }
      case 'MARK_ITEM':
        console.log(state.items[action.index].done)
        state.items[action.index].done = !state.items[action.index].done;
        return {items:[...state.items]}
      default:
        return state
    }
  }