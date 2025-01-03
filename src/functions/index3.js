// Concept 3 => In React , We make components 

const props = {
    x: 10
}

// Component Defined 
const MyComponent = (props) => {
    console.log(props, "Component Props");
    return <div>Hello From Component</div>;
}

// Calling the Component 
{ <MyComponent props={props} /> }


// Concept 4 => Use of Arrow Functions in OnClicks

{
    <button onClick={(x) => { console.log(x) }}>
    Click me
</button>
}