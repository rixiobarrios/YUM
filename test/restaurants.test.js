// test/restaurants.test.js
// require dependencies
const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
// set up our supertest to hit our local server later on
const api = supertest('http://localhost:4000');

describe('GET /restaurants', () => {
    // tests will be written inside this function
    it('should return a 200 response', done => {
        api.get('/restaurants')
            .set('Accept', 'application/json') // tells the server to return json data
            .expect(200, done); // assertion - check that the status response is 200
    });
    it('should return an array', done => {
        api.get('/restaurants')
            .set('Accept', 'application/json')
            .end((error, response) => {
                // verify that the response body is an array
                expect(response.body).to.be.an('array');
                done();
            });
    });
    it('should return an array of objects that have a field called "name"', done => {
        api.get('/restaurants')
            .set('Accept', 'application/json')
            .end((error, response) => {
                // check that every restaurant has the name key
                response.body.forEach(restaurant => {
                    expect(restaurant).to.have.property('name');
                });
                done();
            });
    });
});
describe('POST /restaurants', () => {
    const newRestaurant = {
        id: 5,
        name: 'Zhytti Fhood',
        owner: 'Arnold Uberrtz',
        food: 'Korean',
        capacity: 30
    };
    // save newRestaurant to database
    before(done => {
        api.post('/restaurants')
            .set('Accept', 'application/json')
            .send(newRestaurant)
            // .end(() => done());
            .end(done);
    });
    it('should add a restaurant to the restaurants collection and return it', done => {
        // retrieve all the candies from the database and find the one that we just saved
        api.get('/restaurants')
            .set('Accept', 'application/json')
            .end((error, response) => {
                // check for the presence of new restaurant
                const restaurantToFind = response.body.find(
                    restaurant => restaurant.id === newRestaurant.id
                );
                expect(restaurantToFind).to.be.an('object');
                done();
            });
    });
});
describe('GET /restaurants/:id', () => {
    it('should return an array of objects that have a field called "id"', done => {
        api.get('/restaurants/1')
            .set('Accept', 'application/json')
            .end((error, response) => {
                // check that every candy has the name key
                expect(response.body).to.have.property('id');
                expect(response.body).to.have.property('name');
                expect(response.body).to.have.property('owner');
                expect(response.body).to.have.property('food');
                expect(response.body).to.have.property('capacity');
            });
        done();
    });
});

describe('DELETE /restaurants/:id', () => {
    it('should delete a restaurant to the restaurant collection and verify it', done => {
        api.delete('/restaurants/5')
            .set('Accept', 'application/json')
            .end((error, response) => {
                expect(restaurant).to.include.all.keys(
                    'id',
                    'name',
                    'owner',
                    'food',
                    'capacity'
                );
                // expect(response.body).to.have.property('id');
                // expect(response.body).to.have.property('name');
                // expect(response.body).to.have.property('owner');
                // expect(response.body).to.have.property('food');
                // expect(response.body).to.have.property('capacity');
                done();
            });
    });
});
