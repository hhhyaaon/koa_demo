import React from "react"
import ReactDOM from "react-dom"

export default class App extends React.Component {
    componentDidMount() {
        console.log("componentDidMount");
        
    }
    render() {
        return (
            <div>显示一行文字</div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));