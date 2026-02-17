const axios = require("axios");


const generateTaskSummary = async (taskDescription) => {

    const prompt = `
You are an operations manager.
Summarize the following task into:
1. Clear action items
2. Estimated effort (Low/Medium/High)
3. Risk level

Task:
${taskDescription}
`;

    // MOCK RESPONSE (for now)
    return {
        summary: "Complete report, verify data, submit before deadline",
        effort: "Medium",
        risk: "Low",
    };




}



module.exports = {generateTaskSummary} ;