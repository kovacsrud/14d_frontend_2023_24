var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App() {
    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "h1",
            null,
            "Babel ford\xEDt\xF3"
        ),
        React.createElement(
            "p",
            null,
            "React alapok, frontend programoz\xE1s"
        ),
        React.createElement(Box, { felirat: "Box1", kezd: 0, hatterSzin: "red" }),
        React.createElement(Box, { felirat: "Box2", kezd: 4, hatterSzin: "green" }),
        React.createElement(Box, { felirat: "Box3", kezd: 2, hatterSzin: "yellow" })
    );
}

function Box(_ref) {
    var hatterSzin = _ref.hatterSzin,
        kezd = _ref.kezd,
        felirat = _ref.felirat;

    var _React$useState = React.useState(kezd),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        szamlalo = _React$useState2[0],
        setSzamlalo = _React$useState2[1];

    var onClick = function onClick() {
        setSzamlalo(function (prev) {
            return prev + 1;
        });
    };

    return React.createElement(
        "div",
        { onClick: onClick, className: "p-2 m-2 rounded", style: { backgroundColor: hatterSzin, width: "200px", height: "200px" } },
        React.createElement(
            "h3",
            null,
            felirat
        ),
        React.createElement(
            "h4",
            null,
            szamlalo
        )
    );
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));