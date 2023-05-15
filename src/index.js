import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './todo.css';
import App from './App';
import TodoList from './TodoList';
import Counter from './Counter';



import reportWebVitals from './reportWebVitals';



const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
    <TodoList />
    <Counter />
    
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
