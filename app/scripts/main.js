$('.sidebar-left a').on('click', function(){
    $('a.selected').removeClass('selected');
    $(this).addClass('selected');
});
