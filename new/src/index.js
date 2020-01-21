import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div> 
            < Header />
        </div>
        
    );
};

ReactDOM.render(<App />,
    document.querySelector('#root')  
);
