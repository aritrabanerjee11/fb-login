import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import React from "react";
// import { render } from "react-dom";
// import Hello from "./Hello";
// import FacebookLogin from "react-facebook-login";

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

// const responseFacebook = response => {
//   console.log(response);
// };

// const App = () => (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <h2>Start editing to see some magic happen {"\u2728"}</h2>
//     <FacebookLogin
//       appId="1088597931155576"
//       autoLoad={true}
//       fields="name,email,picture"
//       //onClick={componentClicked}
//       callback={responseFacebook}
//     />,
//   </div>
// );

// render(<App />, document.getElementById("root"));
