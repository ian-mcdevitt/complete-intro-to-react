import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const FourOhFour = () => <h1>404</h1>;

const App = () =>
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/search" component={Search} />
                <Route component={FourOhFour} />
            </Switch>
        </div>
    </BrowserRouter>;

render(<App />, document.getElementById('app'));

/*
const MyTitle = function(props) {
    // return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
    return (
        <div>
            <h1 style={{ color: props.color }}>
                {props.title}
            </h1>
        </div>
    );
};

const MyFirstComponent = function() {
    return (
        <div id="my-first-component">
            <MyTitle title="Game of Thrones" color="YellowGreen" />
            <MyTitle title="Stranger Things" color="Blue" />
            <MyTitle title="Rick & Morty" color="Pink" />
            <MyTitle title="GLOW" color="peru" />
        </div>
    );
};

render(<MyFirstComponent />, document.getElementById('app'));
*/
