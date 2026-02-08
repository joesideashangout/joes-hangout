// useAchievements Hook
import { useState } from 'react';
export const useAchievements = () => {
    const [achievements, setAchievements] = useState([]);
    return { achievements, setAchievements };
};
