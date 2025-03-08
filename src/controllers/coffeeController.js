import Coffee from "../models/model"

const coffeeController = {
    addCoffee: async(req, res) => {
        res.status(200).json(req.body);
    },

};

module.exports = coffeeController