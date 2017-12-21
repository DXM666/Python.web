import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoTable from './TodoTable';

// var React = require("react");
// var TodoForm = require('./TodoForm');
// var TodoTable = require('./TodoTable');

class Todo extends Component{
    constructor(){
        super();
        this.state = {todos:[]}
    }

    // listTodo (){
    //     $.ajax({
    //         type : 'get',
    //         url : '/list'
    //     }).done(function(resp){
    //         if(resp.status == "success"){
    //             this.setState({todos:resp.todos});
    //         }
    //     }.bind(this))
    // }

    addTodo (content){
        $.ajax({
            type : 'post',
            url : 'add',
            data : {content:content}
        }).done(function (resp) {
            if(resp.status == "success"){
                alert(666)
                // this.listTodo();
                this.setState({todos:resp.todos});
            }
        }.bind(this))
    }

    // addTodo(content){
    //     fetch('add', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             data: {content:content},
    //             })
    //     })
    //         .then(function (json) {
    //             if (json.code == "200") {
    //                 console.log("232323233-----正确")
    //             } else if (json.code == "400") {
    //                 console.log("2323232323------错了～")
    //             }
    //         })
    // }


    updateTodo (id,status){
        $.ajax({
            type : 'post',
            url : 'update',
            data : {id:id,status:status}
        }).done(function (resp) {
            if(resp.status == "success"){
                // this.listTodo();
                this.setState({todos:resp.todos});
            }
        }.bind(this))
    }

    deleteTodo (id){
         $.ajax({
            type : 'get',
            url : '/delete/'+id
        }).done(function(resp){
            console.log(resp);
            if(resp.status == 'success'){
                // this.listTodo();
                this.setState({todos:resp.todos});
            }
        }.bind(this))
    }

    componentWillMount(){
        $.ajax({
            type : 'get',
            url : '/list'
        }).done(function(resp){
            if(resp.status == "success"){
                this.setState({todos:resp.todos});
            }
        }.bind(this))

    }

    // componentDidMount (){
    //     this.listTodo();
    // }

  //   componentDidMount() {
  //   fetch("/list")
  //     .then(res => res.json())
  //     .then(
  //
  //         console.log('list'),
  //       (result) => {
  //             console.log(result)
  //         this.setState({todos:result.todos});
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({error});
  //       }
  //     )
  //       console.log(this.state)
  // }

    render(){
        return(
            <div>
                <TodoForm addTodo = {this.addTodo} />
                <TodoTable todos = {this.state.todos} updateTodo={this.updateTodo} deleteTodo = {this.deleteTodo}/>
            </div>
        )
    }
}

export default Todo
// var Todo = React.createClass({
//     getInitialState : function () {
//        return{
//            todos : []
//        }
//     },
//     listTodo : function () {
//         $.ajax({
//             type : 'get',
//             url : '/list'
//         }).done(function(resp){
//             if(resp.status == "success"){
//                 this.setState({todos:resp.todos});
//             }
//         }.bind(this))
//     },
//     addTodo : function(content){
//         $.ajax({
//             type : 'post',
//             url : 'add',
//             data : {content:content}
//         }).done(function (resp) {
//             if(resp.status == "success"){
//                 this.listTodo();
//             }
//         }.bind(this))
//     },
//     updateTodo : function(id,status){
//         $.ajax({
//             type : 'post',
//             url : 'update',
//             data : {id:id,status:status}
//         }).done(function (resp) {
//             if(resp.status == "success"){
//                 this.listTodo();
//             }
//         }.bind(this))
//     },
//     deleteTodo : function(id){
//          $.ajax({
//             type : 'get',
//             url : '/delete/'+id
//         }).done(function(resp){
//             console.log(resp);
//             if(resp.status == 'success'){
//                 this.listTodo();
//             }
//         }.bind(this))
//
//     },
//     componentDidMount : function(){
//         this.listTodo();
//     },
//     render : function(){
//
//         return(
//             <div>
//                 <TodoForm addTodo = {this.addTodo} />
//                 <TodoTable todos = {this.state.todos} updateTodo={this.updateTodo} deleteTodo = {this.deleteTodo}/>
//             </div>
//         )
//     }
// });
//
// module.exports = Todo;
