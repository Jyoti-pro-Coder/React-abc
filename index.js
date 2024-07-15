import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Show from './01-Fun-event';
import Events from './02-Event-onclick';
import reportWebVitals from './reportWebVitals';
import Use from './03-UseState-var';
import Boost from './04-Boost';
import Hello from './practice/01_fun_event-test';
import File2 from './practice/02_onclick-test';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseStat from './practice/03_usestate';
import Bootstrp from './practice/04_bootstrap-test';
import { Submitt } from './05-OnSubmitt';

import  Conditionn  from './06-condition';
import Shruti from './07_clss-react';
import Jyotii from './practice/07_clss-react-test';
import App from './App';
import Arryy from './09-Arryy-list';
// import Arylist from './10_arrj';
import Submite from './practice/05_onsubmit';
import Mm from './11-Life-cycle';
import Should from './12-Should-component';
import Parent from './13_parent';
// import Test from './practice/09_test';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    {/* <Show name={'Prabhakar Bhardwaj Ji'} /> */}
    {/* <Events /> */}
    {/* <Use /> */}
    <Boost />
    {/* <Hello fname={'Jyoti'} lname={'Prajapati'}/> */}
    {/* <File2 /> */}
    {/* <UseStat /> */}
    {/* <Bootstrp /> */}
    {/* <Submitt /> */}
    {/* <Submite /> */}
     {/* <Conditionn /> */}
      {/* <Shruti /> */}
      {/* <Jyotii /> */}
      <App />
      {/* <Arryy /> */}
      {/* <Arylist /> */}
      {/* <Mm /> */}
      <Should />
      {/* <Test /> */}
      <Parent />

     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
