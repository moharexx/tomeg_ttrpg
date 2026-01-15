module.exports = {
    name: "Telepathy",
    category: "passive",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Divination | 10 Anima | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b>(10 INT | 20 WILL | 50 EGO), (5 Divination | 10 Anima | 20 Transmutation)",
    ],
    tags: [
        "Utility",
        "Communication, Targeting",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You can Telepathically and Empathically Communicate with Entities you can Sense within Range.`,
                `With a Successful <b>Soul Save</b> of <box>10 × ESS</box> the Target can block Communications for up to <box>1 Minute (20 Rounds)</box>`,
                `Your Target knows who they are Communicating to, unless you use a <a href="../main/mechanics.html#feint" target="_blank">Feint Action.</a>`,
                `The Target can attempt a <a href="../main/mechanics.html#scan" target="_blank">Scan (Arcana or Intuition)</a> Check against the <b>Feint.</b>`,
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
                ["Range", "5 × CS^(1/3)"],
                ["Soul Save", "10 × ESS"],
            ],
        },
    ],
}