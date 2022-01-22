const isValidStory = (story_title) => {
    return story_title.trim().length > 0
};

const isValidStep = (step) => {
    return step.step_title.trim().length > 0 && step.step_content.trim().length > 0 && step.step_position >= 0;
}

const isValidImage = (image) => {
    return image.image_title.trim().length > 0 && image.image_url.trim().length > 0;
}

module.exports.validatorService = {
    isValidStory,
    isValidStep,
    isValidImage
}