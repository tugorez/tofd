import { Buffer } from 'buffer';
import FormData from 'form-data';

function flattenKeys(form) {
  const output = {};
  function flatten(obj, parentKey) {
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      const newKey = parentKey ? `${parentKey}[${key}]` : key;
      if (value && value.uri && value.type && value.name)
        output[newKey] = value;
      else if (
        (typeof value === 'object' || Array.isArray(value)) &&
        (!(value instanceof File) && !Buffer.isBuffer(value))
      ) {
        flatten(value, newKey);
      } else {
        output[newKey] = value;
      }
    });
  }
  flatten(form);
  return output;
}

function tofd(obj) {
  const flattened = flattenKeys(obj);
  return Object.keys(flattened).reduce((fd, k) => {
    fd.append(k, flattened[k]);
    return fd;
  }, new FormData());
}

module.exports = tofd;
