import { Component } from "react";
import icon from './completed-task.png';
import iconDone from './done-task.png'

export class ToDoList extends Component {
    state = {
        userInput: '',
        dailyList: [],
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

    changeColor(event) {
        // this.setState({image: iconDone});
        const li = event.target;
        li.classList.toggle ('change_color');
    }

    deleteItem() {
        let listArray = this.state.dailyList;
        listArray = [];
        this.setState({dailyList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit}>
                    <div className="input_container">
                        <input type="text" placeholder="Write here your daily task" onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput}/>
                    </div>
                    <div className="btn_container">
                        <button onClick={() => this.addItem(this.state.userInput)} className="btn add">ADD</button>
                    </div>
                    <ul >
                        {this.state.dailyList.map((item, index) => (
                            <li onClick={this.changeColor} key={index}>
                                <img src={icon} className="icon" width="30px" alt="icon"/>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="btn_container">
                        <button onClick={() => this.deleteItem()} className="btn delete">DELETE</button>
                    </div>
                </form>
            </div>
        )
    }
}