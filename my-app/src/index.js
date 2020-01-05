/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import MyInfo from './MyInfo';

// ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)
// JSX
//ReactDOM.render(<h1>Hello, world!</h1>,document.getElementById('root'))
// wrap multiple adjacent tags under a <div>, else it won't work!

// reusable functional component
function MyApp(){
    return(
        <div>
            <h1>This is a heading</h1>
            <p>This is a paragraph</p>
        </div>
    );
}

ReactDOM.render(<div><MyApp /><MyInfo /></div>, document.getElementById('root'));

// ReactDOM.render(, document.getElementById('root'));