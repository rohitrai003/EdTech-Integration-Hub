import AccessView from "./views/AccessView/AccessView";
import RegisterView from "./views/RegisterView/RegisterView";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="body">
        <h1>EDUTECH INTEGRATION HUB</h1>
        <div className="row">
          <div className="div">
            <RegisterView />
          </div>
          <div className="line"></div>
          <div className="div2">
            <AccessView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
