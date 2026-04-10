import "./App.css";
const App = (props) => {
  return (
    <>
      <h1 className="hero-title">
        My App {props.name} - {props.toinen}
      </h1>
    </>
  );
};
export default App;
