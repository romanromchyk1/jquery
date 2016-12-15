$(function(){
    $('#btn-plus').click(function (){
        var cnt = Number($('#counter').html());
        cnt++;
        $('#counter').html(cnt);
    });
    $('#btn-minus').click(function (){
        var cnt = Number($('#counter').html());
        cnt--;
        if (cnt < 0) return;
        $('#counter').html(cnt);
    });
    
});