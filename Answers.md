# Answers

1.  What is React JS and what problems does it try and solve?
1.  ReactJS basically is an open-source JavaScript library which is used for building user interfaces.
    Allows you to completely forget about DOM performance, and you can simply re-render the entire page all the time, as soon as your state changes. 
    This almost always results in much smaller and simpler code base, which leads to less bugs.


2.  What does it mean to _think_ in react?
2.  Step 1: Break The UI Into A Component Hierarchy. 
    Step 2: Build A Static Version in React. 
    Step 3: Identify The Minimal (but complete) Representation Of UI State. 
    Step 4: Identify Where Your State Should Live. 
    Step 5: Add Inverse Data Flow.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
3.  A functional component is a regular pure JavaScript function that accepts props as its argument, 
    returns some JSX. 
    A class based component is a JavaScript class. It extends React.Component,
    and its only required method is render(). 

4.  Describe state.
4.  State is referred to the local state of the component which cannot be accessed and modified outside of the component 
    and only can be used & modified inside the component.

5.  Describe props.
5.  Props, on the other hand,make components reusable by giving 
    components the ability to receive data from the parent component in the form of props.
