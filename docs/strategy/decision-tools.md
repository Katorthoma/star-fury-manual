# Decision tools

These are simple planning tools, not universal rankings. Their purpose is to make opportunity cost visible.

## Economic break-even

For a simple production improvement:

`break-even ticks = upfront cost / added production per tick`

A short break-even is attractive only if the resource itself is useful and the round lasts long enough to collect the return.

## Ship efficiency

Useful ratios include:

- Attack / maintenance
- Damage / maintenance
- Defence / maintenance
- HP / maintenance
- Attack / build tick
- Damage / build tick
- Defence / build tick
- HP / build tick

Do not collapse Credits, Power, Metal, Deuterium, Iridium, Cadets, and time into one arbitrary score unless you have deliberately assigned exchange values.

Examples from base ship stats:

- Defender: 5,000 HP per base build tick
- Spectre: 1,600 Damage per base build tick
- Sentinal: 1,787.5 Attack per base build tick
- Corvette: 3,500 HP per base build tick at low absolute cost
- Eagle: exceptional maintenance efficiency at 250 Credits/tick

These are lenses, not winners. Race availability, research, role, W/E/S, deadlines, and resource scarcity can reverse the practical choice.

### Engine-time reference

Advanced Engines reduces return time by **25%**.

Normal PvP attacks resolve immediately, then place attackers into Returning. Exploration remains fixed at 4 / 6 / 8 ticks.

!!! question "Unverified"
    The formula that converts Engine allocation into return time is not yet solved. Use the Ship Viewer for the actual return time of the configuration you are considering.

## Exploration efficiency

Start with:

`expected territory / mission ticks`

Then adjust for whether Land or Asteroids solves the more valuable constraint.

## Deadline planning

If war starts in `N` ticks, a ship that needs more than `N` effective build ticks cannot join the opening battle.

That does not make the build bad. It changes the question from "Does this help the opening?" to "Does this help the next phase?"
