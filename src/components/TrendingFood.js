import React from "react";
import { connect } from "react-redux";
import { ItemActions } from "../_actions/item.action";
import { useEffect } from "react";

function TrendingFood(props) {
  useEffect(() => {
    props.getItem(props);
  }, []);

  let items = props.products;
  return (
    <div class="row">
      {items &&
        items.map((item, index) => (
          <div class="col-sm">
            {item.food.image ? (
              <div key={item}>
                {item.food.label} <br />
                <img src={item.food.image} alt={item.food.label} />
              </div>
            ) : null}
          </div>
        ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.ItemsReducer.products.hints,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getItem: () => dispatch(ItemActions.getItem()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrendingFood);
