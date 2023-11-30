import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import t from 'prop-types';
const prefixCls = 'happy-alert';
const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
};
const Alert = _ref => {
  let {
    children,
    kind = 'info',
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: prefixCls,
    style: {
      background: kinds[kind]
    }
  }, rest), children);
};
Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
};
export default Alert;