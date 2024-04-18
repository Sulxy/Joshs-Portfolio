// Import React Library
import React from 'react';

// Import ReactDOM Library
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom';

// Import App component
import App from './App';

// Import CSS
import './style/index.css';

// Render the App component to the root element
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('root'));
