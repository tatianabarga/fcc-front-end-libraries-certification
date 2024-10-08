// React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.

// React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. This has several benefits. It lets you use the full programmatic power of JavaScript within HTML, and helps to keep your code readable. For the most part, JSX is similar to the HTML that you have already learned, however there are a few key differences that will be covered throughout these challenges.

// For instance, because JSX is a syntactic extension of JavaScript, you can actually write JavaScript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: { 'this is treated as JavaScript code' }. Keep this in mind, since it's used in several future challenges.

// However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process. For your convenience, it's already added behind the scenes for these challenges. If you happen to write syntactically invalid JSX, you will see the first test in these challenges fail.

// It's worth noting that under the hood the challenges are calling ReactDOM.render(JSX, document.getElementById('root')). This function call is what places your JSX into React's own lightweight representation of the DOM. React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.

// The current code uses JSX to assign a div element to the constant JSX. Replace the div with an h1 element and add the text Hello JSX! inside it.

const JSX = <h1>Hello JSX!</h1>;

// MORE COMPLEX JSX ELEMENT:

// The last challenge was a simple example of JSX, but JSX can represent more complex HTML as well.

// One important thing to know about nested JSX is that it must return a single element.

// This one parent element would wrap all of the other levels of nested elements.

// For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.

// Here's an example:

// Valid JSX:

// <div>
//   <p>Paragraph One</p>
//   <p>Paragraph Two</p>
//   <p>Paragraph Three</p>
// </div>
// Invalid JSX:

// <p>Paragraph One</p>
// <p>Paragraph Two</p>
// <p>Paragraph Three</p>
// Define a new constant JSX that renders a div which contains the following elements in order:

// An h1, a p, and an unordered list that contains three li items. You can include any text you want within each element.

// Note: When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required. Also notice this challenge uses a div tag to wrap all the child elements within a single parent element. If you remove the div, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in React components.

const JSX = <div>
  <h1>Heading.</h1>
  <p>Paragraph</p>
 <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
</div>;