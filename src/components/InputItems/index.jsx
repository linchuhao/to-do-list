import React from 'react'

import toDoService from '../Axios'
import { Input } from 'antd';
const { Search } = Input;

class InputItems extends React.Component {

    componentDidMount() {
        toDoService.getAllItems()
            .then(result => {
                //TODO 
                console.log(result.data)
                for (let i = 0; i < result.data.length; i++) {
                    this.props.addItem(result.data[i])
                }
            })
    }

    handleAdd = (value) => {
        if (value === "") {
            alert('Empty, input again')
            return
        }
        const data = { "content": value, "status": false }
        this.props.addItem(data)
        toDoService.addTodoItem(data).then(result => {
        })
        value = "";
    }

    render() {
        return (
            <div>
                {/* TODO srarch  */}
                {/* <input type="text" ref={input => this.input = input} />
                <button onClick={this.handleAdd.bind(this)}>Add</button> */}
                <Search type="text"
                    placeholder="input todo event"
                    enterButton="Add" onSearch={this.handleAdd}
                    style={{ width: 400 }}
                />
            </div>
        )
    }

}



export default InputItems