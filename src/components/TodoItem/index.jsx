import React from 'react'
import toDoService from '../Axios'
import { Button } from 'antd';
import { Input,Switch } from 'antd';

// import './index.css';
class TodoItem extends React.Component {

    handleDelete = () => {
        console.log(this.props.item.id);
        this.props.deleteItem(this.props.id)
        toDoService.deleteTodoItem(this.props.id).then(
            result => {
                console.log('delete')
            }
        )
    }

    handleMark = () => {
        console.log(this.props.item.id);
        toDoService.updateTodoItem(this.props.id,{id:this.props.id,status:!this.props.item.status }).then(
            result => {
                this.props.markItem(this.props.index)
                console.log('mark')
            }
        )
    }

    onChange(checked) {
        console.log(`switch to ${checked}`);
    }

    render() {
        return (
            <div>
                <span style={{ textDecorationLine: this.props.item.status ? "line-through" : "none" , cursor: "pointer" }}
                    onClick={this.handleMark}>{this.props.item.content}</span>
                    <Switch defaultChecked onChange={this.onChange} />
                <Button onClick={this.handleDelete}>X</Button>
            </div>
        )
    }
}

export default TodoItem