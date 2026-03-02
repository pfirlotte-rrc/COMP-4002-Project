import { mockUsers } from "./topicData";
import type { Topic, UserProfileTags } from "./topicData";

let usersInfo: UserProfileTags[] = mockUsers.map(e => ({
  ...e, favoriteTopics: [...e.favoriteTopics],}));

export const topicRepository = {
  getTopicsByUserId(userId: string): Topic[] {
    const userTopics = usersInfo.find(e => e.id === userId);
    return userTopics ? [...userTopics.favoriteTopics] : [];
  },

  addNewTopic(userId: string, topic: Topic): Topic[] {
    usersInfo = usersInfo.map(e => e.id === userId
    ? {...e, favoriteTopics: [...e.favoriteTopics, topic] } : e);
    return this.getTopicsByUserId(userId)
  },
};