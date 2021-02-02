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
    title: "",
    image: "",
    categoryStore: "",
    description: "",
    price: 0,
    stock: 0,
    hoursOpenMorning: 0,
    minutesOpenMorning: 0,
    hoursCloseMorning: 0,
    minutesCloseMorning: 0,
    hoursOpenAftenoon: 0,
    minutesOpenAfternoon: 0,
    hoursCloseAftenoon: 0,
    minutesCloseAfternoon: 0,
  });
  const changeInput = (key, value) => setInputs({ ...inputs, [key]: value });
  const handleChange = (type) => (text) => changeInput(type, text);

  useEffect(() => {
    dispatch(setSearch(inputs.search));
  }, [inputs.search]);

  return [inputs, handleChange];
};

export default useInputs;
