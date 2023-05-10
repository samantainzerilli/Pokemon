const axios = require ('axios')
const {Pokemon, Type} = require ('../db')

const getAllPokemons= async(req,res)=>{
    const dbPokemons = await getDbPokemons();
    const apiPokemons = await getPokemonsApi();
 res.status(200).json(dbPokemons.concat(apiPokemons));
}
const getDbPokemons=()=>{
    return Pokemon.findAll({

    })
}

const getPokemonsApi= async()=>{
   const resp= await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=15').then((data)=>{
    return data.data.results;
   })
   .then((data)=> {
   return Promise.all(data.map((resp) =>axios.get(resp.url))); //entrar a  cada elemento y hacerle get a la URL
})
.then((data)=>{
    return data.map((resp)=>resp.data); //Resultado de cada pokemon 
   })

   const arrayPokemon= resp.map((result)=> { //detro de un array me traigo todas las propiedades de un pokemon en el array
    return{
        id: result.id,
        name: result.name,
        types: result.types.map((t)=>t.type.name),
        image: result.sprite.front_default,
        life: result.life[0].base_stat,
        attack: result.attack[1].base_stat,
        defense: result.defense[2].base_stat,
        speed: result.speed[3].base_stat,
        height: result.height,
        weight: result.weight, 
    }
   });
   return arrayPokemon;
}
   


module.exports=getAllPokemons;