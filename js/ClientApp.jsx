import React from 'react';
import { render } from 'react-dom';

const App = () =>
    <div className="app">
        <div className="landing">
            <h1>svideo</h1>
            <input type="text" placeholder="Search" />
            <a>or Browse All</a>
        </div>
    </div>;

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
