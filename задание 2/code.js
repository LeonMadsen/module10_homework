const btn = document.querySelector('.j-btn-test');

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const windowInnerWidthScroll = window.innerWidth;
const windowInnerHeightScroll = window.innerHeight;

const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;

const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

btn.addEventListener('click', () => {

alert(`Размер экрана: ${screenWidth}px x ${screenHeight}px.`);
});

