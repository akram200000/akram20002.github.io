$(document).ready(function() {
    $("ul li a.A").mouseenter(function() {
        $("ul li a.A").not(this).find("::after").css("width", "0"); // Reset other underlines
    });
});
