const { dbService } = require('../services/db-service');

const getStepsByStoryId = async (storyId) => {
    return await dbService.getStepsByStoryId(storyId);
};

const addStep = async (storyId, title, content, position) => {
    return await dbService.addStep({ storyId, title, content, position })
};

const updateStep = async (stepId, step) => {
    return await dbService.updateStep(stepId, step);
}

const deleteStep = async (stepId) => {
    return await dbService.deleteStep(stepId);
};

module.exports.stepController = {
    getStepsByStoryId,
    addStep,
    updateStep,
    deleteStep
}