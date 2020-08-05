import React from 'react'
import { connect } from 'react-redux'
import toDoService from '../Axios'

class InputItems extends React.Component {

    componentDidMount(){
        toDoService.getAllItems()
            .then(result=>{
                console.log(result.data);
                for(let i=0;i<result.data.length;i++){
                    this.props.addItem(result.data[i])
                }
            })
    }

    handleAdd = () => {
        if (this.input.value === "") {
            alert('Empty, input again')
            return
        }
        const data = {"content":this.input.value,"status":false}
        this.props.addItem(data)
        toDoService.addTodoItem(data).then(result=>{
        })
        this.input.value = "";
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this.input = input}/>
                <button onClick={this.handleAdd.bind(this)}>Add</button>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch({type: 'ADD_ITEM', item: item})
})


export default connect(null, mapDispatchToProps)(InputItems)