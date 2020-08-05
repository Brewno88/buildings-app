import React, { useContext } from 'react';
import { BuildContext } from '../context/GlobalContext';
import { MyTable } from './APIStyle';
import { Link } from 'react-router-dom';

function Buildings() {
	const { buildings } = useContext(BuildContext);

	return (
		<>
			<MyTable className='container'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Status</th>
						<th>Location</th>
					</tr>
				</thead>
				<tbody>
					{buildings.map(build => (
						<tr key={build._id}>
							<td>{build.name}</td>
							<td>{build.type}</td>
							<td>{build.status}</td>
							<td>{build.location}</td>
							<td>
								<Link to={`/buildings/edit/${build._id}`}>Edit</Link>|
								<Link to={`/delete/${build._id}`}>Delete</Link>
							</td>
						</tr>
					))}
				</tbody>
			</MyTable>
		</>
	);
}

export default Buildings;
