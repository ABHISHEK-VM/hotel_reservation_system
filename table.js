



$(document).ready(function(){

    


  
    
    $('img.seats').on('click', function() {
        
        var x  = $(this).prop("src");
        let status = x.slice(-7,-6);
        let seatNo = x.slice(-6,-4);
        console.log(x);
        console.log(status);
        console.log(seatNo);
        
        if (status == "s") {
            $(this).prop("src", "img/c" + seatNo + ".png");  
        } else if ( status == "c") {
            $(this).prop("src", "img/s" + seatNo + ".png");
        }
    });

    
});





// $(function () {
//     $('#datetimepicker1').datetimepicker({
//         format: 'DD-MM-YYYY LT'
//     });
//     $('#datetimepicker2').datetimepicker({
//         format: 'DD-MM-YYYY'
//     });
//     $('#datetimepicker3').datetimepicker({
//         format: 'LT'
//     });
//     $('#datetimepicker3').datetimepicker({
//         format: 'LT'
//     });
// });

