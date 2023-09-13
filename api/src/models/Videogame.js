const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    plataforms: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "UnKnown",
      allowNull: true,
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Unknown"
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: "Unknown"
    }
  });
};//exportamos una funciion con la definicion del objeto
