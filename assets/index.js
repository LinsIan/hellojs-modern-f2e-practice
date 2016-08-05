require('./index.scss');
var $ = require('jquery');//require一個npm套件

$('div').fadeOut(2000,() => {
  $('div').fadeIn(2000);
});
