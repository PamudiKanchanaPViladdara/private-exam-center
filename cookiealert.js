/*
 * Bootstrap Cookie Alert by Wruczek
 * https://github.com/Wruczek/Bootstrap-Cookie-Alert
 * Modified version with Accept + Reject buttons
 * Released under MIT license
 */
(function () {
  "use strict";

  var cookieAlert = document.querySelector(".cookiealert");
  var acceptCookies = document.querySelector(".acceptcookies");
  var rejectCookies = document.querySelector(".rejectcookies");

  if (!cookieAlert) return;

  cookieAlert.offsetHeight; // Force browser to trigger reflow

  // Show the alert if we can't find a saved cookie choice
  if (!getCookie("cookieConsent")) {
    cookieAlert.classList.add("show");
  }

  // Accept cookies
  if (acceptCookies) {
    acceptCookies.addEventListener("click", function () {
      setCookie("cookieConsent", "accepted", 365);
      cookieAlert.classList.remove("show");
      console.log("Cookies accepted");
    });
  }

  // Reject cookies
  if (rejectCookies) {
    rejectCookies.addEventListener("click", function () {
      setCookie("cookieConsent", "rejected", 365);
      cookieAlert.classList.remove("show");
      console.log("Cookies rejected");
    });
  }

  // Cookie helpers
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
})();
