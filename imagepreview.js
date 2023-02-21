!function(a) {
    "use strict";
    a.fn.SamratShamimToolTip = function(b) {
        var c = a.extend({
            xOffset: 10,
            yOffset: 10
        },
        b);
        return this.each(function() {
            var b = a(this);
            b.hover(function(b) {
                this.t = this.title,
                this.title = "";
                var d = "" != this.t ? "<br/>" + this.t : "";
                a("body").append("<p id='preview'><img id='prev' src='" + this.rel + "' alt='Image preview' />" + d + "</p>"),
                a("#preview").css({
                    top: b.pageY - c.xOffset + "px",
                    left: b.pageX + c.yOffset + "px"
                }).fadeIn()
            },
            function() {
                this.title = this.t,
                a("#preview").remove()
            }),
            b.mousemove(function(b) {
                // console.log(b.pageX);
                // console.log($("#preview").width());
                // console.log($(window).width());
                var ful = $(window).width();
                var half = ($(window).width() / 2);
                $("#prev").css("width", half - 30 + "px")
                if(b.pageX < half)
                    a("#preview").css("top", b.pageY - c.xOffset + "px").css("left", b.pageX + c.yOffset + "px")
                else
                    a("#preview").css("top", b.pageY - c.xOffset + "px").css("right", ful - b.pageX + "px").css("left", "auto")
            })
        })
    }
} (jQuery);