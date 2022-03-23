import './App.css';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

function App() {
  const directLine = createDirectLine({
    token:
      '...'
  });

  return (
    <div className="app">
      <ReactWebChat directLine={directLine} />
    </div>
  );
}

export default App;
