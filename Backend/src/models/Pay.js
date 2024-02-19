const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Pay', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
          },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true
            },
            allowNull: false,
        },
        concept: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Pos... Es un pago, que mas necesitas?'
        },
        payment_method: {
            type: DataTypes.ENUM('Efectivo', 'Paypal', 'Crypto', 'Transferencia'),
            allowNull: false,
            defaultValue: 'Efectivo',
        }
    }, {
        timestamps: true, paranoid: true
    })
}