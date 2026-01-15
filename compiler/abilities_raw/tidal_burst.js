module.exports = {
    name: "Tidal Burst",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Transmutation | Conjuration",
    ],
    reqs_full: [
        "(10 INT | 10 WILL | 10 EGO), (10 Conjuration | 20 Transmutation | 50 Evocation)",
    ],
    tags: [
        "Offense, Defense",
        "Physical Damage, TEMP-HP",
        "Main-Action + Bonus-Action / Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in Tidal Burst Stance, and surround yourself with a water bubble.",
                "When entering this, you gain Temp-HP.",
                "On Stance Trigger, you make an Attack in a Cone, converting your TEMP-HP to Half of it in Physical Damage.",
            ],
        },
        {
            type: "dots",
            content: [
                "The Temp-HP Must be from this Ability For it to Damage.",
                "The Stance Does not Trigger if you have Temp-HP From other things.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities | Moving | HD Decrease</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Wet Effect:</b>",
                "On Dealing Damage, the Target gets wet with water.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability can CRIT for 2× Temp-HP, this is an Overwrite from the Base Rule of 3×.",
            ],
        },
    ],
    stats: [
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Ability Stat", "Value"],
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Stance Trigger", "Bonus-Action"],
                ["Cone Length", "2 × CS^(1/3)"],
                ["Cone Spread", "1 Forward = +2 Width (90°)"],
                ["Temp-HP", "20 × ESS"],
                ["Damage", "Half of Remaining TEMP-HP"]
            ],
        },
    ],
}