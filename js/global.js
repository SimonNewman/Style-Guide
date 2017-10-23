var hexDigits = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }

$('.font-family').each(function(){
  var el = $(this).data('element');
  var fontFamily = $(el).css('font-family');
  $(this).html(fontFamily.slice(1, -1));
});

$('.font-size').each(function(){
  var el = $(this).data('element');
  var fontSize = $(el).css('font-size');
  fontSize = fontSize.slice(0, -2);
  fontSize = Math.round(fontSize);
  $(this).html(fontSize + 'px');
});

$('.font-weight').each(function(){
  var el = $(this).data('element');
  var fontWeight = $(el).css('font-weight');
  $(this).html(fontWeight);
});

$('.font-color').each(function(){
  var el = $(this).data('element');
  var fontColor = $(el).css('color');
  $(this).html(rgb2hex(fontColor));
  $(this).css('color', fontColor);
});
