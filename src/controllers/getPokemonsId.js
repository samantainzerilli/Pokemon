const {Pokemon, Type}= require("../db")
const axios = require ('axios')

const getPokemonApiId=async(id)=>{
        const resp= await axios.get('https://pokeapi.co/api/v2/pokemon'+id).then((data)=>{
         return data.data;
        })
        return resp;
}



const getPokemonsId= async (req,res,next)=>{
    try{
        const id=req.params.idPokemon;
        const pokemonsId=await getPokemonApiId(id);
        if(id){ 
            let pokemonsId= pokemonsTotal.filter((el)=> el.id ==id);
            pokemonsId.length
            ? res.status(200).json(pokemonsId)
            : res.status(404).send("No se encontro el pokemon")
        }
    } catch (error) {
         res.status(404).send("No se encontro el pokemon")
    }
    
   }
   
   module.exports=getPokemonsId;