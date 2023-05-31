const { Router } = require('express');
const { drinksController } = require('../controllers/drinks.controller');
const router = Router();


router.get('/drinks', drinksController.getDrinks) //! вывод всех напитоков
router.post('/drinks', drinksController.createDrinks)  //! создание напитка
router.get('/drinks/in-stock', drinksController.getDrinksInStock) //! список напитков в наличии
router.get('/drinks/:id',drinksController.getDrinksById) //! информация о напитке
router.delete('/drinks/:id', drinksController.deleteDrinks) //! удаление напитка
router.patch('/drinks/:id', drinksController.editDrinks) //! изменение напитка


module.exports = router;