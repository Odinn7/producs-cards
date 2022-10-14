import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import './index.css';

const store = setupStore();

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</BrowserRouter>
);