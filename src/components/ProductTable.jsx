import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';

const ProductTable = ({ cellsData, cellsName }) => {

	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							{cellsName.map((name, index) => (
								<TableCell key={name} align='center'>
									{name}
								</TableCell>
							))}
							<TableCell align='center'>
								<TableRow>
									<TableCell align='center' width='24%'>Sku</TableCell>
									<TableCell align='center' width='20%'>Color</TableCell>
									<TableCell align='center' width='19%'>Size</TableCell>
									<TableCell align='center' width='21%'>Quantity</TableCell>
									<TableCell align='center' width='20%'>Create Date</TableCell>
								</TableRow>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cellsData.map((item) => (
							<TableRow key={item.id}>
								<TableCell align='center'>{item.id}</TableCell>
								<TableCell align='center'>{item.name}</TableCell>
								<TableCell align='center'>{item.description}</TableCell>
								<TableCell align='center'>{item.active.toString()}</TableCell>
								<TableCell align='center'>{item.price}</TableCell>
								<TableCell align='center'>
									<Table>
										<TableBody>
											{item.skus.map((sku) => (
												<TableRow key={sku.id}>
													<TableCell align='center' width='20%'>{sku.sku}</TableCell>
													<TableCell align='center' width='20%'>{sku.color}</TableCell>
													<TableCell align='center' width='20%'>{sku.size}</TableCell>
													<TableCell align='center' width='20%'>{sku.quantity}</TableCell>
													<TableCell align='center' width='20%'>{sku.createDate}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default ProductTable;