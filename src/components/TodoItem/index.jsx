import React from 'react'

class TodoItem extends React.Component {

    handleDelete = () => {
        this.props.deleteItem(this.props.id)
    }

    handleMark = () => {
        this.props.markItem(this.props.id)
    }

    render() {
        return (
            <div>
                <span style={{ textDecorationLine: this.props.item.done ? "line-through" : "none" , cursor: "pointer" }}
                    onClick={this.handleMark}>{this.props.item.content}</span>
                <button onClick={this.handleDelete}>X</button>
            </div>
        )
    }
}

export default TodoItem