import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  	<React.StrictMode>
		<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
		<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
		<script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
    	<App />
  	</React.StrictMode>,
  	document.getElementById('root')
);
