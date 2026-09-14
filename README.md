# Dev Stack Builder

A responsive React web application for exploring different web development technologies and building a personal technology stack. Users can browse technology cards, add technologies to their stack, remove individual items, and clear the entire stack.

# Technology I used

  - Tailwind
  - JavaScript
  - React
  - React Toastify
  - Vite
  
---

## Features

- Browse technologies with their category, difficulty level, rating, description, icon, and badge.

- Add technologies to a personal "Your Stack" section and prevent duplicate selections.

- Remove individual technologies or clear the complete stack with user-friendly toast notifications.

---


# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. React uses JSX because it makes UI components easier to read, write, reusability and understand.

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component. When state changes, React can re-render the component and update the Ui.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update data.

In this project, it is used to keep track of the technologies selected in the "Your Stack" section and update the UI when technologies are added or removed.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used it to load the technology data from the JSON file when the component is loaded.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React understand which items were added, removed, or changed and update the UI efficiently.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

For example, the **Your Stack** section can show an empty message when no technology has been selected:

        {selectedTechnologies.length === 0 ? (

          <p className="w-full sm:max-w-60 lg:w-40 border border-dashed border-gray-300 rounded-xl text-gray-400 text-center py-8">
            Your Stack is empty
          </p>

        ) : (

          selectedTechnologies.map((technology) => (

            <div
              key={technology.id}
              className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-3">.....}


## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through *props*.

To send something back, the parent can pass a function as a prop. The child calls that function when an action happens, allowing the parent to receive the data or handle the event.
