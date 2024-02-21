const { DataTypes, UUIDV4}= require('sequelize');

module.exports= (sequelize)=> {
    sequelize.define('Products', {
        id:{
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0.5
        },
        company: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Independiente'
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Informacion no suministrada por el comercio'
        },
        offers: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        }
    }, {
        timestamps: true, paranoid: true
    })
}