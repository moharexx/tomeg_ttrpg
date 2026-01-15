module.exports = {
    name: "Genesis",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "1000 Conjuration | 1000 Transmutation | 1000 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (1000 INT | 1000 WILL | 1000 EGO), (1000 Conjuration | 1000 Transmutation | 1000 Enchantment)",
    ],
    tags: [
        "Utility, Unlock",
        "Creation",
        "1 Minute",
    ],
    unlock_cost: 1000,
    description: [
        {
            type: "p",
            content: [
                `<b><i>Let there be light.</i></b>`,
                "Choose a point in range, and inside Interdimensional Void.",
                "While casting, Properties of the new Universe can be set.",
                "After the Cast Time a new Universe is born.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Universal Edge:</b>",
                "Will the Edge Loop Back to an opposite side, or will it be a Solid Barrier.",
                "The Universal Edge has a <box>CS Armor VS All</box>, and <box>10 × CS HP</box>",
                "The Universal Edge will slowly Repair if Damaged, at a rate of <box>CS HP / Year</box>",
                "Casting Genesis for the sake of Repair can Restore <box>10 × CS HP</box> to the Universal Edge.",
                "Puncturing the Edge will Burst the Universe open and slowly dissolve all of it's physics back into the Interdimensional Void.",
                "Even a Looping Edge can be Damaged by some type of Spatial Defense bypass, and be Punctured.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Spatial Dimensionality:</b>",
                "The Interdimensional Void is an Infinite Dimension Space, this does not mean there are Infinite Dimensional Objects in it.",
                "The new Universe will have some amount of Dimensions, and a 3 Dimensional baseline Plane, onto which Objects will naturally reside.",
                "The default is Infinite Dimensions, tho a smaller Infinity than the Interdimensional Void.",
                "Having Finite Dimensions will Limit the Usage of Abilities which play on the Infinite Dimensionality of the vast majority of Universes.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Universal Constants:</b>",
                "Determine the Universal Constants of the new Universe, from gravity, to subatomic forces, to even the regular shapes of matter.",
                "A Universe could have a different structure of Atoms, or even no Atoms by default, it could have small planets only a few meters across, ect...",
                "Limitations up to GM, feel free to be generous with this one.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Anti-Genesis</b> (1000 Abjuration):",
                "Rather than Creating a new Universe, choose one in Range, and if it's Edge has less than <box>50 × ESS HP</box> then Instantly Destroy the Universe.",
                "The Universal Edge will pop, and all Targets must make a <box>VIT Save of ESS</box> or be instantly Dematerialized.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Sub-Genesis</b> (1000 Anima):",
                "Create a new Universe inside of an Existing one.",
                "The new Universe can either remain inside, or be taken out and leave behind a Spatial Hole.",
                "The Spatial Hole will result in a sudden powerful shockwave to stabilize back itself.",
                "The Shockwave has a Radius of <box>200 × ESS^(1/3)</box> and deals <box>20 × ESS Bludgeoning</box> Damage.",
                "On Cast the Contents will be stolen from the Existing Universe into the new one, and be under the new Universal Constants.",
                "If the new Universe stays Inside, it is Determined on Cast if it can be entered and leaved, or if it has a Solid Barrier around it.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability cannot CRIT. duh!?",
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
                ["Cast Time", "1 Minute (20 Rounds)"],
                ["Range", "100 × CS^(1/3)"],
                ["Radius", "100 × ESS^(1/3)"],
            ],
        },
    ],
}