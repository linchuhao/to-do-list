import React from 'react'
import InputItems from '../InputItems'
import TodoList from '../TodoList'
import { Link } from 'react-router-dom'
import { Row, Col,Menu } from 'antd';
class TodoPage extends React.Component{

    render(){
        return (
            <div>
                <Menu mode="horizontal" style={{textAlign:'center'}}>
                    <Menu.Item key="mail">
                        <Link to="/">TodoPage</Link>
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Link to="/finish">Done</Link>
                    </Menu.Item>
                </Menu>
                <br></br>
                <Row>
                <Col span={24}><InputItems /></Col>
                </Row>
                <TodoList />
            </div>
        )
    }

}
export default TodoPage