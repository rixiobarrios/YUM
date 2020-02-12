const express = require('express');
const router = express.Router();

// Instead of information from the DB, we're going to
let restaurants = [
    {
        id: 1,
        name: 'Dia Bettyc Chef',
        owner: 'Foxy Cox',
        food: 'Cajun',
        capacity: 10
    },
    {
        id: 2,
        name: 'Jart Atak',
        owner: 'Tom Green',
        food: 'Steak House',
        capacity: 20
    },
    {
        id: 3,
        name: 'Klogged Artery',
        owner: 'Glassia Joffnak',
        food: 'Greenlandic',
        capacity: 15
    },
    {
        id: 4,
        name: 'Dar Ia Reah',
        owner: 'Xim Phing',
        food: 'Caribbean',
        capacity: 8
    }
];

// http://127.0.0.1:4000/restaurants
router
    .route('/')
    .get((req, res) => {
        //GET all restaurants
        res.json(restaurants);
    })
    .post((req, res) => {
        //POST a new restaurant
        restaurants.push(req.body);
        res.json(req.body);
    });

// Show a restaurant
router
    .route('/:id')
    .get((req, res) => {
        // GET one restaurant by id
        let restaurant = restaurants.find(
            element => element.id === parseInt(req.params.id)
        );
        res.json(restaurant);
    })
    .delete((req, res) => {
        // DELETE one restaurant by id
        let restaurant = restaurants.find(
            restaurant => restaurant.id === parseInt(req.params.id)
        );
        restaurants.splice(restaurants.indexOf(restaurant), 1);
        // restaurants = restaurants.filter(restaurant => restaurant.id !== parseInt(req.params.id))
        res.json({
            deleted: true,
            ...restaurant
        });
    });

router.put('/:id/edit', (req, res) => {
    // Update a Restaurant
    restaurants.find((restaurant, i) => {
        if (restaurant.id === parseInt(req.params.id)) {
            restaurants[i] = req.body;
            res.format({ json: () => res.json(req.body) });
        }
    });
});

module.exports = router;
