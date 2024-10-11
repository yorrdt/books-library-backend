module.exports = (sequelize, Sequelize) => {
    const BookModel = sequelize.define("book", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            autoNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        count_of_pages: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        isbn: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return BookModel;
}