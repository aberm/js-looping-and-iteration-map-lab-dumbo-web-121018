// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function(item){
    return item.toLowerCase();
  })
}

function nameToAttributes(array){
  return array.map(function(item){
    return Object.assign({}, { firstName: `${item.split(" ")[0]}`, lastName: `${item.split(" ")[1]}` });
  })
}

function attributesToPhrase(array){
  return array.map(function(item){
    return `${item.name} is from ${item.hometown}`;
  })
}
