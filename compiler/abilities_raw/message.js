module.exports = {
    name: "Message",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Divination | 10 Anima | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Divination | 10 Anima | 20 Enchantment)",
    ],
    tags: [
        "Utility, Unlock",
        "Communication, Information",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You send a telepathic message to someone you know of.",
                "The Message propegates out at <box>10 × ESS^(1/3) m/s</box> out from the Caster, and tries to reaches it's Target.",
                "The Message has a Lifetime of <box>1 × Minute (20 Rounds)</box>, this is considered this Ability's <b>Duration.</b>",
                "The Message is encoded in Language, and only understood if your Target understands the Language.",
                "The Target doesn't know who sent the Message, unless it is specified in the Message.",
            ]
        },
        {
            type: "p",
            content: [
                "You can Target Network Devices, like routers, switches, antennas, phones, computers, ect...",
                "You can Target even unconnected Network Devices, as long as there is some kind of Network Protocol on them.",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Mass Messaging</b> (20 Divination, 5 XP):",
                "When Casting normally, you can now specify up to 5 Known Targets.",
                "Additionally, you can Cast this Ability as a <b>Main-Action + Bonus-Action</b> to send out a <b>Mass Message.</b>",
                "The Mass Message can have any number of Targets Included, or Excluded.",
                "The Mass Message can also Target Unknown Entites.",
                "For Unknown Entites you can either Include All, Exclude All, or apply some sort of filter, by age/gender/speices/ect...",
            ]
        },
        {
            type: "list",
            content: [
                `<b>Channel</b> (10 Enchantment, 5 XP):`,
                `Along with the Message, you can also send a Channel Invite, if accepted the Target joins a Channel.`,
                `The Channel's Duration is <box>1 Minute (20 Rounds)</box>, but can be refreshed using a <b>Bonus-Action.</b>`,
                `All parties can send Messages to each other through the Channel, even if one doesn't have Message Unlocked.`,
                `Lifetime, Speed, and Size of Messages are determined by the Channel Caster's Stats, and its Speed is <box>10×</box>`,
                `Leaving the Channel is a Free-Action.`,
            ]
        },
        {
            type: "list",
            content: [
                "<b>Unencoded Meaning</b> (10 Anima, 5 XP):",
                "The Target understand the Message as you meant it, this breaks any language barrier.",
                "This also applies for <b>Network Packets</b>, you don't need to know the Network Protocols, if it exists you can use them.",
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
                ["Cast Time", "Bonus-Action"],
                ["Message Lifetime", "1 Minute (20 Rounds)"],
                ["Message Speed", "20 × ESS^(1/3) m/s | 60 × ESS^(1/3) m/Round"],
                ["Message Size", "CS Words | 32 × CS bits"],
            ],
        },
    ],
}
