import FormData from 'form-data';

function tofd(obj) {
  const flattened = flattenKeys(obj);

  return Object.keys(flattened).reduce((fd, k) => {
    fd.append(k, flattened[k]);
    return fd;
  }, new FormData());
}

function flattenKeys(obj) {
  let output = {}

  function flatten(obj, parentKey) {
    Object.keys(obj).forEach(key => {
      const value = obj[key];

      const newKey = parentKey
        ? `${parentKey}[${key}]`
        : key;

      if ((typeof value === 'object' || Array.isArray(value)) &&
        (!(value instanceof File) && !Buffer.isBuffer(value))) {
        flatten(value, newKey);
      } else {
        output[newKey] = value;
      }
    })
  }

  flatten(obj);

  return output;
}

module.exports = tofd;
