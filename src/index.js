import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Data from './components/Data/Data';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={Data} />, document.getElementById('root'));
registerServiceWorker();
