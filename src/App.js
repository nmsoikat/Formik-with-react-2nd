import "./App.css";
import FormikContainer from "./components/FormikContainer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Test from "./components/Test";

function App() {
  return (
    <>
      <div className="form-container  st-3">
        <h2 className="form-caption text-center">All Field</h2>
        <FormikContainer />
      </div>

      <div className="form-container  st-3">
        <h2 className="form-caption text-center">Login</h2>
        <Login />
      </div>

      <div className="form-container  st-3">
        <h2 className="form-caption text-center">Registration</h2>
        <Registration />
      </div>

      <div className="st-3">
        {/* practices all */}
        {/* <Test /> */}
      </div>
    </>
  );
}

export default App;
