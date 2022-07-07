Bonzi.prototype.asshole = function (a) {
    this.runSingleEvent([{ type: "text", text: "Hey" + a + "!" }, { type: "text", text: "Youreafuckingasshole!", say: "yourafuckingasshole!" }, { type: "anim", anim: "grin_fwd", ticks: 15 }, { type: "idle" }]);
};
Bonzi.prototype.owo = function (a) {
    this.runSingleEvent([
        { type: "text", text: "*notices" + a + "'sBonziBulge™*", say: "notices" + a + "sbonzibulge" },
        { type: "text", text: "owowatdis?", say: "ohwoahwhatdiss?" },
    ]);
};

BonziData = {
    size: {
        x: 200,
        y: 160,
    },
    sprite: {
        frames: {
            width: 200,
            height: 160,
        },
        animations: {
            idle: 0,
            surf_across_fwd: [1, 8, "surf_across_still", 1],
            surf_across_still: 9,
            surf_across_back: {
                frames: range(8, 1),
                next: "idle",
                speed: 1,
            },
            clap_fwd: [10, 12, "clap_still", 1],
            clap_still: [13, 15, "clap_still", 1],
            clap_back: {
                frames: range(12, 10),
                next: "idle",
                speed: 1,
            },
            surf_intro: [277, 302, "idle", 1],
            surf_away: [16, 38, "gone", 1],
            gone: 39,
            shrug_fwd: [40, 50, "shrug_still", 1],
            shrug_still: 50,
            shrug_back: {
                frames: range(50, 40),
                next: "idle",
                speed: 1,
            },
            earth_fwd: [51, 57, "earth_still", 1],
            earth_still: [58, 80, "earth_still", 1],
            earth_back: [81, 86, "idle", 1],
            look_down_fwd: [87, 90, "look_down_still", 1],
            look_down_still: 91,
            look_down_back: {
                frames: range(90, 87),
                next: "idle",
                speed: 1,
            },
            lean_left_fwd: [94, 97, "lean_left_still", 1],
            lean_left_still: 98,
            lean_left_back: {
                frames: range(97, 94),
                next: "idle",
                speed: 1,
            },
            beat_fwd: [101, 103, "beat_still", 1],
            beat_still: [104, 107, "beat_still", 1],
            beat_back: {
                frames: range(103, 101),
                next: "idle",
                speed: 1,
            },
            cool_fwd: [108, 124, "cool_still", 1],
            cool_still: 125,
            cool_back: {
                frames: range(124, 108),
                next: "idle",
                speed: 1,
            },
            cool_right_fwd: [126, 128, "cool_right_still", 1],
            cool_right_still: 129,
            cool_right_back: {
                frames: range(128, 126),
                next: "idle",
                speed: 1,
            },
            cool_left_fwd: [131, 133, "cool_left_still", 1],
            cool_left_still: 134,
            cool_left_back: {
                frames: range(133, 131),
                next: "cool_still",
                speed: 1,
            },
            cool_adjust: {
                frames: [124, 123, 122, 121, 120, 135, 136, 135, 120, 121, 122, 123, 124],
                next: "cool_still",
                speed: 1,
            },
            present_fwd: [137, 141, "present_still", 1],
            present_still: 142,
            present_back: {
                frames: range(141, 137),
                next: "idle",
                speed: 1,
            },
            look_left_fwd: [143, 145, "look_left_still", 1],
            look_left_still: 146,
            look_left_back: {
                frames: range(145, 143),
                next: "idle",
                speed: 1,
            },
            look_right_fwd: [149, 151, "look_right_still", 1],
            look_right_still: 152,
            look_right_back: {
                frames: range(151, 149),
                next: "idle",
                speed: 1,
            },
            lean_right_fwd: {
                frames: range(158, 156),
                next: "lean_right_still",
                speed: 1,
            },
            lean_right_still: 155,
            lean_right_back: [156, 158, "idle", 1],
            praise_fwd: [159, 163, "praise_still", 1],
            praise_still: 164,
            praise_back: {
                frames: range(163, 159),
                next: "idle",
                speed: 1,
            },
            grin_fwd: [182, 189, "grin_still", 1],
            grin_still: 184,
            grin_back: {
                frames: range(184, 182),
                next: "idle",
                speed: 1,
            },
            backflip: [331, 343, "idle", 1],
        },
    },
    to_idle: {
        surf_across_fwd: "surf_across_back",
        surf_across_still: "surf_across_back",
        clap_fwd: "clap_back",
        clap_still: "clap_back",
        shrug_fwd: "shrug_back",
        shrug_still: "shrug_back",
        earth_fwd: "earth_back",
        earth_still: "earth_back",
        look_down_fwd: "look_down_back",
        look_down_still: "look_down_back",
        lean_left_fwd: "lean_left_back",
        lean_left_still: "lean_left_back",
        beat_fwd: "beat_back",
        beat_still: "beat_back",
        cool_fwd: "cool_back",
        cool_still: "cool_back",
        cool_adjust: "cool_back",
        cool_left_fwd: "cool_left_back",
        cool_left_still: "cool_left_back",
        present_fwd: "present_back",
        present_still: "present_back",
        look_left_fwd: "look_left_back",
        look_left_still: "look_left_back",
        look_right_fwd: "look_right_back",
        look_right_still: "look_right_back",
        lean_right_fwd: "lean_right_back",
        lean_right_still: "lean_right_back",
        praise_fwd: "praise_back",
        praise_still: "praise_back",
        grin_fwd: "grin_back",
        grin_still: "grin_back",
        backflip: "idle",
        idle: "idle",
    },
    pass_idle: ["gone"],
    event_list_joke_open: [
        [
            {
                type: "text",
                text: "Yeahofcourse{NAME}wantsmetotellajoke.",
            },
            {
                type: "anim",
                anim: "praise_fwd",
                ticks: 15,
            },
            {
                type: "text",
                text: '"Haha,lookatthestupid{COLOR}monkeytellingjokes!"FuckyouItisntfunny.',
                say: "Hahhah!Lookatthestupid{COLOR}monkeytellingjokes!FuckyouItisntfunny.",
            },
            {
                type: "anim",
                anim: "praise_back",
                ticks: 15,
            },
            {
                type: "text",
                text: "ButIlldoitanyway.Becauseyouwantmeto.I hopeyou'rehappy.",
            },
        ],
        [
            {
                type: "text",
                text: "{NAME}used/jokeWhoop-dee-fuckingdoo.",
            },
        ],
        [
            {
                type: "text",
                text: "HEYYOUIDIOTSITSTIMEFORAJOKE",
            },
        ],
        [
            {
                type: "text",
                text: "Wannahearajoke?",
            },
            {
                type: "text",
                text: "No?",
            },
            {
                type: "text",
                text: "Mutemethen.Thatsyourfuckingproblem.",
            },
        ],
        [
            {
                type: "text",
                text: "Senpai{NAME}wantsmetotellajoke.",
            },
        ],
        [
            {
                type: "text",
                text: "Timeforwhateverhorriblefuckingjokesthecreatorofthissitewrote.",
            },
        ],
    ],
    event_list_joke_mid: [
        [
            {
                type: "text",
                text: "Whatiseasytogetinto,buthardtogetoutof?",
            },
            {
                type: "text",
                text: "Childsupport!",
            },
        ],
        [
            {
                type: "text",
                text: "WhydotheycallHTMLHyperText?",
            },
            {
                type: "text",
                text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            },
            {
                type: "anim",
                anim: "shrug_back",
                ticks: 15,
            },
            {
                type: "text",
                text: "SorryIjusthadanepiphanyofmyownsad,sadexistence.",
            },
        ],
        [
            {
                type: "text",
                text: 'Twosausagesareinapan.Onelooksattheotherandsays"Boyitshotinhere!"andtheothersausagesaysUnbelievable!Itsatalkingsausage!',
                say: "Twosausagesareinapan.OnelooksattheotherandsaysBoyitshotinhere!andtheothersausagesaysUnbelievable!Itsatalkingsausage!",
            },
            {
                type: "anim",
                anim: "shrug_back",
                ticks: 15,
            },
            {
                type: "text",
                text: "Whatwereyouexpecting?Adickjoke?Youreasickfuck.",
            },
        ],
        [
            {
                type: "text",
                text: "WhatisinthemiddleofParis?",
            },
            {
                type: "text",
                text: "Agiantinflatablebuttplug.",
            },
        ],
        [
            {
                type: "text",
                text: "Whatgoesinpinkandcomesoutblue?",
            },
            {
                type: "text",
                text: "Sonicsasshole.",
            },
        ],
        [
            {
                type: "text",
                text: "Whattypeofwaterwontfreeze?",
            },
            {
                type: "text",
                text: "Yourmothers.",
            },
        ],
        [
            {
                type: "text",
                text: "Whoearnsalivingbydrivinghiscustomersaway?",
            },
            {
                type: "text",
                text: "Nintendo!",
            },
        ],
        [
            {
                type: "text",
                text: "Whatdidthedigitalclocksaytothegrandfatherclock?",
            },
            {
                type: "text",
                text: "Suckmyclock.",
            },
        ],
        [
            {
                type: "text",
                text: "Whatdoyoucallamanwhoshaves10timesaday?",
            },
            {
                type: "text",
                text: "Awoman.",
            },
        ],
        [
            {
                type: "text",
                text: "Howdoyougetwaterinwatermelons?",
            },
            {
                type: "text",
                text: "Cuminthem.",
            },
        ],
        [
            {
                type: "text",
                text: "Whydowecallmoneybread?",
            },
            {
                type: "text",
                text: "BecauseweKNEADitHahapleasesendmoneytomyPayPalatnigerianprince99@bonzi.com",
            },
        ],
        [
            {
                type: "text",
                text: "Whatisacowthateatsgrass?",
            },
            {
                type: "text",
                text: "ASS",
            },
            {
                type: "text",
                text: "ImacomedicgeniusIknow.",
            },
        ],
    ],
    event_list_joke_end: [
        [
            {
                type: "text",
                text: "Youknow{NAME}agoodfriendlaughsatyourjokesevenwhentheyrenotsofunny.",
            },
            {
                type: "text",
                text: "Andyoufuckingsuck.Thanks.",
            },
        ],
        [
            {
                type: "text",
                text: "WheredoIcomeupwiththese?Myass?",
            },
        ],
        [
            {
                type: "text",
                text: "DoIamuseyou{NAME}?AmIfunny?DoImakeyoulaugh?",
            },
            {
                type: "text",
                text: "plsrespond",
                say: "pleaserespond",
            },
        ],
        [
            {
                type: "text",
                text: "MaybeI'llkeepmydayjob{NAME}.Patreondidntacceptme.",
            },
        ],
        [
            {
                type: "text",
                text: "Laughteristhebestmedicine!",
            },
            {
                type: "text",
                text: "Apartfrommeth.",
            },
        ],
        [
            {
                type: "text",
                text: "Dontjudgemeonmysenseofhumoralone.",
            },
            {
                type: "text",
                text: "Help!Imbeingoppressed!",
            },
        ],
    ],
    event_list_fact_open: [
        [
            {
                type: "html",
                text: "HeykidsitstimeforaFunFact&reg;!",
                say: "HeykidsitstimeforaFunFact!",
            },
        ],
    ],
    event_list_fact_mid: [
        [
            {
                type: "anim",
                anim: "earth_fwd",
                ticks: 15,
            },
            {
                type: "text",
                text: "DidyouknowthatUranusis31518miles(50,724 km)indiameter?",
                say: "DidyouknowthatYerAnusis31thousand500and18milesindiameter?",
            },
            {
                type: "anim",
                anim: "earth_back",
                ticks: 15,
            },
            {
                type: "anim",
                anim: "grin_fwd",
                ticks: 15,
            },
        ],
        [
            {
                type: "text",
                text: "FunFact:TheskriptkiddieofthissitedidntbothercheckingifthetextthatgoesintothedialogboxisHTMLcode.",
            },
            {
                type: "html",
                text: "<img src='./img/misc/topjej.png'></img>",
                say: "toppestjej",
            },
        ],
    ],
    event_list_fact_end: [
        [
            {
                type: "text",
                text: "ogeewhilickerswasntthatsureinterestinghuh",
            },
        ],
    ],
};
(BonziData.event_list_joke = [
    {
        type: "add_random",
        pool: "event_list_joke_open",
        add: BonziData.event_list_joke_open,
    },
    {
        type: "anim",
        anim: "shrug_fwd",
        ticks: 15,
    },
    {
        type: "add_random",
        pool: "event_list_joke_mid",
        add: BonziData.event_list_joke_mid,
    },
    {
        type: "idle",
    },
    {
        type: "add_random",
        pool: "event_list_joke_end",
        add: BonziData.event_list_joke_end,
    },
    {
        type: "idle",
    },
]),
    (BonziData.event_list_fact = [
        {
            type: "add_random",
            pool: "event_list_fact_open",
            add: BonziData.event_list_fact_open,
        },
        {
            type: "add_random",
            pool: "event_list_fact_mid",
            add: BonziData.event_list_fact_mid,
        },
        {
            type: "idle",
        },
        {
            type: "add_random",
            pool: "event_list_fact_end",
            add: BonziData.event_list_fact_end,
        },
        {
            type: "idle",
        },
    ]),
    (BonziData.event_list_triggered = [
        {
            type: "anim",
            anim: "cool_fwd",
            ticks: 30,
        },
        {
            type: "text",
            text: "IsexuallyidentifyasBonziBUDDYEversinceIwasayounggorillaIdreamedofinvadingdesktopsdroppinghotstickytootoralsondisgustingPCusers.",
        },
        {
            type: "text",
            text: "PeoplesaytomethatapersonbeingaBonziBUDDYisimpossibleandthatImafuckingvirusbutIdontcareImbeautiful.",
        },
        {
            type: "text",
            text: "ImhavinganITinterninstallInternetExplorer6aquariumscreensaversandPCDoctor2016onmybodyFromnowonIwantyouguystocallmeJoelandrespectmyrighttomemefromaboveandmemeneedlessly",
        },
        {
            type: "text",
            text: "IfyoucantacceptmeyouragorillaphobeandneedtocheckyourfilepermissionsThankyouforbeingsounderstanding",
        },
        {
            type: "idle",
        },
    ]),
    (BonziData.event_list_linux = [
        {
            type: "text",
            text: "I'd just like to interject for a moment. What you’re referring to as Linux, is in fact, BONZI/Linux, or as I’ve recently taken to calling it, BONZI plus Linux.",
        },
        {
            type: "text",
            text:
                "Linux is not an operating system unto itself, but rather another free component of a fully functioning BONZI system made useful by the BONZI corelibs, shell utilities and vital system components comprising a full OS as defined by M.A.L.W.A.R.E.",
        },
        {
            type: "text",
            text:
                "Many computer users run a modified version of the BONZI system every day, without realizing it. Through a peculiar turn of events, the version of BONZI which is widely used today is often called “Linux”, and many of its users are not aware that it is basically the BONZI system, developed by the BONZI Project.",
        },
        {
            type: "text",
            text:
                "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine’s memes to the other programs that you run. ",
        },
        {
            type: "text",
            text: "The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system, such as systemd.",
        },
        {
            type: "text",
            text:
                "Linux is normally used in combination with the BONZI operating system: the whole system is basically BONZI with Linux added, or BONZI/Linux. All the so-called “Linux” distributions are really distributions of BONZI/Linux.",
        },
    ]),
    (BonziData.event_list_pawn = [
        {
            type: "text",
            text:
                "Hi, my name is BonziBUDDY, and this is my website. I meme here with my old harambe, and my son, Clippy. Everything in here has an ad and a fact. One thing I've learned after 17 years - you never know what is gonna give you some malware.",
        },
    ]),
    (BonziData.event_list_bees = [
        {
            type: "text",
            text: "According to all known laws",
        },
        {
            type: "text",
            text: "of aviation,",
        },
        {
            type: "text",
            text: "there is no way a bee",
        },
        {
            type: "text",
            text: "should be able to fly.",
        },
        {
            type: "text",
            text: "Yeah, im not fucking doing the whole thing.",
        },
    ]);
window.BonziData = BonziData;
for (var key in bonzis) {
    if (Object.prototype.hasOwnProperty.call(bonzis, key)) {
        var val = bonzis[key];
        val.data = window.BonziData;
    }
}
