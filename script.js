$(".img").hide();

$("#submitBtn").on("click", function() {
    check();
})

$("#chikubi").on("click", function() {
    $(".img").addClass("up").delay(1100).queue(function() {
        $(".img").removeClass("up").dequeue();
    });
})

$("#forms").on("submit", function() {
    check();
    return false;
})

function check() {
    $(".img").hide().fadeIn();
    if($("#inputNum").val() == ""){
        $("#answer").text("色々nullnull");
        return;
    }
    if (isPrime($("#inputNum").val())) {
        $("#answer").text("素数");
    } else {
        $("#answer").text("素数じゃない");
    }
}

// nが素数ならtrue、そうでなければfalse。
function isPrime(n) {
    // nが1以下なら素数ではない。
    if (n <= 1) {
        return false
    }

    var sqrt = Math.sqrt(n);
    for (var i = 2; i <= sqrt; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}
