/* eslint-disable no-param-reassign */
function moveTo(start, distance, dom, prop) {
  let dis = 0;
  let speed = 5;
  if (distance < 0) speed *= -1;
  const t = setInterval(() => {
    dis += speed;
    dom[prop] = start + dis;
    if (Math.abs(dis) > Math.abs(distance)) {
      dom[prop] = start + distance;
      clearInterval(t);
    }
  }, 2);
}
export default {
  moveTo,
};
