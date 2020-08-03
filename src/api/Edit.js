import React, { useContext, useState, useEffect } from 'react';
import { BuildContext } from '../context/GlobalContext';
import { MyContainer } from '../components/ComponentsStyles';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Buildings() {
	// name: '',
	// type: '',
	// description: '',
	// status: '',
	// grossArea: 0,
	// location: '',
	// imageSrc: '',
	// floors: [],
	const { buildings } = useContext(BuildContext);
	const [details, setDetails] = useState(buildings);

	useEffect(() => {
		setDetails(buildings);
	}, [buildings]);

	console.log(details);
	return details.length ? (
		<MyContainer>
			<Form>
				<Form.Group controlId='formId'>
					<Form.Label>Building id</Form.Label>
					<Form.Control placeholder={details[0]._id} disabled />
				</Form.Group>

				<Form.Group controlId='formName'>
					<Form.Label>Name</Form.Label>
					<Form.Control value={details[0].name}></Form.Control>
				</Form.Group>

				<Form.Group controlId='formType'>
					<Form.Label>Type</Form.Label>
					<Form.Control value={details[0].type}></Form.Control>
				</Form.Group>

				<Form.Group controlId='formStatus'>
					<Form.Label>Status</Form.Label>
					<Form.Control value={details[0].status}></Form.Control>
				</Form.Group>

				<Form.Group controlId='formDescription'>
					<Form.Label>Description</Form.Label>
					<Form.Control
						as='textarea'
						value={details[0].description}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formGrossAre'>
					<Form.Label>GrossArea</Form.Label>
					<Form.Control value={details[0].grossArea}></Form.Control>
				</Form.Group>

				<Form.Group controlId='formLocation'>
					<Form.Label>Location</Form.Label>
					<Form.Control value={details[0].location}></Form.Control>
				</Form.Group>

				<Form.Group controlId='formImage'>
					<Form.Label>Image Source</Form.Label>
					<Form.Control value={details[0].imageSrc}></Form.Control>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</MyContainer>
	) : (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Spinner animation='border' role='status'>
				<span className='sr-only'>Loading...</span>
			</Spinner>
		</div>
	);
}

export default Buildings;
