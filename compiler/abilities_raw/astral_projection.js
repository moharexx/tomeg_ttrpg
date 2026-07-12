module.exports = {
    name: "Astral Projection (WIP)",
    category: "active",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "Soul or similar",
        "5 Anima | 10 Enchantment | 20 Divination",
    ],
    reqs_full: [
        "<b>Innate:</b> Soul or similar",
        "<b>Spell:</b> 10 CS, (5 Anima | 10 Enchantment | 20 Divination)",
    ],
    tags: [
        "Utility",
        "Self, Soul",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `You project yourself out from a Physical Vessel, into an Astral Avatar.`,
                `The Avatar has all the same Current and Maximum Stats, and Abilities.`,
                `When using the Ability you can decide to connect an Astral Cord back to your Physical Vessel.`,
                `You can also create Astral forms of any Magical Items on you, while the Ability is Active these items become mundane in the Physical.`,
                `<b>Note to the GM:</b> If players try to twist the meaning of "on you" to abuse this Ability, feel free to kill them irl.`,
                `When you Cast this as a Spell the Range becomes Touch.`,
                `Unwilling Targets (including Magical Items) are entitled to a Soul Save against the effect.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Astral Cord:</b>`,
                `You know where your Physical Vessel is.`,
                `You can throw Soul Saves against the Physical Vessel being possessed.`,
                `The Physical Vessel is sustained and protected against natural decay.`,
                `You can Cast for 1 Minute (20 Rounds) to instantly get back to your Physical Vessel.`,
                `The Cord spans through the Astral, it has 10 HP and 10 Armor VS All.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Mass Astral Projection</b> (Main-Action + Bonus-Action):`,
                `You can Target every selected Entity or Magical Object within <box>CS^(1/3)</box> meters`,
                `If you don't have the Ability as a Spell then this requires 1 Minute (20 Rounds) of Cast Time.`,
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
                ["Cast Time", "Bonus-Action"],
                ["Range", "Self (Innate) | Touch (Spell)"],
                ["Soul Save", "4 × ESS"],
            ],
        },
    ],
}