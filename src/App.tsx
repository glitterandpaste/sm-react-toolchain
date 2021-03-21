//import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { FlowChart, Main } from "containers";

const App: React.FC = () => {
	return (
		<BrowserRouter basename="/">
			<Switch>
				<Route path="/flowchart" component={FlowChart} />
				<Route path="/" component={Main} exact />
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
//export default hot(App);
