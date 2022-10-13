let x = prompt ('number one');
let y = prompt ('number two');

let add = (x) + '+' + (y) + '=' + ((+x)+(+y));
let sub = (x) + '-' + (y) + '=' + ((x)-(y));
let mult = (x) + '*' + (y) + '=' + (x)*(y);
let div = (x) + '/' + (y) + '=' + (x)/(y);

let result = 'Користувач ввів ' + x + ' і ' + y + ': ' + add + sub + mult + div;

alert (result);

// Не можу додуматись як його форматувати так як в завданні. \n чомусь не працює.