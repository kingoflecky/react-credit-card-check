import "./App.css";
import { Component } from "react";
import HowCanWeHelp from "./pages/formPages/howCanWeHelp";
import LoginPage from "./pages/formPages/loginPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <LoginPage />
        <HowCanWeHelp />
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
