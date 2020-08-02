const router = require('express').Router();
let Building = require('../models/building.model');

router.get('/', async (req, res) => {
	try {
		const buildings = await Building.find();
		res.status(200).json(buildings);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.post('/add', async (req, res) => {
	const building = new Building({
		name: req.body.name,
		type: req.body.type,
		description: req.body.description,
		status: req.body.status,
		grossArea: req.body.grossArea,
		location: req.body.location,
		imageSrc: req.body.imageSrc,
		floors: req.body.floors.map(floor => {
			return {
				label: floor.label,
				availableSpace: floor.availableSpace,
				occupier: floor.occupier,
				disabled: floor.disabled,
			};
		}),
	});
	try {
		const newBuilding = await building.save();

		res.status(201).json(newBuilding);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
