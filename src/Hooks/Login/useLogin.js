import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "로그인에 실패했습니다.");
      throw err;
    }
  };

  return { loginUser, loading, error };
};

export default useLogin;
