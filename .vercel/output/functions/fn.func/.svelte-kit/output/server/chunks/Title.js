import { a as classAdderBuilder } from "./Ripple.js";
const Row = classAdderBuilder({
  class: "mdc-top-app-bar__row",
  tag: "div"
});
const BarTitle = classAdderBuilder({
  class: "mdc-top-app-bar__title",
  tag: "span"
});
export {
  BarTitle as B,
  Row as R
};
