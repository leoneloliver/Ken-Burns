const kbEl = document.getElementById("kb");
function startKb(){
  const kbspeed = kbEl.dataset.speed;
  const kbtype = kbEl.dataset.animation;
  document.documentElement.style.setProperty(`--kb-speed`, kbspeed);
  document.documentElement.style.setProperty(`--kb-type`, kbtype);
}
startKb();
