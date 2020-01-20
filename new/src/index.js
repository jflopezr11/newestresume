import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from './MenuBar';
import Header from './Header'

const App = () => {
    return (
        <div> 
             < ButtonAppBar />
            < Header />
        </div>
        
    );
};

ReactDOM.render(<App />,
    document.querySelector('#root')  
);
