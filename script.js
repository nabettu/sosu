$(".img").hide();

$("#submitBtn").on("click", function() {
    check();
})

$("#forms").on("submit", function() {
    check();
    return false;
})

if (/iphone|ipad|ipod|android/.test(navigator.userAgent.toLowerCase())) {
    $(".fb-like").css("top", "-6px");
}

function check() {
    $(".img").hide().fadeIn();
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
