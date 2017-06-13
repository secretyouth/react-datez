export default function formatName(context, name) {
  var sectionPrefix = context._reduxForm.sectionPrefix;

  return !sectionPrefix ? name : sectionPrefix + "." + name;
}