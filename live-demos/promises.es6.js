var names = ['Max', 'Peter', 'Alex'];

limit(names)
  .then(names => lowercase(names))
  .then(names => trim(names))
  .then(names => sort(names))
  .then(names => {
    console.log(names);
  })
  .catch(e => {
    console.log(e);
  });

function limit (names) {
  return new Promise((resolve, reject) => {
    if (names.length > 3) {
      reject(new Error('Too much names'));
    }
    resolve(names);
  });
}

function sort (names) {
  return new Promise((resolve, reject) => {
    resolve(names.sort());
  });
}

function lowercase (names) {
  return new Promise((resolve, reject) => {
    resolve(names.map((name) => name.toLowerCase()));
  });
}

function trim (names) {
  return new Promise((resolve, reject) => {
    resolve(names.map((name) => name[0]));
  });
}
