import './App.css'
import CounterContainer from "./components/CounterContainer"
import Controls from "./components/Controls"
import TimeProvider from './Contexts/TimerContext';
import TickProvider from './Contexts/tickContext';

function App() {

  return (
    <div className="App">
      <div>
        <TimeProvider>
          <TickProvider>
            <CounterContainer />
            <Controls />
          </TickProvider>
        </TimeProvider>
      </div>
    </div>
  );
}

export default App;
