module.exports = {
    name: "Essence Veil (WIP)",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Abjuration | 20 Divination | 50 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Abjuration | 20 Divination | 50 Anima)",
    ],
    tags: [
        "Defense, Utility",
        "Negation, Information",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You place down a Veil, preventing information and teleportation based abilities, as well as serving as a weak Astral barrier.`,
                `The Veil works on Abilities cast up to 2× its own ESS.`,
                `The Veil can only be Sensed by Sense Essence, but can be made slightly opaque if the Caster wants to.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Veil has 3 different Filter, and each Filter can be made 2 or 1 way.`,
                `Choose any combination of Filters (can be all at once), and 1 State.`,
                `Additionally, the Caster can designate Entities who can bypass the Veil.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>3 Filter Types:</b>`,
                `<b>Information:</b> Blocks information based Abilities, like Telepathy, Message, Clairvoyance, ect...`,
                `<b>Transportation:</b> Blocks transportation (and teleportation) based Abilities, like Teleport, Misty Step, ect...`,
                `<b>Astral Barrier:</b> Blocks Souls without a physical Vessel from entering, aswell as Abilities coming from the Border or Astral.`,
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "6 × ESS^(1/3)"],
            ],
        },
    ],
}