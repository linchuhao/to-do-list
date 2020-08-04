import React from 'react'
import InputItems from '../InputItems'
import TodoList from '../TodoList'
import { Link } from 'react-router-dom'

class TodoPage extends React.Component{

    render(){
        return (
            <div>
                <Link to="/">TodoPage</Link>
                <br></br>
                <Link to="/finish">Done</Link>
                <br></br>
                <InputItems />
                <TodoList />
            </div>
        )
    }

}
export default TodoPage