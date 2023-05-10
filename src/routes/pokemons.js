const Router = require("express")
const {Pokemon, Type} = require ("../db");
const getPokemonsId = require("../controllers/getPokemonsId");
const getAllPokemons= require ("../controllers/getAllPokemons");
const getPokemonsName= require ("../controllers/getPokemonsName");
const postPokemons= require("../controllers/postPokemons");

const router= Router()
router.get("/", async(req,res)=>{
 getAllPokemons(req,res)
})

router.get("/name", async(req,res)=>{
    getPokemonsName(req,res)
})

router.get("/:idPokemon", async(req,res)=>{
    getPokemonsId(req,res)
})

router.post("/", async(req,res)=>{
    postPokemons(req, res)
})

module.exports= router;