import React from 'react'
import InputItems from '../InputItems'
import TodoList from '../TodoList'
import { Link } from 'react-router-dom'
import { Row, Col, Menu } from 'antd';
import { connect } from 'react-redux'
class TodoPage extends React.Component {

    render() {
        return (
            <div>
                <Menu mode="horizontal" style={{ textAlign: 'center' }}>
                    <Menu.Item key="mail">
                        <Link to="/">TodoPage</Link>
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Link to="/finish">Done</Link>
                    </Menu.Item>
                </Menu>
                <br></br>
                <Row>
                    <Col span={24}><InputItems addItem={this.props.addItem} /></Col>
                </Row>
                <TodoList markItem={this.props.markItem}
                    deleteItem={this.props.deleteItem}
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    deleteItem: (id) => dispatch({ type: 'DELETE_ITEM', id: id }),
    markItem: (item) => dispatch({ type: 'MARK_ITEM', item: item }),
    addItem: (item) => dispatch({ type: 'ADD_ITEM', item: item })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)