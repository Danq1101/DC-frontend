import { React, useState, useEffect } from 'react'
import ProductTable from '../components/ProductTable'

const SearchProduct = () => {
	const [searchText, setSearchText] = useState('')
	const [tableData, setTableData] = useState([]);
	const [checkbox, setCheckbox] = useState('false')

	useEffect(() => {
		const fetchData = async () => {
			const url = 'http://localhost:8080/api/DC/home';

			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Failed to fetch items data');
				}
				const data = await response.json();
				setTableData(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	const handleSearch = async () => {
		const url = `http://localhost:8080/api/DC/home?active=${checkbox}&size=${searchText}`;
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				size: searchText,
				active: checkbox
			}),
		};

		try {
			const response = await fetch(url, requestOptions);
			if (!response.ok) {
				throw new Error('Request failed.');
			}
			const data = await response.json();
			console.log(data);
			setTableData(data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (event) => {
		setSearchText(event.target.value)
	}

	const handleChangeTF = event => {
		setCheckbox(checkbox === 'true' ? 'false' : 'true');
	}

	return (
		<div>
			<div className='flex flex-col items-center mt-5'>
				<div className='flex items-center mb-2'>
					<label htmlFor='active-checkbox' className='text-gray-700 font-medium mr-2'>
						Show Active Products
					</label>
					<input
						type='checkbox'
						checked={checkbox === 'true'}
						onClick={handleChangeTF}
						className='form-checkbox h-5 w-5 text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
					/>
				</div>
				<div className='flex justify-center items-center'>
					<input
						type='text'
						value={searchText}
						placeholder='Enter size of product'
						onChange={handleChange}
						className='px-4 py-2 border border-gray-400 rounded-md mr-2 focus:outline-none focus:border-green-500'
					/>
					<button
						onClick={handleSearch}
						className='px-4 py-2 bg-green-500 text-white rounded-md focus:outline-none hover:bg-green-600'
					>
						Search
					</button>
				</div>
			</div>
			<ProductTable
				cellsName={['Id', 'Name', 'Description', 'Active', 'Price']}
				cellsData={tableData}
			/>
		</div>
	)
}

export default SearchProduct
