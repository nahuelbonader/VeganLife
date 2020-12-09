import { useState, useEffect } from "react";
import { setSearch } from "../store/actions/search";
import { useDispatch } from "react-redux";

const useInputs = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    ingredient: "",
    step: "",
    search: "",
  });
  const changeInput = (key, value) => setInputs({ ...inputs, [key]: value });
  const handleChange = (type) => (text) => changeInput(type, text);

  useEffect(() => {
    dispatch(setSearch(inputs.search));
  }, [inputs.search]);

  return [inputs, handleChange];
};

export default useInputs;
