import StateObserver from "./stateobserver";

function App() {
  let x = new StateObserver();
  console.log(x.getStateAsString());
  console.log(x.getAvailableActions());
  return <div className='App'>Hello</div>;
}

export default App;
