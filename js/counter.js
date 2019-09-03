$('#boxnxflavour').hide();
$('#box404flavour').hide();
$(".cardsbg").show(320);

$("#head-1").text("Currently Serving:");
$("#body-1").text("No Customer");


////////////////////////////////////////////////////////////////
//for the hovertexts
$('#boxnx').mouseover(function () {
    $('#boxnx').fadeOut(100, function () {
        $('#boxnxflavour').fadeIn(200);
    });
});

$('#boxnxflavour').mouseout(function () {
    $('#boxnxflavour').fadeOut(100, function () {
        $('#boxnx').fadeIn(200);
    });
});

$('#box404').mouseover(function () {
    $('#box404').fadeOut(100, function () {
        $('#box404flavour').fadeIn(200);
    });
});

$('#box404flavour').mouseout(function () {
    $('#box404flavour').fadeOut(100, function () {
        $('#box404').fadeIn(200);
    });
});
////////////////////////////////////////////////////////////////
//for the onclick fns

$('#nx').click(function (e) {
    e.preventDefault();
    url = "https://2bc5231b.ngrok.io/counter-1/empty/";
    $.getJSON(url, function (response) {
        if (response) {
            refreshData(response);
        };
    });
});

$('#404n').click(function (e) {
    e.preventDefault();
    let url = "https://2bc5231b.ngrok.io/counter-1/customer-not-there/";
    $.getJSON(url, function (response) {
        if (response) {
            refreshData(response);
        };
    });
});
/////////////////////////////////
function refreshData(response) {
    custo = response;
    console.log(custo);
    $("#body-1").text(custo["mobile_number"] + ":" + custo["name"]);
}
