import './App.css';
import PureComp from './components/PureComp';
import HighOrderComp from './components/HighOrderComp';
import ClickCount from './components/ClickCount';

function App() {
  return (
    <div >
      <HighOrderComp/>
      <ClickCount/>
      <PureComp/>

    </div>
  );
}

export default App;