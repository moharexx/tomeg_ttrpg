module.exports = {
    name: "Terror Entity",
    category: "active",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "10 Performance",
        "5 Enchantment | 10 Anima | 20 Divination",
    ],
    reqs_full: [
        "<b>Innate:</b> 10 Performance",
        "<b>Spell:</b> (5 INT | 5 WILL | 5 DES), (5 Enchantment | 10 Anima | 20 Divination)",
    ],
    tags: [
        "Offense",
        "Soul Save, Targeting, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you Terrify a Pinpointed Entity or more.`,
                `You have <b>Targeting Points</b> equal to <box>12 × ESS</box>, you can spend <b>Targeting Points</b on Entities to Target them.`,
                `The Soul Save's Difficulty is equal to the <b>Targeting Points</b> spent on the Target.`,
                `On a Failed Save the Target gain the <b>Terror Effect.</b>`,
            ],
        },
        {
            type: "dots",
            content: [
                `If Cast as <b>Innate</b>, the Ability's Range is <box>5 × Performance Modifier^(1/3)</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Terror Effect:</b>`,
                `Entities have Disadvantage on Attacks against the Caster and cannot willfully move closer to the Caster.`,
                `This Effect Ends if the Caster gets the <a href="../main/mechanics.html#conditions">Dying Condition</a> or Dies.`,
                `The <b>Terror Effect</b> Last for the Abilites Duration.`,
                `Entities at the End of Their Turn can repeat the <b>Soul Save</b>, Ending the <b>Terror Effect</b> on a success.`,
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
                ["Soul Save", "Targeting Points spent on Entity"],
                ["Targeting Point", "12 × ESS"],
            ],
        },
    ],
}