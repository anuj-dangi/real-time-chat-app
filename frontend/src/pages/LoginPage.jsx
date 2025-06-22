import React from 'react';
import { useState } from "react";
import { useAuthStore } from '../store/useAuthStore.js';

const LoginPage = () => {

  const [ FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [ showPassword, setShowPassword] = useState(false);

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(FormData);
  };

  return (
    <div>
      
    </div>
  )
}

export default LoginPage;
