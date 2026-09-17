module.exports = {
    name: "Domain Expansion (WIP)",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "200 CS",
    ],
    reqs_full: [
        "<b>Spell:</b> 200 CS",
    ],
    tags: [
        "Offense, Defense, Utility, Cooldown, Unlock",
        "Everything Under The Sun",
        "Variable-Action, SP",
    ],
    unlock_cost: 200,
    description: [
        {
            type: "p",
            content: [
                `When you Unlock this Ability, first you must design your <b>Domain</b>, only then can you use it.`,
                `When taking a <b>Long-Rest</b> you can design or re-design your Domain.`,
                `No <b>Meta-Ability</b> or <b>Potency</b> can be put onto a Domain, they are complex and customizable enough as it is...`,
            ]
        },
        {
            type: "p",
            content: [
                `This Ability is heavily WIP content, and might be wildly unbalanced.`,
                `Simple Domains and Domain Amplification are WIP #soon #swoon`,
            ]
        },
        {
            type: "p",
            content: [
                `Designing Domains works by assigning Property Points (<b>PP</b>) to different Stats, Effects, and interactions.`,
                `Some add PP, while others subtract, like how they work on Armaments.`,
                `A Domain can be at most 10 PP by the end of the creation process.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Cast-Time:</b>`,
                `<b>Bonus-Action:</b> <box>2 PP</box>`,
                `<b>Main-Action:</b> <box>0 PP</box>`,
                `<b>Main-Action + Bonus-Action:</b> <box>-2 PP</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>SP Cost:</b>`,
                `<box>0 × ESS</box> : <box>0 PP</box>`,
                `<box>5 × ESS</box> : <box>-2 PP</box>`,
                `<box>10 × ESS</box> : <box>-4 PP</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Cooldown:</b>`,
                `<b>None:</b> <box>2 PP</box>`,
                `<b>Short-Rest:</b> <box>0 PP</box>`,
                `<b>Long-Rest:</b> <box>-2 PP</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Radius:</b>`,
                `<box>2 × ESS^(1/3)</box> : <box>-2 PP</box>`,
                `<box>5 × ESS^(1/3)</box> : <box>0 PP</box>`,
                `<box>10 × ESS^(1/3)</box> : <box>2 PP</box>`,
                `<box>20 × ESS^(1/3)</box> : <box>4 PP</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Border:</b>`,
                `<b>Solid (opaque):</b> <box>0 PP</box> <box>Has (10 × ESS) HP</box>`,
                `<b>Inner Border Armor VS All:</b> <box>Up to 4 PP</box>, Adds <box>4 × PP × ESS</box> Armor VS All.`,
                `<b>Outer Border Armor VS All:</b> Same as Inner Border.`,
                `<b>No Border:</b> <box>-2 PP</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Extras:</b>`,
                `<b>Stays where Cast:</b> <box>0 PP</box> (Default)`,
                `<b>Moves with Caster:</b> <box>3 PP</box> (Requires No Border)`,
                `<b>Doesn't End when Caster is outside:</b> <box>1 PP</box>`,
                `<b>Puts you in a Stance, and requires it for upkeep:</b> <box>-3 PP</box>`,
                `<b>Requires to announce and commit (uses Action-Cost) a Turn before:</b> <box>-2 PP</box>`,
                `<b>When it Ends, disables using any Ability till End of your Next Turn:</b> <box>-2 PP</box>`
            ],
        },
        {
            type: "list",
            content: [
                `<b>Inner World</b> <box>2 PP</box>:`,
                `Makes the inner Radius of the Domain up to <box>50 × ESS</box> meters. (WIP)`,
            ],
        },
        {
            type: "p",
            content: [
                `For Interactions you must choose from the Abilities you have Unlocked, and imbue them with Special Effects`,
                `These Special Interactions work only if the Ability is Cast at ESS equal or less than the Domain.`,
                `Note that the Attack-Action, Grapple, Shove, and Defense-Action count as Abilities too.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Potent Technique</b> <box>Up to 6 PP</box>:`,
                `Adds <box>PP × ESS</box> bonus Potency to the selected Ability, one time, refreshing at the Start of your Turns.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Sure Hit Effect</b> <box>Up to 6 PP</box>:`,
                `Gives <box>PP × ESS</box> Bonus To-Hit, or <box>(PP × ESS) / 3</box> Bonus Save Difficulty.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>True Target</b> <box>2 PP</box>:`,
                `Ignore Range and Sense requirements, if you're Aware of your Target, and they're inside the Domain, you can Target them.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Full Area Nuke</b> <box>Variable PP</box>:`,
                `Makes the Ability Target everyone and everything in the Domain, you can exclude yourself.`,
                `8 PP to make a Single Target into Full Area.`,
                `6 PP to make a Line AOE into Full Area.`,
                `4 PP to make any other AOE into Full Area.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Warped</b> <box>1 PP</box>:`,
                `Changes the Damage Type and/or inflicted Effect Type of the Ability.`,
                `Even if the Effect Type is changed, duration and what it does remain the same, only Effect Interactions change.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Inflict Effect</b> <box>2 PP</box>:`,
                `On-Hit inflicts an Effect; <box>Heat | Cold | Soaked | Light | Darkness | Charm | Terror</box>`,
                `This Effect lasts till the End of your Next Turn, and does nothing by itself.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Free Cast</b> <box>Variable PP</box>:`,
                `2 PP to remove the base Resource Cost of the Ability, if it has any.`,
                `4 PP to remove a Bonus-Action from the Cost, one time, refreshing at the Start of your Turns.`,
                `8 PP to remove a Main-Action from the Cost, one time, refreshing at the Start of your Turns.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Finisher</b> <box>-4 PP from other Special Effects</box>:`,
                `When you use your Finisher, your Domain Ends.`,
                `This can't make the Ability cost less than 0 PP, it only discounts its other Special Effects.`,
                `You can only have 1 Finisher.`,
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
                ["Cast Time", "Variable"],
                ["Cooldown", "Variable"],
                ["Resource Cost", "Variable SP"],
                ["Duration", "1 Minute (20 Rounds)"],
            ],
        },
    ],
}