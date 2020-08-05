import React from 'react'
import TodoItem from '../TodoItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class DonePage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">TodoPage</Link>
                <br></br>
                <Link to="/finish">Done</Link>
                {
                    this.props.items.map((item, index) => {
                        if (item.status) {
                            return <TodoItem key={index} id={index}
                                item={item} 
                                deleteItem={this.props.deleteItem}
                                markItem={this.props.markItem}
                                />
                        }
                        return null
                    })
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
    markItem: (id) => dispatch({type: 'MARK_ITEM', id: id})
})

export default connect(mapStateToProps,mapDispatchToProps)(DonePage)