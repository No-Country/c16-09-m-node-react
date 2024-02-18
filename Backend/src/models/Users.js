const {Datatypes, UUIDV4} = require('sequelize');

module.exports = (sequelize)=> {
    sequelize.define("User", {
        id:{
            type: Datatypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name:{
            type: Datatypes.STRING,
            allowNull: false,
        },
        loggedIn: {
            type: Datatypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        rol:{
            type: Datatypes.ENUM("passerby", "Admin", "CompanyRepresentative"),
            defaultValue: "passerby",
            allowNull: true,
        },
        mail: {
            type: Datatypes.STRING,
            allowNull: true
        }
    })
}