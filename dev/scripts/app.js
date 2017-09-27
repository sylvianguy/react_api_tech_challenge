import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';

// const CreateRedirect = (props) => <Redirect to={props.path} /> ;

class App extends React.Component {

    render() {
      return (
        <div className="wrapper">
			<h1>Welcome to the Booze App</h1>
			<Home />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
