const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const mongoose = require('mongoose');

router.route('')
	.get((req, res, next) => {
	    Product.find().exec().then(docs => {
            console.log(docs);
            res.status(200).send(docs);
	    }).catch(err =>{
		    console.log(err);
		    res.status(500).send({
			    error: err
		    });
	    }); // hier kan je allemal query operators aan toevoegen zoals where, limit,...
	}).post((req, res, next) => {
	    const product = new Product({
		    _id: new mongoose.Types.ObjectId(),
		    name: req.body.name,
		    quantity: req.body.quantity,
			xCoord: req.body.xCoord,
			yCoord: req.body.yCoord
	    });
        product.save().then(result =>{
            console.log(result);
            res.status(201).send({
                message: 'Handling POST requests to /products',
                createdProduct: result
            });
        }).catch(err =>{
            console.log(err);
            res.status(500).send({
                error: err
            });
	    });
    });

router.route('/:productId')
    .get((req, res, next) => {
        const id = req.params.productId;
        Product.findById(id).exec().then(doc => {
            console.log(doc);
            if(doc){
                res.status(200).send(doc);
            }
            else{
                res.status(404).send({message: "Dit is geen geldig id"});
            }
        }).catch(err => {
            console.log(err);
            res.status(500).send({error: err});
        });
    }).patch((req, res, next) => {
        const id = req.params.productId;
        const updateOps = {};
        for(const ops of Object.keys(req.body)){
            updateOps[ops] = req.body[ops];
        }
        Product.update({_id: id},{$set: updateOps}).exec().then(result => {
            console.log(result);
            res.status(200).send(result);
        }).catch(err => {
            console.log(err);
            res.status(500).send({
                error: err
            });
        });
    }).delete((req, res, next) => {
        const id = req.params.productId;
        Product.remove({_id: id}).exec().then(result => {
            res.status(200).send(result);
        }).catch(err => {
            console.log(err);
            res.status(500).send({
                error: err
            });
        });
    });
// einde
module.exports = router;