module.exports = function(sequelize, DataTypes) {
    var List = sequelize.define("List", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 50]
            }
        },
        beenThere: DataTypes.BOOLEAN
    });
    return List;
}