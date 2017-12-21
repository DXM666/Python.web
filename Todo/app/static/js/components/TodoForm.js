import React, { Component } from 'react';

// var React = require('react');

class TodoForm extends Component{
    handleSubmit (){
        e.preventDefault();
        let content = React.findDOMNode(this.refs.content).value.trim();
        if(!content){
            return;
        }
        this.props.addTodo(content);
        React.findDOMNode(this.refs.content).value = "";

        // 直接使用原生 API 使 text 输入框获得焦点
        // this.textInput.focus();
    }

    render(){
        return(
            <form className="input-group" onSubmit={this.handleSubmit}>
                <input ref='content' className="form-control" id="content" name="content" type="text"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Add</button>
                </span>
            </form>
        )
    }
}

export default TodoForm
// var TodoForm =React.createClass({
//
//     handleSubmit : function(e){
//         e.preventDefault();
//         var content = React.findDOMNode(this.refs.content).value.trim();
//         if(!content){
//             return;
//         }
//         this.props.addTodo(content);
//
//         React.findDOMNode(this.refs.content).value = "";
//
//
//     },
//
//     render : function(){
//         return (
//             <form className="input-group" onSubmit={this.handleSubmit}>
//                 <input ref="content" className="form-control" id="content" name="content" type="text"/>
//                 <span className="input-group-btn">
//                     <button className="btn btn-default" type="submit">Add</button>
//                 </span>
//             </form>
//         )
//     }
// });
//
// module.exports = TodoForm;