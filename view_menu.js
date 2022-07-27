


$( document ).ready(function() {

    var totalSum = 0.0;
   

    update_amounts();
    $('.onlyNumber, .price').on('keyup keypress blur change', function(e) {
        update_amounts();
    });

    function update_amounts(){
        items = {};
       
        var sum = 0.0;
            $('.menu-card').each(function() {
                var qty = $(this).find('.onlyNumber').val();

                 
                if (qty > 0) {

                    var title = $(this).find('.title').html();
                    
                    
                    
                    items[title] = qty;

                    

                   
                }

                var price = $(this).find('.price').html();
                
                var amount = (qty*price);
                
                sum+=amount;

                totalSum = sum;


                console.log();
                // $(this).find('.total-amount').text(''+amount);

            });
        $('.total-amount').text(sum);
       

    }



    
  

    $(".add-button").click(function() {
      updateValue(this, 1);
      update_amounts();
  });
  $(".subtract-button").click(function() {
      updateValue(this, -1);
      update_amounts();
  });
  
  function updateValue(obj, delta) {
      var item = $(obj).parent().find("input.onlyNumber");
      var newValue = parseInt(item.val(), 10) + delta;
      item.val(Math.max(newValue, 0));
  }

    
  $('.order-now-button').on('click', function(e) {
    console.log(items);
    console.log("total Amount : "+ totalSum);
});

 
    // var st = 0;
    // $('.menu-card').each(function () {
    //     var i = $('input.onlyNumber', this);
    //     var up = $(i).data('.price');
    //     var q = $(i).val();
    //     st = st + (up * q);
    // });
   // console.log('Cart updated. Subtotal : ' + st + 'GBP');

});

  
   

    





  
  
 