import { createStore } from "redux";
import "./styles.css";

console.log("Hi Redux");

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<h2>Slicing Redux</h2>
<p>Please see console</p>
`;

const store = createStore(rootReducer);

function reducerOne(sliceState = { a: "", b: "", c: "" }, action) {
  const { payload } = action;
  switch (action.type) {
    case "A1":
      return { ...sliceState, a: payload };
    case "B1":
      return { ...sliceState, b: payload };
    case "C1":
      return { ...sliceState, c: payload };
    default:
      return sliceState;
  }
}

function reducerTwo(sliceState = { x: "", y: "", z: "" }, action) {
  const { payload } = action;
  switch (action.type) {
    case "A2":
      return { ...sliceState, x: payload };
    case "B2":
      return { ...sliceState, y: payload };
    case "C2":
      return { ...sliceState, z: payload };
    default:
      return sliceState;
  }
}

function rootReducer(globalState = {}, action) {
  return {
    sliceOne: reducerOne(globalState.sliceOne, action),
    sliceTwo: reducerTwo(globalState.sliceTwo, action)
  };
}

console.log("Initial state:", store.getState());

store.dispatch({ type: "A1", payload: "AAA-1" });
store.dispatch({ type: "B1", payload: "BBB-1" });
store.dispatch({ type: "C1", payload: "CCC-1" });

console.log("Slice One update:", store.getState());

store.dispatch({ type: "A2", payload: "AAA-2" });
store.dispatch({ type: "B2", payload: "BBB-2" });
store.dispatch({ type: "C2", payload: "CCC-2" });

console.log("Slice Two update:", store.getState());
