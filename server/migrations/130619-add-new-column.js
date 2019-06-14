module.exports = {
    up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn('userLists', 'id', Sequelize.INTEGER),
            queryInterface.addColumn('userLists', 'updatedAt', Sequelize.DATE),
            queryInterface.addColumn('userLists', 'createdAt', Sequelize.DATE)
        ])
    },
    down(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.removeColumn('userLists', 'createdAt'),
            queryInterface.removeColumn('userLists', 'updatedAt'),
            queryInterface.removeColumn('userLists', 'id'),
        ])
    },
}