const ce = React.createElement;

const MyTitle = function(props) {
    return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
    return ce(
        'div',
        null,
        ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
        ce(MyTitle, { title: 'Stranger Things', color: 'Blue' }),
        ce(MyTitle, { title: 'Rick and Morty', color: 'Pink' }),
        ce(MyTitle, { title: 'GLOW', color: 'peru' })
    );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
