const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);
// JS uses callbacks all the time
const hug = function () {
  console.log('🤗');
};
document.body.addEventListener('click', hug);

['Tanjim', 'Pabel', 'Rayhan', 'Shajib', 'Zia', 'Tamzid'].forEach(hug);
