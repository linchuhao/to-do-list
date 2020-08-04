import React from 'react'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {items: []}
    }


    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) => <TodoItem
                        key={index}
                        id={index}
                        deleteItem={this.props.deleteItem}
                        markItem={this.props.markItem}
                        value={item}
                        item={item} />)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})


const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch({type: 'DELETE_ITEM', index: index}),
    markItem: (index) => dispatch({type: 'MARK_ITEM', index: index})
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)