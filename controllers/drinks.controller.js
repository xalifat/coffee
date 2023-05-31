const Drink = require("../models/Drinks.model");
module.exports.drinksController = {
  getDrinks: (req, res) => {
    //! вывод всех напитоков
    Drink.find({}, { _id: 1, name: 1, price: 1})
      .then((drinks) => res.json(drinks))
      .catch(() => res.json("Ошибка при добавлении нового напитка"));
  },
  createDrinks: (req, res) => {
    Drink.create({
      //! создание напитка
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      caffeine: req.body.caffeine,
      volume: req.body.volume,
      description: req.body.description,
    })
      .then((drinks) => res.json(drinks))
      .catch(() => res.json("Ошибка при добавлении нового напитка"));
  },
  getDrinksInStock: (req, res) => {
    //! список напитков в наличии
    Drink.find({ inStock: true })
      .then((drinks) => res.json(drinks))
      .catch(() => res.json("Ошибка при добавлении нового напитка"));
  },
  getDrinksById: async (req, res) => {
    //! информация о напитке
    Drink.findById(req.params.id)
      .then((drinks) => res.json(drinks))
      .catch(() => res.json("Ошибка при добавлении нового напитка"));
  },
  deleteDrinks: (req, res) => {
    //! удаление напитка
    Drink.findByIdAndDelete(req.params.id)
      .then((drinks) => res.json(drinks))
      .catch(() => res.json("Ошибка при добавлении нового"));
  },
  editDrinks: (req, res) => {
    //! изменение напитка
    Drink.findByIdAndUpdate(req.params, {
      price: req.body.price,
      inStock: req.body.inStock,
    })
      .then((drinks) => res.json(drinks))
      .catch(() => res.json("Ошибка при добавлении нового напитка"));
  },
};
