import React from 'react'
import { connect } from 'react-redux'
import toDoService from '../Axios'
import { Input } from 'antd';
const { Search } = Input;

class InputItems extends React.Component {

    componentDidMount() {
        toDoService.getAllItems()
            .then(result => {
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
                {/* <input type="text" ref={input => this.input = input} />
                <button onClick={this.handleAdd.bind(this)}>Add</button> */}
                <Search type="text"
                    placeholder="input todo event"
                    enterButton="Add" onSearch={(value) => this.handleAdd(value)}
                    style={{ width: 400 }}
                />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch({ type: 'ADD_ITEM', item: item })
})


export default connect(null, mapDispatchToProps)(InputItems)