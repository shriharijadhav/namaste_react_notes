const heading = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{key:"1"},"Heading"),
        React.createElement("p",{key:"2"},"Paragraph")
    ]));
const root = ReactDOM.createRoot(document.getElementById("root"));
/*
    nested tags
    <div id="parent">
        <div id="child">
            <h1>Heading </h1>
        </div>
    </div>
*/
console.log(heading,'- Type of heading',typeof(heading))

root.render(heading);