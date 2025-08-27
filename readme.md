# 1  What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

## getElementById:

getElementById is a JavaScript DOM method that is used to find and access an html element by its unique id.

## getElementByClassName:

getElementsByClassName is a method in JavaScript that returns a array-like collection of all elements in a document that have a specified class name.

## querySelector:

querySelector is a JavaScript method that returns the first element within the document that matches a specified CSS selector.

## querySelectorAll:

querySelectorAll is a JavaScript method that returns a static NodeList containing all elements within the document that match a specified group of CSS selectors.

# 2 How do you **create and insert a new element into the DOM**?

first i create a new element using document.createElement(), and then insert it into the DOM as a child of an existing element using methods like appendChild() or insertBefore()

# 3 What is **Event Bubbling** and how does it work?

Event bubbling is a process where an event triggered on a specific element first executes on that element, then "bubbles up" to its parent, grandparent, and all other ancestor elements in the DOM tree.

and Event bubbling works when an event is passed from an element to its parent, then to its grandparent, and eventually to the root of the document.

# 4  What is **Event Delegation** in JavaScript? Why is it useful?

 Event delegation is a technique in JavaScript where you place a single event listener on a parent element instead of on each individual descendant. It's useful because it improves performance by reducing the number of event listeners, simplifies code, and allows you to handle events for elements that are dynamically added to the page.

 # 5 What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() is a JavaScript method used to stop the default action of an event from occurring, such as a link navigating to a new page or a form submitting .

stopPropagation() is a JavaScript method used to prevent an event from propagating or "bubbling up" through the DOM tree to its parent or ancestor elements after it has been triggered.

### difference :

preventDefault() and stopPropagation() are both event methods, but they serve different purposes. preventDefault() is used to cancel the browser's default action, while stopPropagation() is used to stop an event from continuing its journey through the DOM.


