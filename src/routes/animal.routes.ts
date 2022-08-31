import express from "express";
import AnimalController from "../controller/animal.controller";
const router = express.Router();

router.get('/animals',AnimalController.getAnimal);
router.get('/animals/:id',AnimalController.getOneAnimal)
router.post("/animals", AnimalController.createAnimal);
router.put('/animals/:id',AnimalController.updateAnimal);
router.delete('/animals/:id',AnimalController.deleteAnimal);
router.get('/',AnimalController.getAllUsers);

export default router ;