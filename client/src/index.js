import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initMiddleware } from 'devise-axios';
import AuthProvider from './providers/AuthProvider';
import BlogProvider from './providers/BlogProvider';
import PostProvider from './providers/PostProvider';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BlogProvider>
        <PostProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PostProvider>
      </BlogProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
