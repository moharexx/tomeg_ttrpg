module.exports = {
    name: "Charm Entity",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 5 EGO), (5 Enchantment | 10 Anima)",
    ],
    tags: [
        "Offense, Defense, Utility",
        "Soul Save, Targeting, Debuff",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, you Charm a Pinpointed Entity or more, this is considered a Ranged Save.",
                "You have <b>Targeting Points</b> equal to <box>10 × ESS</box>, you can spend <b>Targeting Points</b> on Entities to Target them.",
                "The Soul Save's Difficulty is equal to the <b>Targeting Points</b> spent on the Target.",
                `On a Failed Save the Target gets the Charmed Effect.`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Charmed Effect:</b>",
                "A Charmed Target cannot bring itself to willfully and directly harm the Caster.",
                "Performance Checks by the Caster against Charmed Targets are made with Advantage.",
                "Charmed Targets are likely to accept unrealistic proposals from the Caster.",
            ],
        },
        {
            type: "dots",
            content: [
                "If the Target knows it's Charmed it can use a <b>Bonus-Action</b> to attempt the Save again.",
                "A Target will know it's Charmed if it's in Combat with the Caster.",
                "A Charmed Target also knows if their <box>Intuition Check | EGO</box> is at least <box>10 × ESS</box>",
                "After the Spell Ends, the Target will know it was Charmed if it was made to do something very uncharacteristic of itself.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Behavioural Examples:</b>",
                "A Charmed Target Attacked by the Caster will usually just try to run, plead, and re-attempt the Save.",
                "A Charmed Target made to kill another person they wouldn't, will know they are Charmed after the Spell Ends.",
                "A Charmed Target's psychology can be slightly altered by what happens during the Spell, like remaining friendly even after, ect...",
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
                ["Range", "5 × CS^(1/3)"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Soul Save", "Targeting Points spent on Entity"],
                ["Targeting Points", "10 × ESS"],
            ],
        },
    ],
}