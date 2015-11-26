$(document).ready(function() {
    mixpanel.track("Page view");

    if (location.href == "http://39columns.com" || location.href == "http://39columns.com/index.html")
        mixpanel.track("Page view (Home)");
    else if (location.href == "http://39columns.com/tryread.html")
        mixpanel.track("Page view( Tryread)");
    else if (location.href == "http://39columns.com/redeem.html")
        mixpanel.track("Page view (Redeem)");
    else if (location.href == "http://39columns.com/faq.html")
        mixpanel.track("Page view (FAQ)");
    else if (location.href == "http://39columns.com/qrcode.html")
        mixpanel.track("Page view (QRCode)");

    $(".fa-facebook").click(function() {
        mixpanel.track("Go FB");
    });
    $(".fa-youtube").click(function() {
        mixpanel.track("Go Youtube");
    });
    $("#redeembtn").click(function() {
        mixpanel.track("Try redeem");
    });
    $(".issue-item a").click(function() {
        mixpanel.track("Preview read");
    });
    $(".clipboard").click(function() {
        mixpanel.track("Copy tryread");
    });
    $("#video").click(function() {
        mixpanel.track("Watch youtube video");
    });
    $("#dbtn1").click(function() {
        mixpanel.track("Donload (Top)");
    });
    $("#dbtn2").click(function() {
        mixpanel.track("Try redeem");
    });
    $("#dbtn3").click(function() {
        mixpanel.track("Donload (Bottom)");
    });
    $(".zopim").click(function() {
        mixpanel.track("Online Support");
    });
});