module.exports = {
    name: "Organizing Tornado",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Evocation | 20 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Transmutation | 10 Evocation | 20 Conjuration)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Cone AOE, STR Save, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you pull Entities into a line infront of you with a tornado.`,
                `This is an AOE Attack, flowing out from the Cone's line of symmetry. (The center line going through the Cone)`,
                `Entities inside the Cone on a Failed STR Save of <box>10 × ESS</box> get pulled to the closes point on the Cone's line of symmetry.`,
            ]
        },
    ],
    stats: [
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Ability Stat", "Value"],
                ["Cast Time", "Main-Action"],
                ["Cone Length", "5 × CS^(1/3)"],
                ["Cone Spread", "60° (1 Forward = +2 width)"],
                ["STR Save", "10 × ESS"],
            ],
        },
    ],
}