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
                        id={item.id}
                        index={index}
                        deleteItem={this.props.deleteItem}
                        markItem={this.props.markItem}
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
    deleteItem: (id) => dispatch({type: 'DELETE_ITEM', id: id}),
    markItem: (item) => dispatch({type: 'MARK_ITEM', item: item})
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)