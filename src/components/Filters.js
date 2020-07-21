import React, { useContext } from 'react';
import { MyFilters } from '../Elements';
import { BuildContext } from '../context/GlobalContext';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

export default function Filters() {
	const context = useContext(BuildContext);

	// get unique Status values from buildings
	const statusValues = Array.from(
		new Set(context.buildings.map(e => e.status))
	);
	// get unique Type values from buildings
	const typesValues = Array.from(new Set(context.buildings.map(e => e.type)));
	// Filter buildings by Type
	const filterTypes = type =>
		context.dispatchFilters({
			type: 'TYPE',
			payload: type,
		});

	// Filter buildings by Status
	const filterStatus = status =>
		context.dispatchFilters({
			type: 'STATUS',
			payload: status,
		});

	return (
		<MyFilters>
			<span>Filter by:</span>
			<div>
				{/*  Types Dropdown */}
				<DropdownButton
					variant='secondary'
					size='sm'
					title='Type'
					style={{ margin: 0 }}
				>
					{/* Render unique Types into the dropdown */}
					{typesValues.map(type => (
						<Dropdown.Item
							key={type}
							onClick={() => filterTypes(type)}
							style={{
								textDecoration: 'none',
							}}
						>
							{type}
						</Dropdown.Item>
					))}
				</DropdownButton>
				{/*  Values Dropdown */}
				<DropdownButton
					variant='secondary'
					size='sm'
					title='Status'
					style={{ margin: 0 }}
				>
					{/* Render unique Values into the dropdown */}
					{statusValues.map(status => (
						<Dropdown.Item
							key={status}
							onClick={() => filterStatus(status)}
							style={{
								textDecoration: 'none',
							}}
						>
							{status}
						</Dropdown.Item>
					))}
				</DropdownButton>
				{/*  Reset Button */}
				<Button
					variant='danger'
					size='sm'
					onClick={() =>
						context.dispatchFilters({
							type: 'RESET',
						})
					}
				>
					Reset
				</Button>
			</div>
		</MyFilters>
	);
}
