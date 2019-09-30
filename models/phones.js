module.exports = function (sequelize, DataTypes) {
  var Phone = sequelize.define("Phone", {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    ,
    model: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phone_condition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imei: {
      type: DataTypes.INTEGER,
      allowNull: false
      // validate: {
      //   len: [15],      
      // }
    },
    userID:{
      type: DataTypes.INTEGER,
      allowNull: false
    }


  });
  return Phone;
};
