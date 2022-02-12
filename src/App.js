import logo from './logo.svg';
import './App.css';
import ReactComponent from './components/TEMPLATE'
import QuizButtton from './components/QuizButton'
import QuestionPage from './components/QuestionPage';
import MCQ from './components/MCQ';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and don't save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <ReactComponent></ReactComponent>
      <QuizButtton></QuizButtton>


      <QuestionPage></QuestionPage>
      <MCQ size = "5"></MCQ>








    </div>
  );
}

export default App;
