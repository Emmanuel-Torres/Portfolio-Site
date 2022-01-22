const { dbService } = require('../services/db-service');

const getImagesByStepId = async (stepId) => {
    return await dbService.getImagesByStepId(stepId);
};

const addImage = async (stepId, title, img, caption) => {
    return await dbService.addImage({ title, img, caption });
};

const updateImage = async (imageId, image) => {
    return await dbService.updateImage(imageId, image);
};

const deleteImage = async (imageId) => {
    return await dbService.deleteImage(imageId);
};

module.exports.imageController = {
    getImagesByStepId,
    addImage,
    updateImage,
    deleteImage
}