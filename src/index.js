import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './todo.css';
import App from './App';
import TodoList from './TodoList';
import Counter from './Counter';
import {robots} from './robots';
import Proptest from './proptest';
// import array from './proptest';
import 'tachyons';



import reportWebVitals from './reportWebVitals';



const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode >
    <App />
    <Counter id={robots[0].id} name={robots[0].name}/>
    <Counter id={robots[1].id} name={robots[1].name}/>
      
    <TodoList />
    <Proptest name={robots[2].name} price = {robots[2].price} />
      <Proptest name={robots[3].name} price = {robots[3].price} />
      <Proptest name="Tabasco" price = "$0.99"/>
    
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
