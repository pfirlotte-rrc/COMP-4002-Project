import type { Topic } from "../apis/topicData";
import { topicRepository } from "../apis/topicRepo";

export const topicService = {
    getTopics(userId: string): Topic[] {
        return topicRepository.getTopicsByUserId(userId);
    },

    addNewTopic(userId: string, name: string): Topic[] {
        if (!name.trim()) {
            throw new Error("Topic name cannot be empty.");
        }

        const newTopic: Topic = {
            id: `t${Date.now()}`,
            name: name.trim(),
        };

        return topicRepository.addNewTopic(userId, newTopic);
    }
}