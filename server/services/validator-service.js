const isValidStory = (story_title) => {
    return story_title.trim().length > 0
};

module.exports.validatorService = {
    isValidStory,
}