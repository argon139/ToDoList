import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from 'components/Header';

ReactDOM.render(
	<React.StrictMode>
		<div className="toDo">
			<Header />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);
