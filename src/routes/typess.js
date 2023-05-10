const Router = require("express")  
const {Pokemon, Type} = require ("../db");
const typePokemons = require("../controllers/typePokemons");



const router= Router()
router.get("/", async(req,res)=>{
typePokemons(req,res)
})

module.exports= router;