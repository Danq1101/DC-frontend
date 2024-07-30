import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SearchProduct from './pages/SearchProduct'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<SearchProduct />} />
			</Routes>
		</Router>
	)
}

export default App
