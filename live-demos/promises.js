var names = ['Max', 'Peter', 'Alex'];

lowercase(names, (names) => {
  trim(names, (names) => {
    sort(names, (names) => {
      console.log(names);
    });
  });
});

function sort (names, cb) {
  setTimeout(() => {
    return cb(names.sort());
  }, 3);
}

function lowercase (names, cb) {
  setTimeout(() => {
    return cb(names.map((name) => name.toLowerCase()));
  }, 3);
}

function trim (names, cb) {
  setTimeout(() => {
    return cb(names.map((name) => name[0]));
  }, 3);
}
