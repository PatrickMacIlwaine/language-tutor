import './App.css';
import ChatGPT3Component from './ChatGPTComponent';
import Polly from './Polly';
import teacher from './components/chineseTeacher.jpeg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Language Tutor!</h2>
      <img className='img' src={teacher}/>
        <div>
          <ChatGPT3Component/>
        </div>
      </header>
    </div>
  );
}

export default App;
