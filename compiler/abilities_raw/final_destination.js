module.exports = {
    name: "Final Destination",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "20 Enchantment | 50 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> (200 INT | 200 WILL | 50 EGO), (20 Enchantment | 50 Anima)",
    ],
    tags: [
        "Offense, Defense, Unlock",
        "Touch, Buff, Debuff",
        "Main-Action",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "When you Touch your Target, they become destined to achieve their finality.",
                "On Cast the Target is eligible to a Soul Save to Negate this Ability.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>An Entity Effected by this Spell:</b>",
                "All d10 Checks rolled 5 or Lower on the Dice are treated with a Finalized Value of 0, so a Miss or Fail.",
                "All d10 Checks rolled 6 or Higher on the Dice are treated as 10 and a CRIT.",
                `All Damage Recieved is <a href="../main/mechanics.html#max_value">Maximalized.</a>`,
                "Healing, Shielding, and any support Ability cannot CRIT.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Total Final Destination</b> (200 Enchantment | 1000 Anima, 50 XP):",
                "You can use a <box>Main-Action + Bonus-Action</box> to use this Ability with a Sphere AOE on Yourself.",
                "Using this Feature Effects the Caster as well, and the Caster always Fails the Save.",
                "Using the Ability this way puts a Cooldown of 1 Hour (1200 Rounds) on this Feature Specifically.",
                "<b>Radius:</b> <box>2 × CS^(1/3)</box>",
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
                ["Range", "Touch"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Soul Save", "8 × ESS"],
            ],
        },
    ],
}