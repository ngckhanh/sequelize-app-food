import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

export default class user extends Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        }, {
            sequelize,
            modelName: 'user',
        });
    }
}