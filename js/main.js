//main
/*mbl-nav*/
var count = 0;
$(".bird input").click(function (e) {
    $(this).parent().toggleClass('bird-die');
    count++;
});

$(".restart").click(function (e) {
    location.reload();
});

setTimeout(function () {
    $('.score').addClass('open');
    score()
}, 14000);

const score = () => {
    document.getElementById("score-num").innerHTML = count.toString();
}
