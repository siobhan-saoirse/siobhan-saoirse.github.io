Bonzi.prototype.talk = function (a, b, c) {
    var d = this;
    (c = c || !1),
        (a = replaceAll(a, "{NAME}", this.userPublic.name)),
        (a = replaceAll(a, "{COLOR}", this.color)),
        "undefined" != typeof b ? ((b = replaceAll(b, "{NAME}", this.userPublic.name)), (b = replaceAll(b, "{COLOR}", this.color))) : (b = a.replace("&gt;", "")),
        (a = linkify(a));
    a = textHandler(a, this); // will merge
    if (b.includes("[[") && b.replace(/[^l]/g, "").length >= 75) b = "Suspicious amount of l's found.";
    var e = "&gt;" == a.substring(0, 4) || ">" == a[0];
    this.$dialogCont[c ? "html" : "text"](a)[e ? "addClass" : "removeClass"]("bubble_greentext").css("display", "block"),
        this.stopSpeaking(),
        (this.goingToSpeak = !0),
        b = b.replaceAll(" ","");
        b = b.replaceAll(",","");
        b = b.replaceAll(".","");
        b = b.replaceAll("_","");
        b = b.replaceAll("!","! ");
        b = b.replaceAll("?","? ");
        speak.play(
            b,
            {
                pitch: this.userPublic.pitch,
                speed: this.userPublic.speed,
            },
            function () {
                d.clearDialog();
            },
            function (a) {
                d.goingToSpeak || a.stop(), (d.voiceSource = a);
            }
        );
    //afterHandler(this)
};
