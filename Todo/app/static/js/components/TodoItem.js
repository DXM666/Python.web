import React, { Component } from 'react';

// var React = require('react');

class TodoItem extends Component{

    handleUpdate (id,status){
        this.props.updateTodo(id,status);
    }

    handleDelete (id){
        this.props.deleteTodo(id);
    }
    render(){

        let t = this.props.todo;
        let updateBtn;

        if(t.status == 0){
            updateBtn =  <button onClick={this.handleUpdate.bind(this,t.id,1)} className="btn btn-primary">Done</button>
        }else{
            updateBtn = <button  onClick={this.handleUpdate.bind(this,t.id,0)} className="btn btn-primary">Undone</button>
        }
        return(
            <tr>
               <td>{ t.content }</td>
               <td>{ t.status == 0 ? '未完成':'已完成' }</td>
               <td>{ t.time }</td>
               <td>
                   {updateBtn}
                   <button  onClick={this.handleDelete.bind(this,t.id)} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        )
    }
}

export default TodoItem

// var TodoItem = React.createClass({
//     handleUpdate : function(id,status){
//         this.props.updateTodo(id,status);
//     },
//     handleDelete : function(id){
//
//         this.props.deleteTodo(id);
//
//     },
//     render : function(){
//         var t = this.props.todo;
//         var updateBtn;
//
//         if(t.status == 0){
//             updateBtn =  <button onClick={this.handleUpdate.bind(this,t.id,1)} className="btn btn-primary">Done</button>
//         }else{
//             updateBtn = <button  onClick={this.handleUpdate.bind(this,t.id,0)} className="btn btn-primary">Undone</button>
//         }
//
//         return (
//            <tr>
//                <td>{ t.content }</td>
//                <td>{ t.status == 0 ? '未完成':'已完成' }</td>
//                <td>{ t.time }</td>
//                <td>
//                    {updateBtn}
//                    <button  onClick={this.handleDelete.bind(this,t.id)} className="btn btn-danger">Delete</button>
//                </td>
//            </tr>
//         )
//     }
// });
//
// module.exports = TodoItem;