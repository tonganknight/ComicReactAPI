import './App.css';
import RenderLive from './components/RenderLive';
import { BreakpointProvider} from 'react-socks';

function App() {
  return (
  <BreakpointProvider>
  <div>
    <RenderLive/>
  </div>
  </BreakpointProvider>
  );
}

export default App;
