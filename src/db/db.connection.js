import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('assignment_7_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export const checkConnection = async () => {
    try {
        const { associations } = await import('./models/associate.js');
        associations();
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log('DB connected');
    } catch (error) {
        console.error('DB error:', error);
    }
};