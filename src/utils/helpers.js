export function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email).toLowerCase());
}

export function checkMessage(message) {
  const msg = /\w/;
  return msg.test(message);
}

export function checkName(name) {
  const msg = /\w/;
  return msg.test(name);
}
