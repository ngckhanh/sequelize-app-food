import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

export default class review extends Model {
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
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        }, {
            sequelize,
            modelName: 'review',
        });
    }
}