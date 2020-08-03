import React, { useContext, useState } from 'react';
import { BuildContext } from '../context/GlobalContext';
import { MyContainer } from '../components/ComponentsStyles';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Buildings() {
	const { buildings } = useContext(BuildContext);

	const [details, setDetails] = useState({
		name: '',
		type: '',
		description: '',
		status: '',
		grossArea: 0,
		location: '',
		imageSrc: '',
		floors: [],
	});

	return (
		<MyContainer>
			<Form>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Check me out' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</MyContainer>
	);
}

export default Buildings;
