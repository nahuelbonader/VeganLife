import { RANDOM_RECIPE } from '../constant'
import axios from 'axios'
import IP from '../../env'

const setRandomRecipe = function (randomRecipe) {
    return {
      type: RANDOM_RECIPE,
      randomRecipe,
    };
  };

export const fetchRandomRecipe = () => (dispatch) => {
    axios.get(`http://${IP}:1337/api/recipes`)
    .then((res)=>res.data)
    .then((randomRecipe)=>dispatch(setRandomRecipe(randomRecipe)))
};