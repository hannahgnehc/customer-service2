function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60UD43zeoGx":
        Script1();
        break;
      case "6EjEFZ53ew0":
        Script2();
        break;
      case "6nhkxnsUf85":
        Script3();
        break;
      case "5wCpsWz7zpb":
        Script4();
        break;
      case "6B535eZh50g":
        Script5();
        break;
      case "6862g9g0ttG":
        Script6();
        break;
      case "63KT2UyAfQM":
        Script7();
        break;
      case "6SVT1VJQcpK":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6kXfzaw54lK');
const duration = 750;
const easing = 'ease-out';
const id = '6ULBUUespuL';
const pulseAmount = 0.07;
const delay = 2000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6T7uoPJT5zR');
const duration = 750;
const easing = 'ease-out';
const id = '6lsgi0U8Xcw';
const pulseAmount = 0.07;
const delay = 750;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('6BKiKkMPznu');
const duration = 750;
const easing = 'ease-out';
const id = '5zdor6cL8ZC';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5sdkzETL41x');
const duration = 750;
const easing = 'ease-out';
const id = '64N7HLelekB';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6ILd0uSt5XS');
const duration = 750;
const easing = 'ease-out';
const id = '5ZgqM9UfqFI';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('5ljSBVaUo2h');
const duration = 750;
const easing = 'ease-out';
const id = '6m6h5MnIWCU';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6EPZDNUcgEH');
const duration = 750;
const easing = 'ease-out';
const id = '6DTUf8tkNEk';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  player.once(() => {
const target = object('68RgnT6lhvB');
const duration = 750;
const easing = 'ease-out';
const id = '5kkifkXicbS';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
