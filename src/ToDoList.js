import { Component } from "react";
import icon from './completed-task.png';
import icon2 from './done-task.png'

export class ToDoList extends Component {
    state = {
        userInput: '',
        dailyList: [],
        deleteList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            return false
        }

        let listArray = this.state.dailyList;
        listArray.push(input);
        this.setState({dailyList: listArray, userInput: ''})
    }

    // changeColor(input) {
    //     const li = input.target;
    //     li.classList.toggle ('change_color');
    // }

    doneItem(input, index) {
        let listArray = this.state.dailyList;
        let readyList = this.state.deleteList;
        listArray.splice(index, 1);
        readyList.push(input);
        this.setState({dailyList: listArray})
        this.setState({deleteList: readyList})
       
    }

    returnItem(input, index) {
        let listArray = this.state.dailyList;
        let readyList = this.state.deleteList;
        listArray.push(input);
        readyList.splice(index, 1)
        this.setState({dailyList: listArray})
        this.setState({deleteList: readyList})
    }

    deleteItem() {
        let listArray = this.state.deleteList;
        listArray = [];
        this.setState({deleteList: listArray})
    }

    deleteAll() {
        let listArray = this.state.dailyList;
        listArray = [];
        this.setState({dailyList: listArray})
        let readyList = this.state.deleteList;
        readyList = [];
        this.setState({deleteList: readyList})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit}>
                    <div className="input_container">
                        <input type="text" placeholder="Type new task here" onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput}/>
                    </div>
                    <div className="btn_container">
                        <button onClick={() => this.addItem(this.state.userInput)} className="btn add">ADD</button>
                    </div>
                    <ul >
                        {this.state.dailyList.map((item, index) => (
                            <li onClick={() => this.doneItem(item, index)} key={index}>
                                <img src={icon}  className="icon" width="30px" alt="icon"/>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {this.state.deleteList.map((item, index) => (
                            <li className="change_color" onClick={() => this.returnItem(item, index)}  key={index}>
                                <img src={icon2} className="icon" width="30px" alt="icon"></img>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="btn_container">
                        <button onClick={() => this.deleteItem()} className="btn delete_item">DELETE DONEs</button>
                        <button onClick={() => this.deleteAll()} className="btn delete_all">DELETE ALL</button>
                    </div>
                </form>
            </div>
        )
    }
}