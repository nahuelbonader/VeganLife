import { useState } from "react";

const useInputs = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    search: "",
  });
  const changeInput = (key, value) => setInputs({ ...inputs, [key]: value });
  const handleChange = (type) => (text) => changeInput(type, text);

  return [inputs, handleChange];
};

export default useInputs;
