# React

## What is React?
* Data-driven front end library
* not a framework, doesn't provide structure
* Data managed by a BE system (ie express)
* Data fecthed with AJAX (ie *axios* jQuery Fetch api)
* Built-in templating engine: JSX
* React chooses when to render, we simply change the data and React promises to change the view at some point

## Why React?
* Move from manually controlling DOM to a simply changing the data
* More naturally create modular components
* Break page / app into small chunks and develop separately

## HTML El vs React Component
* Both have tree hierarchy
* Boh affect DOM layout

* Components liek "super" elements
* Comp's have functional behavior
* Comp's auto'ly re-render as their state changes

## React Templating w JSX
* JSX: write functional component including html el's
* Can insert data
* Made up of nested partials

## State & Props
Data stored in 2 ways:
1. State owned by component
2. Props owned by parent
![https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state#what_is_state_in_reactjs](/lighthouse-web-notes/Week_16/Screenshot%202023-01-17%20at%2011.19.55%20AM.png)
(https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state#what_is_state_in_reactjs)

* Props immutable from child. We cannot manipulate Props within child, tell parent to send fn to manip. vals: 
``` const [color, setColor] = uesState(); ```
* (State mutable through setter fn)
* Use array/obj spreading or .concat to create new obj so React will see the new data

# Taiwo's Notes
# React Fundamentals

## Resources
 - Code Repo: https://github.com/muyiwaoyeniyi/lhl-lectures/tree/main/Sept-19th-2022-Cohort/flex-m07w16
 - Video Link: https://vimeo.com/790201448/24c620eb14
 - Slides: In the code repo.

### Content

- [x] What is React?
- [x] Components
- [x] JSX
- [x] Event Handlers
- [x] State
- [x] Props
- [x] Building a project w/ Create-React-App

## What is React

React is a Component Oriented Frontend Framework.  React implements a data-binding system so that changes in the underlying data of your React application will result in automatically rendered changes to the frontend.

## React Components

Components are like _super HTML elements_: they are part of a heirarchy of Components, they can individually hold data as well as having behaviour.

## JSX

JSX is the templating language for React applications.  Unlike in an express application, each component is responsible for rendering itself, so it's good to think of JSX templates as more like template partials.


## Event Handlers

In React, event handlers are bound directly on HTML Elements and React components.

i.e.

```js
<form onSubmit={onSubmitHandler}>
    <input onChange={e => setTitle(e.target.value)} name="title">
</form>
```

## State
State is data owned and managed by _this_ component.  In order to request a place to store data we use the `useState` hook, which gives us an accessor and a mutator function:

```js

export default function NewBookForm(props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

 return (<form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title}
            onChange={e => setTitle(e.target.value)}/>
        <p>{title}</p>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" value={author}
            onChange={e => setAuthor(e.target.value)}/>
        <p>{author}</p>
        <button type="Submit">Submit</button>
    </form>);
}
```

## Props

Props are data that is owned by some parent component passed to your component through attributes with rendering the subcomponent:

```js
//Form.js
function Form(props) {
   return (<form>
       <TextInput name="username" />
       <PasswordInput name="password" />
   </form>);
}
```

```js
//TextInput.js
function TextInput(props) {
   return (<input name={props.name} />);
}
```

## Controlled Component

In the previous example both the title input and the author input are controlled components, because their value is bound to the value of the underlying data - any changes to said data will cause the component to update, and any changes to the input will affect the said data.

## Create React App

Use this command to generate the simple starter React App.
```
$ npx create-react-app <your app name>
```

### Useful Links
* [React](https://reactjs.org/)