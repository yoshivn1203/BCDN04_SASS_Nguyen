function getEleId(id) {
  return document.getElementById(id);
}
function getEle(selector) {
  return document.querySelector(selector);
}

window.onscroll = function () {
  if (window.scrollY > 250) {
    getEleId('logo').style.display = 'none';
    document.querySelectorAll('.nav-item').forEach(function (ele) {
      ele.classList.add('scrollNavItem');
    });
    getEle('header').style.backgroundColor = 'white';
    getEle('header').style.position = 'fixed';
  } else {
    getEleId('logo').style.display = 'block';
    document.querySelectorAll('.nav-item').forEach(function (ele) {
      ele.classList.remove('scrollNavItem');
    });
    if (window.innerWidth > 1199.98) {
      getEle('header').style.backgroundColor = 'transparent';
      getEle('header').style.position = 'absolute';
    }
  }
};
