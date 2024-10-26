// const heading = React.createElement("h1",{id:"heading"},"Hello World from React")

// console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)
 

/**
 
<div id = "parent">

<div id = "child">
<h1>I'm supwer tag </h1>
<h2>Im hero </h2>
</div>

<div id = "child2">
<h1>I'm supwer tag </h1>
<h2>Im hero </h2>
</div>

</div>



ReactElement(Object) => HTML (BROWSER UNDERSTANDS)












*/


const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"iam supwer tag"),
    React.createElement("h2",{},"iam hero")
]),

React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"iam supwer tag"),
    React.createElement("h2",{},"iam hero")
])

])

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)