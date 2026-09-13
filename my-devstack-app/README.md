# 🚀 DevStack - Modern Development Stack Builder

DevStack is an interactive web application built for developers to explore frontend, backend, database, and tooling technologies, compare them, and assemble their ideal custom software stack.

---

## 🛠️ Technologies Used

- **React 19**: Component-based UI rendering
- **Vite 8**: Next-generation dev server & build tool
- **Tailwind CSS v4**: Utility-first CSS framework for modern styling
- **React-Toastify**: Interactive toast notification system
- **JavaScript (ES6+) & HTML5**: Clean, modular application code

---

## ✨ Key Features

1. **Interactive Technology Catalog**: Browse curated technologies across multiple categories with badge labels, star ratings, and difficulty levels loaded dynamically from JSON.
2. **Real-time Custom Stack Panel & Toast Alerts**: Add tools to a 1-column sidebar stack, prevent duplicate additions with warning toast alerts, and clear items with instant feedback.
3. **Single Shared Gradient Theme & Responsive Design**: Designed with a single shared gradient theme (`orange → pink → violet`) defined in CSS variables and optimized for mobile, tablet, and desktop viewports.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX (JavaScript XML) is a syntax extension for JavaScript that lets us write HTML-like elements directly inside React component code. It is used in React because it makes component rendering logic intuitive, readable, and keeps component structure and JavaScript logic together in one place.

---

### 2. What is the difference between props and state?
**Answer:**  
- **Props (Properties):** Read-only data passed from a parent component down to a child component (external input).
- **State:** Mutable data managed internally inside a component that triggers re-rendering whenever its value changes (internal memory).

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook enables functional React components to hold and update dynamic data state.  
In this project, `useState` was used in `App.jsx` to manage the selected stack items (`selectedStack`), in `TechnologiesSection.jsx` to store fetched technology data (`technologies`) and loading state (`isLoading`), and in `Navbar.jsx` to toggle the mobile menu (`isMenuOpen`).

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
The `useEffect` hook runs side effects (like data fetching or subscriptions) in functional components.  
We needed `useEffect` in `TechnologiesSection.jsx` to fetch the local `/technologies.json` file asynchronously when the component first mounts on screen, avoiding infinite re-rendering loops.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React requires a unique `key` prop for each item in a mapped list so its Virtual DOM algorithm can identify which exact elements were added, changed, or removed. This ensures efficient DOM updates and prevents bugs during list re-ordering.

---

### 6. What is conditional rendering? Show one place you used it.
**Answer:**  
Conditional rendering means rendering different components or UI markup based on certain conditions (like checking variable values or array lengths).  
One place used in this project is in `YourStackSidebar.jsx`: when `selectedStack.length === 0`, it conditionally renders the *"Your stack is empty"* placeholder box; otherwise, it renders the list of selected items and the *"Remove All"* button.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child:** Data is passed down via props (e.g., `App.jsx` passes `selectedStack={selectedStack}` down to `YourStackSidebar.jsx`).
- **Child to Parent:** The parent passes a callback function as a prop to the child, and the child calls that function with data as arguments (e.g., `TechnologyCard.jsx` invokes `onAdd(tech)`, which triggers `handleAddToStack(tech)` in `App.jsx`).
