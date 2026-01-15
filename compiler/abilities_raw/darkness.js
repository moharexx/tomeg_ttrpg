module.exports = {
    name: "Darkness",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Abjuration | 10 Divination | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 20 EGO), (5 Abjuration | 10 Divination | 20 Enchantment)",
    ],
    tags: [
        "Utility, Unlock",
        "Obscurance, Crawling Sphere AOE",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, you create a Sphere of <a href="../main/mechanics.html#lighting" target="_blank">Darkness</a>, eminating from a Point.`,
                `On Your Turns as a Free-Action you can Move the Point which the Darkness eminates from by <box>5 × CS^(1/3)</box>`,
                `Entities who Enter or Start their Turn in Darkness must Succeed a VIT Save of <box>14 × ESS</box> or have the <b>Darkness Effect.</b>`,
                `The Darkness Effect does nothing on it's own, it's for Entity Interactions.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Shaped Darkness</b> (50 Transmutation):`,
                `This Ability can be Shaped in whatever way the Caster desires.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Targeted Darkness</b> (20 Anima):`,
                `You can Cast Darkness onto a Pinpointed Target.`,
                `Target's are eligable to a Soul Save of <box>10 × ESS</box> to Cancel the Ability.`,
                `This Darkness has Half the Radius, and moves with the Target.`,
            ],
        },
        {
            type: "p",
            content: [
                `<i>Daaaaarkneeeesss</i>`,
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "5 × CS^(1/3)"],
                ["Move Distance", "5 × CS^(1/3)"],
                ["Radius", "2 × ESS^(1/3)"],
                ["VIT Save", "14 × ESS"],
            ],
        },
    ],
}