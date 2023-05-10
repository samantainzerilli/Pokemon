const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      allownull:false,
      primaryKey: true, 
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen:{
      type: DataTypes.STRING,
      allownull: false,
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense:{
      type:DataTypes.INTEGER,
      alowNull: false,
    },
    speed:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    height:{
      type:DataTypes.INTEGER,
    
    },
    weight:{
      type: DataTypes.INTEGER,
      
    }
    
  });
};
