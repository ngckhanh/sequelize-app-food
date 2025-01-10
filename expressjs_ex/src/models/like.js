import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

export default class like extends Model {
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
        }, {
            sequelize,
            modelName: 'like',
        });
    }
}