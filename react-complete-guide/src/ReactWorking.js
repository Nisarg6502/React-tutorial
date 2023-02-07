function App() {
    /*
    Imperative approach --> coz we are giving clear step by step instruction 
    on what the browser and the JavaScript must do.
    const para = document.createElement('p');
    para.textContent = 'This is also visible';
    document.getElementById('root').append(para);
    */

    //declarative approach
    return (
        <div>
            <h2>Let's get started!</h2>
            <p>This is also visible</p>
        </div>
    )
}
export default App;

//html code inside js shouldn't be correct, but this is JSX code invented by React
//and works in these files because of our setup and the transformation which is 
//running behind the scenes.

/*
JSX stands for JavaScript XML.
*/