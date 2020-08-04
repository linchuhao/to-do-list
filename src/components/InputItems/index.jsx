import React from 'react'
import { connect } from 'react-redux'

class InputItems extends React.Component {


    handleAdd = () => {
        if (this.input.value === "") {
            alert('Empty, input again')
            return
        }
        this.props.addItem({"text":this.input.value,"done":false})
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
    addItem: (obj) => dispatch({type: 'ADD_ITEM', obj: obj})
})


export default connect(null, mapDispatchToProps)(InputItems)