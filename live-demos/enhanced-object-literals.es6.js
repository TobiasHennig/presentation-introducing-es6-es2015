function getPerson () {
  var name = 'John';

  return {
    name,
    greet () {
      console.log('Hello ' + this.name);
    }
  };
}

getPerson()
  .greet();
