import logo from './logo.svg';
import './App.css';
import ReactComponent from './components/TEMPLATE'

import SkipButton from './components/SkipButton';

import QuizButtton from './components/QuizButton'
import QuestionPage from './components/QuestionPage';
import MCQ from './components/MCQ';
import SliderQ from './components/SliderQ';
import ResultPage from './components/ResultPage';
import ContributorForm from './components/ContributorForm';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      
      <ContributorForm></ContributorForm>

      <ReactComponent></ReactComponent>
      <SkipButton></SkipButton>

      <QuizButtton></QuizButtton>

      <QuestionPage></QuestionPage>
      <SliderQ name = "hi" min ="-100" max = "500"></SliderQ>

      <ResultPage></ResultPage>







    </div>
  );
}

export default App;
