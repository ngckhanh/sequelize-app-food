// models/initModels.js
import _user from './user.js';
import _restaurant from './restaurant.js';
import _like from './like.js';
import _review from './review.js';
import _order from './order.js';

export default function initModels(sequelize) {
    const user = _user.init(sequelize);
    const restaurant = _restaurant.init(sequelize);
    const like = _like.init(sequelize);
    const review = _review.init(sequelize);
    const order = _order.init(sequelize);

    // Set up associations
    user.hasMany(like, { foreignKey: 'userId' });
    like.belongsTo(user, { foreignKey: 'userId' });

    user.hasMany(review, { foreignKey: 'userId' });
    review.belongsTo(user, { foreignKey: 'userId' });

    user.hasMany(order, { foreignKey: 'userId' });
    order.belongsTo(user, { foreignKey: 'userId' }); 

    restaurant.hasMany(like, { foreignKey: 'restaurantId' });
    like.belongsTo(restaurant, { foreignKey: 'restaurantId' }); 

    restaurant.hasMany(review, { foreignKey: 'restaurantId' });
    review.belongsTo(restaurant, { foreignKey: 'restaurantId' }); 

    restaurant.hasMany(order, { foreignKey: 'restaurantId' });
    order.belongsTo(restaurant, { foreignKey: 'restaurantId' }); 

    return {
        user,
        restaurant,
        like,
        review,
        order,
    };
}