// VAR - LET ------------------------------------------------------------------
function fire (bool) {
  if (bool) {
    // TODO
    var foo = 'bar';
    console.log(foo);
  } else {
    console.log(foo);
  }
}

fire(false);

// CONST ----------------------------------------------------------------------

const names = ['John', 'Sandy'];
names = ['Frank', 'Susan'];
names.push('Susan');
