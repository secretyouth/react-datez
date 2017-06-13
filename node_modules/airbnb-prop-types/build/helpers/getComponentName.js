Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getComponentName;
function getComponentName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }
  if (typeof Component === 'function') {
    var displayName = Component.displayName,
        name = Component.name;

    return displayName || name;
  }
  return null;
}
//# sourceMappingURL=getComponentName.js.map