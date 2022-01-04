import ItemConstant from "../_constants/item.constants";
import { api } from "../_helpers/utility.action";

export const ItemActions = {
  getItem,
};

function getItem() {
  return (dispatch) => {
    dispatch(request());
    api()
      .get(`/parser`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(success(response));
        } else {
          dispatch(failure(response));
        }
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: ItemConstant.GET_PRODUCT_REQUEST };
  }
  function success(payload) {
    return { type: ItemConstant.GET_PRODUCT_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: ItemConstant.GET_PRODUCT_FAILURE, payload };
  }
}
