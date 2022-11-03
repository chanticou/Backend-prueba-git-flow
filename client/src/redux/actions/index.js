import { GET_HOUSES } from "../../actions-types";

export const getCountries = () => async (dispatch) => {
  try {
    // const houses = await axios.post("");

    dispatch({
      type: GET_HOUSES,
      paylaod: "",
    });
  } catch (err) {
    console.log(err.message);
  }
};
