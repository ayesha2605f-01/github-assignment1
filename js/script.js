
document.getElementById("btn").onclick = function () {
    document.getElementById("title").innerHTML = "Drink more water!";
};

$(".show-btn").click(function () {
    $(this).next(".price").slideToggle();
});