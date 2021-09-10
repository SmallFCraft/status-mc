    $('#ip').keypress(function( e ) {
    if(e.which === 32) 
        return false;
});
    // API 
    $(".check").on('click', function() {
        var button_check = $(".check");
        button_check.html("Đang kiểm tra");
        $(".result").html('<center><div class="spinner"></div></center>');
        $.ajax({
          url: '/apis/api.php',
          type: 'POST',
          data: {
            address: $("#ip").val(),
            access: 1
        },
        success: function(s) {
            $(".result").html(s);
            button_check.html("Kiểm tra");
            window.location.href="#result";
        }
    });
    });