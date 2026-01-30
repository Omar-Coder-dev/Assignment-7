import commentModel from "../../db/models/comment.model.js";

export const create = async (data) => {
    return await commentModel.create(data);
};

export const getAll = async () => {
    return await commentModel.findAll();
};