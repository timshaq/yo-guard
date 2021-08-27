!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
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
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r, function (t) {
      return e[t];
    }.bind(null, r));
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 5);
}([function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.querySelectorAll(".about__tab-box .about__tab"),
          t = Array.prototype.slice.call(e);
    if (!t.length) return;
    const n = document.querySelectorAll(".about__content .about__content-item"),
          i = Array.prototype.slice.call(n);
    t.forEach((e, n) => {
      e.addEventListener("click", function () {
        e.classList.contains("active") || (i.forEach(e => e.classList.remove("active")), t.forEach(e => e.classList.remove("active")), i[n].classList.add("active"), e.classList.add("active"));
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.querySelector("#vacant-premises-slider");
    e && function (e, t, n) {
      const i = e;
      if (!i) return;
      const r = window.matchMedia(`(min-width:${t}px)`);
      let l;

      const a = function () {
        !0 !== r.matches ? !1 !== r.matches || (l = new Swiper(i, n)) : void 0 !== l && l.destroy(!0, !0);
      };

      r.addListener(a), a();
    }(e, 1200, {
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: "#vacant-premises-slider-pagination",
            type: "bullets"
          }
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
          pagination: {
            el: "#vacant-premises-slider-pagination",
            type: "bullets"
          }
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          pagination: {
            el: "#vacant-premises-slider-pagination",
            type: "bullets"
          }
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 10,
          pagination: {
            el: "#vacant-premises-slider-pagination",
            type: "bullets"
          }
        }
      }
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.getElementById("burger-btn");
    if (!e) return;
    const t = document.getElementById("burger-btn-close"),
          n = document.getElementById("header");

    function i(e) {
      e.classList.remove("burger-active"), html.style.overflowX = "hidden", html.style.overflowY = "scroll";
    }

    function r(e) {
      e.classList.add("burger-active"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    e.addEventListener("click", function () {
      r(n);
    }), t.addEventListener("click", function () {
      i(n);
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.getElementById("filter-btn");
    if (!e) return;
    const t = document.getElementById("filter-btn-close"),
          n = document.getElementById("filter-popup"),
          i = n.querySelector(".catalog-filter__submit");

    function r(e) {
      e.classList.remove("active-filter"), html.style.overflowX = "hidden", html.style.overflowY = "scroll";
    }

    function l(e) {
      e.classList.add("active-filter"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    e.addEventListener("click", function () {
      l(n);
    }), t.addEventListener("click", function () {
      r(n);
    }), i.addEventListener("click", function () {
      n.classList.contains("active-filter") && r(n);
    });
    const a = document.querySelectorAll(".price-slider");
    Array.prototype.slice.call(a).forEach(e => {
      var t = e,
          n = [e.querySelector(".slider-input1"), e.querySelector(".slider-input2")],
          i = parseInt(e.getAttribute("data-min")),
          r = parseInt(e.getAttribute("data-max")),
          l = 10 * r / 100,
          a = 90 * r / 100,
          s = e.getAttribute("data-symbol");
      noUiSlider.create(t, {
        start: [l, a],
        connect: [!1, !0, !1],
        range: {
          min: [i],
          max: r
        },
        format: {
          to: function (e) {
            return Math.ceil(e) + " " + s;
          },
          from: function (e) {
            return e.replace(" " + s, "");
          }
        }
      }), t.noUiSlider.on("update", function (e, t) {
        n[t].value = e[t];
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
      loop: !0,
      disabledClass: "nav-disable",
      breakpoints: {
        0: {
          pagination: {
            el: "#banners-slider-pagination",
            type: "bullets"
          },
          slidesPerView: 1,
          spaceBetween: 10
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
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
      freeMode: !0,
      watchSlidesVisibility: !0,
      watchSlidesProgress: !0,
      breakpoints: {
        0: {
          spaceBetween: 15,
          slidesPerView: 2,
          direction: "horizontal"
        },
        576: {
          spaceBetween: 15,
          slidesPerView: 3,
          direction: "horizontal"
        },
        1366: {
          spaceBetween: 15,
          slidesPerView: 3,
          direction: "vertical"
        }
      }
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
  n(0), n(1), n(2), n(3), n(6), e.exports = n(4);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(4),
      r = n(1),
      l = n(0),
      a = n(2),
      s = n(3);
  document.addEventListener("DOMContentLoaded", function () {
    Object(i.default)(), Object(r.default)(), Object(l.default)(), Object(a.default)(), Object(s.default)();
  });
}]);