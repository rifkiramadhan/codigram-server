module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        case: {
            type: DataTypes.STRING,
            allowNull: false
        },
        drug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    });
    
    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: 'cascade',
        });
        
        Posts.hasMany(models.Likes, {
            onDelete: 'cascade',
        });
    };

    return Posts;
};