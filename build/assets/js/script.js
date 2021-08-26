!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var a = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) n.d(r, a, function (t) {
      return e[t];
    }.bind(null, a));
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 2);
}([function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.querySelectorAll(".about__tab-box .about__tab"),
          t = Array.prototype.slice.call(e);
    if (!t.length) return;
    const n = document.querySelectorAll(".about__content .about__content-item"),
          r = Array.prototype.slice.call(n);
    t.forEach((e, n) => {
      e.addEventListener("click", function () {
        e.classList.contains("active") || (r.forEach(e => e.classList.remove("active")), t.forEach(e => e.classList.remove("active")), r[n].classList.add("active"), e.classList.add("active"));
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    new Swiper("#banners-slider", {
      navigation: {
        prevEl: "#banners-slider-nav-prev",
        nextEl: "#banners-slider-nav-next",
        disabledClass: "disable"
      },
      slidesPerView: 1,
      spaceBetween: 10,
      loop: !0,
      disabledClass: "nav-disable"
    }), new Swiper("#features-slider", {
      navigation: {
        prevEl: "#features-slider-nav-prev",
        nextEl: "#features-slider-nav-next",
        disabledClass: "disable"
      },
      slidesPerView: 1,
      spaceBetween: 10,
      loop: !0,
      autoplay: {
        delay: 3e3
      },
      effect: "fade",
      fadeEffect: {
        crossFade: !0
      },
      disabledClass: "nav-disable"
    });
    const e = new Swiper("#productPageThumbNail", {
      spaceBetween: 15,
      slidesPerView: 3,
      freeMode: !0,
      watchSlidesVisibility: !0,
      watchSlidesProgress: !0,
      direction: "vertical"
    }),
          t = (new Swiper("#productPageLarge", {
      spaceBetween: 10,
      thumbs: {
        swiper: e
      }
    }), document.getElementById("lightgallery"));
    t && lightGallery(t, {
      download: !1,
      thumbnail: !0,
      speed: 400,
      mousewheel: !0
    });
  };
}, function (e, t, n) {
  n(0), n(3), e.exports = n(1);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(1),
      a = n(0);
  document.addEventListener("DOMContentLoaded", function () {
    Object(r.default)(), Object(a.default)();
  });
}]);