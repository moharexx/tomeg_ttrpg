module.exports = {
    name: "Tidal Burst",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Conjuration | 10 Transmutation | 20 Evocation)",
    ],
    tags: [
        "Offense, Defense",
        "Melee, Flow Cone AOE, Physical Damage, BUFFER",
        "Main-Action + Bonus-Action / Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Tidal Burst Stance</b>, and surround yourself with a water bubble.`,
                `When entering <b>Tidal Burst Stance</b>, you gain <b>(20 × ESS) BUFFER</b>.`,
                `On Stance Trigger, you make an Attack in a Cone, converting half your <b>BUFFER</b> into <b>Physical Damage</b>.`,
                `Targets Damaged by this Ability get the <b>Soaked Effect</b>.`,
            ],
        },
        {
            type: "dots",
            content: [
                `The <b>BUFFER</b> must be from this Ability for it to deal Damage.`,
                `The Stance doesn't Trigger if you have <b>BUFFER</b> from other things.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Soaked Effect:</b>`,
                `An Entity can use a <b>Main-Action</b> to Remove this Effect from themselves.`,
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
                ["Cone Spread", "90° (1 Forward = +2 Width)"],
                ["BUFFER", "20 × ESS"],
                ["Physical Damage", "Half of Remaining BUFFER"]
            ],
        },
    ],
}