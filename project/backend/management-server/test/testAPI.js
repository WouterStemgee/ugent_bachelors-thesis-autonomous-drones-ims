const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Configure chai
chai.use(chaiHttp);
chai.should();

let mapId;
let aantal;
describe("Map", function() {
    describe("GET ALL/", function() {
        //test om de map op te halen
        it("Zou alle mappen moeten opgehaald hebben", function (done) {
            chai.request(app)
                .get('/api/maps')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    aantal = res.body.length;
                    console.log(aantal);
                    done();
                });
        }).timeout(3000);
    });
    describe("POST testMap", function () {
        it("Zou een nieuwe map moeten pushen genaamd Test en de graaf voor Dijkstra aanmaken", function (done) {
            chai.request(app)
                .post('/api/maps')
                .set('Content-Type', 'application/json')
                .send({"sizeX":40,"sizeY":30,"name":"Test","obstacles":[{"x":0,"y":0},{"x":0,"y":1},{"x":0,"y":2},{"x":0,"y":3},{"x":0,"y":4},{"x":0,"y":5},{"x":0,"y":6},{"x":0,"y":8},{"x":0,"y":7},{"x":0,"y":9},{"x":0,"y":10},{"x":0,"y":11},{"x":0,"y":12},{"x":0,"y":13},{"x":0,"y":14},{"x":0,"y":15},{"x":0,"y":16},{"x":0,"y":18},{"x":0,"y":17},{"x":0,"y":19},{"x":0,"y":20},{"x":0,"y":21},{"x":0,"y":22},{"x":0,"y":25},{"x":0,"y":24},{"x":0,"y":23},{"x":0,"y":26},{"x":0,"y":28},{"x":0,"y":27},{"x":0,"y":29},{"x":1,"y":29},{"x":3,"y":29},{"x":2,"y":29},{"x":4,"y":29},{"x":5,"y":29},{"x":6,"y":29},{"x":7,"y":29},{"x":8,"y":29},{"x":9,"y":29},{"x":10,"y":29},{"x":11,"y":29},{"x":12,"y":29},{"x":13,"y":29},{"x":14,"y":29},{"x":15,"y":29},{"x":16,"y":29},{"x":17,"y":29},{"x":19,"y":29},{"x":18,"y":29},{"x":20,"y":29},{"x":21,"y":29},{"x":22,"y":29},{"x":23,"y":29},{"x":24,"y":29},{"x":25,"y":29},{"x":26,"y":29},{"x":27,"y":29},{"x":28,"y":29},{"x":29,"y":29},{"x":30,"y":29},{"x":31,"y":29},{"x":32,"y":29},{"x":33,"y":29},{"x":34,"y":29},{"x":35,"y":29},{"x":36,"y":29},{"x":37,"y":29},{"x":38,"y":29},{"x":39,"y":29},{"x":39,"y":28},{"x":39,"y":27},{"x":39,"y":26},{"x":39,"y":25},{"x":39,"y":24},{"x":39,"y":23},{"x":39,"y":22},{"x":39,"y":21},{"x":39,"y":20},{"x":39,"y":18},{"x":39,"y":19},{"x":39,"y":16},{"x":39,"y":17},{"x":39,"y":15},{"x":39,"y":14},{"x":39,"y":13},{"x":39,"y":12},{"x":39,"y":11},{"x":39,"y":10},{"x":39,"y":9},{"x":39,"y":8},{"x":39,"y":7},{"x":39,"y":6},{"x":39,"y":5},{"x":39,"y":4},{"x":39,"y":3},{"x":39,"y":2},{"x":39,"y":1},{"x":39,"y":0},{"x":1,"y":0},{"x":2,"y":0},{"x":3,"y":0},{"x":4,"y":0},{"x":5,"y":0},{"x":6,"y":0},{"x":7,"y":0},{"x":8,"y":0},{"x":9,"y":0},{"x":10,"y":0},{"x":11,"y":0},{"x":12,"y":0},{"x":13,"y":0},{"x":14,"y":0},{"x":15,"y":0},{"x":16,"y":0},{"x":17,"y":0},{"x":18,"y":0},{"x":19,"y":0},{"x":20,"y":0},{"x":21,"y":0},{"x":22,"y":0},{"x":23,"y":0},{"x":24,"y":0},{"x":25,"y":0},{"x":26,"y":0},{"x":27,"y":0},{"x":28,"y":0},{"x":29,"y":0},{"x":30,"y":0},{"x":31,"y":0},{"x":32,"y":0},{"x":33,"y":0},{"x":34,"y":0},{"x":35,"y":0},{"x":36,"y":0},{"x":37,"y":0},{"x":38,"y":0},{"x":7,"y":5},{"x":7,"y":7},{"x":7,"y":6},{"x":8,"y":7},{"x":8,"y":6},{"x":8,"y":5},{"x":9,"y":6},{"x":9,"y":7},{"x":9,"y":5},{"x":10,"y":5},{"x":10,"y":6},{"x":10,"y":7},{"x":11,"y":7},{"x":11,"y":5},{"x":11,"y":6},{"x":12,"y":5},{"x":12,"y":6},{"x":12,"y":7},{"x":13,"y":7},{"x":13,"y":6},{"x":13,"y":5},{"x":14,"y":5},{"x":15,"y":5},{"x":16,"y":5},{"x":17,"y":5},{"x":19,"y":5},{"x":18,"y":5},{"x":20,"y":5},{"x":21,"y":5},{"x":22,"y":5},{"x":23,"y":5},{"x":24,"y":5},{"x":25,"y":5},{"x":26,"y":5},{"x":28,"y":5},{"x":27,"y":5},{"x":29,"y":5},{"x":30,"y":5},{"x":31,"y":5},{"x":31,"y":6},{"x":30,"y":6},{"x":29,"y":6},{"x":28,"y":6},{"x":27,"y":6},{"x":25,"y":6},{"x":26,"y":6},{"x":24,"y":6},{"x":23,"y":6},{"x":22,"y":6},{"x":21,"y":6},{"x":20,"y":6},{"x":19,"y":6},{"x":16,"y":6},{"x":17,"y":6},{"x":18,"y":6},{"x":15,"y":6},{"x":14,"y":6},{"x":14,"y":7},{"x":15,"y":7},{"x":16,"y":7},{"x":18,"y":7},{"x":17,"y":7},{"x":19,"y":7},{"x":20,"y":7},{"x":21,"y":7},{"x":22,"y":7},{"x":23,"y":7},{"x":24,"y":7},{"x":25,"y":7},{"x":26,"y":7},{"x":27,"y":7},{"x":28,"y":7},{"x":29,"y":7},{"x":30,"y":7},{"x":31,"y":7},{"x":31,"y":13},{"x":31,"y":14},{"x":31,"y":15},{"x":31,"y":21},{"x":31,"y":22},{"x":31,"y":23},{"x":30,"y":13},{"x":29,"y":13},{"x":28,"y":13},{"x":27,"y":13},{"x":26,"y":13},{"x":24,"y":13},{"x":25,"y":13},{"x":23,"y":13},{"x":22,"y":13},{"x":21,"y":13},{"x":20,"y":13},{"x":19,"y":13},{"x":18,"y":13},{"x":16,"y":13},{"x":17,"y":13},{"x":15,"y":13},{"x":14,"y":13},{"x":12,"y":13},{"x":13,"y":13},{"x":11,"y":13},{"x":10,"y":13},{"x":9,"y":13},{"x":8,"y":13},{"x":7,"y":13},{"x":7,"y":14},{"x":7,"y":15},{"x":8,"y":15},{"x":9,"y":15},{"x":10,"y":15},{"x":11,"y":15},{"x":12,"y":15},{"x":13,"y":15},{"x":14,"y":15},{"x":15,"y":15},{"x":16,"y":15},{"x":17,"y":15},{"x":19,"y":15},{"x":18,"y":15},{"x":20,"y":15},{"x":21,"y":15},{"x":22,"y":15},{"x":23,"y":15},{"x":24,"y":15},{"x":25,"y":15},{"x":26,"y":15},{"x":28,"y":15},{"x":27,"y":15},{"x":30,"y":15},{"x":29,"y":15},{"x":30,"y":14},{"x":29,"y":14},{"x":28,"y":14},{"x":27,"y":14},{"x":26,"y":14},{"x":24,"y":14},{"x":25,"y":14},{"x":23,"y":14},{"x":22,"y":14},{"x":21,"y":14},{"x":20,"y":14},{"x":19,"y":14},{"x":18,"y":14},{"x":17,"y":14},{"x":16,"y":14},{"x":15,"y":14},{"x":14,"y":14},{"x":13,"y":14},{"x":12,"y":14},{"x":11,"y":14},{"x":10,"y":14},{"x":9,"y":14},{"x":8,"y":14},{"x":29,"y":21},{"x":30,"y":21},{"x":28,"y":21},{"x":27,"y":21},{"x":26,"y":21},{"x":25,"y":21},{"x":24,"y":21},{"x":23,"y":21},{"x":22,"y":21},{"x":21,"y":21},{"x":20,"y":21},{"x":19,"y":21},{"x":18,"y":21},{"x":17,"y":21},{"x":16,"y":21},{"x":15,"y":21},{"x":13,"y":21},{"x":14,"y":21},{"x":12,"y":21},{"x":11,"y":21},{"x":10,"y":21},{"x":9,"y":21},{"x":8,"y":21},{"x":7,"y":21},{"x":7,"y":22},{"x":7,"y":23},{"x":8,"y":23},{"x":8,"y":22},{"x":9,"y":22},{"x":9,"y":23},{"x":10,"y":23},{"x":10,"y":22},{"x":11,"y":22},{"x":11,"y":23},{"x":13,"y":22},{"x":12,"y":22},{"x":12,"y":23},{"x":13,"y":23},{"x":14,"y":23},{"x":14,"y":22},{"x":15,"y":22},{"x":15,"y":23},{"x":16,"y":23},{"x":16,"y":22},{"x":17,"y":22},{"x":17,"y":23},{"x":18,"y":23},{"x":19,"y":23},{"x":18,"y":22},{"x":19,"y":22},{"x":20,"y":22},{"x":21,"y":22},{"x":22,"y":22},{"x":23,"y":22},{"x":24,"y":22},{"x":26,"y":22},{"x":25,"y":22},{"x":27,"y":22},{"x":28,"y":22},{"x":29,"y":22},{"x":30,"y":22},{"x":30,"y":23},{"x":29,"y":23},{"x":28,"y":23},{"x":27,"y":23},{"x":25,"y":23},{"x":26,"y":23},{"x":24,"y":23},{"x":23,"y":23},{"x":22,"y":23},{"x":20,"y":23},{"x":21,"y":23},{"x":5,"y":15},{"x":6,"y":15},{"x":5,"y":16},{"x":5,"y":17},{"x":5,"y":18},{"x":6,"y":18},{"x":7,"y":18},{"x":8,"y":18},{"x":9,"y":18},{"x":9,"y":17},{"x":30,"y":16},{"x":30,"y":17},{"x":30,"y":18},{"x":30,"y":19},{"x":29,"y":19},{"x":31,"y":19},{"x":38,"y":10},{"x":37,"y":10},{"x":37,"y":11},{"x":37,"y":13},{"x":37,"y":12},{"x":19,"y":24},{"x":20,"y":24},{"x":19,"y":25},{"x":20,"y":25},{"x":19,"y":26},{"x":20,"y":26},{"x":19,"y":27},{"x":20,"y":27},{"x":19,"y":28},{"x":20,"y":28}],"products":[{"_id":"5c86aa067e82543dd466557c","name":"Manually added","quantity":1,"position":{"x":12,"y":26}},{"_id":"5c86aa067e82543dd466557d","name":"Manually added","quantity":1,"position":{"x":20,"y":18}},{"_id":"5c86aa067e82543dd466557f","name":"Manually added","quantity":1,"position":{"x":38,"y":1}},{"_id":"5c86aa067e82543dd466557e","name":"Manually added","quantity":1,"position":{"x":12,"y":10}}]})
                .end(function(error, response){
                    response.should.have.status(201);
                    response.body.should.have.property('_id');
                    mapId = response.body._id;
                    done();
                });
        });
    });
    describe("GET ALL/", function() {
        //test om de map op te halen
        it("Zou 1 extra map moeten vinden", function (done) {
            chai.request(app)
                .get('/api/maps')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    console.log(res.body.length);
                    chai.expect(aantal + 1).to.be.equal(res.body.length);
                    done();
                });
        }).timeout(3000);
    });
    describe("GET 1 Map/", function() {
        it("Zou de Test map moeten ophalen", function(done) {
            //zelfde id als de map waarop getest wordt in dijkstra
            chai.request(app)
                .get(`/api/maps/${mapId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    done();
                });
        });
    });
    describe("PUT /", function () {
        it("Zou de Test map moeten updaten en de graaf updaten voor dijkstra", function (done) {
            chai.request(app)
                .put(`/api/maps/${mapId}`)
                .set('Content-Type', 'application/json')
                .send({"_id": mapId, "sizeX":40,"sizeY":30,"name":"Test","obstacles":[{"x":0,"y":0},{"x":0,"y":1},{"x":0,"y":2},{"x":0,"y":3},{"x":0,"y":4},{"x":0,"y":5},{"x":0,"y":6},{"x":0,"y":8},{"x":0,"y":7},{"x":0,"y":9},{"x":0,"y":10},{"x":0,"y":11},{"x":0,"y":12},{"x":0,"y":13},{"x":0,"y":14},{"x":0,"y":15},{"x":0,"y":16},{"x":0,"y":18},{"x":0,"y":17},{"x":0,"y":19},{"x":0,"y":20},{"x":0,"y":21},{"x":0,"y":22},{"x":0,"y":25},{"x":0,"y":24},{"x":0,"y":23},{"x":0,"y":26},{"x":0,"y":28},{"x":0,"y":27},{"x":0,"y":29},{"x":1,"y":29},{"x":3,"y":29},{"x":2,"y":29},{"x":4,"y":29},{"x":5,"y":29},{"x":6,"y":29},{"x":7,"y":29},{"x":8,"y":29},{"x":9,"y":29},{"x":10,"y":29},{"x":11,"y":29},{"x":12,"y":29},{"x":13,"y":29},{"x":14,"y":29},{"x":15,"y":29},{"x":16,"y":29},{"x":17,"y":29},{"x":19,"y":29},{"x":18,"y":29},{"x":20,"y":29},{"x":21,"y":29},{"x":22,"y":29},{"x":23,"y":29},{"x":24,"y":29},{"x":25,"y":29},{"x":26,"y":29},{"x":27,"y":29},{"x":28,"y":29},{"x":29,"y":29},{"x":30,"y":29},{"x":31,"y":29},{"x":32,"y":29},{"x":33,"y":29},{"x":34,"y":29},{"x":35,"y":29},{"x":36,"y":29},{"x":37,"y":29},{"x":38,"y":29},{"x":39,"y":29},{"x":39,"y":28},{"x":39,"y":27},{"x":39,"y":26},{"x":39,"y":25},{"x":39,"y":24},{"x":39,"y":23},{"x":39,"y":22},{"x":39,"y":21},{"x":39,"y":20},{"x":39,"y":18},{"x":39,"y":19},{"x":39,"y":16},{"x":39,"y":17},{"x":39,"y":15},{"x":39,"y":14},{"x":39,"y":13},{"x":39,"y":12},{"x":39,"y":11},{"x":39,"y":10},{"x":39,"y":9},{"x":39,"y":8},{"x":39,"y":7},{"x":39,"y":6},{"x":39,"y":5},{"x":39,"y":4},{"x":39,"y":3},{"x":39,"y":2},{"x":39,"y":1},{"x":39,"y":0},{"x":1,"y":0},{"x":2,"y":0},{"x":3,"y":0},{"x":4,"y":0},{"x":5,"y":0},{"x":6,"y":0},{"x":7,"y":0},{"x":8,"y":0},{"x":9,"y":0},{"x":10,"y":0},{"x":11,"y":0},{"x":12,"y":0},{"x":13,"y":0},{"x":14,"y":0},{"x":15,"y":0},{"x":16,"y":0},{"x":17,"y":0},{"x":18,"y":0},{"x":19,"y":0},{"x":20,"y":0},{"x":21,"y":0},{"x":22,"y":0},{"x":23,"y":0},{"x":24,"y":0},{"x":25,"y":0},{"x":26,"y":0},{"x":27,"y":0},{"x":28,"y":0},{"x":29,"y":0},{"x":30,"y":0},{"x":31,"y":0},{"x":32,"y":0},{"x":33,"y":0},{"x":34,"y":0},{"x":35,"y":0},{"x":36,"y":0},{"x":37,"y":0},{"x":38,"y":0},{"x":7,"y":5},{"x":7,"y":7},{"x":7,"y":6},{"x":8,"y":7},{"x":8,"y":6},{"x":8,"y":5},{"x":9,"y":6},{"x":9,"y":7},{"x":9,"y":5},{"x":10,"y":5},{"x":10,"y":6},{"x":10,"y":7},{"x":11,"y":7},{"x":11,"y":5},{"x":11,"y":6},{"x":12,"y":5},{"x":12,"y":6},{"x":12,"y":7},{"x":13,"y":7},{"x":13,"y":6},{"x":13,"y":5},{"x":14,"y":5},{"x":15,"y":5},{"x":16,"y":5},{"x":17,"y":5},{"x":19,"y":5},{"x":18,"y":5},{"x":20,"y":5},{"x":21,"y":5},{"x":22,"y":5},{"x":23,"y":5},{"x":24,"y":5},{"x":25,"y":5},{"x":26,"y":5},{"x":28,"y":5},{"x":27,"y":5},{"x":29,"y":5},{"x":30,"y":5},{"x":31,"y":5},{"x":31,"y":6},{"x":30,"y":6},{"x":29,"y":6},{"x":28,"y":6},{"x":27,"y":6},{"x":25,"y":6},{"x":26,"y":6},{"x":24,"y":6},{"x":23,"y":6},{"x":22,"y":6},{"x":21,"y":6},{"x":20,"y":6},{"x":19,"y":6},{"x":16,"y":6},{"x":17,"y":6},{"x":18,"y":6},{"x":15,"y":6},{"x":14,"y":6},{"x":14,"y":7},{"x":15,"y":7},{"x":16,"y":7},{"x":18,"y":7},{"x":17,"y":7},{"x":19,"y":7},{"x":20,"y":7},{"x":21,"y":7},{"x":22,"y":7},{"x":23,"y":7},{"x":24,"y":7},{"x":25,"y":7},{"x":26,"y":7},{"x":27,"y":7},{"x":28,"y":7},{"x":29,"y":7},{"x":30,"y":7},{"x":31,"y":7},{"x":31,"y":13},{"x":31,"y":14},{"x":31,"y":15},{"x":31,"y":21},{"x":31,"y":22},{"x":31,"y":23},{"x":30,"y":13},{"x":29,"y":13},{"x":28,"y":13},{"x":27,"y":13},{"x":26,"y":13},{"x":24,"y":13},{"x":25,"y":13},{"x":23,"y":13},{"x":22,"y":13},{"x":21,"y":13},{"x":20,"y":13},{"x":19,"y":13},{"x":18,"y":13},{"x":16,"y":13},{"x":17,"y":13},{"x":15,"y":13},{"x":14,"y":13},{"x":12,"y":13},{"x":13,"y":13},{"x":11,"y":13},{"x":10,"y":13},{"x":9,"y":13},{"x":8,"y":13},{"x":7,"y":13},{"x":7,"y":14},{"x":7,"y":15},{"x":8,"y":15},{"x":9,"y":15},{"x":10,"y":15},{"x":11,"y":15},{"x":12,"y":15},{"x":13,"y":15},{"x":14,"y":15},{"x":15,"y":15},{"x":16,"y":15},{"x":17,"y":15},{"x":19,"y":15},{"x":18,"y":15},{"x":20,"y":15},{"x":21,"y":15},{"x":22,"y":15},{"x":23,"y":15},{"x":24,"y":15},{"x":25,"y":15},{"x":26,"y":15},{"x":28,"y":15},{"x":27,"y":15},{"x":30,"y":15},{"x":29,"y":15},{"x":30,"y":14},{"x":29,"y":14},{"x":28,"y":14},{"x":27,"y":14},{"x":26,"y":14},{"x":24,"y":14},{"x":25,"y":14},{"x":23,"y":14},{"x":22,"y":14},{"x":21,"y":14},{"x":20,"y":14},{"x":19,"y":14},{"x":18,"y":14},{"x":17,"y":14},{"x":16,"y":14},{"x":15,"y":14},{"x":14,"y":14},{"x":13,"y":14},{"x":12,"y":14},{"x":11,"y":14},{"x":10,"y":14},{"x":9,"y":14},{"x":8,"y":14},{"x":29,"y":21},{"x":30,"y":21},{"x":28,"y":21},{"x":27,"y":21},{"x":26,"y":21},{"x":25,"y":21},{"x":24,"y":21},{"x":23,"y":21},{"x":22,"y":21},{"x":21,"y":21},{"x":20,"y":21},{"x":19,"y":21},{"x":18,"y":21},{"x":17,"y":21},{"x":16,"y":21},{"x":15,"y":21},{"x":13,"y":21},{"x":14,"y":21},{"x":12,"y":21},{"x":11,"y":21},{"x":10,"y":21},{"x":9,"y":21},{"x":8,"y":21},{"x":7,"y":21},{"x":7,"y":22},{"x":7,"y":23},{"x":8,"y":23},{"x":8,"y":22},{"x":9,"y":22},{"x":9,"y":23},{"x":10,"y":23},{"x":10,"y":22},{"x":11,"y":22},{"x":11,"y":23},{"x":13,"y":22},{"x":12,"y":22},{"x":12,"y":23},{"x":13,"y":23},{"x":14,"y":23},{"x":14,"y":22},{"x":15,"y":22},{"x":15,"y":23},{"x":16,"y":23},{"x":16,"y":22},{"x":17,"y":22},{"x":17,"y":23},{"x":18,"y":23},{"x":19,"y":23},{"x":18,"y":22},{"x":19,"y":22},{"x":20,"y":22},{"x":21,"y":22},{"x":22,"y":22},{"x":23,"y":22},{"x":24,"y":22},{"x":26,"y":22},{"x":25,"y":22},{"x":27,"y":22},{"x":28,"y":22},{"x":29,"y":22},{"x":30,"y":22},{"x":30,"y":23},{"x":29,"y":23},{"x":28,"y":23},{"x":27,"y":23},{"x":25,"y":23},{"x":26,"y":23},{"x":24,"y":23},{"x":23,"y":23},{"x":22,"y":23},{"x":20,"y":23},{"x":21,"y":23},{"x":5,"y":15},{"x":6,"y":15},{"x":5,"y":16},{"x":5,"y":17},{"x":5,"y":18},{"x":6,"y":18},{"x":7,"y":18},{"x":8,"y":18},{"x":9,"y":18},{"x":9,"y":17},{"x":30,"y":16},{"x":30,"y":17},{"x":30,"y":18},{"x":30,"y":19},{"x":29,"y":19},{"x":31,"y":19},{"x":38,"y":10},{"x":37,"y":10},{"x":37,"y":11},{"x":37,"y":13},{"x":37,"y":12},{"x":19,"y":24},{"x":20,"y":24},{"x":19,"y":25},{"x":20,"y":25},{"x":19,"y":26},{"x":20,"y":26},{"x":19,"y":27},{"x":20,"y":27},{"x":19,"y":28},{"x":20,"y":28}],"products":[{"_id":"5c86aa067e82543dd466557c","name":"Manually added","quantity":1,"position":{"x":12,"y":26}},{"_id":"5c86aa067e82543dd466557d","name":"Manually added","quantity":1,"position":{"x":20,"y":18}},{"_id":"5c86aa067e82543dd466557f","name":"Manually added","quantity":1,"position":{"x":38,"y":1}},{"_id":"5c86aa067e82543dd466557e","name":"Manually added","quantity":1,"position":{"x":12,"y":10}}]})
                .end(function(error, response){
                    response.should.have.status(200);
                    response.body.should.deep.equal({"n":1,"nModified":1,"ok":1});
                    done();
                });
        });
    });
    describe("POST /", function () {
        //test om het snelste pad te vinden
        it("Zou het pad moeten zoeken", function (done) {
            chai.request(app)
                .post('/api/flightpath')
                .set('Content-Type', 'application/json')
                .send({
                    "mapId": mapId,
                    "waypoints": [
                        {
                            "x": 1,
                            "y": 1
                        },
                        {
                            "x": 12,
                            "y": 26

                        },
                        {
                            "x": 20,
                            "y": 18

                        },
                        {
                            "x": 12,
                            "y": 10

                        },
                        {
                            "x": 38,
                            "y": 1
                        }
                    ]
                })
                .end(function(error, response){
                    response.should.have.status(200);
                    response.should.be.json;
                    response.body.should.deep.equal([
                        {x: "1", y: "1"},
                        {x: "1", y: "2"},
                        {x: "2", y: "3"},
                        {x: "3", y: "4"},
                        {x: "4", y: "5"},
                        {x: "5", y: "6"},
                        {x: "6", y: "7"},
                        {x: "7", y: "8"},
                        {x: "8", y: "8"},
                        {x: "9", y: "8"},
                        {x: "10", y: "8"},
                        {x: "11", y: "9"},
                        {x: "12", y: "10"},
                        {x: "12", y: "10"},
                        {x: "11", y: "10"},
                        {x: "10", y: "10"},
                        {x: "9", y: "11"},
                        {x: "8", y: "12"},
                        {x: "7", y: "12"},
                        {x: "6", y: "13"},
                        {x: "5", y: "14"},
                        {x: "4", y: "15"},
                        {x: "4", y: "16"},
                        {x: "4", y: "17"},
                        {x: "4", y: "18"},
                        {x: "4", y: "19"},
                        {x: "4", y: "20"},
                        {x: "4", y: "21"},
                        {x: "5", y: "22"},
                        {x: "6", y: "23"},
                        {x: "7", y: "24"},
                        {x: "8", y: "24"},
                        {x: "9", y: "24"},
                        {x: "10", y: "24"},
                        {x: "11", y: "25"},
                        {x: "12", y: "26"},
                        {x: "12", y: "26"},
                        {x: "11", y: "26"},
                        {x: "10", y: "26"},
                        {x: "9", y: "25"},
                        {x: "8", y: "24"},
                        {x: "7", y: "24"},
                        {x: "6", y: "23"},
                        {x: "6", y: "22"},
                        {x: "6", y: "21"},
                        {x: "7", y: "20"},
                        {x: "8", y: "20"},
                        {x: "9", y: "20"},
                        {x: "10", y: "20"},
                        {x: "11", y: "20"},
                        {x: "12", y: "20"},
                        {x: "13", y: "20"},
                        {x: "14", y: "20"},
                        {x: "15", y: "20"},
                        {x: "16", y: "20"},
                        {x: "17", y: "20"},
                        {x: "18", y: "20"},
                        {x: "19", y: "19"},
                        {x: "20", y: "18"},
                        {x: "20", y: "18"},
                        {x: "21", y: "18"},
                        {x: "22", y: "18"},
                        {x: "23", y: "18"},
                        {x: "24", y: "18"},
                        {x: "25", y: "18"},
                        {x: "26", y: "18"},
                        {x: "27", y: "18"},
                        {x: "28", y: "19"},
                        {x: "29", y: "20"},
                        {x: "30", y: "20"},
                        {x: "31", y: "20"},
                        {x: "32", y: "19"},
                        {x: "32", y: "18"},
                        {x: "32", y: "17"},
                        {x: "32", y: "16"},
                        {x: "32", y: "15"},
                        {x: "32", y: "14"},
                        {x: "32", y: "13"},
                        {x: "32", y: "12"},
                        {x: "32", y: "11"},
                        {x: "32", y: "10"},
                        {x: "32", y: "9"},
                        {x: "32", y: "8"},
                        {x: "32", y: "7"},
                        {x: "33", y: "6"},
                        {x: "34", y: "5"},
                        {x: "35", y: "4"},
                        {x: "36", y: "3"},
                        {x: "37", y: "2"},
                        {x: "38", y: "1"}]);
                    done();
                });
        });
    });
    describe("DELETE de Test map/", function() {
        it("Zou de Test map moeten deleten", function(done) {
            //zelfde id als de map waarop getest wordt in dijkstra
            chai.request(app)
                .delete(`/api/maps/${mapId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.deep.equal({
                        "n": 1,
                        "ok": 1,
                        "deletedCount": 1
                    });
                    done();
                });
        });
    });
    describe("GET 1 Map/", function() {
        it("Zou de Test map niet mogen vinden", function(done) {
            //zelfde id als de map waarop getest wordt in dijkstra
            chai.request(app)
                .get(`/api/maps/${mapId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.deep.equal({});
                    done();
                });
        });
    });
    describe("GET ALL/", function() {
        //test om de map op te halen
        it("Zou het originele aantal mappen moeten vinden", function (done) {
            chai.request(app)
                .get('/api/maps')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    chai.expect(aantal).to.be.equal(res.body.length);
                    done();
                });
        }).timeout(3000);
    });
});