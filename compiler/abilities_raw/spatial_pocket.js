module.exports = {
    name: "Spatial Pocket(WIP)",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Conjuration | 20 Transmutation | 50 Enchantment",
    ],
    reqs_full: [
        "(20 INT | 20 WILL | 50 EGO), (10 Conjuration | 20 Transmutation | 50 Enchantment)",
    ],
    tags: [
        "Utility, Unlock",
        "Touch",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, you Touch a Target Object or Space, and it becomes a Spatial Pocket for the Duration.`,
                `This means it will have a bigger interior or you create an entirely new interior.`,
                `You can Target an Entity('s insides), it can make a <b>(VIT | Soul) Save</b> of <box>ESS</box> to not be affected.`,
            ],
        },
        {
            type: "p",
            content: [
                `The size or size increase of the space can be up to <box>ESS m<sup>3</sup></box>`,
                `The maximum inside distance of any 2 points cannot exceed <box>10 × ESS^(1/3) meters</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `The Spatial Pocket has a <b>Solid Wall</b>, this has <box>(10 × ESS) HP</box> and <box>(6 × ESS) Armor VS All</box>`,
                `The <b>Spatial Pocket's Wall</b> can be repaired using <a href="../abilities/mending.html" target="_blank">Mending</a>, and looks however the Caster wants them to look.`,
                `If the Spatial Pocket's Wall is reduced to 0 HP then the <b>Ability Critically Fails!</b>`,
            ],
        },
        {
            type: "p",
            content: [
                `When you create the Spatial Pocket it comes automatically full with air. (or not if the Caster decides...)`,
                `1 meter in the Spatial Pocket is also 1 meter outside the Spatial Pocket!`,
                `Gravity inside the Spatial Pocket is either fixed, or constantly updates based on the outside, Caster's choice.`,
                `If the Passageway(s) of the Spatial Pocket are moved/rotated then the Spatial Pocket also moves/rotates with it.`,
                `Even tho the Spatial Pocket is moved/rotated there is NO inner inertia, so it doesn't fling everything inside.`,
                `A Passageway CAN enter another Passageway. Go ham.`,
            ],
        },
        {
            type: "p",
            content: [
                `If the Duration runs out, every Passageway connecting to the space Breaks and everything is gently pushed back out.`,
                `If there isn't enought space in the outside then what happens is up to the GM.`,
                `The Caster can <b>Critically Fail</b> the Ability as a Bonus-Action.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Creating a Passageway midair or on a surface:</b>`,
                `The Passageway just appears, and can be an up to <box>ESS^(1/3) meters side length cube</box>`,
                `Yes, the Passageway can be a 3 dimensional "object".`,
                `The Caster designates which sides of the Passageway are enterable, passable, transparent, and/or solid.`,
                `A solid side of the Passageway is just the <b>Spatial Pocket's Wall.</b>`,
                `The inside of the space's outer surface if also the <b>Spatial Pocket's Wall.</b>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Using an already existing Passageway:</b>`,
                `Using an already existing physical Passageway, like a door, can be linked to the newly created space.`,
                `When doing so the Caster can decide if the original space behind the Passageway remains reachable or is closed off.`,
                `If it's closed off then the <b>Spatial Pocket's Wall</b> is the thing which blocks the original path.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Increasing the size of an already existing space:</b>`,
                `You can only do this while already inside of a space or by Touching the edges (like a wall) of the space.`,
                `This can increase the size of the inner space by moving said edges further, this does NOT move anything inside the space.`,
                `But it does move the edges of the space, and everything on them (like a window or a door) further.`,
                `The way said edges extend is up to the Caster, and can be geometrically complex, changing the overall shape of the room(s).`,
                `Any extension made cannot be farther away from the Caster than <box>10 × ESS^(1/3)</box> meters.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Spatial Pocket Critical Failure:</b>`,
                `All Passageways connecting to the space Break, and the space quickly shrinks back to normal.`,
                `If there isn't enough space to stay inside then all inside recieve <box>(10 × ESS) Bludgeon Damage</box>, then be forcefully expelled.`,
                `Even if there isn't an big enough hole to expell everything it will still be expelled because the Pocket's Wall will tear.`,
                `Exact details, like landing position is up to GM.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Examples:</b>`,
                `You Touch a cup, it becomes very deep and wide inside, and can hold a lot of liquid.`,
                `You Touch a door, the room behind it is now bigger, or it opens to a new room entirely.`,
                `You Touch a the air, a floating hole opens to an inside space.`,
                `You "Touch" the space inside a room, it gets bigger.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Multi Passageway System</b> (50 Transmutation):`,
                `A Spatial Pocket can have multiple Passageways.`,
                `To do this you must Recast the Ability to create a new Passageway, either from in to out or from out to in.`,
                `Keep in mind that 1 meter inside is also 1 meter outside!`,
                `If a Spatial Pocket has multiple Passageways, and one is moved relative to the others, then that Passageway Breaks.`,
                `If all the Passageways connecting to a Spatial Pocket are moved so that they remain in the same position and orientation then nothing Breaks.`,
                `You can attempt to Cast this on a Spatial Pocket not yours, if this Ability's ESS is more than their Spatial Pocket's.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b><a href="../abilities/ritual.html" target="_blank">Ritual</a> Override Interaction:</b>`,
                `The way Ritual is interacting with <b>Inner Space</b> is Overriden.`,
                `Rather than benefiting from Rital's ESS Multiplier, it is simply Multiplied by the Rounds it took to Cast.`,
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
                ["Range", "Touch"],
                ["(VIT | Soul) Save", "ESS"],
                ["Inner Space", "ESS m<sup>3</sup>"],
                ["Max 2 Point Distance", "10 × ESS^(1/3)"],
                ["Wall HP", "10 × ESS"],
                ["Wall Armor VS All", "6 × ESS"],
            ],
        },
    ],
}