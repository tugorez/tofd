import FormData from 'form-data';

const tofd = obj => Object.keys(obj).reduce((fd, k) => {
  if (obj[k]) fd.append(k, obj[k]);
  return fd;
}, new FormData());

module.exports = tofd;
