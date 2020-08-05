const router = require('express').Router();
let Building = require('../models/building.model');

const buildingStructure = req => {
	return {
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
	};
};

// GET ALL THE BUILDINGS
router.get('/', async (req, res) => {
	try {
		const buildings = await Building.find().sort({ addedOn: -1 });
		res.status(200).json(buildings);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//GET ONE BUILDING
router.get('/:id', async (req, res) => {
	try {
		const building = await Building.findById(req.params.id);
		res.status(200).json(building);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

//EDIT ONE BUILDING
router.put('/edit/:id', async (req, res) => {
	try {
		const updatedBuildings = await Building.findByIdAndUpdate(
			{ _id: req.params.id },
			buildingStructure(req)
		);
		res.status(200).json(updatedBuildings);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// ADD A BUILDINGS
router.post('/add', async (req, res) => {
	const building = new Building(buildingStructure(req));
	try {
		const newBuilding = await building.save();

		res.status(201).json(newBuilding);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// DELETE A BUILDING
router.delete('/:id', async (req, res) => {
	try {
		const removedBuilding = await Building.remove({ _id: req.params.id });
		res.status(200).json(removedBuilding);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

module.exports = router;
