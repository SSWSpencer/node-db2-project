const express = require("express");
const knex = require("knex");

const db = require("../data/dbConnection.js")

const router = express.Router();

router.get("/", (req, res)=>{
    db.select("*").from("cars")
    .then(cars=>{
        res.status(200).json({data: cars})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: "Internal server error"})
    })
})

router.get("/:id", (req, res)=>{
    db.select("*").from("cars")
    .where("id", req.params.id)
    .first()
    .then(car=>{
        if(car){
            res.status(200).json({data: car})
        }
        else{
            res.status(404).json({error: "car record not found"})
        }
    })
    .catch(err=>{
        res.status(500).json({error: "internal server error"})
    })
})

router.post("/", (req, res)=>{
    const car = req.body;
    if(isValidRecord(car)){
        db("cars")
        .insert(car, "id")
        .then(ids=>{
            res.status(201).json({data: ids})
        })
        .catch(err=>{
            res.status(500).json({error: "internal server error"})
        })
    }
    else{
        res.status(400).json({error: "car record must include year, vin, make, model, and mileage"})
    }
})

router.put("/:id", (req, res)=>{
    const changes = req.body;
    if(isValidRecord(changes)){
        db("cars").where({id: req.params.id})
        .update(changes)
        .then(count=>{
            if(count){
                res.status(200).json({data: count})
            }
            else{
                res.status(404).json({error: "car record not found"})
            }
        })
        .catch(err=>{
            res.status(500).json({error: "internal server error"})
        })
    }
    else{
        res.status(400).json({error: "car record must include year, vin, make, model, and mileage"})
    }
})

router.delete("/:id", (req, res)=>{
    db("cars").where({id: req.params.id})
    .del()
    .then(count=>{
        if(count){
            res.status(200).json({data: count})
        }
        else{
            res.status(404).json({error: "car was not found"})
        }
    })
    .catch(err=>{
        res.status(500).json({message: "internal server error"})
    })
})

function isValidRecord(car){
    return Boolean(car.year && car.vin && car.make && car.model && car.mileage)
}

module.exports = router;