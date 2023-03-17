const getcolor = () => {
  const randomNumber = Math.trunc(Math.random() * 16777215);
  const randomCode = '#' + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  document.getElementById('color-code').innerText = randomCode;
};
document.getElementById('btn').addEventListener('click', getcolor);

getcolor();
