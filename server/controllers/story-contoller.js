const { dbService } = require("../services/db-service")

const addStory = async (title, postedOn) => {
    if (!title || !postedOn) {
        throw Exeption('Title or Posted On not found.')
    }
    
    return await dbService.addStory({ title, postedOn })
}

module.exports.storyController = {
    addStory
}