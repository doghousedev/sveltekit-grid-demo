import { c as create_ssr_component, b as compute_rest_props, g as get_current_component, k as getContext, v as validate_component, m as missing_component, s as setContext, d as spread, e as escape_attribute_value, f as escape_object, h as add_attribute } from "../../../chunks/index2.js";
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement, a as classAdderBuilder } from "../../../chunks/Ripple.js";
import { e as exclude, p as prefixFilter, B as Button } from "../../../chunks/Button.js";
import { I as IconButton } from "../../../chunks/IconButton.js";
const CommonLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "span" : void 0 } = $$props;
  const context = getContext("SMUI:label:context");
  const tabindex = getContext("SMUI:label:tabindex");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-button__label": context === "button",
            "mdc-fab__label": context === "fab",
            "mdc-tab__text-label": context === "tab",
            "mdc-image-list__label": context === "image-list",
            "mdc-snackbar__label": context === "snackbar",
            "mdc-banner__text": context === "banner",
            "mdc-segmented-button__label": context === "segmented-button",
            "mdc-data-table__pagination-rows-per-page-label": context === "data-table:pagination",
            "mdc-data-table__header-cell-label": context === "data-table:sortable-header-cell"
          })
        },
        context === "snackbar" ? { "aria-atomic": "false" } : {},
        { tabindex },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
let waiting = Promise.resolve();
const Snackbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "variant",
    "leading",
    "timeoutMs",
    "closeOnEscape",
    "labelText",
    "actionButtonText",
    "surface$class",
    "surface$use",
    "open",
    "forceOpen",
    "close",
    "isOpen",
    "getLabelElement",
    "getActionButtonElement",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "" } = $$props;
  let { leading = false } = $$props;
  let { timeoutMs = 5e3 } = $$props;
  let { closeOnEscape = true } = $$props;
  let { labelText = uninitializedValue } = $$props;
  let { actionButtonText = uninitializedValue } = $$props;
  let { surface$class = "" } = $$props;
  let { surface$use = [] } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let closePromise = new Promise((resolve) => resolve);
  setContext("SMUI:label:context", "snackbar");
  function open() {
    waiting = waiting.then(() => {
      instance.open();
      return closePromise;
    });
  }
  function forceOpen() {
    return instance.open();
  }
  function close(reason) {
    return instance.close(reason);
  }
  function isOpen() {
    return instance.isOpen();
  }
  function getLabelElement() {
    var _a;
    return (_a = getElement().querySelector(".mdc-snackbar__label")) !== null && _a !== void 0 ? _a : document.createElement("div");
  }
  function getActionButtonElement() {
    var _a;
    return (_a = getElement().querySelector(".mdc-snackbar__action")) !== null && _a !== void 0 ? _a : document.createElement("button");
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.leading === void 0 && $$bindings.leading && leading !== void 0)
    $$bindings.leading(leading);
  if ($$props.timeoutMs === void 0 && $$bindings.timeoutMs && timeoutMs !== void 0)
    $$bindings.timeoutMs(timeoutMs);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.actionButtonText === void 0 && $$bindings.actionButtonText && actionButtonText !== void 0)
    $$bindings.actionButtonText(actionButtonText);
  if ($$props.surface$class === void 0 && $$bindings.surface$class && surface$class !== void 0)
    $$bindings.surface$class(surface$class);
  if ($$props.surface$use === void 0 && $$bindings.surface$use && surface$use !== void 0)
    $$bindings.surface$use(surface$use);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.forceOpen === void 0 && $$bindings.forceOpen && forceOpen !== void 0)
    $$bindings.forceOpen(forceOpen);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.getLabelElement === void 0 && $$bindings.getLabelElement && getLabelElement !== void 0)
    $$bindings.getLabelElement(getLabelElement);
  if ($$props.getActionButtonElement === void 0 && $$bindings.getActionButtonElement && getActionButtonElement !== void 0)
    $$bindings.getActionButtonElement(getActionButtonElement);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<aside${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-snackbar": true,
          "mdc-snackbar--stacked": variant === "stacked",
          "mdc-snackbar--leading": leading,
          ...internalClasses
        }))
      },
      escape_object(exclude($$restProps, ["surface$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [surface$class]: true,
          "mdc-snackbar__surface": true
        }))
      },
      { role: "status" },
      { "aria-relevant": "additions" },
      escape_object(prefixFilter($$restProps, "surface$"))
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>
</aside>`;
});
const Actions = classAdderBuilder({
  class: "mdc-snackbar__actions",
  tag: "div",
  props: { "aria-atomic": "true" },
  contexts: {
    "SMUI:button:context": "snackbar:actions",
    "SMUI:icon-button:context": "snackbar:actions",
    "SMUI:label:context": void 0
  }
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let snackbarSuccess;
  let snackbarWarning;
  let snackbarError;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      {
        class: "demo-success",
        this: snackbarSuccess
      },
      {
        this: ($$value) => {
          snackbarSuccess = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `That thing you tried to do actually worked, if you can believe it!`;
            }
          })}
	${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  title: "Dismiss"
                },
                {},
                {
                  default: () => {
                    return `close`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}

${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      {
        class: "demo-warning",
        this: snackbarWarning
      },
      {
        this: ($$value) => {
          snackbarWarning = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Ok, it looks like that thing you tried to do might not have work.`;
            }
          })}
	${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  title: "Dismiss"
                },
                {},
                {
                  default: () => {
                    return `close`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}

${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { class: "demo-error", this: snackbarError },
      {
        this: ($$value) => {
          snackbarError = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `That thing you tried to do didn&#39;t work. Honestly, I&#39;m not sure why you even tried.`;
            }
          })}
	${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  title: "Dismiss"
                },
                {},
                {
                  default: () => {
                    return `close`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}

${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Open Success Snackbar`;
          }
        })}`;
      }
    })}

${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Open Warning Snackbar`;
          }
        })}`;
      }
    })}

${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Open Error Snackbar`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
