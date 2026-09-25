module.exports = {
    name: "World Cutting Slash",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "50 Transmutation | 200 Abjuration | 1000 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 200 CS, (50 Transmutation | 200 Abjuration | 1000 Evocation)",
    ],
    tags: [
        "Offense",
        "Melee, Physical Damage",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 200,
    description: [
        {
            type: "p",
            content: [
                `<i>"Phase; Scale of the Dragon; Recoil; Twin Meteors..."</i>`,
                `<i><b>"World Cutting Slash"</b></i>`,
            ],
        },
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>World Cutting Slash Stance</b>.`,
                `The Next Turn you can Trigger the <b>World Cutting Slash</b>, making a single Attack against a Pinpointed Target.`,
                `This Attack counts as Melee, it simply happens at the Target's Position.`,
                `Each point of Damage going into BUFFERs or Shielding Abilities count as 2 points of Damage.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>`,
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
                ["Cast Time", "Main-Action"],
                ["Stance Trigger", "Main-Action in your Next Turn"],
                ["Range", "5 × CS^(1/3)"],
                ["Physical Damage", "2d12 × ESS"],
                ["Armor-Pen", "10 × ESS"],
            ],
        },
    ],
}