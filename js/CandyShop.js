/**
 * Created by m-lee on 26-1-2018.
 */
$(document).ready(function () {
    $(".aantal").each(function (index) {
        var sub = parseFloat(parseFloat($(this).attr("data-price")) * $(this).val());
        $('#sub-' + $(this).attr("data-id")).text(sub);
    });
    updateTotal()
});
$('.aantal').on('input',function () {
    var sub = parseFloat(parseFloat($(this).attr("data-price")) * $(this).val());
    $('#sub-' + $(this).attr("data-id")).text(sub);
    updateTotal()
});
$('.option').change(function () {
    updateTotal()
});

function updateTotal() {
    var tot = 0;
    var aantal = 0;
    var wagen = [];
    $(".aantal").each(function (index) {
        aantal += parseInt($(this).val());
        wagen.push(new Array($(this).attr("data-id"), $(this).val()));
    });
    $(".sub").each(function (index){
        tot += parseFloat($(this).text());
    });
    $(".option:checked").each(function (index){
    tot += parseFloat($(this).attr("data-price"));
    });
    $('#total').text(tot);
    $('#arr').val(wagen.join('-'));
}