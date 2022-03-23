import './App.css';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import { memo, useEffect, useState } from 'react';

function App() {
  const [directLine, setDirectLine] = useState();

  useEffect(() => {
    const token = prompt('Please enter Direct Line token');

    setDirectLine(createDirectLine({ token }));
  }, [setDirectLine]);

  return <div className="app">{!!directLine && <ReactWebChat directLine={directLine} />}</div>;
}

export default memo(App);
