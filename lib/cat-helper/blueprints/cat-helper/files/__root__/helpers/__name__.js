export function <%= camelizedModuleName %>(params, hash) {
  return `http://placekitten.com/g/${hash.w}/${hash.h}`;
}

export default Ember.Helper.helper(<%= camelizedModuleName %>);