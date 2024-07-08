import { useState } from "react";
import axios from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signupUser = async (email, id, password) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://10.80.162.8:8080/member/register",
        { email, id, password }
      );
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "회원가입에 실패했습니다.");
      throw err;
    }
  };

  return { signupUser, loading, error };
};

export default useSignup;
