/* @ds-bundle: {"format":4,"namespace":"IjaraCDCDesignSystem_fae520","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"aada03a34ccf","components/core/Button.jsx":"7d21db2e5bf2","components/core/Card.jsx":"020b66f050da","components/core/IconButton.jsx":"7e3969e5ed64","components/core/Tag.jsx":"d4eea8f7a2c9","components/feedback/Dialog.jsx":"809ccc7a3a96","components/feedback/Toast.jsx":"4f2f5596977a","components/feedback/Tooltip.jsx":"f584fe3f9093","components/forms/Checkbox.jsx":"bf34c01e9693","components/forms/Input.jsx":"623d5dd987ca","components/forms/Radio.jsx":"eac678daeba6","components/forms/Select.jsx":"bd92d025735a","components/forms/Switch.jsx":"f8b9ce017f9f","components/navigation/Tabs.jsx":"97e5bd4af206","ui_kits/website/ApplyScreen.jsx":"a0adf4bb96f8","ui_kits/website/FaqScreen.jsx":"ba2ff5cb688e","ui_kits/website/HomeScreen.jsx":"cd850e633483","ui_kits/website/Icon.jsx":"24d092b9a18c","ui_kits/website/ProgramsScreen.jsx":"db11c7692aea","ui_kits/website/Shell.jsx":"2d2407dbc8e7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IjaraCDCDesignSystem_fae520 = window.IjaraCDCDesignSystem_fae520 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  neutral: {
    background: 'var(--slate-100)',
    color: 'var(--slate-600)'
  },
  success: {
    background: 'var(--color-success-soft)',
    color: 'var(--brand-green-dark)'
  },
  warning: {
    background: 'var(--color-warning-soft)',
    color: 'var(--brand-orange-dark)'
  },
  danger: {
    background: 'var(--color-danger-soft)',
    color: 'var(--color-danger)'
  },
  solid: {
    background: 'var(--color-primary)',
    color: '#fff'
  },
  inverse: {
    background: 'rgba(255,255,255,0.14)',
    color: '#fff'
  }
};
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.2,
      ...T[tone],
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-round)',
      background: 'currentColor'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-body)',
    minHeight: 36
  },
  md: {
    padding: '12px 24px',
    fontSize: 'var(--text-body-l)',
    minHeight: 44
  },
  lg: {
    padding: '16px 32px',
    fontSize: 'var(--text-body-l)',
    minHeight: 52
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--button-primary-bg)',
    color: 'var(--button-primary-text)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--button-secondary-bg)',
    color: 'var(--button-secondary-text)',
    border: '1px solid transparent'
  },
  quiet: {
    background: 'var(--button-quiet-bg)',
    color: 'var(--button-quiet-text)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-text)',
    border: '1px solid var(--color-border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--color-white)',
    color: 'var(--slate-900)',
    border: '1px solid transparent'
  }
};
const HOVER = {
  primary: 'var(--button-primary-bg-hover)',
  secondary: 'var(--button-secondary-bg-hover)',
  quiet: 'var(--button-quiet-bg-hover)',
  outline: 'var(--slate-50)',
  ghost: 'var(--slate-50)',
  inverse: 'var(--slate-100)'
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  square = false,
  as = 'button',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-8)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      borderRadius: square ? 'var(--radius-button-square)' : 'var(--radius-button)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      width: fullWidth ? '100%' : 'auto',
      transition: 'background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)',
      ...SIZES[size],
      ...VARIANTS[variant],
      ...(hover && !disabled ? {
        background: HOVER[variant]
      } : null),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  plain: {
    background: 'var(--surface-card)',
    color: 'var(--color-text)',
    border: '1px solid var(--color-border-strong)'
  },
  elevated: {
    background: 'var(--surface-card)',
    color: 'var(--color-text)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-card)'
  },
  sunken: {
    background: 'var(--surface-sunken)',
    color: 'var(--color-text)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--surface-card-inverse)',
    color: 'var(--color-text-inverse)',
    border: '1px solid transparent'
  },
  accent: {
    background: 'var(--color-warning-soft)',
    color: 'var(--color-text)',
    border: '1px solid transparent'
  }
};
const RAD = {
  md: 'var(--radius-card)',
  lg: 'var(--radius-card-lg)',
  xl: 'var(--radius-card-xl)'
};
function Card({
  tone = 'plain',
  radius = 'lg',
  padding = 24,
  eyebrow,
  title,
  children,
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: RAD[radius],
      padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)',
      ...TONE[tone],
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: tone === 'inverse' ? 'var(--slate-300)' : 'var(--color-text-secondary)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'inherit'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-l)',
      lineHeight: 'var(--leading-body-l)',
      color: tone === 'inverse' ? 'var(--slate-300)' : 'var(--color-text-secondary)'
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-8)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SZ = {
  sm: 32,
  md: 40,
  lg: 48
};
const V = {
  quiet: {
    background: 'var(--slate-100)',
    color: 'var(--slate-600)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-secondary)'
  },
  primary: {
    background: 'var(--color-primary)',
    color: '#fff'
  },
  inverse: {
    background: 'rgba(255,255,255,0.12)',
    color: '#fff'
  }
};
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: SZ[size],
      height: SZ[size],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid transparent',
      borderRadius: 'var(--radius-round)',
      cursor: 'pointer',
      transition: 'var(--transition-base)',
      ...V[variant],
      ...(h ? {
        filter: 'brightness(0.95)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onRemove,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-chip)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-medium)',
      cursor: rest.onClick ? 'pointer' : 'default',
      background: selected ? 'var(--color-secondary)' : 'var(--slate-100)',
      color: selected ? '#fff' : 'var(--slate-600)',
      transition: 'var(--transition-base)',
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      border: 0,
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      padding: 0,
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  onClose,
  footer,
  width = 520,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 996,
      background: 'var(--fade-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-24)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card-xl)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--space-32)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h4)',
      lineHeight: 'var(--leading-h4)',
      letterSpacing: 'var(--tracking-h4)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-l)',
      lineHeight: 'var(--leading-body-l)',
      color: 'var(--color-text-secondary)'
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: 0,
      background: 'var(--slate-100)',
      color: 'var(--slate-600)',
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-round)',
      cursor: 'pointer',
      flex: '0 0 32px'
    }
  }, "\xD7") : null), children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-12)',
      justifyContent: 'flex-end'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  success: {
    icon: 'M20 6 9 17l-5-5',
    color: 'var(--brand-green-dark)',
    bg: 'var(--color-success-soft)'
  },
  info: {
    icon: 'M12 8h.01M11 12h1v4h1',
    color: 'var(--slate-600)',
    bg: 'var(--color-info-soft)'
  },
  warning: {
    icon: 'M12 9v4M12 17h.01',
    color: 'var(--brand-orange-dark)',
    bg: 'var(--color-warning-soft)'
  },
  danger: {
    icon: 'M18 6 6 18M6 6l12 12',
    color: 'var(--color-danger)',
    bg: 'var(--color-danger-soft)'
  }
};
function Toast({
  tone = 'success',
  title,
  message,
  onDismiss,
  style,
  ...rest
}) {
  const t = T[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--space-12)',
      alignItems: 'flex-start',
      background: 'var(--surface-card)',
      border: '1px solid var(--color-border-strong)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-16)',
      minWidth: 320,
      maxWidth: 420,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      flex: '0 0 28px',
      borderRadius: 'var(--radius-round)',
      background: t.bg,
      color: t.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: t.icon
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-l)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title) : null, message ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--color-text-secondary)'
    }
  }, message) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--color-text-tertiary)',
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest), children, show ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      background: 'var(--neutral-1000)',
      color: '#fff',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      fontFamily: 'var(--font-body)',
      padding: '8px 12px',
      borderRadius: 'var(--radius-8)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-low)',
      zIndex: 1000
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 'var(--space-12)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 22,
      flex: '0 0 22px',
      borderRadius: 'var(--radius-8)',
      marginTop: 1,
      background: checked ? 'var(--color-secondary)' : 'var(--color-white)',
      border: '1px solid ' + (checked ? 'var(--color-secondary)' : 'var(--color-border-strong)'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-base)'
    }
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body-l)',
      fontWeight: 'var(--weight-body)',
      color: 'var(--color-text)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body)',
      color: 'var(--color-text-tertiary)',
      marginTop: 2
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  textarea = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const Field = textarea ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      fontFamily: 'var(--font-body)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--color-text)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      background: 'var(--color-white)',
      border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--color-secondary)' : 'var(--color-border-strong)'),
      boxShadow: focus && !error ? 'var(--ring-focus)' : 'none',
      borderRadius: 'var(--radius-input)',
      padding: '12px 16px',
      transition: 'var(--transition-base)',
      ...style
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-tertiary)',
      fontSize: 'var(--text-body-l)'
    }
  }, prefix) : null, /*#__PURE__*/React.createElement(Field, _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    rows: textarea ? 4 : undefined,
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontSize: 'var(--text-body-l)',
      fontWeight: 'var(--weight-body)',
      color: 'var(--color-text)',
      resize: textarea ? 'vertical' : undefined,
      minWidth: 0
    }
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-tertiary)',
      fontSize: 'var(--text-body)'
    }
  }, suffix) : null), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      color: error ? 'var(--color-danger)' : 'var(--color-text-tertiary)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 'var(--space-12)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 22,
      flex: '0 0 22px',
      borderRadius: 'var(--radius-round)',
      marginTop: 1,
      background: 'var(--color-white)',
      border: '1px solid ' + (checked ? 'var(--color-secondary)' : 'var(--color-border-strong)'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-base)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-round)',
      background: 'var(--color-secondary)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body-l)',
      color: 'var(--color-text)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body)',
      color: 'var(--color-text-tertiary)',
      marginTop: 2
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      fontFamily: 'var(--font-body)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      background: 'var(--color-white)',
      border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--color-secondary)' : 'var(--color-border-strong)'),
      boxShadow: focus && !error ? 'var(--ring-focus)' : 'none',
      borderRadius: 'var(--radius-input)',
      padding: '12px 40px 12px 16px',
      fontSize: 'var(--text-body-l)',
      fontWeight: 'var(--weight-body)',
      color: 'var(--color-text)',
      outline: 'none',
      cursor: 'pointer',
      transition: 'var(--transition-base)',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--slate-600)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      color: error ? 'var(--color-danger)' : 'var(--color-text-tertiary)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-12)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-round)',
      padding: 3,
      background: checked ? 'var(--color-secondary)' : 'var(--slate-200)',
      display: 'inline-flex',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-round)',
      background: '#fff',
      boxShadow: 'var(--shadow-low)',
      transform: 'translateX(' + (checked ? 18 : 0) + 'px)',
      transition: 'transform var(--duration-base) var(--ease-out)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-l)',
      color: 'var(--color-text)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'pill',
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(items[0] && (items[0].value || items[0]));
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    if (onChange) onChange(v);
  };
  const norm = items.map(i => typeof i === 'string' ? {
    value: i,
    label: i
  } : i);
  if (variant === 'underline') {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "tablist",
      style: {
        display: 'flex',
        gap: 'var(--space-24)',
        borderBottom: '1px solid var(--color-divider)',
        ...style
      }
    }, rest), norm.map(i => /*#__PURE__*/React.createElement("button", {
      key: i.value,
      role: "tab",
      "aria-selected": active === i.value,
      onClick: () => select(i.value),
      style: {
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        padding: '0 0 12px',
        fontSize: 'var(--text-body-l)',
        fontWeight: 'var(--weight-semibold)',
        color: active === i.value ? 'var(--color-text)' : 'var(--color-text-tertiary)',
        borderBottom: '2px solid ' + (active === i.value ? 'var(--color-primary)' : 'transparent'),
        marginBottom: -1,
        transition: 'var(--transition-base)'
      }
    }, i.label)));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 'var(--space-4)',
      background: 'var(--slate-100)',
      padding: 4,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), norm.map(i => /*#__PURE__*/React.createElement("button", {
    key: i.value,
    role: "tab",
    "aria-selected": active === i.value,
    onClick: () => select(i.value),
    style: {
      border: 0,
      cursor: 'pointer',
      padding: '10px 20px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-semibold)',
      background: active === i.value ? 'var(--color-white)' : 'transparent',
      color: active === i.value ? 'var(--color-text)' : 'var(--slate-600)',
      boxShadow: active === i.value ? 'var(--shadow-low)' : 'none',
      transition: 'var(--transition-base)'
    }
  }, i.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ApplyScreen.jsx
try { (() => {
function ApplyScreen() {
  const {
    Button,
    Card,
    Input,
    Select,
    Radio,
    Checkbox,
    Switch,
    Badge,
    Toast,
    Dialog
  } = window.IjaraCDCDesignSystem_fae520;
  const [step, setStep] = React.useState(0);
  const [goal, setGoal] = React.useState('buy');
  const [consent, setConsent] = React.useState(false);
  const [monthly, setMonthly] = React.useState(true);
  const [toast, setToast] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const STEPS = ['Your goal', 'Property & budget', 'Contact details'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    style: {
      paddingTop: 56,
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "Pre-qualification"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 20,
      fontSize: 'var(--text-h1)'
    }
  }, "Start your application"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 'var(--text-body-l)',
      lineHeight: 'var(--leading-body-l)',
      color: 'var(--color-text-secondary)'
    }
  }, "About ten minutes. Nothing here affects your credit."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      opacity: i <= step ? 1 : 0.45
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--radius-round)',
      background: i < step ? 'var(--brand-green)' : i === step ? 'var(--color-primary)' : 'var(--slate-200)',
      color: i <= step ? '#fff' : 'var(--slate-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--text-body)',
      fontWeight: 600
    }
  }, i < step ? /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 14,
    strokeWidth: 3
  }) : i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-l)',
      fontWeight: i === step ? 600 : 500
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      padding: '20px 24px',
      background: 'var(--color-white)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--color-border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--color-text-tertiary)'
    }
  }, "Estimated monthly amount"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-1.28px',
      marginTop: 4
    }
  }, monthly ? '$2,940' : '$35,280 / yr'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: monthly,
    onChange: () => setMonthly(!monthly),
    label: "Show monthly"
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: "elevated",
    radius: "xl",
    padding: 40
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", null, "What would you like to do?"), /*#__PURE__*/React.createElement(Radio, {
    name: "goal",
    label: "Buy a home",
    description: "Primary residence, second home or investment.",
    checked: goal === 'buy',
    onChange: () => setGoal('buy')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "goal",
    label: "Refinance an existing mortgage",
    description: "Move an interest-bearing loan into a riba-free structure.",
    checked: goal === 'refi',
    onChange: () => setGoal('refi')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "goal",
    label: "Finance commercial property",
    description: "Masjid, school, clinic or business premises.",
    checked: goal === 'comm',
    onChange: () => setGoal('comm')
  })), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Purchase price",
    prefix: "$",
    defaultValue: "450,000"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Your contribution",
    prefix: "$",
    defaultValue: "90,000",
    hint: "20% minimum."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "State",
    options: ['Virginia', 'Texas', 'Illinois', 'Michigan', 'New Jersey']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Property type",
    options: ['Single family', 'Condominium', 'Townhome', 'Multi-unit']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Term",
    options: ['30 years', '20 years', '15 years', '10 years']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Estimated closing date",
    defaultValue: "2026-11-01",
    type: "date"
  })), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    defaultValue: "Amina Yusuf"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    defaultValue: "(703) 555-0142"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    defaultValue: "amina@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Anything we should know?",
    textarea: true,
    placeholder: "Optional"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to be contacted about this application",
    checked: consent,
    onChange: e => setConsent(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      borderTop: '1px solid var(--color-border)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    disabled: step === 0,
    onClick: () => setStep(s => Math.max(0, s - 1))
  }, "Back"), step < 2 ? /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStep(s => s + 1),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    })
  }, "Continue") : /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setDialog(true);
    }
  }, "Submit application")))))), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    title: "Submit this application?",
    description: "We will review it and reply within two business days.",
    width: 460,
    onClose: () => setDialog(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDialog(false)
    }, "Keep editing"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => {
        setDialog(false);
        setToast(true);
      }
    }, "Submit"))
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 1001
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Application received",
    message: "We emailed you a copy and a link to continue.",
    onDismiss: () => setToast(false)
  })));
}
Object.assign(window, {
  ApplyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ApplyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FaqScreen.jsx
try { (() => {
function FaqScreen() {
  const {
    Button,
    Card,
    Input,
    Tag,
    Badge
  } = window.IjaraCDCDesignSystem_fae520;
  const [open, setOpen] = React.useState(0);
  const [topic, setTopic] = React.useState('All');
  const QS = [['What makes this financing riba-free?', 'Nothing in the contract charges interest. ijara CDC and you co-own the property, and each payment transfers a fixed portion of our share to you.'], ['How much do I need to contribute?', 'Twenty percent of the purchase price for residential programs. Commercial projects are set case by case.'], ['Which states do you serve?', 'More than twenty. Availability depends on the property type; ask us about a specific address.'], ['Can I pay ahead of schedule?', 'Yes. Additional payments buy more of our ownership share and shorten the schedule.'], ['Is the structure reviewed for compliance?', 'Every program is reviewed against Shariah requirements before it is offered.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow"
  }, "Resources"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 16,
      maxWidth: 700
    }
  }, "Questions we hear most"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, ['All', 'Structure', 'Eligibility', 'Payments', 'Compliance'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: topic === t,
    onClick: () => setTopic(t)
  }, t)))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    style: {
      paddingTop: 0,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 0.7fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-white)',
      borderRadius: 'var(--radius-card-lg)',
      border: '1px solid var(--color-border-strong)',
      overflow: 'hidden'
    }
  }, QS.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      borderTop: i ? '1px solid var(--color-border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '22px 28px',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-h4)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-h4)'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--slate-600)',
      transform: open === i ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronDown",
    size: 20
  }))), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '0 28px 24px',
      fontSize: 'var(--text-body-l)',
      lineHeight: 'var(--leading-body-l)',
      color: 'var(--color-text-secondary)',
      maxWidth: 640
    }
  }, a)))), /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    radius: "lg",
    padding: 32,
    title: "Still deciding?"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "name@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Your question",
    textarea: true,
    placeholder: "Ask us anything about the structure."
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true
  }, "Send question"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    dot: true
  }, "Replies in 1\u20132 days")))))));
}
Object.assign(window, {
  FaqScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FaqScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function HomeScreen({
  go
}) {
  const {
    Button,
    Badge,
    Card,
    Tabs,
    Tag
  } = window.IjaraCDCDesignSystem_fae520;
  const [tab, setTab] = React.useState('declining');
  const STEPS = [['Tell us your goal', 'A short form covers the property, your budget and your timeline.'], ['Review your structure', 'We share the co-ownership terms, the monthly amount and the schedule.'], ['Close and move in', 'You take possession, and your ownership share grows every month.']];
  const PROGRAMS = [['Home purchase', 'house', 'Co-ownership financing for a primary residence, second home or investment property.'], ['Refinance', 'repeat', 'Replace a conventional interest-bearing mortgage with a riba-free structure.'], ['Commercial', 'building-2', 'Financing for masjids, schools, clinics and small business property.']];
  const PANELS = {
    declining: ['Declining balance co-ownership', 'You and ijara CDC hold the property together. Each payment buys more of our share, so your ownership rises on a fixed schedule until the title is fully yours.'],
    lease: ['Lease-to-own', 'The payment covers a use fee plus an acquisition portion. No interest is charged at any point in the contract.'],
    commercial: ['Commercial structures', 'Institutional and business property use the same principle at a larger scale, with terms set per project.']
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 72,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "Riba-free since 2005"), /*#__PURE__*/React.createElement("h1", {
    className: "ds-display",
    style: {
      maxWidth: 640
    }
  }, "Own your home without interest"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: '30px',
      color: 'var(--color-text-secondary)',
      maxWidth: 520
    }
  }, "ijara CDC structures home financing as shared ownership, not a loan. You build equity every month and never pay interest."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('apply')
  }, "Start an application"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "quiet",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Calculator",
      size: 18
    })
  }, "Estimate a payment")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 24
    }
  }, [['20+', 'Years financing families'], ['20+', 'States served'], ['0%', 'Interest, by structure']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-1.28px',
      color: 'var(--brand-green)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--color-text-tertiary)',
      maxWidth: 150,
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement(MediaPlaceholder, {
    label: "Photography placeholder \u2014 family at home",
    height: 460
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow"
  }, "Programs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12,
      maxWidth: 520
    }
  }, "Financing built on ownership")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    }),
    onClick: () => go('programs')
  }, "See all programs")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32
    }
  }, PROGRAMS.map(([t, ic, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "plain",
    radius: "lg",
    padding: 32,
    title: t,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "ArrowRight",
        size: 16
      }),
      onClick: () => go('programs')
    }, "Learn more")
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--brand-green)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic === 'house' ? 'House' : ic === 'repeat' ? 'Repeat' : 'Building2',
    size: 28
  })), d)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "Three steps to the title"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      marginTop: 32
    }
  }, STEPS.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: '0 0 40px',
      borderRadius: 'var(--radius-round)',
      background: 'var(--color-warning-soft)',
      color: 'var(--brand-orange-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      fontSize: 'var(--text-body-l)',
      lineHeight: 'var(--leading-body-l)',
      color: 'var(--color-text-secondary)'
    }
  }, d)))))), /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    radius: "xl",
    padding: 40,
    style: {
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: 'declining',
      label: 'Declining balance'
    }, {
      value: 'lease',
      label: 'Lease-to-own'
    }, {
      value: 'commercial',
      label: 'Commercial'
    }],
    value: tab,
    onChange: setTab,
    style: {
      background: 'rgba(255,255,255,0.08)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff'
    }
  }, PANELS[tab][0]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-l)',
      lineHeight: 'var(--leading-body-l)',
      color: 'var(--slate-300)'
    }
  }, PANELS[tab][1]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, ['No interest', 'Shared equity', 'Fixed schedule'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    style: {
      background: 'rgba(255,255,255,0.1)',
      color: '#fff'
    }
  }, t)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "quiet"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 48,
      background: 'var(--brand-green)',
      borderRadius: 'var(--radius-card-xl)',
      padding: '56px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      maxWidth: 560
    }
  }, "Find out what you qualify for"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 'var(--text-body-l)',
      color: 'rgba(255,255,255,0.86)'
    }
  }, "A pre-qualification takes about ten minutes and does not affect your credit.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => go('apply')
  }, "Get pre-qualified"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
