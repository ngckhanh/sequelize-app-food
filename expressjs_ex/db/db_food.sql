create database `app-food`;
use `app-food`;

CREATE TABLE food_type (
                           type_id INT AUTO_INCREMENT PRIMARY KEY,
                           type_name VARCHAR(255) NOT NULL
);

CREATE TABLE food (
                      food_id INT AUTO_INCREMENT PRIMARY KEY,
                      food_name VARCHAR(255) NOT NULL,
                      image VARCHAR(255),
                      price FLOAT NOT NULL,
                      `desc` VARCHAR(255),
                      type_id INT,
                      FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

CREATE TABLE sub_food (
                          sub_id INT AUTO_INCREMENT PRIMARY KEY,
                          sub_name VARCHAR(255),
                          sub_price FLOAT,
                          food_id INT,
                          FOREIGN KEY (food_id) REFERENCES food(food_id)
);


CREATE TABLE user (
                      user_id INT AUTO_INCREMENT PRIMARY KEY,
                      full_name VARCHAR(255),
                      email VARCHAR(255),
                      `password` VARCHAR(255)
);

CREATE TABLE `order` (
                         order_id INT AUTO_INCREMENT PRIMARY KEY,
                         user_id INT,
                         food_id INT,
                         amount INT,
                         code VARCHAR(255),
                         arr_sub_id VARCHAR(255),
                         FOREIGN KEY (user_id) REFERENCES user(user_id),
                         FOREIGN KEY (food_id) REFERENCES food(food_id)
);

CREATE TABLE restaurant (
                            res_id INT AUTO_INCREMENT PRIMARY KEY,
                            res_name VARCHAR(255),
                            image VARCHAR(255),
                            `desc` VARCHAR(255)
);

CREATE TABLE rate_res (
                          user_id INT,
                          res_id INT,
                          amount INT,
                          date_rate DATETIME,
                          FOREIGN KEY (user_id) REFERENCES user(user_id),
                          FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

CREATE TABLE like_res (
                          user_id INT,
                          res_id INT,
                          date_like DATETIME,
                          FOREIGN KEY (user_id) REFERENCES user(user_id),
                          FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

INSERT INTO food_type (type_name)
VALUES
    ('Appetizer'),
    ('Main Course'),
    ('Dessert'),
    ('Beverage'),
    ('Side Dish');

INSERT INTO food (food_name, image, price, `desc`, type_id)
VALUES
    ('Spring Rolls', 'spring_rolls.jpg', 5.99, 'Crispy rolls filled with vegetables', 1),
    ('Steak', 'steak.jpg', 14.99, 'Grilled steak with herbs', 2),
    ('Chocolate Cake', 'chocolate_cake.jpg', 6.99, 'Rich and creamy chocolate cake', 3),
    ('Lemonade', 'lemonade.jpg', 2.99, 'Freshly squeezed lemonade', 4),
    ('Fries', 'fries.jpg', 3.49, 'Crispy golden fries', 5);

INSERT INTO sub_food (sub_name, sub_price, food_id)
VALUES
    ('Vegan Spring Rolls', 6.99, 1),
    ('Ribeye Steak', 19.99, 2),
    ('Cheesecake', 7.49, 3),
    ('Iced Lemonade', 3.49, 4),
    ('Garlic Fries', 3.99, 5);

INSERT INTO user (full_name, email, `password`)
VALUES
    ('John Doe', 'john@example.com', 'password123'),
    ('Jane Smith', 'jane@example.com', 'password456'),
    ('Alice Johnson', 'alice@example.com', 'password789'),
    ('Bob Brown', 'bob@example.com', 'password101'),
    ('Charlie Davis', 'charlie@example.com', 'password202');

INSERT INTO restaurant (res_name, image, `desc`)
VALUES
    ('The Gourmet Bistro', 'gourmet_bistro.jpg', 'A fine dining restaurant serving exquisite dishes'),
    ('Pizza Paradise', 'pizza_paradise.jpg', 'Best pizzas in town with fresh ingredients'),
    ('Sushi Haven', 'sushi_haven.jpg', 'Authentic Japanese sushi bar'),
    ('Cafe Delights', 'cafe_delights.jpg', 'A cozy cafe offering coffee and desserts'),
    ('The Pasta Place', 'pasta_place.jpg', 'Delicious pasta dishes made fresh daily');

INSERT INTO rate_res (user_id, res_id, amount, date_rate)
VALUES
    (1, 1, 5, '2024-12-01 12:00:00'),
    (2, 2, 4, '2024-12-02 13:30:00'),
    (3, 3, 5, '2024-12-03 14:15:00'),
    (4, 4, 3, '2024-12-04 15:45:00');

INSERT INTO like_res (user_id, res_id, date_like)
VALUES
    (1, 1, '2024-12-01 12:00:00'),
    (2, 2, '2024-12-02 13:30:00'),
    (4, 4, '2024-12-04 15:45:00'),
    (1, 2, '2024-12-01 12:00:00'),
    (1, 5, '2024-12-01 12:00:00'),
    (2, 1, '2024-12-02 13:30:00'),
    (3, 4, '2024-12-03 14:15:00'),
    (4, 1, '2024-12-04 15:45:00');

INSERT INTO `order` (user_id, food_id, amount, code, arr_sub_id)
VALUES
    (1, 1, 2, 'ORD1', '1,2'),
    (2, 2, 1, 'ORD12', '3'),
    (3, 3, 3, 'ORD123', '4,5'),
    (4, 4, 2, 'ORD1234', '1');

-- Find 5 users have like restaurant the most
SELECT U.user_id,
       U.full_name,
       COUNT(L.res_id) AS like_count
FROM user U
         JOIN like_res L on U.user_id = L.user_id
GROUP BY U.user_id, U.full_name
ORDER BY like_count DESC
    LIMIT 5;

-- Find 2 restaurant have highest like
SELECT R.res_id, R.res_name, COUNT(L.res_id) AS like_count
FROM restaurant R
         JOIN like_res L on R.res_id = L.res_id
GROUP BY R.res_id, R.res_name
ORDER BY like_count DESC
    LIMIT 2;

-- Find user order the most
SELECT U.user_id, U.full_name, SUM(O.amount) AS user_order_amount
FROM user U
         JOIN `order` O on U.user_id = O.user_id
GROUP BY U.user_id, U.full_name
ORDER BY user_order_amount DESC
    LIMIT 1;

-- Find user not use anything from the system
-- (not order, not like, not rating)
SELECT U.user_id, U.full_name
FROM user U
         LEFT JOIN `order` O ON U.user_id = O.user_id
         LEFT JOIN `like_res` L ON U.user_id = L.user_id
         LEFT JOIN `rate_res` R ON U.user_id = R.user_id
WHERE
    O.order_id IS NULL
  AND L.res_id IS NULL
  AND R.res_id IS NULL;

