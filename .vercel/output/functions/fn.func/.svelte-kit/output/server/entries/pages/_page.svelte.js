import { r as prevent_default, t as stop_propagation, p as listen, c as create_ssr_component, b as compute_rest_props, w as compute_slots, g as get_current_component, d as spread, f as escape_object, h as add_attribute, u as is_void, v as validate_component, j as escape, s as setContext, k as getContext, x as add_styles, y as each, z as get_store_value, A as createEventDispatcher, B as null_to_empty, m as missing_component } from "../../chunks/index2.js";
import { B as Button$1 } from "../../chunks/Button.js";
import { I as Icon, T as Textfield, S as Select$1, O as Option, Q as QuoteInfo, C as Client } from "../../chunks/functions.js";
import { paramCase } from "change-case";
import "@googlemaps/js-api-loader";
import "tom-select";
import "moment";
import Swal from "sweetalert2";
import "ag-grid-community";
import "ag-grid-enterprise";
import "../../chunks/Title.js";
import { a as classAdderBuilder } from "../../chunks/Ripple.js";
import { w as writable } from "../../chunks/index.js";
const prefix = "u";
const classname = (root, scoped, global, includeName) => {
  root = paramCase(root || "");
  scoped = [scoped].flat();
  global = [global].flat();
  const classes = parse(scoped, includeName).map((input) => root ? `${prefix}-${root}-${input}` : `${prefix}-${input}`).concat(...parse(global)).filter((input) => input);
  if (root)
    classes.unshift(`${prefix}-${root}`);
  return classes.join(" ") || void 0;
};
const parse = (inputs, includeName) => {
  const result = [];
  for (const input of inputs) {
    const type = Object.prototype.toString.call(input).replace(/\[|\]|object| /g, "").toLowerCase();
    switch (type) {
      case "array": {
        console.log("TODO", input);
        break;
      }
      case "object": {
        for (let key in input) {
          const value = input[key];
          key = paramCase(key);
          if (typeof value == "undefined" || value === false)
            continue;
          if (value === true)
            key && result.push(key);
          else if (typeof value == "number" || includeName)
            key && result.push(`${key}-${value}`);
          else
            result.push(value);
        }
        break;
      }
      case "string": {
        input.split(" ").forEach((input2) => result.push(input2));
        break;
      }
    }
  }
  return result;
};
const regex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const handler = (detail) => {
  document.dispatchEvent(new CustomEvent("UBEAC:EVENTS", { detail }));
};
const forwardEventsBuilder = (component) => {
  const natives = {};
  component.$on = (eventType, callback) => {
    var _a;
    var _b;
    const isNative = `on${eventType}`.split(":")[0].toLowerCase() in document;
    if (isNative) {
      const callbacks2 = natives[eventType] || (natives[eventType] = []);
      callbacks2.push(callback);
      return () => {
      };
    }
    const callbacks = (_a = (_b = component.$$.callbacks)[eventType]) !== null && _a !== void 0 ? _a : _b[eventType] = [];
    const cb = callback;
    callback = (event) => {
      handler(event);
      return cb(event);
    };
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index == -1)
        return;
      callbacks.splice(index, 1);
    };
  };
  return (node) => {
    const eventTypes = Object.keys(natives);
    const destructors = [];
    for (let eventType of eventTypes) {
      const callbacks = natives[eventType];
      for (let callback of callbacks) {
        let options = false;
        if (eventType.match(regex)) {
          const parts = eventType.split(":");
          eventType = parts[0];
          const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
          if (eventOptions.passive) {
            options = options || {};
            options.passive = true;
          }
          if (eventOptions.nonpassive) {
            options = options || {};
            options.passive = false;
          }
          if (eventOptions.capture) {
            options = options || {};
            options.capture = true;
          }
          if (eventOptions.once) {
            options = options || {};
            options.once = true;
          }
          if (eventOptions.preventDefault) {
            callback = prevent_default(callback);
          }
          if (eventOptions.stopPropagation) {
            callback = stop_propagation(callback);
          }
        }
        const destructor = listen(node, eventType, callback, options);
        const mirror = listen(node, eventType, handler, options);
        destructors.push(destructor, mirror);
      }
    }
    const destroy = () => destructors.forEach((destructor) => destructor());
    return { destroy };
  };
};
let globalCounter = 0;
let defaultCssPrefix = "el";
const El = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "element",
    "cssPrefix",
    "id",
    "style",
    "tag",
    "cssProps",
    "value",
    "bgColor",
    "bgGradient",
    "bgOpacity",
    "textOpacity",
    "border",
    "borderTop",
    "borderStart",
    "borderEnd",
    "borderBottom",
    "borderColor",
    "borderRadius",
    "borderRoundSize",
    "borderOpacity",
    "p",
    "pt",
    "pb",
    "ps",
    "pe",
    "px",
    "py",
    "m",
    "mt",
    "mb",
    "ms",
    "me",
    "mx",
    "my",
    "gap",
    "clearfix",
    "ratio",
    "sticky",
    "fixed",
    "d",
    "dSm",
    "dMd",
    "dLg",
    "dXl",
    "dXxl",
    "dPrint",
    "shadow",
    "w",
    "h",
    "mw",
    "mh",
    "position",
    "top",
    "start",
    "bottom",
    "end",
    "vAlign",
    "textColor",
    "textAlign",
    "textAlignSm",
    "textAlignMd",
    "textAlignLg",
    "textAlignXl",
    "textWrap",
    "textTransform",
    "textDecoration",
    "lineHeight",
    "textMuted",
    "textLead",
    "textHeading",
    "textTruncate",
    "fontSize",
    "fontWeight",
    "fontStyle",
    "hidden",
    "float",
    "floatSm",
    "floatMd",
    "floatLg",
    "floatXl",
    "floatXxl",
    "container",
    "col",
    "colSm",
    "colMd",
    "colLg",
    "colXl",
    "colXxl",
    "order",
    "orderSm",
    "orderMd",
    "orderLg",
    "orderXl",
    "orderXxl",
    "offset",
    "offsetSm",
    "offsetMd",
    "offsetLg",
    "offsetXl",
    "offsetXxl",
    "row",
    "rowCols",
    "rowColsSm",
    "rowColsMd",
    "rowColsLg",
    "rowColsXl",
    "rowColsXxl",
    "g",
    "gSm",
    "gMd",
    "gLg",
    "gXl",
    "gXxl",
    "gx",
    "gy",
    "alignItems",
    "alignSelf",
    "justifyContent",
    "tabindex",
    "forwardEvents"
  ]);
  let $$slots = compute_slots(slots);
  let { element = void 0 } = $$props;
  let { cssPrefix = "el" } = $$props;
  let { id = cssPrefix + "_" + globalCounter++ } = $$props;
  let { style = void 0 } = $$props;
  let { tag = "div" } = $$props;
  let { cssProps = {} } = $$props;
  let { value = void 0 } = $$props;
  let { bgColor = void 0 } = $$props;
  let { bgGradient = void 0 } = $$props;
  let { bgOpacity = void 0 } = $$props;
  let { textOpacity = void 0 } = $$props;
  let { border = void 0 } = $$props;
  let { borderTop = void 0 } = $$props;
  let { borderStart = void 0 } = $$props;
  let { borderEnd = void 0 } = $$props;
  let { borderBottom = void 0 } = $$props;
  let { borderColor = void 0 } = $$props;
  let { borderRadius = void 0 } = $$props;
  let { borderRoundSize = void 0 } = $$props;
  let { borderOpacity = void 0 } = $$props;
  let { p = void 0 } = $$props;
  let { pt = void 0 } = $$props;
  let { pb = void 0 } = $$props;
  let { ps = void 0 } = $$props;
  let { pe = void 0 } = $$props;
  let { px = void 0 } = $$props;
  let { py = void 0 } = $$props;
  let { m = void 0 } = $$props;
  let { mt = void 0 } = $$props;
  let { mb = void 0 } = $$props;
  let { ms = void 0 } = $$props;
  let { me = void 0 } = $$props;
  let { mx = void 0 } = $$props;
  let { my = void 0 } = $$props;
  let { gap = void 0 } = $$props;
  let { clearfix = void 0 } = $$props;
  let { ratio = void 0 } = $$props;
  let { sticky = void 0 } = $$props;
  let { fixed = void 0 } = $$props;
  let { d = void 0 } = $$props;
  let { dSm = void 0 } = $$props;
  let { dMd = void 0 } = $$props;
  let { dLg = void 0 } = $$props;
  let { dXl = void 0 } = $$props;
  let { dXxl = void 0 } = $$props;
  let { dPrint = void 0 } = $$props;
  let { shadow = void 0 } = $$props;
  let { w = void 0 } = $$props;
  let { h = void 0 } = $$props;
  let { mw = void 0 } = $$props;
  let { mh = void 0 } = $$props;
  let { position = void 0 } = $$props;
  let { top = void 0 } = $$props;
  let { start = void 0 } = $$props;
  let { bottom = void 0 } = $$props;
  let { end = void 0 } = $$props;
  let { vAlign = void 0 } = $$props;
  let { textColor = void 0 } = $$props;
  let { textAlign = void 0 } = $$props;
  let { textAlignSm = void 0 } = $$props;
  let { textAlignMd = void 0 } = $$props;
  let { textAlignLg = void 0 } = $$props;
  let { textAlignXl = void 0 } = $$props;
  let { textWrap = void 0 } = $$props;
  let { textTransform = void 0 } = $$props;
  let { textDecoration = void 0 } = $$props;
  let { lineHeight = void 0 } = $$props;
  let { textMuted = void 0 } = $$props;
  let { textLead = void 0 } = $$props;
  let { textHeading = void 0 } = $$props;
  let { textTruncate = void 0 } = $$props;
  let { fontSize = void 0 } = $$props;
  let { fontWeight = void 0 } = $$props;
  let { fontStyle = void 0 } = $$props;
  let { hidden = void 0 } = $$props;
  let { float = void 0 } = $$props;
  let { floatSm = void 0 } = $$props;
  let { floatMd = void 0 } = $$props;
  let { floatLg = void 0 } = $$props;
  let { floatXl = void 0 } = $$props;
  let { floatXxl = void 0 } = $$props;
  let { container = void 0 } = $$props;
  let { col = void 0 } = $$props;
  let { colSm = void 0 } = $$props;
  let { colMd = void 0 } = $$props;
  let { colLg = void 0 } = $$props;
  let { colXl = void 0 } = $$props;
  let { colXxl = void 0 } = $$props;
  let { order = void 0 } = $$props;
  let { orderSm = void 0 } = $$props;
  let { orderMd = void 0 } = $$props;
  let { orderLg = void 0 } = $$props;
  let { orderXl = void 0 } = $$props;
  let { orderXxl = void 0 } = $$props;
  let { offset = void 0 } = $$props;
  let { offsetSm = void 0 } = $$props;
  let { offsetMd = void 0 } = $$props;
  let { offsetLg = void 0 } = $$props;
  let { offsetXl = void 0 } = $$props;
  let { offsetXxl = void 0 } = $$props;
  let { row = void 0 } = $$props;
  let { rowCols = void 0 } = $$props;
  let { rowColsSm = void 0 } = $$props;
  let { rowColsMd = void 0 } = $$props;
  let { rowColsLg = void 0 } = $$props;
  let { rowColsXl = void 0 } = $$props;
  let { rowColsXxl = void 0 } = $$props;
  let { g = void 0 } = $$props;
  let { gSm = void 0 } = $$props;
  let { gMd = void 0 } = $$props;
  let { gLg = void 0 } = $$props;
  let { gXl = void 0 } = $$props;
  let { gXxl = void 0 } = $$props;
  let { gx = void 0 } = $$props;
  let { gy = void 0 } = $$props;
  let { alignItems = void 0 } = $$props;
  let { alignSelf = void 0 } = $$props;
  let { justifyContent = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { forwardEvents = () => ({}) } = $$props;
  let classes;
  let defaultCssProps;
  let otherProps = {};
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.cssProps === void 0 && $$bindings.cssProps && cssProps !== void 0)
    $$bindings.cssProps(cssProps);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.bgGradient === void 0 && $$bindings.bgGradient && bgGradient !== void 0)
    $$bindings.bgGradient(bgGradient);
  if ($$props.bgOpacity === void 0 && $$bindings.bgOpacity && bgOpacity !== void 0)
    $$bindings.bgOpacity(bgOpacity);
  if ($$props.textOpacity === void 0 && $$bindings.textOpacity && textOpacity !== void 0)
    $$bindings.textOpacity(textOpacity);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.borderTop === void 0 && $$bindings.borderTop && borderTop !== void 0)
    $$bindings.borderTop(borderTop);
  if ($$props.borderStart === void 0 && $$bindings.borderStart && borderStart !== void 0)
    $$bindings.borderStart(borderStart);
  if ($$props.borderEnd === void 0 && $$bindings.borderEnd && borderEnd !== void 0)
    $$bindings.borderEnd(borderEnd);
  if ($$props.borderBottom === void 0 && $$bindings.borderBottom && borderBottom !== void 0)
    $$bindings.borderBottom(borderBottom);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0)
    $$bindings.borderRadius(borderRadius);
  if ($$props.borderRoundSize === void 0 && $$bindings.borderRoundSize && borderRoundSize !== void 0)
    $$bindings.borderRoundSize(borderRoundSize);
  if ($$props.borderOpacity === void 0 && $$bindings.borderOpacity && borderOpacity !== void 0)
    $$bindings.borderOpacity(borderOpacity);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0)
    $$bindings.p(p);
  if ($$props.pt === void 0 && $$bindings.pt && pt !== void 0)
    $$bindings.pt(pt);
  if ($$props.pb === void 0 && $$bindings.pb && pb !== void 0)
    $$bindings.pb(pb);
  if ($$props.ps === void 0 && $$bindings.ps && ps !== void 0)
    $$bindings.ps(ps);
  if ($$props.pe === void 0 && $$bindings.pe && pe !== void 0)
    $$bindings.pe(pe);
  if ($$props.px === void 0 && $$bindings.px && px !== void 0)
    $$bindings.px(px);
  if ($$props.py === void 0 && $$bindings.py && py !== void 0)
    $$bindings.py(py);
  if ($$props.m === void 0 && $$bindings.m && m !== void 0)
    $$bindings.m(m);
  if ($$props.mt === void 0 && $$bindings.mt && mt !== void 0)
    $$bindings.mt(mt);
  if ($$props.mb === void 0 && $$bindings.mb && mb !== void 0)
    $$bindings.mb(mb);
  if ($$props.ms === void 0 && $$bindings.ms && ms !== void 0)
    $$bindings.ms(ms);
  if ($$props.me === void 0 && $$bindings.me && me !== void 0)
    $$bindings.me(me);
  if ($$props.mx === void 0 && $$bindings.mx && mx !== void 0)
    $$bindings.mx(mx);
  if ($$props.my === void 0 && $$bindings.my && my !== void 0)
    $$bindings.my(my);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.clearfix === void 0 && $$bindings.clearfix && clearfix !== void 0)
    $$bindings.clearfix(clearfix);
  if ($$props.ratio === void 0 && $$bindings.ratio && ratio !== void 0)
    $$bindings.ratio(ratio);
  if ($$props.sticky === void 0 && $$bindings.sticky && sticky !== void 0)
    $$bindings.sticky(sticky);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.d === void 0 && $$bindings.d && d !== void 0)
    $$bindings.d(d);
  if ($$props.dSm === void 0 && $$bindings.dSm && dSm !== void 0)
    $$bindings.dSm(dSm);
  if ($$props.dMd === void 0 && $$bindings.dMd && dMd !== void 0)
    $$bindings.dMd(dMd);
  if ($$props.dLg === void 0 && $$bindings.dLg && dLg !== void 0)
    $$bindings.dLg(dLg);
  if ($$props.dXl === void 0 && $$bindings.dXl && dXl !== void 0)
    $$bindings.dXl(dXl);
  if ($$props.dXxl === void 0 && $$bindings.dXxl && dXxl !== void 0)
    $$bindings.dXxl(dXxl);
  if ($$props.dPrint === void 0 && $$bindings.dPrint && dPrint !== void 0)
    $$bindings.dPrint(dPrint);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.w === void 0 && $$bindings.w && w !== void 0)
    $$bindings.w(w);
  if ($$props.h === void 0 && $$bindings.h && h !== void 0)
    $$bindings.h(h);
  if ($$props.mw === void 0 && $$bindings.mw && mw !== void 0)
    $$bindings.mw(mw);
  if ($$props.mh === void 0 && $$bindings.mh && mh !== void 0)
    $$bindings.mh(mh);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  if ($$props.vAlign === void 0 && $$bindings.vAlign && vAlign !== void 0)
    $$bindings.vAlign(vAlign);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.textAlign === void 0 && $$bindings.textAlign && textAlign !== void 0)
    $$bindings.textAlign(textAlign);
  if ($$props.textAlignSm === void 0 && $$bindings.textAlignSm && textAlignSm !== void 0)
    $$bindings.textAlignSm(textAlignSm);
  if ($$props.textAlignMd === void 0 && $$bindings.textAlignMd && textAlignMd !== void 0)
    $$bindings.textAlignMd(textAlignMd);
  if ($$props.textAlignLg === void 0 && $$bindings.textAlignLg && textAlignLg !== void 0)
    $$bindings.textAlignLg(textAlignLg);
  if ($$props.textAlignXl === void 0 && $$bindings.textAlignXl && textAlignXl !== void 0)
    $$bindings.textAlignXl(textAlignXl);
  if ($$props.textWrap === void 0 && $$bindings.textWrap && textWrap !== void 0)
    $$bindings.textWrap(textWrap);
  if ($$props.textTransform === void 0 && $$bindings.textTransform && textTransform !== void 0)
    $$bindings.textTransform(textTransform);
  if ($$props.textDecoration === void 0 && $$bindings.textDecoration && textDecoration !== void 0)
    $$bindings.textDecoration(textDecoration);
  if ($$props.lineHeight === void 0 && $$bindings.lineHeight && lineHeight !== void 0)
    $$bindings.lineHeight(lineHeight);
  if ($$props.textMuted === void 0 && $$bindings.textMuted && textMuted !== void 0)
    $$bindings.textMuted(textMuted);
  if ($$props.textLead === void 0 && $$bindings.textLead && textLead !== void 0)
    $$bindings.textLead(textLead);
  if ($$props.textHeading === void 0 && $$bindings.textHeading && textHeading !== void 0)
    $$bindings.textHeading(textHeading);
  if ($$props.textTruncate === void 0 && $$bindings.textTruncate && textTruncate !== void 0)
    $$bindings.textTruncate(textTruncate);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.fontWeight === void 0 && $$bindings.fontWeight && fontWeight !== void 0)
    $$bindings.fontWeight(fontWeight);
  if ($$props.fontStyle === void 0 && $$bindings.fontStyle && fontStyle !== void 0)
    $$bindings.fontStyle(fontStyle);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.float === void 0 && $$bindings.float && float !== void 0)
    $$bindings.float(float);
  if ($$props.floatSm === void 0 && $$bindings.floatSm && floatSm !== void 0)
    $$bindings.floatSm(floatSm);
  if ($$props.floatMd === void 0 && $$bindings.floatMd && floatMd !== void 0)
    $$bindings.floatMd(floatMd);
  if ($$props.floatLg === void 0 && $$bindings.floatLg && floatLg !== void 0)
    $$bindings.floatLg(floatLg);
  if ($$props.floatXl === void 0 && $$bindings.floatXl && floatXl !== void 0)
    $$bindings.floatXl(floatXl);
  if ($$props.floatXxl === void 0 && $$bindings.floatXxl && floatXxl !== void 0)
    $$bindings.floatXxl(floatXxl);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.col === void 0 && $$bindings.col && col !== void 0)
    $$bindings.col(col);
  if ($$props.colSm === void 0 && $$bindings.colSm && colSm !== void 0)
    $$bindings.colSm(colSm);
  if ($$props.colMd === void 0 && $$bindings.colMd && colMd !== void 0)
    $$bindings.colMd(colMd);
  if ($$props.colLg === void 0 && $$bindings.colLg && colLg !== void 0)
    $$bindings.colLg(colLg);
  if ($$props.colXl === void 0 && $$bindings.colXl && colXl !== void 0)
    $$bindings.colXl(colXl);
  if ($$props.colXxl === void 0 && $$bindings.colXxl && colXxl !== void 0)
    $$bindings.colXxl(colXxl);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  if ($$props.orderSm === void 0 && $$bindings.orderSm && orderSm !== void 0)
    $$bindings.orderSm(orderSm);
  if ($$props.orderMd === void 0 && $$bindings.orderMd && orderMd !== void 0)
    $$bindings.orderMd(orderMd);
  if ($$props.orderLg === void 0 && $$bindings.orderLg && orderLg !== void 0)
    $$bindings.orderLg(orderLg);
  if ($$props.orderXl === void 0 && $$bindings.orderXl && orderXl !== void 0)
    $$bindings.orderXl(orderXl);
  if ($$props.orderXxl === void 0 && $$bindings.orderXxl && orderXxl !== void 0)
    $$bindings.orderXxl(orderXxl);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.offsetSm === void 0 && $$bindings.offsetSm && offsetSm !== void 0)
    $$bindings.offsetSm(offsetSm);
  if ($$props.offsetMd === void 0 && $$bindings.offsetMd && offsetMd !== void 0)
    $$bindings.offsetMd(offsetMd);
  if ($$props.offsetLg === void 0 && $$bindings.offsetLg && offsetLg !== void 0)
    $$bindings.offsetLg(offsetLg);
  if ($$props.offsetXl === void 0 && $$bindings.offsetXl && offsetXl !== void 0)
    $$bindings.offsetXl(offsetXl);
  if ($$props.offsetXxl === void 0 && $$bindings.offsetXxl && offsetXxl !== void 0)
    $$bindings.offsetXxl(offsetXxl);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.rowCols === void 0 && $$bindings.rowCols && rowCols !== void 0)
    $$bindings.rowCols(rowCols);
  if ($$props.rowColsSm === void 0 && $$bindings.rowColsSm && rowColsSm !== void 0)
    $$bindings.rowColsSm(rowColsSm);
  if ($$props.rowColsMd === void 0 && $$bindings.rowColsMd && rowColsMd !== void 0)
    $$bindings.rowColsMd(rowColsMd);
  if ($$props.rowColsLg === void 0 && $$bindings.rowColsLg && rowColsLg !== void 0)
    $$bindings.rowColsLg(rowColsLg);
  if ($$props.rowColsXl === void 0 && $$bindings.rowColsXl && rowColsXl !== void 0)
    $$bindings.rowColsXl(rowColsXl);
  if ($$props.rowColsXxl === void 0 && $$bindings.rowColsXxl && rowColsXxl !== void 0)
    $$bindings.rowColsXxl(rowColsXxl);
  if ($$props.g === void 0 && $$bindings.g && g !== void 0)
    $$bindings.g(g);
  if ($$props.gSm === void 0 && $$bindings.gSm && gSm !== void 0)
    $$bindings.gSm(gSm);
  if ($$props.gMd === void 0 && $$bindings.gMd && gMd !== void 0)
    $$bindings.gMd(gMd);
  if ($$props.gLg === void 0 && $$bindings.gLg && gLg !== void 0)
    $$bindings.gLg(gLg);
  if ($$props.gXl === void 0 && $$bindings.gXl && gXl !== void 0)
    $$bindings.gXl(gXl);
  if ($$props.gXxl === void 0 && $$bindings.gXxl && gXxl !== void 0)
    $$bindings.gXxl(gXxl);
  if ($$props.gx === void 0 && $$bindings.gx && gx !== void 0)
    $$bindings.gx(gx);
  if ($$props.gy === void 0 && $$bindings.gy && gy !== void 0)
    $$bindings.gy(gy);
  if ($$props.alignItems === void 0 && $$bindings.alignItems && alignItems !== void 0)
    $$bindings.alignItems(alignItems);
  if ($$props.alignSelf === void 0 && $$bindings.alignSelf && alignSelf !== void 0)
    $$bindings.alignSelf(alignSelf);
  if ($$props.justifyContent === void 0 && $$bindings.justifyContent && justifyContent !== void 0)
    $$bindings.justifyContent(justifyContent);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.forwardEvents === void 0 && $$bindings.forwardEvents && forwardEvents !== void 0)
    $$bindings.forwardEvents(forwardEvents);
  {
    {
      forwardEvents = forwardEventsBuilder(get_current_component());
      defaultCssProps = {
        bgColor,
        bgGradient,
        bgOpacity,
        border,
        borderTop,
        borderStart,
        borderEnd,
        borderBottom,
        borderColor,
        borderRadius,
        borderRoundSize,
        borderOpacity,
        p,
        pt,
        pb,
        ps,
        pe,
        px,
        py,
        m,
        mt,
        mb,
        ms,
        me,
        mx,
        my,
        gap,
        clearfix,
        ratio,
        sticky,
        fixed,
        d,
        dSm,
        dMd,
        dLg,
        dXl,
        dXxl,
        dPrint,
        shadow,
        w,
        h,
        mw,
        mh,
        position,
        top,
        start,
        bottom,
        end,
        vAlign,
        textColor,
        textAlign,
        textAlignSm,
        textAlignMd,
        textAlignLg,
        textAlignXl,
        textWrap,
        textTransform,
        textDecoration,
        lineHeight,
        textMuted,
        textLead,
        textHeading,
        textTruncate,
        textOpacity,
        fontSize,
        fontWeight,
        fontStyle,
        hidden,
        float,
        floatSm,
        floatMd,
        floatLg,
        floatXl,
        floatXxl,
        container,
        col,
        colSm,
        colMd,
        colLg,
        colXl,
        colXxl,
        order,
        orderSm,
        orderMd,
        orderLg,
        orderXl,
        orderXxl,
        offset,
        offsetSm,
        offsetMd,
        offsetLg,
        offsetXl,
        offsetXxl,
        row,
        rowCols,
        rowColsSm,
        rowColsMd,
        rowColsLg,
        rowColsXl,
        rowColsXxl,
        g,
        gSm,
        gMd,
        gLg,
        gXl,
        gXxl,
        gx,
        gy,
        alignItems,
        alignSelf,
        justifyContent
      };
      classes = classname(defaultCssPrefix, defaultCssProps, "", true);
      if (cssPrefix)
        classes += " " + classname(cssPrefix, cssProps, $$props.class, true);
      otherProps = { id, class: classes, style, tabindex };
    }
  }
  return `${$$slots.default ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), escape_object(otherProps)], {})}${add_attribute("this", element, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${tag === "input" ? `<input${spread([escape_object($$restProps), escape_object(otherProps)], {})}${add_attribute("this", element, 0)}${add_attribute("value", value, 0)}>` : `${tag === "textarea" ? `<textarea${spread([escape_object($$restProps), escape_object(otherProps)], {})}${add_attribute("this", element, 0)}>${value || ""}</textarea>` : `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), escape_object(otherProps)], {})}${add_attribute("this", element, 0)}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`}`}`}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "outline",
    "href",
    "cssPrefix",
    "tag",
    "type",
    "value",
    "size",
    "toggle",
    "color",
    "ghost",
    "loading",
    "active",
    "disabled",
    "pill",
    "tile"
  ]);
  let { outline = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { cssPrefix = "button" } = $$props;
  let { tag = "button" } = $$props;
  let { type = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { toggle = void 0 } = $$props;
  let { color = void 0 } = $$props;
  let { ghost = void 0 } = $$props;
  let { loading = void 0 } = $$props;
  let { active = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { pill = void 0 } = $$props;
  let { tile = void 0 } = $$props;
  let cssProps = {};
  let otherProps = {};
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.ghost === void 0 && $$bindings.ghost && ghost !== void 0)
    $$bindings.ghost(ghost);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.tile === void 0 && $$bindings.tile && tile !== void 0)
    $$bindings.tile(tile);
  {
    {
      cssProps = {
        color,
        outline,
        size,
        toggle,
        ghost,
        loading,
        active,
        disabled,
        pill,
        tile
      };
      otherProps = {
        tag: href ? "a" : tag,
        cssPrefix,
        role: "button",
        type: type !== null && type !== void 0 ? type : "button",
        href
      };
    }
  }
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssProps }, otherProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : `
		${value ? `${escape(value)}` : ``}
	`}`;
    }
  })}`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "cssPrefix",
    "statusCssPrefix",
    "title",
    "stacked",
    "statusColor",
    "statusPosition",
    "statusSize",
    "status",
    "bgColor",
    "borderless",
    "rotate",
    "state",
    "size"
  ]);
  let { cssPrefix = "card" } = $$props;
  let { statusCssPrefix = "card-status" } = $$props;
  let { title = void 0 } = $$props;
  let { stacked = void 0 } = $$props;
  let { statusColor = "primary" } = $$props;
  let { statusPosition = "top" } = $$props;
  let { statusSize = "md" } = $$props;
  let { status = void 0 } = $$props;
  let { bgColor = void 0 } = $$props;
  let { borderless = void 0 } = $$props;
  let { rotate = void 0 } = $$props;
  let { state = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let cssProps = {};
  let otherProps = {};
  let statusCssProps = {};
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.statusCssPrefix === void 0 && $$bindings.statusCssPrefix && statusCssPrefix !== void 0)
    $$bindings.statusCssPrefix(statusCssPrefix);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.statusColor === void 0 && $$bindings.statusColor && statusColor !== void 0)
    $$bindings.statusColor(statusColor);
  if ($$props.statusPosition === void 0 && $$bindings.statusPosition && statusPosition !== void 0)
    $$bindings.statusPosition(statusPosition);
  if ($$props.statusSize === void 0 && $$bindings.statusSize && statusSize !== void 0)
    $$bindings.statusSize(statusSize);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.borderless === void 0 && $$bindings.borderless && borderless !== void 0)
    $$bindings.borderless(borderless);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  {
    {
      cssProps = {
        stacked,
        bgColor,
        borderless,
        rotate,
        state,
        size
      };
      otherProps = { cssPrefix };
      statusCssProps = {
        size: statusSize,
        position: statusPosition,
        color: statusColor
      };
    }
  }
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssProps }, otherProps), {}, {
    default: () => {
      return `${status ? `${validate_component(El, "El").$$render(
        $$result,
        {
          cssPrefix: statusCssPrefix,
          cssProps: statusCssProps
        },
        {},
        {}
      )}` : ``}
	${title ? `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardTitle, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(title)}`;
            }
          })}`;
        }
      })}` : ``}
	${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CardHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["cssPrefix", "light"]);
  let { cssPrefix = "card-header" } = $$props;
  let { light = void 0 } = $$props;
  let cssProps = {};
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  cssProps = { light };
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssProps }, { cssPrefix }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CardTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["cssPrefix"]);
  let { cssPrefix = "card-title" } = $$props;
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssPrefix }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cssProps;
  let $$restProps = compute_rest_props($$props, [
    "backdrop",
    "cssPrefix",
    "tag",
    "absolute",
    "open",
    "persistent",
    "placement",
    "scrollable",
    "size"
  ]);
  var _a, _b, _c;
  let { backdrop = true } = $$props;
  let { cssPrefix = "dialog" } = $$props;
  let { tag = "div" } = $$props;
  let { absolute = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { persistent = void 0 } = $$props;
  let { placement = "top" } = $$props;
  let { scrollable = void 0 } = $$props;
  let { size = "md" } = $$props;
  function hide(force = false) {
    if (!force && persistent)
      return;
    open = false;
  }
  setContext("DIALOG", { hide });
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.absolute === void 0 && $$bindings.absolute && absolute !== void 0)
    $$bindings.absolute(absolute);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.persistent === void 0 && $$bindings.persistent && persistent !== void 0)
    $$bindings.persistent(persistent);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.scrollable === void 0 && $$bindings.scrollable && scrollable !== void 0)
    $$bindings.scrollable(scrollable);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  {
    if (typeof window !== "undefined") {
      if (open) {
        document.body.classList.add((_a = classname("body-dialog-open")) !== null && _a !== void 0 ? _a : "");
      } else {
        if (document.body.classList.contains((_b = classname("body-dialog-open")) !== null && _b !== void 0 ? _b : "")) {
          document.body.classList.remove((_c = classname("body-dialog-open")) !== null && _c !== void 0 ? _c : "");
        }
      }
    }
  }
  cssProps = {
    placement,
    scrollable,
    size,
    open,
    absolute
  };
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { tag }, { cssPrefix }, { cssProps }), {}, {
    default: () => {
      return `${validate_component(El, "El").$$render($$result, { cssPrefix: cssPrefix + "-container" }, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}

${backdrop ? `${validate_component(El, "El").$$render(
    $$result,
    {
      cssPrefix: cssPrefix + "-backdrop",
      cssProps: { open, absolute }
    },
    {},
    {}
  )}` : ``}`;
});
const DialogClose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  let $$restProps = compute_rest_props($$props, ["tag", "cssPrefix"]);
  let { tag = "button" } = $$props;
  let { cssPrefix = "dialog-close" } = $$props;
  const context = getContext("DIALOG");
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  props = {
    "type": "button",
    tag,
    cssPrefix,
    "aria-label": "Close"
  };
  return `${!!context ? `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, props), {}, {})}` : ``}`;
});
const DialogContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["cssPrefix", "tag"]);
  let { cssPrefix = "dialog-content" } = $$props;
  let { tag = "div" } = $$props;
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssPrefix }, { tag }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const DialogFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["cssPrefix", "tag"]);
  let { cssPrefix = "dialog-footer" } = $$props;
  let { tag = "div" } = $$props;
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssPrefix }, { tag }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const DialogHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["cssPrefix", "tag"]);
  let { cssPrefix = "dialog-header" } = $$props;
  let { tag = "div" } = $$props;
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssPrefix }, { tag }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const DialogTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["cssPrefix", "tag"]);
  let { cssPrefix = "dialog-title" } = $$props;
  let { tag = "div" } = $$props;
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssPrefix }, { tag }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cssProps;
  let parentCssProps;
  let otherProps;
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "cssPrefix",
    "tableParentCssPrefix",
    "color",
    "border",
    "hover",
    "striped",
    "wrap",
    "responsive",
    "size",
    "sort"
  ]);
  let { tag = "table" } = $$props;
  let { cssPrefix = "table" } = $$props;
  let { tableParentCssPrefix = "table-parent" } = $$props;
  let { color = void 0 } = $$props;
  let { border = void 0 } = $$props;
  let { hover = void 0 } = $$props;
  let { striped = void 0 } = $$props;
  let { wrap = void 0 } = $$props;
  let { responsive = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { sort = void 0 } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.tableParentCssPrefix === void 0 && $$bindings.tableParentCssPrefix && tableParentCssPrefix !== void 0)
    $$bindings.tableParentCssPrefix(tableParentCssPrefix);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.wrap === void 0 && $$bindings.wrap && wrap !== void 0)
    $$bindings.wrap(wrap);
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  cssProps = {
    color,
    border,
    hover,
    striped,
    wrap,
    size,
    sort
  };
  parentCssProps = { responsive };
  otherProps = { tag, cssPrefix };
  return `${validate_component(El, "El").$$render(
    $$result,
    {
      cssPrefix: tableParentCssPrefix,
      cssProps: parentCssProps,
      tag: "div"
    },
    {},
    {
      default: () => {
        return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssProps }, otherProps), {}, {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        })}`;
      }
    }
  )}`;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "cssPrefix"]);
  let { tag = "tbody" } = $$props;
  let { cssPrefix = "table-body" } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssPrefix }, { tag }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cssProps;
  let $$restProps = compute_rest_props($$props, ["tag", "cssPrefix", "color", "truncate", "active", "colspan"]);
  var _a;
  let { tag = "td" } = $$props;
  let { cssPrefix = "table-cell" } = $$props;
  let { color = void 0 } = $$props;
  let { truncate = void 0 } = $$props;
  let { active = void 0 } = $$props;
  let { colspan = void 0 } = $$props;
  let head = (_a = getContext("TABLE:HEAD")) !== null && _a !== void 0 ? _a : false;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.truncate === void 0 && $$bindings.truncate && truncate !== void 0)
    $$bindings.truncate(truncate);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.colspan === void 0 && $$bindings.colspan && colspan !== void 0)
    $$bindings.colspan(colspan);
  cssProps = { color, truncate, active };
  {
    {
      tag = head ? "th" : "td";
    }
  }
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { colspan }, { cssProps }, { cssPrefix }, { tag }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "cssPrefix"]);
  let { tag = "thead" } = $$props;
  let { cssPrefix = "table-head" } = $$props;
  setContext("TABLE:HEAD", true);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssPrefix }, { tag }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cssProps;
  let $$restProps = compute_rest_props($$props, ["tag", "cssPrefix", "color", "active"]);
  let { tag = "tr" } = $$props;
  let { cssPrefix = "table-row" } = $$props;
  let { color = void 0 } = $$props;
  let { active = void 0 } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  cssProps = { color, active };
  return `${validate_component(El, "El").$$render($$result, Object.assign({}, $$restProps, { cssProps }, { cssPrefix }, { tag }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Input$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cssProps;
  let otherProps;
  let $$restProps = compute_rest_props($$props, [
    "cssPrefix",
    "disabled",
    "borderRounded",
    "borderFlush",
    "mask",
    "maskOptions",
    "placeholder",
    "readonly",
    "size",
    "state",
    "type",
    "value"
  ]);
  let $$slots = compute_slots(slots);
  let { cssPrefix = "input" } = $$props;
  let { disabled = void 0 } = $$props;
  let { borderRounded = void 0 } = $$props;
  let { borderFlush = void 0 } = $$props;
  let { mask = void 0 } = $$props;
  let { maskOptions = void 0 } = $$props;
  let { placeholder = void 0 } = $$props;
  let { readonly = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { state = void 0 } = $$props;
  let { type = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let element;
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.borderRounded === void 0 && $$bindings.borderRounded && borderRounded !== void 0)
    $$bindings.borderRounded(borderRounded);
  if ($$props.borderFlush === void 0 && $$bindings.borderFlush && borderFlush !== void 0)
    $$bindings.borderFlush(borderFlush);
  if ($$props.mask === void 0 && $$bindings.mask && mask !== void 0)
    $$bindings.mask(mask);
  if ($$props.maskOptions === void 0 && $$bindings.maskOptions && maskOptions !== void 0)
    $$bindings.maskOptions(maskOptions);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    cssProps = { size, state, borderRounded, borderFlush };
    otherProps = {
      cssPrefix,
      placeholder,
      disabled,
      readonly,
      type
    };
    $$rendered = `${validate_component(El, "El").$$render(
      $$result,
      {
        cssPrefix: cssPrefix + "-wrapper",
        cssProps: { size }
      },
      {},
      {
        default: () => {
          return `${$$slots.start ? `${slots.start ? slots.start({}) : ``}` : ``}
	${slots.default ? slots.default({}) : ``}
	${validate_component(El, "El").$$render(
            $$result,
            Object.assign({}, { tag: "input" }, $$restProps, otherProps, { cssProps }, { value }, { element }),
            {
              value: ($$value) => {
                value = $$value;
                $$settled = false;
              },
              element: ($$value) => {
                element = $$value;
                $$settled = false;
              }
            },
            {}
          )}
	${$$slots.end ? `${slots.end ? slots.end({}) : ``}` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Checkbox$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let wrapperProps;
  let descriptionProps;
  let $$restProps = compute_rest_props($$props, [
    "cssPrefix",
    "color",
    "checked",
    "description",
    "disabled",
    "indeterminate",
    "inline",
    "label",
    "name",
    "reverse",
    "value"
  ]);
  let $$slots = compute_slots(slots);
  let { cssPrefix = "checkbox" } = $$props;
  let { color = void 0 } = $$props;
  let { checked = false } = $$props;
  let { description = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { indeterminate = false } = $$props;
  let { inline = false } = $$props;
  let { label = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { reverse = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let element;
  let checkboxProps;
  let labelProps;
  if ($$props.cssPrefix === void 0 && $$bindings.cssPrefix && cssPrefix !== void 0)
    $$bindings.cssPrefix(cssPrefix);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    id = element === null || element === void 0 ? void 0 : element.id;
    wrapperProps = {
      cssPrefix: cssPrefix + "-wrapper",
      cssProps: { inline, reverse }
    };
    checkboxProps = {
      ...$$restProps,
      cssPrefix,
      disabled,
      checked,
      value,
      name,
      type: "checkbox",
      tag: "input",
      cssProps: { color, indeterminate }
    };
    labelProps = {
      cssPrefix: cssPrefix + "-label",
      tag: "label",
      for: id
    };
    descriptionProps = { cssPrefix: cssPrefix + "-description" };
    $$rendered = `${validate_component(El, "El").$$render($$result, Object.assign({}, wrapperProps), {}, {
      default: () => {
        return `${validate_component(El, "El").$$render(
          $$result,
          Object.assign({}, checkboxProps, { element }),
          {
            element: ($$value) => {
              element = $$value;
              $$settled = false;
            }
          },
          {}
        )}
	${label || $$slots["default"] ? `${validate_component(El, "El").$$render($$result, Object.assign({}, labelProps), {}, {
          default: () => {
            return `${slots.default ? slots.default({}) : `
				${escape(label)}
			`}`;
          }
        })}` : ``}

	${description || $$slots["description"] ? `${validate_component(El, "El").$$render($$result, Object.assign({}, descriptionProps), {}, {
          default: () => {
            return `${slots.description ? slots.description({}) : `
				${escape(description)}
			`}`;
          }
        })}` : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Tests = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showCard = false;
  let selectedRow = null;
  let pbRecords = [
    {
      mfg: "Sony",
      part_number: "XBR-65X850E",
      desc: '65" BRAVIA 4K HDR Ultra HD TV with Android TV',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 1299,
      selected: false,
      qty: 1
    },
    {
      mfg: "LG",
      part_number: "OLED65C7P",
      desc: '65" OLED 4K HDR Smart TV',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 1499,
      selected: false,
      qty: 1
    },
    {
      mfg: "Panasonic",
      part_number: "TH-65EZ1000U",
      desc: '65" OLED 4K HDR Ultra HD TV',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 2999,
      selected: false,
      qty: 1
    },
    {
      mfg: "Samsung",
      part_number: "UN65MU8500FXZA",
      desc: '65" Curved 4K UHD Smart LED TV',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 1699,
      selected: false,
      qty: 1
    },
    {
      mfg: "Sharp",
      part_number: "PN-R903",
      desc: '90" Class (90-1/16" diagonal) Professional LCD Display',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 8499,
      selected: false,
      qty: 1
    },
    {
      mfg: "NEC",
      part_number: "E905",
      desc: '90" LED Backlit Commercial-Grade Display',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 7999,
      selected: false,
      qty: 1
    },
    {
      mfg: "Panasonic",
      part_number: "TH-98LQ70U",
      desc: '98" Class (97.5" diagonal) Professional 4K UHD LCD Display',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 24999,
      selected: false,
      qty: 1
    },
    {
      mfg: "Sony",
      part_number: "FW-85BZ35F",
      desc: '85" BRAVIA Professional Display with Android TV',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 4499,
      selected: false,
      qty: 1
    },
    {
      mfg: "LG",
      part_number: "98LS95A-5B",
      desc: '98" Ultra HD 4K Commercial Display with Smart Features',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 19999,
      selected: false,
      qty: 1
    },
    {
      mfg: "Samsung",
      part_number: "QH98H",
      desc: '98" QLED 8K UHD Signage',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 69999,
      selected: false,
      qty: 1
    },
    {
      mfg: "Epson",
      part_number: "V11H812020",
      desc: "PowerLite 2150 Wireless Full HD 1080p 3LCD Projector",
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 899,
      selected: false,
      qty: 1
    },
    {
      mfg: "NEC",
      part_number: "P605UL",
      desc: "The P605UL entry level installation projector features advanced technologies at a competitive cost.",
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 800,
      selected: false,
      qty: 1
    },
    {
      mfg: "Samsung",
      part_number: "QB65R",
      desc: '65" commercial display with Edge-Lit LED technology',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 1500,
      selected: false,
      qty: 1
    },
    {
      mfg: "Sony",
      part_number: "VPL-FHZ60L",
      desc: "The VPL-FHZ60 laser projector is ideal for a wide range of business, education and entertainment applications.",
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 3e3,
      selected: false,
      qty: 1
    },
    {
      mfg: "NEC",
      part_number: "E506",
      desc: "Affordable 50-inch LCD display with full HD resolution",
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 700,
      selected: false,
      qty: 1
    },
    {
      mfg: "LG",
      part_number: "65SM8600PUA",
      desc: '65" 4K UHD Smart LED NanoCell TV w/ AI ThinQ®',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 1200,
      selected: false,
      qty: 1
    },
    {
      mfg: "Samsung",
      part_number: "ME95C",
      desc: "95-inch LED backlit LCD commercial display with ultra-narrow bezel",
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 15e3,
      selected: false,
      qty: 1
    },
    {
      mfg: "Sony",
      part_number: "VPL-VZ1000ES",
      desc: "The VPL-VZ1000ES ultra-short throw laser projector offers stunning 4K HDR picture quality from just inches away from the screen.",
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 25e3,
      selected: false,
      qty: 1
    },
    {
      mfg: "Sharp",
      part_number: "PN-LE601",
      desc: '60" Full HD Commercial LCD TV',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 800,
      selected: false,
      qty: 1
    },
    {
      mfg: "NEC",
      part_number: "E905",
      desc: '90" large-screen LCD display with full HD resolution',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 12e3,
      selected: false,
      qty: 1
    },
    {
      mfg: "Sony",
      part_number: "FW-85BZ35F",
      desc: '85" BRAVIA 4K HDR Professional Display',
      unit_cost: Math.floor(Math.random() * 100) + 1,
      unit_price: 3e3,
      selected: false,
      qty: 1
    }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="tests"${add_styles({ "display": `none` })}><div>${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Show PB Records`;
      }
    })}

		${validate_component(Dialog, "Dialog").$$render(
      $$result,
      { size: "md", open: showCard },
      {
        open: ($$value) => {
          showCard = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Card, "Card").$$render($$result, { style: "width: 800px; margin: 2em auto;" }, {}, {
            default: () => {
              return `${validate_component(DialogContent, "DialogContent").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DialogHeader, "DialogHeader").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DialogTitle, "DialogTitle").$$render($$result, {}, {}, {
                        default: () => {
                          return `Product Search`;
                        }
                      })}
						${validate_component(DialogClose, "DialogClose").$$render($$result, {}, {}, {})}`;
                    }
                  })}
					${validate_component(Table, "Table").$$render(
                    $$result,
                    { striped: true, selectedRow },
                    {
                      selectedRow: ($$value) => {
                        selectedRow = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(TableRow, "TableRow").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `Select`;
                                  }
                                })}
								${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `Qty`;
                                  }
                                })}
								${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `Mfg`;
                                  }
                                })}
								${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `Part Number`;
                                  }
                                })}
								${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `Description`;
                                  }
                                })}
								${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `Unit Cost`;
                                  }
                                })}
								${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `Unit Price`;
                                  }
                                })}`;
                              }
                            })}`;
                          }
                        })}
						${validate_component(TableBody, "TableBody").$$render(
                          $$result,
                          {
                            style: "max-height: 300px; overflow-y: auto;"
                          },
                          {},
                          {
                            default: () => {
                              return `${each(pbRecords, (pbRecord) => {
                                return `${validate_component(TableRow, "TableRow").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${validate_component(Checkbox$1, "Checkbox").$$render(
                                          $$result,
                                          {
                                            style: "border-color:blue;",
                                            checked: pbRecord.selected
                                          },
                                          {
                                            checked: ($$value) => {
                                              pbRecord.selected = $$value;
                                              $$settled = false;
                                            }
                                          },
                                          {}
                                        )}`;
                                      }
                                    })}
									${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${validate_component(Input$1, "Input").$$render(
                                          $$result,
                                          {
                                            placeholder: "Qty",
                                            type: "number",
                                            value: pbRecord.qty
                                          },
                                          {
                                            value: ($$value) => {
                                              pbRecord.qty = $$value;
                                              $$settled = false;
                                            }
                                          },
                                          {}
                                        )}`;
                                      }
                                    })}
									${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${escape(pbRecord.mfg)}`;
                                      }
                                    })}
									${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${escape(pbRecord.part_number)}`;
                                      }
                                    })}
									${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${escape(pbRecord.desc)}`;
                                      }
                                    })}
									${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${escape(pbRecord.unit_cost)}`;
                                      }
                                    })}
									${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `${escape(pbRecord.unit_price)}`;
                                      }
                                    })}
								`;
                                  }
                                })}`;
                              })}`;
                            }
                          }
                        )}`;
                      }
                    }
                  )}
					${validate_component(DialogFooter, "DialogFooter").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, { class: "me-auto" }, {}, {
                        default: () => {
                          return `Close`;
                        }
                      })}
						${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
                        default: () => {
                          return `Add Items`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const agGrid = "";
const agThemeMaterial = "";
const jsonFlattenArrayObjectsAsString = (arr) => {
  if (!arr.hasOwnProperty("platform") || !arr.platform.hasOwnProperty("record")) {
    return JSON.stringify([]);
  }
  let record = arr.platform.record;
  return JSON.stringify(
    Array.isArray(record) ? record.map(
      (obj) => Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [
          k,
          v.hasOwnProperty("displayValue") ? v.displayValue : v
        ])
      )
    ) : [
      Object.fromEntries(
        Object.entries(record).map(([k, v]) => [
          k,
          v.hasOwnProperty("displayValue") ? v.displayValue : v
        ])
      )
    ]
  );
};
function unescapeSymbols(inputString) {
  if (!inputString)
    return "";
  const symbols = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&#x2F;": "/",
    "&#x60;": "`",
    "&#x3D;": "=",
    "&#x22;": '"',
    "&#x3C;": "<",
    "&#x3E;": ">",
    "&#x26;": "&",
    "&#x27;": "'",
    "&#x2D;": "-",
    "&#x5F;": "_",
    "&#x2B;": "+",
    "&#x2E;": ".",
    "&#x2A;": "*",
    "&#xfffd;": " "
  };
  return inputString.replace(/&(#x?)?\w+;/g, (match) => {
    const symbol = symbols[match];
    return symbol ? symbol : match;
  });
}
function numberParser(params) {
  const value = Number(params.newValue);
  return isNaN(value) ? NaN : value;
}
function numberValueFormatter(params) {
  const value = parseFloat(params.value);
  if (isNaN(value)) {
    return params.value;
  } else {
    return value.toFixed(2).toString();
  }
}
function percentageValueFormatter(params) {
  const value = parseFloat(params.value);
  if (isNaN(value)) {
    return params.value;
  } else {
    return (value * 100).toFixed(2) + "%";
  }
}
const QuoteItemsGrid_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".svelte-54pbtc .shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:28px 0 0 28px;width:28px}.svelte-54pbtc .shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 28px 28px 0}.ag-theme-material.svelte-54pbtc{--ag-checkbox-background-color:white;--ag-checkbox-checked-color:dodgerblue;--ag-checkbox-unchecked-color:$blue-grey-500;--ag-checkbox-indeterminate-color:grey}.flex-container.svelte-54pbtc{display:flex;align-items:center;justify-content:center;background-color:#f1f1f1}.label-container.svelte-54pbtc{width:80px;margin:0.5rem;text-align:right;font-weight:700}",
  map: null
};
const minWidth = 150;
const QuoteItemsGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const swal = Swal;
  const columnDefs = [
    {
      field: "id",
      editable: false,
      checkboxSelection: true
    },
    {
      field: "job_cost_class",
      headerName: "Cost Class"
    },
    {
      field: "category_id",
      headerName: "Category"
    },
    {
      field: "quantity_total",
      headerName: "Qty.",
      type: "numericColumn",
      editable: true,
      cellEditor: "agTextCellEditor",
      valueFormatter: numberValueFormatter,
      valueParser: numberParser,
      aggFunc: "sum"
    },
    {
      field: "uom",
      width: minWidth,
      headerName: "UoM"
    },
    {
      field: "pricebook_part_number",
      headerName: "Part No.",
      cellStyle: { color: "RebeccaPurple" }
    },
    {
      field: "model_name",
      valueFormatter: (params) => unescapeSymbols(params.value),
      headerName: "Model"
    },
    { field: "mfg_link" },
    {
      field: "manufacturer",
      headerName: "Mfg.",
      valueFormatter: (params) => unescapeSymbols(params.value)
    },
    {
      field: "description",
      headerName: "Description",
      width: 280,
      valueFormatter: (params) => unescapeSymbols(params.value)
    },
    {
      field: "preferred_vendor_display",
      headerName: "Preferred Vendor"
    },
    {
      field: "unit_cost",
      headerName: "Unit Cost",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      valueParser: numberParser,
      editable: true,
      cellEditor: "agTextCellEditor",
      aggFunc: "sum"
    },
    {
      field: "price_modifier",
      headerName: "Price Modifier",
      editable: true,
      cellEditor: "agTextCellEditor",
      onCellValueChanged: (params) => {
        const regex2 = /^(P|M|D)\d{2}$|^X$|^L$/i;
        const match = params.newValue.match(regex2);
        if (!match) {
          alert(`Invalid price modifier format. Format should be one of: 
P##, M##, D##, 
X (without digits)
L (without digits)`);
          params.node.setDataValue("price_modifier", params.oldValue);
        }
      },
      cellEditorParams: {
        validate: (value) => {
          const regex2 = /^(P|M|D)\d{2}$|^X$|^L$/i;
          const match = value.match(regex2);
          if (!match) {
            return {
              valid: false,
              message: "Invalid price modifier format. Format should be one \nof: P##, M##, L, D##, \nX (without digits)\nL (without digits)"
            };
          }
          return { valid: true };
        }
      }
    },
    {
      field: "unit_price",
      headerName: "Unit Price",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      valueParser: numberParser,
      editable: true,
      cellEditor: "agTextCellEditor",
      aggFunc: "sum"
    },
    {
      field: "list_price",
      headerName: "List Price",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      valueParser: numberParser,
      editable: true,
      cellEditor: "agTextCellEditor",
      aggFunc: "sum"
    },
    {
      field: "extended_cost",
      headerName: "Extended Cost",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      valueParser: numberParser,
      aggFunc: "sum",
      enableRowGroup: true,
      enableValue: true
    },
    {
      field: "extended_price",
      headerName: "Extended Cost",
      type: "numericColumn",
      valueFormatter: numberValueFormatter
    },
    {
      field: "extended_list_price",
      headerName: "Extended List",
      type: "numericColumn",
      valueFormatter: numberValueFormatter
    },
    {
      field: "materials_sell",
      headerName: "Materials",
      type: "numericColumn",
      valueFormatter: numberValueFormatter
    },
    {
      field: "freight_sell",
      headerName: "Freight",
      type: "numericColumn",
      valueFormatter: numberValueFormatter
    },
    {
      field: "tax_amount",
      headerName: "Tax",
      type: "numericColumn",
      valueFormatter: numberValueFormatter
    },
    {
      field: "service_sell",
      headerName: "Service",
      type: "numericColumn",
      valueFormatter: numberValueFormatter
    },
    {
      field: "sundries_sell",
      headerName: "Sundries",
      type: "numericColumn",
      valueFormatter: numberValueFormatter
    },
    { field: "apply_cost_discount", hide: true },
    { field: "created_id", hide: true },
    {
      field: "extended_net_cost",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      hide: true
    },
    {
      field: "extended_net_price",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      hide: true
    },
    { field: "date_created", hide: true },
    { field: "date_modified", hide: true },
    {
      field: "div_1",
      headerName: "Location",
      hide: true
    },
    {
      field: "div_2",
      headerName: "System",
      hide: true
    },
    { field: "ishighlighted", hide: true },
    { field: "isoptional", hide: true },
    { field: "istaxable", hide: true },
    { field: "labor_task_code", hide: true },
    { field: "line_attributes", hide: true },
    { field: "object_id", hide: true },
    { field: "owner_id", hide: true },
    { field: "owner_team_id", hide: true },
    { field: "modified_id", hide: true },
    { field: "part_number", hide: true },
    { field: "preferred_vendor", hide: true },
    {
      field: "price_discount_percentage",
      valueFormatter: percentageValueFormatter,
      hide: true
    },
    { field: "name", hide: true },
    {
      field: "net_unit_cost",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      hide: true
    },
    {
      field: "net_unit_price",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      hide: true
    },
    { field: "notes", hide: true },
    { field: "qty_labor_install", hide: true },
    {
      field: "qty_labor_programming",
      hide: true
    },
    {
      field: "related_labor_pricebook",
      hide: true
    },
    { field: "record_locator", hide: true },
    { field: "search_string", hide: true },
    { field: "related_quote", hide: true },
    { field: "related_to", hide: true },
    { field: "search_string", hide: true }
  ];
  const gridOptions = {
    autoGroupColumnDef: {
      cellRendererParams: {
        footerValueGetter: (params) => {
          const isRootLevel = params.node.level === -1;
          if (isRootLevel) {
            return "Grand Total";
          }
          return `Sub Total (${params.value})`;
        }
      }
    },
    columnDefs,
    getContextMenuItems,
    defaultColDef: {
      sortable: true,
      filter: true,
      flex: 1,
      resizable: true,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true
    },
    groupIncludeFooter: true,
    groupIncludeTotalFooter: true,
    pagination: false,
    paginationPageSize: 20,
    rowData: [],
    rowSelection: "multiple",
    sideBar: {
      toolPanels: [
        {
          id: "columns",
          labelDefault: "Columns",
          labelKey: "columns",
          iconKey: "columns",
          toolPanel: "agColumnsToolPanel",
          toolPanelParams: { suppressSyncLayoutWithGrid: true }
        },
        {
          id: "filters",
          labelDefault: "Filters",
          labelKey: "filters",
          iconKey: "filter",
          toolPanel: "agFiltersToolPanel",
          toolPanelParams: { suppressSyncLayoutWithGrid: true }
        },
        {
          id: "customStats",
          labelDefault: "Recap",
          labelKey: "customStats",
          iconKey: "custom-stats",
          toolPanel: "agFiltersToolPanel"
        }
      ],
      defaultToolPanel: ""
    },
    getRowId: (params) => params.data.id,
    onGridReady: () => {
      let recData = [];
      if (recData.length === 0) {
        setTimeout(
          () => {
            fetch("quote.json").then((resp) => resp.json()).then((data) => {
              let qdata = JSON.parse(jsonFlattenArrayObjectsAsString(data));
              recData = qdata;
            }).then(() => {
              gridOptions.api?.setRowData(recData);
            });
          },
          1500
        );
      }
    },
    onRowSelected: () => {
    },
    onCellValueChanged(params) {
      recalculateTotals(params);
      recalculateRates();
    }
  };
  function getContextMenuItems(params) {
    var toastMixin = Swal.mixin({
      toast: true,
      icon: "success",
      title: "General Title",
      position: "center",
      showConfirmButton: false,
      timer: 2e3,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    function onAddRow() {
      console.log("onAddRow");
      Swal.fire({
        title: "Add Row",
        text: "Add a new row to the grid",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Add",
        cancelButtonText: "Cancel"
      }).then((result2) => {
        if (result2.isConfirmed) {
          insertRows();
        }
      });
    }
    function insertRows() {
      console.log("insertRows");
      return true;
    }
    function onRemoveSelected() {
      console.log("onRemoveSelected");
      return true;
    }
    function modifyPricing(pmod) {
      console.log("modifyPricing", pmod);
      return true;
    }
    function getSelectedRows() {
      console.log("getSelectedRows");
      return gridOptions.api?.getSelectedRows();
    }
    function getSelectedNodeData() {
      console.log("getSelectedNodeData");
      return true;
    }
    function updateRowCalcPaste() {
      console.log("updateRowCalcPaste");
      return true;
    }
    function updatePricebook(node, index) {
      console.log("updatePricebook");
      return true;
    }
    let result = [
      {
        name: "Add Row",
        action() {
          onAddRow();
        },
        icon: '<i class="fas fa-plus"></i><img src="" />',
        disabled: false,
        tooltip: "Add Line at end."
      },
      {
        name: "Insert Rows",
        action() {
          insertRows();
        },
        disabled: false,
        icon: '<i class="fas fa-long-arrow-alt-right"></i><img src="" />',
        tooltip: "Insert above cursor line at end."
      },
      {
        name: "Delete Rows",
        action() {
          onRemoveSelected();
        },
        disabled: false,
        tooltip: "Delete the rows selected",
        cssClasses: ["contextmenu-delete-row"],
        icon: '<i class="fas fa-trash"></i><img src="" />'
      },
      "separator",
      {
        name: "Modify Price",
        icon: '<i class="fas fa-pen-alt"></i></i> <img src="" />',
        subMenu: [
          {
            name: "P3",
            action() {
              modifyPricing("P03");
            }
          },
          {
            name: "P5",
            action() {
              modifyPricing("P05");
            }
          },
          {
            name: "P10",
            action() {
              modifyPricing("P10");
            }
          },
          {
            name: "P15",
            action() {
              modifyPricing("P15");
            }
          },
          {
            name: "P20",
            action() {
              modifyPricing("P20");
            }
          },
          {
            name: "P25",
            action() {
              modifyPricing("P25");
            }
          },
          {
            name: "P30",
            action() {
              modifyPricing("P30");
            }
          },
          {
            name: "P35",
            action() {
              modifyPricing("P35");
            }
          },
          {
            name: "P40",
            action() {
              modifyPricing("P40");
            }
          },
          {
            name: "P45",
            action() {
              modifyPricing("P45");
            }
          },
          {
            name: "P50",
            action() {
              modifyPricing("P50");
            }
          }
        ]
      },
      {
        name: "Update Pricebook",
        icon: '<i class="fas fa-funnel-dollar"></i></i> <img src="" />',
        subMenu: [
          {
            name: "Update TO Pricebook",
            action() {
              if (getSelectedRows()) {
                const selectedRowData = getSelectedNodeData();
                selectedRowData.forEach((row) => updatePricebook());
              }
            },
            icon: '<i class="fas fa-arrow-right"></i><img src="" />',
            cssClasses: ["contextmenu-update-to-pricebook"],
            disabled: false,
            tooltip: "Update info TO PriceBook with the selected row data"
          },
          {
            name: "Update FROM Pricebook",
            action() {
              if (getSelectedRows()) {
                const selectedRowData = getSelectedNodeData();
                selectedRowData.forEach((row) => updatePricebook());
              }
              Swal.fire({
                title: "Update FROM Pricebook",
                text: "Selected rows pricing has been updated from the pricebook",
                icon: "success",
                allowEnterKey: false
              });
            },
            icon: '<i class="fas fa-arrow-left"></i><img src="" />',
            cssClasses: ["contextmenu-update-from-pricebook"],
            disabled: false,
            tooltip: "Update selected rows FROM PriceBook "
          }
        ]
      },
      "separator",
      {
        name: "Toggle Optional",
        action() {
          let selectedNodes = gridOptions.api?.getSelectedNodes();
          selectedNodes?.forEach((node, index) => {
            if (node.data.isoptional === "N") {
              node.setDataValue("isoptional", "Y");
            } else {
              node.setDataValue("isoptional", "N");
            }
            updateRowCalcPaste();
          });
        },
        icon: '<i class="fas fa-toggle-on"></i> <img src ="" />',
        disabled: false,
        tooltip: "Modify"
      },
      {
        name: "Highlight Row",
        action() {
          let selectedNodes = gridOptions.api?.getSelectedNodes();
          selectedNodes?.forEach((node, index) => {
            if (node.data.ishighlighted === "N") {
              node.setDataValue("ishighlighted", "Y");
            } else {
              node.setDataValue("ishighlighted", "N");
            }
            updateRowCalcPaste();
          });
        },
        icon: '<i class="fas fa-highlighter"></i><img src="" />',
        disabled: false,
        tooltip: "Sets the line color to yellow"
      },
      "separator",
      {
        name: "Locations",
        icon: '<i class="fas fa-building"></i><img src="" />',
        disabled: false,
        tooltip: "Add a Quote Location",
        subMenu: [
          {
            name: "Add Location",
            async action() {
              let inputValue = "new...";
              const locationName = await Swal.fire({
                title: "Add a Location",
                input: "text",
                inputLabel: "Location Name ",
                inputValue,
                showCancelButton: true,
                inputValidator: (inputValue2) => {
                  return new Promise((resolve) => {
                    if (inputValue2) {
                      resolve();
                    } else {
                      resolve("Loaction cannot be empty");
                    }
                  });
                }
              });
              if (locationName.value) {
                locationValues.push(locationName.value);
                sortArray(locationValues);
                toastMixin.fire({
                  animation: true,
                  title: "Location Added Successfully"
                });
              }
            }
          },
          {
            name: "Rename Location",
            action() {
              toastMixin.fire({
                animation: true,
                icon: "info",
                title: "Location Rename action"
              });
            }
          },
          {
            name: "Delete Location",
            action() {
              toastMixin.fire({
                animation: true,
                icon: "warning",
                title: "Location Delete action"
              });
            }
          }
        ]
      },
      {
        name: "Systems",
        icon: '<i class="fas fa-building"></i><img src="" />',
        disabled: false,
        tooltip: "Add a Quote Systems",
        subMenu: [
          {
            name: "Add System",
            async action() {
              let inputValue = "new...";
              const systemName = await Swal.fire({
                title: "Add a System",
                input: "text",
                inputLabel: "System Name ",
                inputValue,
                showCancelButton: true,
                inputValidator: (inputValue2) => {
                  return new Promise((resolve) => {
                    if (inputValue2) {
                      resolve();
                    } else {
                      resolve("System cannot be empty");
                    }
                  });
                }
              });
              if (systemName.value) {
                systemValues.push(systemName.value);
                sortArray(systemValues);
                toastMixin.fire({
                  animation: true,
                  title: "Location Added Successfully"
                });
              }
            }
          },
          {
            name: "Rename System",
            action() {
              toastMixin.fire({
                animation: true,
                icon: "info",
                title: "System Rename action"
              });
            }
          },
          {
            name: "Delete System",
            action() {
              toastMixin.fire({
                animation: true,
                icon: "warning",
                title: "System Delete action"
              });
            }
          }
        ]
      },
      "separator",
      "copy",
      "copyWithHeaders",
      "separator",
      "export",
      "separator",
      "chartRange"
    ];
    return result;
  }
  function recalculateTotals(params) {
    function calculateUnitPrice(row2) {
      const pMod = row2.price_modifier.toUpperCase();
      const modifierFunctions = {
        P: (multiplier) => row2.unit_cost / ((100 - multiplier) / 100),
        M: (multiplier) => row2.unit_cost * (1 + multiplier / 100),
        L: () => row2.list_price,
        D: (discount) => row2.list_price * (1 - discount / 100),
        X: () => row2.unit_price
      };
      const regex2 = /^(P|M|L|D|X)(\d{2})$/;
      const match = pMod.match(regex2);
      if (!match) {
        return;
      }
      const modifier = match[1];
      const value = parseInt(match[2]);
      const calculatePrice = modifierFunctions[modifier];
      if (calculatePrice) {
        return calculatePrice(value);
      } else {
        console.log(`Invalid price modifiers: ${pMod}`);
      }
    }
    let row = params.data;
    const unit_price = calculateUnitPrice(row) || row.unit_price;
    if (row.price_modifier === "L") {
      row.unit_price = row.list_price;
    } else {
      row.unit_price = unit_price;
    }
    row.extended_cost = parseFloat(row.quantity_total) * parseFloat(row.unit_cost);
    row.extended_price = parseFloat(row.quantity_total) * parseFloat(unit_price);
    row.extended_list_price = parseFloat(row.quantity_total) * parseFloat(row.list_price);
    row.extended_net_cost = row.extended_cost;
    row.extended_net_price = row.extended_price;
    row.price_modifier = row.price_modifier.toUpperCase();
    row.materials_sell = row.job_cost_class == "Equipment" ? parseFloat(row.extended_price) * rates.material / 100 : row.materials_sell;
    row.freight_sell = row.job_cost_class == "Equipment" ? parseFloat(row.extended_price) * rates.freight / 100 : row.freight_sell;
    row.tax_amount = row.istaxable ? parseFloat(row.extended_price) * rates.tax / 100 : row.tax_amount;
    row.service_sell = row.job_cost_class == "Equipment" ? parseFloat(row.extended_price) * rates.service / 100 : row.service_sell;
    gridOptions.api?.applyTransaction(row);
  }
  function recalculateRates() {
    gridOptions.api?.forEachNode((node) => {
      const data = node.data;
      data.materials_sell = parseFloat(data.extended_price) * rates.material / 100;
      data.freight_sell = parseFloat(data.extended_price) * rates.freight / 100;
      data.tax_amount = parseFloat(data.extended_price) * rates.tax / 100;
      data.service_sell = parseFloat(data.extended_price) * rates.service / 100;
      gridOptions.api?.applyTransaction(data);
    });
  }
  let filterString = "";
  const onFilterStringChange = () => {
    gridOptions.api?.setQuickFilter(filterString);
  };
  let pricebookSearchString = "";
  const onpricebookSearchString = () => {
    console.log({ pricebookSearchString });
  };
  let rates = {
    material: 6,
    freight: 6,
    tax: 6,
    service: 10
  };
  if ($$props.swal === void 0 && $$bindings.swal && swal !== void 0)
    $$bindings.swal(swal);
  if ($$props.getContextMenuItems === void 0 && $$bindings.getContextMenuItems && getContextMenuItems !== void 0)
    $$bindings.getContextMenuItems(getContextMenuItems);
  if ($$props.recalculateTotals === void 0 && $$bindings.recalculateTotals && recalculateTotals !== void 0)
    $$bindings.recalculateTotals(recalculateTotals);
  if ($$props.recalculateRates === void 0 && $$bindings.recalculateRates && recalculateRates !== void 0)
    $$bindings.recalculateRates(recalculateRates);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      onFilterStringChange();
    }
    {
      onpricebookSearchString();
    }
    $$rendered = `<div id="ag-grid" class="ag-theme-material svelte-54pbtc"${add_styles({
      "display": `none`,
      "flex-direction": `column`,
      "height": `800px`
    })}><div class="flex-container svelte-54pbtc">${validate_component(Button$1, "Button").$$render($$result, { color: "secondary" }, {}, {
      default: () => {
        return `rates
			${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `menu`;
          }
        })}`;
      }
    })}
		${validate_component(Button$1, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Save State`;
      }
    })}
		${validate_component(Button$1, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Restore State`;
      }
    })}
		${validate_component(Button$1, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Reset State`;
      }
    })}</div>
	<div class="flex-container svelte-54pbtc" id="rates" style="display:none"><labl class="label-container svelte-54pbtc">Materials</labl>
		${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        style: "width: 120px; height:40px; margin-right: 10px;",
        variant: "outlined",
        type: "number",
        input$step: ".1",
        value: rates.material
      },
      {
        value: ($$value) => {
          rates.material = $$value;
          $$settled = false;
        }
      },
      {
        trailingIcon: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              class: "material-icons",
              slot: "trailingIcon"
            },
            {},
            {
              default: () => {
                return `percent`;
              }
            }
          )}`;
        }
      }
    )}
		<labl class="label-container svelte-54pbtc">Freight</labl>
		${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        style: "width: 120px; height:40px; margin-right: 10px;",
        variant: "outlined",
        type: "number",
        input$step: ".1",
        value: rates.freight
      },
      {
        value: ($$value) => {
          rates.freight = $$value;
          $$settled = false;
        }
      },
      {
        trailingIcon: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              class: "material-icons",
              slot: "trailingIcon"
            },
            {},
            {
              default: () => {
                return `percent`;
              }
            }
          )}`;
        }
      }
    )}
		<labl class="label-container svelte-54pbtc">Tax</labl>
		${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        style: "width: 120px; height:40px; margin-right: 10px;",
        variant: "outlined",
        type: "number",
        input$step: ".1",
        value: rates.tax
      },
      {
        value: ($$value) => {
          rates.tax = $$value;
          $$settled = false;
        }
      },
      {
        trailingIcon: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              class: "material-icons",
              slot: "trailingIcon"
            },
            {},
            {
              default: () => {
                return `percent`;
              }
            }
          )}`;
        }
      }
    )}
		<labl class="label-container svelte-54pbtc">Service</labl>
		${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        style: "width: 120px; height:40px; margin-right: 10px;",
        variant: "outlined",
        type: "number",
        input$step: ".1",
        value: rates.service
      },
      {
        value: ($$value) => {
          rates.service = $$value;
          $$settled = false;
        }
      },
      {
        trailingIcon: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              class: "material-icons",
              slot: "trailingIcon"
            },
            {},
            {
              default: () => {
                return `percent`;
              }
            }
          )}`;
        }
      }
    )}
		<br class="svelte-54pbtc">
		<hr class="svelte-54pbtc"></div>

	<div style="display: flex; justify-content: space-between;" class="svelte-54pbtc"><div style="text-align: start; margin-bottom: 15px;" class="svelte-54pbtc">${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        class: "shaped-outlined",
        variant: "standard",
        style: "width: 600px;",
        label: "Search Pricebook",
        value: pricebookSearchString
      },
      {
        value: ($$value) => {
          pricebookSearchString = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(Button$1, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `search`;
          }
        })}`;
      }
    })}</div>
		<div style="text-align: end; margin-bottom: 15px;" class="svelte-54pbtc">${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        class: "shaped-outlined",
        variant: "standard",
        label: "Find",
        value: filterString
      },
      {
        value: ($$value) => {
          filterString = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
classAdderBuilder({
  class: "smui-card__content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__media-content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__action-buttons",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__action-icons",
  tag: "div"
});
const Search_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "body{margin:0;padding:0}:root{--mdc-theme-primary:rgba(39, 119, 245, 0.8) ;--mdc-theme-secondary:#676778;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b71c1c;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:white);--mdc-theme-text-secondary-on-background:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-light:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-light:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-dark:white;--mdc-theme-text-secondary-on-dark:rgba(255, 255, 255, 0.7);--mdc-theme-text-hint-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-disabled-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-icon-on-dark:rgba(255, 255, 255, 0.5)}:root{--mdc-layout-grid-margin-desktop:24px;--mdc-layout-grid-gutter-desktop:24px;--mdc-layout-grid-column-width-desktop:72px;--mdc-layout-grid-margin-tablet:16px;--mdc-layout-grid-gutter-tablet:16px;--mdc-layout-grid-column-width-tablet:72px;--mdc-layout-grid-margin-phone:16px;--mdc-layout-grid-gutter-phone:16px;--mdc-layout-grid-column-width-phone:72px}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pbRecord = {
    mfg: "Crestron",
    part_number: "DMPS4-350-AEC-W",
    desc: "A wonder product that solves all needs from all people all the time",
    unit_cost: Math.floor(Math.random() * 100) + 1,
    unit_price: 200
  };
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-8khjkg_START --><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"><link rel="stylesheet" href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"><link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css"><!-- HEAD_svelte-8khjkg_END -->`, ""}
<div id="search">

	<main style="padding: 1em;">${`<p class="mdc-typography--body1">Search for products</p>
			${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        label: "PartNo",
        value: pbRecord.part_number
      },
      {
        value: ($$value) => {
          pbRecord.part_number = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(Button$1, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Submit`;
      }
    })}`}</main>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
function createForms() {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    save: (newForm) => update((forms) => {
      const form = forms.find((form2) => form2.form_name === newForm.form_name);
      if (!form) {
        forms = [...forms, newForm];
      } else {
        forms = forms.map((form2) => form2.form_name === newForm.form_name ? newForm : form2);
      }
      return forms;
    }),
    reset: () => set([]),
    resetValues: (form_name2) => update((forms) => {
      forms.map((form) => {
        if (form.form_name === form_name2) {
          form.fields.map((field) => {
            field.value = null;
            form.values[field.name] = null;
          });
        }
        return form;
      });
      return forms;
    }),
    updateFieldValue: (form_name2, field_name, field_value) => update((forms) => {
      const _forms = forms.map((form) => {
        if (form.form_name === form_name2) {
          form.fields.map((field) => {
            if (field.name === field_name) {
              field.value = field_value;
              form.values[field_name] = field_value;
              form.values["touched"] = field_name;
            }
            return field;
          });
        }
        return form;
      });
      return _forms;
    })
  };
}
const storeForms = createForms();
async function getValues(form_name2) {
  const forms = await get_store_value(storeForms);
  const form = forms.find((form2) => form2.form_name === form_name2);
  return form ? form?.values : {};
}
function isRequired(field) {
  if (field.rules) {
    if (field.rules.length > 0) {
      return true;
    }
  }
  return false;
}
function isFieldDuplicated(fields) {
  let seen = {};
  return fields.some(function(currentObject) {
    if (seen.hasOwnProperty(currentObject.name) || seen.hasOwnProperty(currentObject.attributes.id)) {
      return true;
    }
    return seen[currentObject.name] = false, seen[currentObject.attributes.id] = false;
  });
}
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { prefix: prefix2 } = $$props;
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix2 !== void 0)
    $$bindings.prefix(prefix2);
  return `${((tag) => {
    return tag ? `<${prefix2.tag ?? "div"}${add_attribute("class", prefix2.classes?.join(" "), 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(prefix2.tag ?? "div")}`;
});
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  let { messages = {} } = $$props;
  const rules = [
    {
      rule: "required",
      message: "This field is required"
    },
    {
      rule: "min",
      message: "This field must be more characters long"
    },
    {
      rule: "max",
      message: "This field must be less characters long"
    },
    {
      rule: "between",
      message: "This field must be between values defined"
    },
    {
      rule: "equal",
      message: "This field must be equal to value defined"
    },
    {
      rule: "email",
      message: "This email format is not valid"
    },
    {
      rule: "extensions",
      message: "Must to allowed file types"
    },
    {
      rule: "maxSize",
      message: "This file has size more than max size"
    },
    { rule: "custom_rule", message: "Error" }
  ];
  const displayError = (rule) => {
    let message = "";
    if (messages[rule]) {
      message += messages[rule] ?? getMessageByRule(rule);
    } else {
      message += getMessageByRule(rule);
    }
    return message;
  };
  const getMessageByRule = (rule) => {
    const data = rules.find((r) => r.rule === rule);
    return data ? data.message : rules.find((r) => r.rule === "custom_rule").message;
  };
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  return `${error ? `<div class="invalid-feedback error">${escape(displayError(error))}</div>` : ``}`;
});
const Dirty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${field.validation && field.validation.errors.length ? `${each(field.validation.errors, (error) => {
    return `${validate_component(Message, "Message").$$render(
      $$result,
      {
        error,
        messages: field.messages ? field.messages : []
      },
      {},
      {}
    )}`;
  })}` : ``}`;
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  createEventDispatcher();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<input${add_attribute("value", field.value ?? null, 0)}${add_attribute("type", field.attributes.type, 0)}${add_attribute("id", field.attributes.id, 0)}${add_attribute("class", field.attributes.classes?.join(" "), 0)}${add_attribute("placeholder", field.attributes.placeholder, 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${field.attributes.readonly ? "readonly" : ""}${add_attribute("min", field.attributes.min, 0)}${add_attribute("max", field.attributes.max, 0)}${add_attribute("step", field.attributes.step, 0)}${add_attribute("autocomplete", field.attributes.autocomplete, 0)}>`;
});
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  createEventDispatcher();
  const is_multiple = field.extra.multiple ?? false;
  const checkSelected = (option_value, field_value) => {
    if (is_multiple) {
      if (field_value && field_value.length) {
        const res = field_value.indexOf(option_value) != -1;
        return res;
      } else if (field.value && field.value.length) {
        const res = field.value.indexOf(option_value) != -1;
        return res;
      }
      return false;
    }
    return option_value === field_value;
  };
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<select${add_attribute("name", field.name, 0)}${add_attribute("id", field.attributes.id, 0)}${add_attribute("class", field.attributes.classes?.join(" "), 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${(field.extra && field.extra.multiple ? field.extra.multiple : false) ? "multiple" : ""}>${field.extra ? `${field.extra.options ? `${each(field.extra.options, (option) => {
    return `<option${add_attribute("value", option.value, 0)} ${checkSelected(option.value, field.value) ? "selected" : ""}>${escape(option.title)}
				</option>`;
  })}` : ``}` : ``}</select>`;
});
const File = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  let inputFile;
  createEventDispatcher();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<input${add_attribute("type", field.type, 0)}${add_attribute("name", field.name, 0)}${add_attribute("id", field.attributes.id, 0)}${add_attribute("class", field.attributes.classes?.join(" "), 0)} ${""}${add_attribute("this", inputFile, 0)}>

${field.file ? `<div class="file-rules"><ul>${each(Object.entries(field.file), ([rule, ruleValue]) => {
    return `<li><strong>${escape(rule)}</strong>: ${escape(ruleValue)}</li>`;
  })}</ul></div>` : ``}

${``}`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  createEventDispatcher();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<textarea${add_attribute("id", field.attributes.id, 0)}${add_attribute("class", field.attributes.classes?.join(" "), 0)}${add_attribute("placeholder", field.attributes.placeholder, 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${field.attributes.readonly ? "readonly" : ""}${add_attribute("rows", field.attributes.rows, 0)}${add_attribute("cols", field.attributes.cols, 0)}>${escape(field.value ?? null, true)}</textarea>`;
});
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  const dispatch = createEventDispatcher();
  let values = [];
  if (field.extra.items.length > 0) {
    field.extra.items.map((item) => {
      if (item.checked) {
        values = [...values, item.value];
        field.value = field.value ? [...field.value, item.value] : values;
      }
    });
    dispatch("changeValue", { name: field.name, value: values });
  }
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${each(field.extra.items, (item) => {
    return `<input${add_attribute("type", field.type, 0)}${add_attribute("class", field.attributes.classes?.join(" "), 0)}${add_attribute("value", item.value, 0)}${add_attribute("name", item.name, 0)} ${item.checked ?? false ? "checked" : ""} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""}>
	<span>${escape(item.title)}</span>`;
  })}`;
});
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  createEventDispatcher();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${each(field.extra.items, (item, i) => {
    return `<input${add_attribute("type", field.type, 0)}${add_attribute("class", field.attributes.classes?.join(" "), 0)}${add_attribute("id", item.id, 0)}${add_attribute("name", field.name, 0)}${add_attribute("value", item.value, 0)} ${item.value === field.value ? "checked" : ""}>
	<span>${escape(item.title)}</span>`;
  })}`;
});
const AutoComplete_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".autocomplete-wrapper.svelte-1m9l8b1.svelte-1m9l8b1{position:relative;width:100%}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items.svelte-1m9l8b1{margin-bottom:10px;width:100%;display:flex;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;gap:10px}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .item.svelte-1m9l8b1{font-size:0.75rem;padding:0.5rem;background-color:#ff3e00;color:white;border-radius:5px}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .item .deselect.svelte-1m9l8b1{border-radius:50%;width:15px;height:15px;padding:2px 7px 3px 7px;font-size:0.6rem;background-color:#333333;border:solid 1px rgba(255, 255, 255, 0.2);color:white}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .item .deselect.svelte-1m9l8b1:hover{box-shadow:0px 0px 4px 1px rgba(255, 255, 255, 0.8)}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .deselect.svelte-1m9l8b1{cursor:pointer}.autocomplete-wrapper.svelte-1m9l8b1 .list-items.svelte-1m9l8b1{box-shadow:0 2px 3px 0 rgba(249, 251, 253, 0.24);margin-bottom:20px}.autocomplete-wrapper.svelte-1m9l8b1 .list-items ul.svelte-1m9l8b1,.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.svelte-1m9l8b1{list-style:none;padding:0;margin:0;color:black;background-color:rgb(201, 201, 201)}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.svelte-1m9l8b1{border-bottom:1px dashed #999999;padding:0.75rem;cursor:pointer}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.done.svelte-1m9l8b1{background-color:#1f2d38 !important;border-bottom-color:transparent;color:white;text-align:center}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.done.svelte-1m9l8b1:hover{border-bottom-color:transparent}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.svelte-1m9l8b1:hover{background-color:rgba(255, 64, 0, 0.6117647059);border-bottom:1px dashed #ff3e00;color:white}",
  map: null
};
const AutoComplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  createEventDispatcher();
  let value = null;
  let itemsFiltered = [];
  let selectedItems = [];
  let showList = false;
  if (field.extra) {
    if (field.extra.loadItemes) {
      field.extra.loadItemes;
    }
    if (field.extra.filter_length) {
      field.extra.filter_length;
    }
  }
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  $$result.css.add(css$1);
  return `<div class="autocomplete-wrapper svelte-1m9l8b1"><div class="selected-items svelte-1m9l8b1">${each(selectedItems, (item) => {
    return `<div class="item svelte-1m9l8b1"><span>${escape(item.title)}</span>
				<span class="deselect svelte-1m9l8b1">x</span>
			</div>`;
  })}</div>

	<input type="text"${add_attribute("id", field.attributes.id, 0)} class="${escape(null_to_empty(field.attributes.classes?.join(" ")), true) + " svelte-1m9l8b1"}"${add_attribute("autocorrect", field.attributes.autocorrect, 0)}${add_attribute("autocomplete", field.attributes.autocomplete, 0)}${add_attribute("placeholder", field.attributes.placeholder, 0)}${add_attribute("value", value, 0)}>

	${itemsFiltered.length && showList ? `<div class="list-items svelte-1m9l8b1"><ul class="svelte-1m9l8b1">${each(itemsFiltered, (item) => {
    return `<li class="svelte-1m9l8b1">${escape(item.title)}</li>`;
  })}
				<li class="done svelte-1m9l8b1">Close
				</li></ul></div>` : ``}
</div>`;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${field.attributes ? `${field.attributes.label ? `<label${add_attribute("for", field.attributes.id, 0)} class="label">${escape(field.attributes.label)}</label>` : ``}` : ``}`;
});
const Formly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ListFieldType = [
    { type: "input", component: Input },
    { type: "select", component: Select },
    { type: "file", component: File },
    { type: "textarea", component: Textarea },
    { type: "checkbox", component: Checkbox },
    { type: "radio", component: Radio },
    {
      type: "autocomplete",
      component: AutoComplete
    }
  ];
  const getFieldByType = ({ type }) => {
    return ListFieldType.find((field) => field.type === type)?.component;
  };
  let { fields = [] } = $$props;
  let { btnSubmit = { text: "Submit" } } = $$props;
  let { btnReset = { text: "Reset" } } = $$props;
  let { form_name: form_name2 = "" } = $$props;
  let { realtime = false } = $$props;
  let _formEl;
  createEventDispatcher();
  let values = {};
  let current_form = { form_name: form_name2, fields, values, valid: true };
  const is_duplicated = isFieldDuplicated(fields);
  storeForms.save(current_form);
  if ($$props.fields === void 0 && $$bindings.fields && fields !== void 0)
    $$bindings.fields(fields);
  if ($$props.btnSubmit === void 0 && $$bindings.btnSubmit && btnSubmit !== void 0)
    $$bindings.btnSubmit(btnSubmit);
  if ($$props.btnReset === void 0 && $$bindings.btnReset && btnReset !== void 0)
    $$bindings.btnReset(btnReset);
  if ($$props.form_name === void 0 && $$bindings.form_name && form_name2 !== void 0)
    $$bindings.form_name(form_name2);
  if ($$props.realtime === void 0 && $$bindings.realtime && realtime !== void 0)
    $$bindings.realtime(realtime);
  return `${current_form ? `${is_duplicated ? `${validate_component(Error$1, "Error").$$render($$result, {}, {}, {
    default: () => {
      return `<p><code><b>Error! Detect duplicate fields(name or id attributes), make sure you put unique name
						and id for each field.</b></code></p>`;
    }
  })}` : `<form${add_attribute("this", _formEl, 0)}>${each(current_form.fields, (field) => {
    return `${field.prefix?.tag ? `${validate_component(Tag, "Tag").$$render($$result, { prefix: field.prefix }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { field }, {}, {})}
						${validate_component(getFieldByType(field) || missing_component, "svelte:component").$$render($$result, { field }, {}, {})}
						${validate_component(Dirty, "Dirty").$$render($$result, { field }, {}, {})}
					`;
      }
    })}` : `${validate_component(Label, "Label").$$render($$result, { field }, {}, {})}
					${validate_component(getFieldByType(field) || missing_component, "svelte:component").$$render($$result, { field }, {}, {})}
					${validate_component(Dirty, "Dirty").$$render($$result, { field }, {}, {})}`}`;
  })}
			<button type="submit"${add_attribute(
    "class",
    btnSubmit.classes && btnSubmit.classes?.length ? btnSubmit.classes?.join(" ") : null,
    0
  )}>${escape(btnSubmit.text)}</button>
			<button type="reset"${add_attribute(
    "class",
    btnReset.classes && btnReset.classes?.length ? btnReset.classes?.join(" ") : null,
    0
  )}>${escape(btnReset.text)}</button></form>`}` : ``}`;
});
const form_name = "formly_usage";
async function customRule2() {
  return true;
}
const Formly_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const fields = [
    {
      type: "input",
      name: "firstname",
      attributes: {
        type: "text",
        id: "firstname",
        classes: ["form-control"],
        placeholder: "First name"
      },
      rules: ["required", "min:3", "max:10"],
      messages: {
        required: "The firstname is required",
        min: "Your first name is too short min=3",
        max: "Your first name is too long max=10"
      }
    },
    {
      type: "input",
      name: "lastname",
      attributes: {
        id: "lastname",
        placeholder: "First name"
      },
      rules: [
        "required",
        { name: "notEqual", fnc: notEqual },
        { name: "customRule2", fnc: customRule2 }
      ],
      messages: {
        notEqual: "Last name not equal to First name",
        customRule2: "foo bar"
      }
    },
    {
      type: "input",
      name: "companyname",
      attributes: {
        type: "text",
        id: "companyname",
        classes: ["form-control"],
        placeholder: "Company Name"
      }
    },
    {
      type: "input",
      name: "accountid",
      attributes: {
        type: "text",
        id: "accountid",
        classes: ["form-control"],
        placeholder: "Account ID"
      }
    },
    {
      type: "input",
      name: "address1",
      attributes: {
        type: "text",
        id: "address1",
        classes: ["form-control"],
        placeholder: "Address 1"
      }
    },
    {
      type: "input",
      name: "address2",
      attributes: {
        type: "text",
        id: "address2",
        classes: ["form-control"],
        placeholder: "Address 2"
      }
    },
    {
      type: "input",
      name: "city",
      attributes: {
        type: "text",
        id: "city",
        classes: ["form-control"],
        placeholder: "City"
      }
    },
    {
      type: "input",
      name: "state",
      attributes: {
        type: "text",
        id: "state",
        classes: ["form-control"],
        placeholder: "State"
      }
    },
    {
      type: "input",
      name: "zip_code",
      attributes: {
        type: "text",
        id: "zip_code",
        classes: ["form-control"],
        placeholder: "Zip Code"
      }
    },
    {
      type: "input",
      name: "name-field-tel",
      value: "",
      attributes: {
        type: "tel",
        id: "id-field-tel",
        classes: ["form-control"],
        label: "Phone Number",
        placeholder: "(555)555-1212",
        disabled: false,
        readonly: false
      }
    },
    {
      type: "input",
      name: "email",
      attributes: {
        type: "text",
        id: "email",
        classes: ["form-control-email"],
        placeholder: "Email"
      },
      rules: ["required", "email"],
      messages: {
        required: "The email is required",
        email: "Please enter a valid email"
      }
    }
  ];
  async function notEqual() {
    const values = await getValues(form_name);
    console.log("values:", values);
    if (values.firstname === values.lastname2) {
      return false;
    }
    return true;
  }
  return `<div id="forms" style="display: none; flex-direction: column; align-items: center;"><h1>Formly</h1>
	${validate_component(Formly, "Formly").$$render(
    $$result,
    {
      form_name,
      fields,
      btnSubmit: {
        text: "Submit alter",
        classes: ["btn", "btn-primary"]
      },
      btnReset: {
        text: "Reset alter",
        classes: ["btn", "btn-secondary"]
      }
    },
    {},
    {}
  )}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-96wmxi .shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:28px 0 0 28px;width:28px}.svelte-96wmxi .shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 28px 28px 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const sections = [
    { id: "quote-info", label: "Quote Info" },
    { id: "client", label: "Client" },
    { id: "ag-grid", label: "Items" },
    { id: "search", label: "Search" },
    { id: "tests", label: "Tests" },
    { id: "forms", label: "Formly" }
  ];
  $$result.css.add(css);
  return `<div style="display: flex; justify-content: space-between; align-items: center;" class="svelte-96wmxi"><div class="svelte-96wmxi">${each(sections, (section) => {
    return `${validate_component(Button$1, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(section.label)}`;
      }
    })}`;
  })}</div>

	<div style="margin-left: 10px;" class="svelte-96wmxi">${validate_component(Select$1, "Select").$$render(
    $$result,
    {
      class: "shaped-filled",
      variant: "outlined"
    },
    {},
    {
      default: () => {
        return `${validate_component(Option, "Option").$$render($$result, { value: "" }, {}, {
          default: () => {
            return `Views`;
          }
        })}
			${validate_component(Option, "Option").$$render($$result, { value: "my_views" }, {}, {
          default: () => {
            return `My Views`;
          }
        })}
			${validate_component(Option, "Option").$$render($$result, { value: "public_views" }, {}, {
          default: () => {
            return `Public Views`;
          }
        })}
			${validate_component(Option, "Option").$$render($$result, { value: "new_view" }, {}, {
          default: () => {
            return `New View`;
          }
        })}
			${validate_component(Option, "Option").$$render($$result, { value: "edit_view" }, {}, {
          default: () => {
            return `Edit View`;
          }
        })}
			${validate_component(Option, "Option").$$render($$result, { value: "delete_view" }, {}, {
          default: () => {
            return `Delete View`;
          }
        })}`;
      }
    }
  )}</div></div>

<hr class="svelte-96wmxi">
${validate_component(QuoteInfo, "QuoteInfo").$$render($$result, {}, {}, {})}

${validate_component(Client, "Client").$$render($$result, {}, {}, {})}
${validate_component(Tests, "Rates").$$render($$result, {}, {}, {})}
${validate_component(QuoteItemsGrid, "QuoteItemsGrid").$$render($$result, {}, {}, {})}
${validate_component(Search, "Search").$$render($$result, {}, {}, {})}
${validate_component(Formly_1, "Formly").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
