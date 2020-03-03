$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal = $('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
$btnCal.click(function(){
  var w=Number($width.val()),
     h=Number($height.val());
  var p=Math.round(2*(w+h)*Math.pow(10,4))/Math.pow(10,4);
      a=Math.round(w*h*Math.pow(10,4))/Math.pow(10,4);
      $perimeter.val(p);
      $area.val(a);
})
})
