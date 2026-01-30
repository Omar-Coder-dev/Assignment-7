import userModel from "../../db/models/user.model.js";
import { Op } from "sequelize";

export const signup = async (data) => {
    const user = userModel.build(data);
    return await user.save();
};

export const login = async (email, password) => {
    return await userModel.findOne({ where: { email, password } });
};

export const update = async (id, data) => {
    return await userModel.upsert({ id, ...data });
};

export const remove = async (id) => {
    return await userModel.destroy({ where: { id } });
};

export const search = async (name) => {
    return await userModel.findAll({
        where: { firstName: { [Op.like]: `${name}%` } }
    });
};