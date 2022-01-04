import ItemConstants from "../_constants/item.constants";

const InitialValues = {
  products: [],
};

export default function itemReducer(state = InitialValues, action) {
  switch (action.type) {
    case ItemConstants.GET_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ItemConstants.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: action.payload.data,
        loading: false,
      };
    }
    case ItemConstants.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
}
