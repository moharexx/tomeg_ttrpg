module.exports = {
    name: "Familiar",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Conjuration | 10 Transmutation)",
    ],
    tags: [
        "Utility, Unlock, Philosophy",
        "Everything Under The Sun",
        "Main-Action, PROXY",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You create Entities (and/or Objects) collectively no heavier than <box>10 × ESS</box> Kg.`,
                `The Familiar is made of <b>Biological Psudeo Material</b>, if the Duration or its Hit Points reach 0 it <b>poofs out</b>.`,
                `Having 0 in any Base Stat comes with their regular downsides!`,
                `The Familiar has <b>no Soul</b>, thus it has, and works with 0 WILL and EGO.`,
            ],
        },
        {
            type: "p",
            content: [
                `You have <box>30 × ESS</box> Familiar XP, which you allocate to make your Familiar(s).`,
                `You allocate Main Stats and Masteries the same way as when creating a Player Character.`,
                `You can choose to make multiple Familiars with the same cast by freely deviding the XP and Weight between each.`,
                `A Familiar without a Soul can only have the Passive Abilities listed below.`,
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "20", "50%"],
            content: [
                ["Trait", "XP Cost", "Requirements"],
                [`<a href="../abilities/multi_legged.html" target="_blank">Multi Legged</a>`, "5", "More than 2 legs"],
                [`<a href="../abilities/natural_flight.html" target="_blank">Natural Flight</a>`, "10", "Wings or similar"],
                [`<a href="../abilities/low_light_vision.html" target="_blank">Low-Light Vision</a>`, "5", "At least 1 Eye, duh!"],
                [`<a href="../abilities/low_light_vision.html" target="_blank">Darkvision</a>`, "10", "Low-Light Vision"],
                [`<a href="../abilities/computer_mind.html" target="_blank">Computer Mind</a>`, "10", "At least 1 INT"],
            ],
        },
        {
            type: "p",
            content: [
                `You must allocate <box>RoundUp(Familiar XP / 10)</box> PROXY to the Familiar, otherwise it <b>poofs out</b>.`,
                `While you provide PROXY, you know of the condition of your Familiar, can Communicate with them, and have them <b>Pinpointed</b>.`,
                `Max PROXY Range: <box>1000 × ESS^(1/3)</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Souls and Thoughtforms</b> (10 Anima, 5 XP):`,
                `Your Familiar can have a Soul, it's either created, or a fragment of the Caster's.`,
                `A Soul means the Familiar can and must have at least 1 WILL and EGO.`,
                `The Soul allows Unlocking Abilities, if the Unlock Requirements are met, Spend the XP as normal.`,
                `You cannot give your Familiar Abilities which you don't have, but you can still use the Traits Table.`,
                `When a Familiar with a Soul poofs out or Dies, the Soul fragment tries to fly back to the Caster.`,
                `<b>Soul Fly Back Range:</b> <box>1000 × ESS^(1/3)</box>`,
                `You can also make Thoughtforms, these are Familiars without a Physical Vessel, and instead an Astral Vessel.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Non-Biological</b> (50 Conjuration):`,
                `You can use Non-Biological Materials.`,
                `This means you can make a robot familiar! Or just a crowbar...`,
                `Non-Biological Familiars would be considered Construct Type Entities.`,
                `No exotic materials! Limitations up to GM. (No free money and nuclear weapons)`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Stable Vessel</b> (<a href="../abilities/permanence.html">Permanence</a>):`,
                `When you Cast Familiar with Permanent Duration using the <b>Permanence Meta-Ability</b> it can be Stable.`,
                `It cannot be Dispelled, doesn't poof out, can drop to Negative HP and can get the Dying Condition.`,
                `By failing to provide PROXY you lose control of the Familiar.`,
                `For Familiars with no Soul, when control is lost, they become some kind of "automaton", due to having no EGO.`,
                `For Familiars with a Soul, they behave according to the Soul given, thus (usually) remain loyal and friendly to the Caster.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Potency Boost:</b>`,
                `For each point of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> Familiars can have +5 XP to Spend.`,
                `If you don't supply PROXY to a Familiar, the Potency Boost fades away, even if it's a Stable Vessel.`,
                `A Familiar under Potency Boost cannot use any Ability which summons or creates other Entities.`,
                `<b>Note:</b> Potency Effects fade after <box>1 Minute (20 Rounds)</box>, even if the Ability would last longer!`,
            ],
        },
        {
            type: "p",
            content: [
                `<i>"Go my go-pro!"</i> - moharexx`,
                `This has caused a few philosophical debates...`,
                `The make anything spell! Little creatures, full people, just organs, chairs, tools, and even thoughtforms!`,
                `<b>Note:</b> Please don't make your GM execute your entire family tree. Use at max 1-2 combat familiars, unless your GM is a masochist.`,
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
                ["Max Familiar XP", "30 × ESS"],
                ["Proxy Cost", "RoundUp(Familiar XP / 10)"],
            ],
        },
    ],
}