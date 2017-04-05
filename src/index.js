import FormData from 'form-data';

const tofd = obj => Object.entries(obj).reduce((fd, [k, v]) => {
  if (v) fd.append(k, v);
  return fd;
}, new FormData());

module.exports = tofd;
