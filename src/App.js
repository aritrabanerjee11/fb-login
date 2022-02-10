import './App.css';

import Fb from './components/Fb';

function App() {
  return (
    <div className="App">
      <h1 className='App-title'>Facebook Auth</h1>
      <p className='App-intro'>
        To get started, authenticate with Facebook
      </p>
      <Fb />
    </div>
  );
}

export default App;
