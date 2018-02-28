//create a new component. this component should produce some html
import React from  'react';
import ReactDOM from  'react-dom'
const App = () => {
	return <div>Hi!</div>;//this is jsx code to be transpiled(just like es6 browser can't interpret this )
	//boiler plate babel and webpack 
	//this code gets into DOM and renders to html
	//babel translate this into something like " createElement("div", null, "hi" )
}
//tip: we can create self closing tag </APP> in jsx if there is nothing inside
//take this component's generated html and put it on the page(in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container')) //can't pass in APP (class). should be <APP> (instance)
//APP inside <> is component name which is class and jsx turns it into instance 
//2nd argument should be target element in index.html to append this App component
//document.querySelector('.container') means "go find that div container and try to render App into that div"