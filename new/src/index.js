import React from 'react';
import ReactDOM from 'react-dom';
import MenuBarBar from './MenuBar';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div> 
             < MenuBarBar />
            < Header />
        </div>
        
    );
};

ReactDOM.render(<App />,
    document.querySelector('#root')  
);
