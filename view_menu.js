$( document ).ready(function() {


  

    $(".add-button").click(function() {
      updateValue(this, 1);
  });
  $(".subtract-button").click(function() {
      updateValue(this, -1);
  });
  
  function updateValue(obj, delta) {
      var item = $(obj).parent().find("input.onlyNumber");
      var newValue = parseInt(item.val(), 10) + delta;
      item.val(Math.max(newValue, 0));
  }

    


//   $('input.onlyNumber').on("change", function () {
//     console.log('hi h');
//     var st = 0;
//     $('.menu-card').each(function () {
//         var i = $('input.onlyNumber', this);
//         var up = $(i).data('.price');
//         var q = $(i).val();
//         st = st + (up * q);
//     });
//     console.log('Cart updated. Subtotal : ' + st + 'GBP');
// });
});




  
  
 