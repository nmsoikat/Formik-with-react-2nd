import "./App.css";
import FormikContainer from "./components/FormikContainer";
import Test from "./components/Test";

function App() {
  return (
    <>
      <div className="form-container  st-3">
        <h2 className="form-caption text-center">All Field</h2>
        <FormikContainer />
      </div>
      <div className="st-3">
        {/* practices all */}
        {/* <Test /> */}
      </div>
    </>
  );
}

export default App;
