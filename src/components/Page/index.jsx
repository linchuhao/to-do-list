import React from 'react'
import InputItems from '../InputItems'
import TodoList from '../TodoList'
class TodoPage extends React.Component{

    render(){
        return (
            <div>
                <mark>Page:</mark>
                <InputItems />
                <TodoList />
            </div>
        )
    }

}
export default TodoPage