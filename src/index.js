// Import React Library
import React from 'react';

// Import ReactDOM Library
import ReactDOM from 'react-dom/client';

// Import App component
import App from './App';

// Import CSS
import './style/index.css';

// Create root element using ReactDOM and select the HTML element with the id of 'root'
// const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component to the root element
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);