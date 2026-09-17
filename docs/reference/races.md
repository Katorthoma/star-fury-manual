# Race reference

These are the V5 race modifiers and buildable ship rosters.

## Race modifiers

<div class="sf-reference-table sf-race-modifiers" markdown="1">

| Race | Advantages | Disadvantages |
|---|---|---|
| **Terran** | • +20% Population production & limit<br>• +15% Metal production<br>• +15% Deuterium production<br><span class="sf-cell-label">Starts with</span><span class="sf-cell-indent">• Advanced Mines I<br>• Transfer Drones</span> | • -10% Power production |
| **Herogen** | • +20% Credit production<br>• Double Command Probes<br>• Unlimited Probe Research<br><span class="sf-cell-label">Starts with</span><span class="sf-cell-indent">• Fabrication Plants<br>• Advanced Buildings I</span> | • -5% Defence Points |
| **Versuden** | • +10% Damage<br>• +1 Attack Dock slot<br><span class="sf-cell-label">Starts with</span><span class="sf-cell-indent">• Population Tax I<br>• Population Tax II<br>• Big Hammer I</span> | • -20% Power production<br>• -1 Defence Dock slot<br>• Half Command Probes |
| **Ferrion** | • +25% Power production<br>• +25% Research Points<br>• +1 Defence Dock slot<br><span class="sf-cell-label">Starts with</span><span class="sf-cell-indent">• Fourth Leecher<br>• Shields</span> | • -10% Damage<br>• -1 Attack Dock slot |
| **Marvion** | • Increased ship-capture chance<br><span class="sf-cell-label">Starts with</span><span class="sf-cell-indent">• Pulsar Technology<br>• Warp Shields</span><span class="sf-cell-label">Plasma Exciter unlocks</span><span class="sf-cell-indent">• +20% Attack<br>• +20% Damage</span> | • -25% Credit production<br>• -25% Metal production<br>• -25% Deuterium production |

</div>

## Ship availability and combat modifiers

<div class="sf-reference-table sf-race-ships" markdown="1">

| Race | Buildable ships | Attack | Damage | Defence |
|---|---|---:|---:|---:|
| **Terran** | Corvette · Wolverine · Raven<br>Destroyer · Falcon · Cruiser<br>Sovereign · Dreadnought · Star Fury | 100% | 100% | 100% |
| **Herogen** | Corvette · Talon · Raptor<br>Falcon · Cruiser · Sovereign<br>Vanguard · Star Fury | 100% | 100% | 95% |
| **Versuden** | Corvette · Talon · Raven<br>Frigate · GunShip · Falcon<br>Cruiser · Scorpio · Dreadnought · Star Fury | 100% | 110% | 100% |
| **Ferrion** | Corvette · Talon · Raptor<br>Destroyer · Falcon · Defender<br>Sovereign · Sentinal · GunShip · Star Fury | 100% | 90% | 100% |
| **Marvion** | Corvette · Talon · Raptor<br>Destroyer · GunShip · Falcon<br>Spectre · Sovereign · Dreadnought · Star Fury | 100% | 100% | 100% |

</div>

!!! note "Reading the combat columns"
    `100%` means the race has no inherent modifier to that stat. These columns show **race modifiers only**. Ship role, Fixed/Flexible status, W/E/S, research, and alliance bonuses still apply afterward.

## Ship capture

Any race can capture an enemy ship when a capture occurs.

Marvion has an **increased capture chance**, but the exact percentage bonus is not published.

A capture requires an open ship slot. If every relevant dock is full, the effective chance of receiving a captured ship is zero because there is nowhere to place it.

Captured ships are assigned to the first available dock in this order:

1. Attack
2. Defence
3. Raider
4. Build

## Reading race modifiers

Race modifiers explain why two empires with identical buildings or hulls can display different live values.

For production, separate:

1. base building rate
2. research modifiers
3. race modifiers
4. dynamic modifiers such as Alliance Catch Up
5. whole-number display behavior

For ships, also include:

- dock role
- Fixed/Flexible
- W/E/S
- unlocked race-specific technologies such as Marvion Plasma Exciter

If the live interface disagrees with a calculated value, the live value wins.
