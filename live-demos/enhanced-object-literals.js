function getPerson () {
  var name = 'John';

  // TODO
  return {
    name: name,
    greet: function () {
      console.log('Hello ' + this.name);
    }
  };
}

getPerson()
  .greet();
