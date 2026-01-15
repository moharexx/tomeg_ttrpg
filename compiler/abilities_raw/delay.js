module.exports = {
    name: "Delay",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "200 Total XP",
    ],
    reqs_full: [
        "200 Total XP",
    ],
    tags: [
        "Hit +",
        "Hit -",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "You make an Ability or Attack Action have it's Hits proc after a delay.",
                "The Attack Roll and Save play out normally, but rather than the Target instantly being Hit, make it a Trigger.",
                "This Trigger can be anything you choose, from the Target Starting to Move, Taking Damage, ect...",
                "Only when this Trigger happens does the Target get Hit, and get the Hit's Effects.",
                "If this Trigger does not happen by the End of Your Next Turn then it either procs then, or gets wasted.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>COMBO:</b>",
                "When making the Trigger to Recieve Damage of the Same Type, when Triggered the Damages will Combine.",
                "This means you add the Damage of the Triggered Hit onto the new Hit, and use the Penetration Values of the new Hit.",
                "When having Multiple Triggers of this Type, only one can get this benefit.",
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
                ["Type", "Any"],
            ],
        },
    ],
}