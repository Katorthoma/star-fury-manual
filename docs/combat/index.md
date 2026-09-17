---
description: "PvP Attack, Damage, Defence, retaliation, overkill, and Break Orders."
---

# PvP combat

## Attack types

The Attack Room contains:

- Planetary / Land attacks
- Asteroid attacks
- Resource attacks

### Land and asteroid attacks

A successful Land or Asteroid attack captures territory from the target.

Each successful attack or successful Leecher action that passes the target's Defence removes:

**10% of the target's current Land or Asteroids**

until the remaining value is **200 or less**.

At 200 or less, each further successful attack/leech removes a fixed:

**20 Land or Asteroids**

The final successful attack takes whatever remains.

Only Land and Asteroid attacks can reduce an empire to zero territory and kill it.

### Resource attacks

A successful Resource Attack steals:

**10% of the target empire's resources**

Resource Attacks do not kill the target empire.

---

## Attack, Damage and Defence

These three values are not interchangeable.

**Attack gets through.**

**Damage kills.**

**Defence keeps attacks out and retaliates.**

---

## Passing the Defence threshold

Attack is compared against the target's Defence threshold.

The exact behavior of `Attack == Defence` has not yet been confirmed, so plan with a positive safety margin rather than relying on equality.

---

## Damage allocation

Confirmed V5 combat behavior is:

`Damage per active defending ship = total attacking Damage / number of active defending ships`

For a normal enemy attack, eligible defenders are active ships in both:

- Attack Dock
- Defence Dock

Ships that are Disabled, Returning, or Building are excluded from that active defending pool.

Every eligible defending ship receives the same Damage allocation.

---

## Overkill does not spill

If one defender receives more Damage than its remaining HP, the excess does not transfer to another ship.

Example:

Defenders:

- Corvette: 7,000 HP
- Eagle: 26,000 HP

Attacker deals 26,000 total Damage.

Two defenders split it:

`26,000 / 2 = 13,000 each`

The Corvette dies after needing only 7,000.

The extra 6,000 allocated to it is wasted.

The Eagle receives 13,000, not 19,000.

---

## Defender retaliation

Confirmed behavior is:

`retaliation per attacker = target Defence / number of attacking ships`

Each attacker must survive its share using current Hull + Shields.

Example:

Target Defence: 125,000

Two Destroyers attack:

`125,000 / 2 = 62,500 each`

Base Destroyer HP is 46,000, so both die.

Add one Corvette:

`125,000 / 3 = 41,666.7 each`

The Destroyers survive while the Corvette does not.

!!! tip "Planning note"
    Cheap sacrificial ships can protect expensive attackers by increasing the retaliation divisor.

    That is a real tactical use of ship count.

---

## Break orders

A Break Order, usually written **BO**, expresses sequential Damage thresholds for eliminating layers of defenders.

Example:

Defenders:

- 3 Corvettes at 7,000 HP
- 1 Eagle at 26,000 HP

Four ships are initially alive.

To deal 7,000 to each:

`4 × 7,000 = 28,000`

All three Corvettes die.

The Eagle has also taken 7,000 and now has:

`26,000 - 7,000 = 19,000 HP`

Only the Eagle remains.

Second wave:

`19,000`

Break Order:

**28,000 | 19,000**

The in-game Break Calculator should be used as a cross-check, but understanding the arithmetic allows you to identify stale scans or bad copied calculations.

---

## Why fleet composition matters

Combat cannot be reduced to "my total is bigger."

The following can all change an outcome:

- number of ships
- current Hull
- current Shields
- role
- Fixed/Flexible state
- W/E/S allocation
- damage overkill
- retaliation divisor
- ship status
- race modifiers
- research
- alliance modifiers

Networth is therefore not a substitute for a scan.
