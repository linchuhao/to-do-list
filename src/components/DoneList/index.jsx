import React from 'react'
import TodoItem from '../TodoItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from '../Axios'

class DonePage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">TodoPage</Link>
                <br></br>
                <Link to="/finish">Done</Link>
                {
                    this.props.items.map((item, index) => {
                        if (item.done) {
                            return <TodoItem key={index} id={index}
                                item={item} 
                                deleteItem={this.props.deleteItem}
                                markItem={this.props.markItem}
                                />
                        }
                        return null
                    }).filter(item => item != null)
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

export default connect(mapStateToProps,mapDispatchToProps)(DonePage)