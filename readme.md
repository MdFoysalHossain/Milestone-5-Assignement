1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    With getElementById it can get a specefic element with id, with getElementsByClassName gets all the element with the class.
    querySelector and querySelectorAll is more advanced and versatile. One can use those and get nested id or nested class data more easily. 


2. How do you create and insert a new element into the DOM?
    1st step would be to create the element inside let or const with createElement. Then get the element id where we will use appendChild() to update it to the element.

3. What is Event Bubbling and how does it work?
    Event bubble happens when multiple events are started with 1 action. for example if I click on a button inside a div and both div and button has event's then it will create a event bubble.

4. What is Event Delegation in JavaScript? Why is it useful?
    When instead of attaching event on the child element, the parent element is assigned the event and based on that createing a event bubble is event delegation. Its useful because I dont need to assign multiple events to the childs, 1 event from the parent can haldle most of the things.


5. What is the difference between preventDefault() and stopPropagation() methods?
    preventDefault is used to prevent default action of a event from happening and stopPropagation is used to stop event bubbling.