import { useState } from "react";
import axios from 'axios';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signupUser = async(email, userId, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('/api/signup', {email, userId, password});
            setLoading(false);
            return response.data;
        } catch(err) {
            setLoading(false);
            setError(err.response?.data?.message || "회원가입에 실패했습니다.");
            throw err;
        }
    };

    return { signupUser, loading, error };
}

export default useSignup;