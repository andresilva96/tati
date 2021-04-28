// document.querySelectorAll('.insert').forEach(function(insert) {
//     insert.addEventListener('click', function(e) {
//         console.log(insert.innerHTML)
//     });
// });

// JQuery
$('.insert').click(function() {
    var value = $(this).html()
    $('#panel').val($('#panel').val()+value)
})

$('#clean').click(function() {
    $('#panel').val('')
})

$('#result').click(function() {
    var calc = eval($('#panel').val())
    alert(calc)
})
