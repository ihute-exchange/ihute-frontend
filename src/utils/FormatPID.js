export const FormatPID = (pid) => {
  return pid.match(/.{1,3}/g).join("-");
};
