import postModel from "../../db/models/post.model.js";
import userModel from "../../db/models/user.model.js";

export const create = async (data) => {
    return await postModel.create(data);
};

export const getAll = async () => {
    return await postModel.findAll({ include: userModel });
};

export const softDelete = async (id) => {
    return await postModel.destroy({ where: { id } });
};

export const hardDelete = async (id) => {
    return await postModel.destroy({ where: { id }, force: true });
};