export function random(len: number) {
  const options = "lasndlnadsln11o2no12joi12j122470242";
  const length = options.length;
  let ans = "";
  for (let i = 0; i < len; i++) {
    ans += options[Math.floor(Math.random() * length)];
  }
  return ans;
}