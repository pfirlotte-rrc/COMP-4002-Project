import { useState } from "react";
import type { Topic } from "../apis/topicData";
import { topicService } from "../services/topicService";

export function useTopics(userId: string) {
    const [topics, setTopics] = useState<Topic[]>(
        () => topicService.getTopics(userId)
    );

    const [error, setError] = useState<string | null>(null);

    const addNewTopic = (name: string) => {
        try {
            const updated = topicService.addNewTopic(userId, name);
            setTopics(updated);
            setError(null);
        } catch (e) {
            setError((e as Error).message)
        }
    }

    return {
        topics,
        error,
        addNewTopic,
    };
}