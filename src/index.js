import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          closeOnClick
          pauseOnHover={false}
        />
        {/* Same as */}
        <ToastContainer />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
