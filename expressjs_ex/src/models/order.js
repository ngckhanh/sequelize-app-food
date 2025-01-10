import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

export default class order extends Model {
    static init(sequelize) {
        return super.init({
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            restaurantId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            dish: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'order',
        });
    }
}