// Lucide icons via the lucide UMD build (no icon set shipped with the source material).
const camel = k => k.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
function attrs(o) {
  const r = {};
  for (const k in o) r[camel(k)] = o[k];
  return r;
}
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  style
}) {
  const L = window.lucide || {};
  const raw = L.icons && L.icons[name] || L[name];
  let kids = [];
  if (Array.isArray(raw)) kids = typeof raw[0] === 'string' ? raw[2] || [] : raw;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: '0 0 auto',
      ...style
    },
    "aria-hidden": "true"
  }, kids.map((c, i) => React.createElement(c[0], {
    key: i,
    ...attrs(c[1] || {})
  })));
}
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProgramsScreen.jsx
try { (() => {
function ProgramsScreen({
  go
}) {
  const {
    Button,
    Card,
    Tabs,
    Badge,
    Checkbox,
    Tooltip
  } = window.IjaraCDCDesignSystem_fae520;
  const [tab, setTab] = React.useState('purchase');
  const DATA = {
    purchase: {
      title: 'Home purchase',
      lede: 'Shared-ownership financing for a home you intend to live in, a second home or an investment property.',
      terms: [['Structure', 'Declining balance co-ownership'], ['Term', '10, 15, 20 or 30 years'], ['Minimum contribution', '20% of purchase price'], ['Property types', 'Single family, condo, townhome']]
    },
    refinance: {
      title: 'Refinance',
      lede: 'Move an existing interest-bearing mortgage into a riba-free structure without changing homes.',
      terms: [['Structure', 'Buy-out and re-acquisition'], ['Term', '10, 15, 20 or 30 years'], ['Minimum equity', '20% of appraised value'], ['Property types', 'Owner-occupied and investment']]
    },
    commercial: {
      title: 'Commercial',
      lede: 'Financing for masjids, schools, clinics and small business property, structured per project.',
      terms: [['Structure', 'Project-specific co-ownership'], ['Term', 'Set per project'], ['Minimum contribution', 'Set per project'], ['Property types', 'Institutional and commercial']]
    }
  };
  const d = DATA[tab];
  const DOCS = ['Two most recent pay stubs', 'Two years of tax returns', 'Three months of bank statements', 'Government-issued photo ID', 'Purchase agreement, if signed'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow"
  }, "Programs"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 16,
      maxWidth: 760
    }
  }, "Every program follows the same principle"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 20,
      lineHeight: '30px',
      color: 'var(--color-text-secondary)',
      maxWidth: 640
    }
  }, "Ownership is shared and transferred on a schedule. No interest is charged in any structure."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "underline",
    items: [{
      value: 'purchase',
      label: 'Home purchase'
    }, {
      value: 'refinance',
      label: 'Refinance'
    }, {
      value: 'commercial',
      label: 'Commercial'
    }],
    value: tab,
    onChange: setTab
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    style: {
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 'var(--text-body-l)',
      lineHeight: 'var(--leading-body-l)',
      color: 'var(--color-text-secondary)',
      maxWidth: 560
    }
  }, d.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      background: 'var(--color-white)',
      borderRadius: 'var(--radius-card-lg)',
      border: '1px solid var(--color-border-strong)',
      overflow: 'hidden'
    }
  }, d.terms.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      padding: '18px 24px',
      borderTop: i ? '1px solid var(--color-border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-l)',
      color: 'var(--color-text-secondary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-l)',
      fontWeight: 600
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('apply')
  }, "Apply for this program"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Phone",
      size: 16
    })
  }, "Talk to us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    radius: "lg",
    padding: 32,
    title: "What you will need"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 8
    }
  }, DOCS.map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      color: 'var(--color-text)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-green)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 18,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-l)'
    }
  }, x))))), /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    radius: "lg",
    padding: 32,
    title: "Eligibility at a glance"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Property is in a state we serve",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Contribution of 20% or more available",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Documented, verifiable income",
    checked: false,
    onChange: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "No interest is charged at any point"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Riba-free")), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Shariah-reviewed")))))));
}
Object.assign(window, {
  ProgramsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProgramsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const NAV = [['home', 'Home'], ['programs', 'Programs'], ['apply', 'Apply'], ['faq', 'FAQ']];
function SiteHeader({
  route,
  go
}) {
  const {
    Button
  } = window.IjaraCDCDesignSystem_fae520;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ijara-cdc-logo-20-landscape.png",
    alt: "ijara Community Development Corp.",
    style: {
      height: 46,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 'auto'
    }
  }, NAV.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: '#' + k,
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      fontSize: 'var(--text-body-l)',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: route === k ? 'var(--color-primary)' : 'var(--color-text)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go('apply')
  }, "Apply now"))));
}
function SiteFooter({
  go
}) {
  const COLS = [['Programs', ['Home purchase', 'Refinance', 'Commercial', 'Declining balance']], ['Company', ['About ijara CDC', 'Contact', 'Careers', 'Newsroom']], ['Resources', ['FAQ', 'Documents checklist', 'Glossary', 'Blog']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-card-inverse)',
      color: 'var(--slate-300)',
      padding: '72px 32px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ijara-cdc-logo-20-landscape.png",
    alt: "ijara Community Development Corp.",
    style: {
      width: 260,
      display: 'block',
      filter: 'brightness(0) invert(1)',
      opacity: 0.92
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      maxWidth: 320
    }
  }, "Riba-free home and commercial financing since 2005.")), COLS.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--color-white)'
    }
  }, h), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--slate-300)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '48px auto 0',
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      fontSize: 'var(--text-body)',
      color: 'var(--neutral-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ijara Community Development Corp."), /*#__PURE__*/React.createElement("span", null, "Placeholder copy \u2014 no source website content was supplied with this kit.")));
}
function Section({
  tone = 'white',
  children,
  style
}) {
  const bg = {
    white: 'var(--color-bg)',
    sunken: 'var(--surface-sunken)',
    quiet: 'var(--slate-100)',
    inverse: 'var(--surface-card-inverse)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: '96px 32px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, children));
}
function MediaPlaceholder({
  label,
  height = 380,
  radius = 'var(--radius-media)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: radius,
      background: 'var(--slate-200)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 20,
      color: 'var(--slate-600)',
      fontSize: 'var(--text-body)',
      fontWeight: 500
    }
  }, label);
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Section,
  MediaPlaceholder,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
