window.loadphotoswipejs && window.alert("You've loaded load-photoswipe.js twice. See https://github.com/liwenyip/hugo-easy-gallery/issues/6");
var loadphotoswipejs = 1;
document.addEventListener("DOMContentLoaded", function() {
    var e = [];
    document.querySelectorAll("figure").forEach(function(t, o) {
        if ("no-photoswipe" == t.className) return !0;
        var i = t.querySelector("a"),
            a = t.querySelector("img"),
            r = i.href,
            s = a.alt,
            n = a.src,
            l = a.author;
        if (i.dataset.size) {
            var c = i.dataset.size.split("x"),
                d = {
                    src: r,
                    w: c[0],
                    h: c[1],
                    title: s,
                    msrc: n,
                    author: l
                };
            console.log("Using pre-defined dimensions for " + r)
        } else {
            d = {
                src: r,
                w: 400,
                h: 300,
                title: s,
                msrc: n,
                author: l
            };
            console.log("Using default dimensions for " + r);
            var u = new Image;
            u.src = r;
            var h = setInterval(function() {
                var e = u.naturalWidth,
                    t = u.naturalHeight;
                e && t && (clearInterval(h), d.w = e, d.h = t, console.log("Got actual dimensions for " + u.src))
            }, 30)
        }
        e.push(d), t.addEventListener("click", function(t) {
            t.preventDefault();
            var i = document.querySelector(".pswp");
            new PhotoSwipe(i, PhotoSwipeUI_Default, e, {
                index: o,
                bgOpacity: .8,
                showHideOpacity: !0
            }).init()
        }, !1)
    })
}, !1);