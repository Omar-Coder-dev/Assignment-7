import { DataTypes } from 'sequelize';
import { sequelize } from '../db.connection.js';

const postModel = sequelize.define('Post', {
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false }
}, {
    paranoid: true
});

export default postModel;