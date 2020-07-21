import React, { useContext } from 'react';
import {
	MyCard,
	MyCardButton,
	MyCardDetails,
	MyCardDetailsList,
	MyCardDetailsRow,
} from '../Elements';
import { BuildContext } from '../context/GlobalContext';

export default function Card({ building }) {
	const { grossArea, imageSrc, name, status, type } = building;

	const context = useContext(BuildContext);
	// View Details button onClick function
	const selectCard = () => {
		context.setSideBar(true);
		context.dispatchSelected({ type: 'SELECTED', payload: building });
	};

	return (
		<MyCard
			sideBar={context.sideBar}
			whileHover={{
				boxShadow: '1px 1px 15px var(--black)',
				borderRadius: '15px',
				scale: 1.01,
			}}
		>
			<img src={require(`../assets/${imageSrc}`)} alt={name} />
			<MyCardDetails>
				<h2>{name.toUpperCase()}</h2>
				<MyCardDetailsList>
					{/* Remove Card's details when scroll horizontally */}
					{context.sideBar && window.innerWidth < 1024 ? (
						<></>
					) : (
						<>
							<MyCardDetailsRow>
								<span>Type:</span>
								<span>{type}</span>
							</MyCardDetailsRow>
							<MyCardDetailsRow>
								<span>Status:</span>
								<span>{status}</span>
							</MyCardDetailsRow>
							<MyCardDetailsRow>
								<span>Grass area:</span>
								<span>{context.formatNumber(grossArea)} sq ft</span>
							</MyCardDetailsRow>
						</>
					)}
				</MyCardDetailsList>
				<MyCardButton
					onClick={() => selectCard()}
					whileHover={{ scale: 1.05, borderRadius: '5px' }}
				>
					VIEW DETAILS
				</MyCardButton>
			</MyCardDetails>
		</MyCard>
	);
}
