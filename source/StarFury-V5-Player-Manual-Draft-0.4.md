# Star Fury V5 Player Manual

## Getting Started, Empire Management, Fleets, Raiding, Intelligence and War

**Draft:** 0.4  
**Revision:** September 2026  
**Game:** Star Fury V5 at starfuryx.com  
**Audience:** New and returning players

> This manual describes the current V5 game as observed in 2026, with the Horizon LIII round used for current examples. Star Fury has changed repeatedly over its lifetime, so old guides can be useful historically but should not override the live interface.

---

# How to Use This Manual

Star Fury is old enough that a new player can find documentation from several different eras of the game. That creates a particular danger: an old rule can sound perfectly plausible while being completely wrong for V5.

This guide therefore uses four evidence labels when a distinction matters:

**Confirmed** means the current game directly states the mechanic, or it has been reproduced in controlled play.

**Calculated** means the result follows mathematically from confirmed values.

**Observed** means the behavior has been seen consistently in current play, but may depend on race, research, round state or another condition.

**Unknown** means the available evidence is not strong enough to state the rule confidently.

The live interface takes precedence over this manual. If the game shows a different cost, timer, limit or effect, use the value shown by the game.

### Current evidence base

This draft is reconciled against four complementary sources:

- current September 2026 SingleFile captures of the live V5 interface
- the maintained Star Fury planning workbook used for ship, race and raid calculations
- controlled in-game observations accumulated during the current round
- the StarFury UX Suite, whose production calculator intentionally calibrates fallback formulas against the live Production page

Developer round notes are used when they describe server-side systems that are not surfaced directly in the normal interface, such as Alliance Catch Up.

The manual distinguishes **base rates** from **effective rates**. Effective values may include race, research, alliance, Catch Up or other modifiers and therefore should not be reverse-engineered from one empire without accounting for those modifiers.

---

# Part I: Your First Hour

## 1. What Kind of Game Is Star Fury?

Star Fury is a persistent, tick-based space strategy game.

You control an empire rather than an individual character or ship. Over the course of a round you will:

- develop an economy
- expand across Land and Asteroids
- research technologies
- build and configure ships
- explore
- gather intelligence with probes
- raid computer-controlled targets
- participate in alliance Boss Battles
- attack and defend against other empires
- contribute to an alliance economy and war effort
- potentially be defeated and respawn

The strategic heart of Star Fury is not simply "get the biggest number."

It is the interaction between **time, production, information and force**.

A fleet built too early can strangle the economy with maintenance. A fleet built too late may finish after the battle that mattered. Research completed early can compound for many ticks. Exploration can create future production, but it can also leave a ship unavailable when war begins.

A useful question before almost any action is:

> What does this cost now, what does it produce later, and when will I need the resources or ship again?

---

## 2. Think in Ticks

Most important actions in Star Fury are measured in ticks.

The current Horizon LIII round uses **1-hour ticks**. Construction, research, travel, exploration and many cooldowns are expressed in ticks. Other rounds or special servers may use different tick speeds.

This changes how you should think about decisions.

A 20-tick technology is not merely a technology that finishes later. It occupies 20 ticks during which another research choice cannot finish.

A 36-tick ship started shortly before a war may be strategically irrelevant to the opening fight.

A building or technology that increases production early can generate value every remaining tick of the round.

### What this means in practice

When comparing options, do not ask only which one is strongest.

Ask:

1. How many ticks does it take?
2. What resources are committed immediately?
3. What does it produce per tick afterward?
4. What alternative is delayed?
5. Is there a deadline, such as war, a raid reset or protection expiring?

---

## 3. Your First Login Checklist

Do not begin by buying everything the interface allows.

Spend a few minutes understanding the empire you were actually given.

### 3.1 Read the top bar

The current V5 interface prominently shows:

- Credits
- Power
- Population
- Asteroids
- Land
- Networth and rank
- news count

These are useful summary values, but several important resources live elsewhere.

### 3.2 Open Production

The Production page is one of the most important pages in the game.

It currently reports categories including:

- Power Production
- Population Consumed Power
- Net Power Production
- Metal Production
- Deuterium Production
- Iridium Production
- Population Per Tick
- Population Capacity
- Recruits Per Tick
- Probe Production
- Credit Production
- Military Ship Running Costs
- Credits Per Tick

The difference between **Credit Production** and **Credits Per Tick** matters. A large military can consume an enormous fraction of gross income through maintenance.

### 3.3 Open Research

Starting research is not identical for every empire.

Different races and empire states can begin with different technologies already active. Never assume a guide written for another race has the same starting research package you do.

Look at:

- Research Points per tick
- active research
- research queue
- technologies already completed
- technologies currently available
- category selection limits

### 3.4 Inspect Buildings

Check how much Land and Asteroid capacity is unused and which buildings currently exist.

Do not copy an old building price from a guide. Earlier V5 states showed lower construction prices than a mature September 2026 empire, whose Buildings page displayed **1,140 Credits per Mine or Land building**. The exact scaling rule is not yet established.

**Use the live construction price shown to your empire.**

### 3.5 Inspect the Star Dock

Check:

- available cadets
- recruits available to train
- Attack capacity
- Defence capacity
- Raider capacity
- Leecher capacity
- Build capacity
- ships currently Building
- ships currently Returning
- ships currently Disabled
- current W/E/S power allocations

A ship can exist and still contribute nothing useful at the moment.

### 3.6 Check protection and politics

Open Preferences and Universe News.

V5 includes Newbie protection, Vacation Mode and alliance diplomatic states.

Do not voluntarily leave Newbie protection merely because the control is available.

### 3.7 Claim the daily reward

The current Rewards system grants reward points for daily activity. A September 2026 capture showed a **75-point daily reward**.

Reward points survive defeat and respawn.

Use them to solve your current bottleneck rather than automatically taking the largest-looking quantity.

---

# Part II: Running an Empire

## 4. The Resource Model

Star Fury has several resources because it wants different decisions to compete with one another.

A ship is not purchased with a single currency. Buildings are not valuable simply because they produce the largest number. Research does not matter only because it raises Networth.

The major resources are:

- Credits
- Power
- Metal
- Deuterium
- Iridium
- Population
- Recruits
- Cadets
- Probes
- Research Points
- Land
- Asteroids
- Exploration Points

Each constrains different actions.

---

## 5. Credits

Credits are the broadest economic resource.

They are used for many actions, including building construction, ships and cadet training.

Production should be read in three layers:

**Gross Credit Production**  
What your economy produces.

**Running Costs**  
Most visibly ship maintenance.

**Net Credits Per Tick**  
What actually accumulates.

### What this means in practice

A fleet that looks affordable at purchase can become economically oppressive over the next 50 ticks.

Always check the maintenance line after major shipbuilding.

---

## 6. Power

Power is both a production resource and a strategic reserve.

Fusion Plants generate Power. Population consumes some Power. The Production page shows a net Power figure and a Power Plant capacity percentage.

Ships also have a **Power Core** value.

### Confirmed: ship construction commits Power

Controlled V5 testing showed that beginning construction immediately reduced available empire Power by exactly the listed ship Power Core.

For example, two Corvettes with 2,000 Power Cores removed 4,000 available Power.

Whether every route for destroying, retiring or losing a ship returns that Power has not been established strongly enough to state as a universal rule.

### What this means in practice

Do not regard a large Power reserve as spare cash.

A fleet build can consume it rapidly, and other systems also use Power.

---

## 7. Metal, Deuterium and Iridium

### Metal

Metal is a major shipbuilding material and is produced from Asteroid infrastructure.

### Deuterium

Deuterium is also central to shipbuilding and appears in several advanced or alliance systems.

### Iridium

Iridium becomes increasingly important for larger hulls and late-game systems.

Current V5 supports both **Iridium Mines** on Asteroids and **Iridium Plants** on Land, although availability depends on technology and empire state.

### What this means in practice

Do not wait until a desired hull is unlocked to discover that your resource mix cannot build it.

Research unlocks and production planning should be considered together.

---

## 8. Population, Recruits and Cadets

### Population

Residents provide both population production and population capacity. Population grows each tick up to the current capacity.

The current base Resident effects are:

- **2 Population per Resident per tick**
- **50 Population capacity per Resident**

Those are base values, not guaranteed live values. Race and dynamic Catch Up modifiers can change both production and capacity.

Population Tax is a separate economic mechanic. It converts existing population into Credits and does **not** create additional population capacity.

### Recruits

Recruits are produced from the population system over time.

The current base relationship is:

**1 recruit per 200 population per tick**, or `Population × 0.005`.

The live interface reports whole-number production. For example, 3,000 population produces 15 recruits/tick.

Dynamic modifiers can alter this effective rate. During the currently observed +30% Catch Up state, a Ferrion empire at 97,500 population produced:

`97,500 × 0.005 × 1.30 = 633.75`

which the Production page displayed as **633 recruits/tick**.

### Cadets

Cadets are trained from recruits and crew ships.

Current V5 shows a training cost of **250 Credits per cadet**.

### Recommended default

Keep cadet training **Manual** unless you have a specific reason to automate it.

Training large quantities "just in case" converts Credits and recruits into a resource that may sit unused.

---

## 9. Alliance Catch Up: A Dynamic Server Modifier

Horizon LIII introduced a more robust **Alliance Catch Up** system.

According to the developer's round note, Catch Up can be enabled or disabled and manually adjusted during peace time to help a trailing alliance become more competitive before its next war.

The exact modifier is therefore **not a permanent game constant**.

### Current observed Catch Up state

Current September 2026 production values from the affected alliance reconcile exactly with an effective:

**×1.30 economic Catch Up multiplier**

This value is **calculated from live production**, not displayed as a visible "+30%" status in the ordinary interface.

The current +30% factor is directly consistent with all of the following:

| Production item | Base / researched value before Catch Up | Current live result |
|---|---:|---:|
| Resident capacity | 50 per Resident | 65 per Resident |
| Resident population production | 2 per Resident/tick | 2.6 per Resident/tick |
| Metal Mine | 5 Metal/tick | 6.5 Metal/tick |
| Deuterium Mine | 2 Deuterium/tick | 2.6 Deuterium/tick |
| Iridium Mine | 1 Iridium/tick | 1.3 Iridium/tick |
| Recruit production | Population × 0.005 | Population × 0.0065 |

The effect also reconciles exactly with researched/racial Power and Credit production.

### Ferrion cross-check

A captured Ferrion empire had:

- 1,500 Residents
- 1,500 Fusion Plants
- 850 Metal Mines
- 1,200 Deuterium Mines
- 400 Iridium Mines
- 3,986 Tri-Lithium Mines
- 4,352 Fabrication Plants
- 97,500 Population

Its Production page showed:

- 3,900 Population/tick
- 97,500 Population capacity
- 4,875 Power/tick
- 5,525 Metal/tick
- 3,120 Deuterium/tick
- 520 Iridium/tick
- 633 Recruits/tick
- 4,352 Probes/tick
- 1,231,360 gross Credits/tick

The values reconcile as follows:

`1,500 × 50 × 1.30 = 97,500 population capacity`

`1,500 × 2 × 1.30 = 3,900 population/tick`

`850 × 5 × 1.30 = 5,525 metal/tick`

`1,200 × 2 × 1.30 = 3,120 deuterium/tick`

`400 × 1 × 1.30 = 520 iridium/tick`

With Advanced Power I + II and Ferrion's +25% Power modifier:

`1,500 × 1 × 2.00 × 1.25 × 1.30 = 4,875 power/tick`

With Advanced Mines I + II:

`3,986 × 200 × 1.30 = 1,036,360 mine credits/tick`

Population Tax I + II then contributes separately:

`97,500 × 2 = 195,000 tax credits/tick`

Total:

`1,036,360 + 195,000 = 1,231,360 credits/tick`

This exactly matches the captured Production page.

### What Catch Up currently appears not to multiply

The same Ferrion had Advanced Fabrication Plants I + II and 4,352 completed Fabrication Plants.

The expected normal production is:

`4,352 × 1 probe/tick = 4,352 probes/tick`

The live page showed exactly **4,352 probes/tick**, not a Catch Up-boosted value.

Likewise, the current Credit calculation shows Population Tax being added **after** the Catch Up-boosted mine income rather than being multiplied by Catch Up itself.

Current evidence therefore supports:

**Catch Up observed on**
- Population production
- Population capacity
- Recruit production
- Fusion Plant Power
- Metal
- Deuterium
- Iridium Mines
- Tri-Lithium Mine Credit production

**Catch Up not observed on**
- Population Tax income
- Probe production

**Still unknown**
- Research Points
- Iridium Plants specifically
- construction speed
- Exploration
- military/combat statistics
- other systems not isolated in a controlled comparison

### What this means in practice

Do not infer a building's base rate by dividing your current Production number by your building count unless you know which modifiers are active.

The UX Suite avoids this trap by calibrating its effective production rates against the live Production page. The manual instead documents the underlying base rate and then explains known modifiers separately.

---

# Part III: Buildings and Production

## 10. Asteroid Buildings

The current V5 Buildings page includes four Asteroid building types.

The following table separates the **underlying base rate** from modifiers known to change the live effective value.

| Building | Base effect | Known modifiers / notes | Evidence status |
|---|---:|---|---|
| Tri-Lithium Mine | 150 Credits/tick | Advanced Mines I +25; II +25; race Credit modifiers; Catch Up currently affects mine income | Strongly reconciled |
| Metal Mine | 5 Metal/tick | race Metal modifier; Catch Up | Strongly reconciled |
| Deuterium Mine | 2 Deuterium/tick | race Deuterium modifier; Catch Up | Strongly reconciled |
| Iridium Mine | 1 Iridium/tick | Catch Up currently affects it | Strongly reconciled |

### Tri-Lithium Mines

Tri-Lithium Mines produce Credits.

Base:

**150 Credits per Mine per tick**

Advanced Mines modifies the per-Mine amount additively:

- Advanced Mines I: **+25 Credits per Mine per tick**
- Advanced Mines II: **+25 more Credits per Mine per tick**

So the researched base becomes:

- no Advanced Mines: 150
- Advanced Mines I: 175
- Advanced Mines I + II: 200

A historical Terran opening state with 50 Mines and Advanced Mines I produced:

`50 × 175 = 8,750 Credits/tick`

The current Catch Up Ferrion provides a second exact check:

`3,986 × 200 × 1.30 = 1,036,360 mine Credits/tick`

Population Tax is then added separately.

### Metal Mines

Base:

**5 Metal per Mine per tick**

Examples:

Historical Terran opening:

`30 × 5 × 1.15 Terran = 172.5`

displayed as **172 Metal/tick**.

Current Catch Up Ferrion:

`850 × 5 × 1.30 = 5,525 Metal/tick`

Current Catch Up Marvion example supplied during play:

`375 × 5 × 0.75 Marvion × 1.30 = 1,828.125`

displayed as **1,828 Metal/tick**.

The Marvion's apparent 4.8747 Metal/Mine is therefore an **effective** rate, not evidence that the underlying 5 Metal base is wrong.

### Deuterium Mines

Base:

**2 Deuterium per Mine per tick**

Historical Terran opening:

`30 × 2 × 1.15 Terran = 69`

Current Catch Up Ferrion:

`1,200 × 2 × 1.30 = 3,120`

Current Catch Up Marvion:

`375 × 2 × 0.75 × 1.30 = 731.25`

displayed as **731 Deuterium/tick**.

Again, the Marvion's observed 1.95 Deuterium/Mine is the effective product of race and Catch Up modifiers.

### Iridium Mines

Unlocked through Iridium Mines research.

Underlying base:

**1 Iridium per Mine per tick**

Current Catch Up Ferrion:

`400 × 1 × 1.30 = 520 Iridium/tick`

This is an exact reconciliation of the live Production page.

---

## 11. Land Buildings

The current V5 Buildings page includes Residents, Fusion Plants, Iridium Plants, Fabrication Plants and Research Labs.

| Building | Base effect | Known modifiers / notes | Evidence status |
|---|---:|---|---|
| Resident | 2 Population/tick + 50 capacity | race Population modifier; Catch Up currently affects both | Strongly reconciled |
| Fusion Plant | 1 Power/tick | Advanced Power; race Power modifier; Catch Up | Strongly reconciled |
| Iridium Plant | 0.5 Iridium/tick | separate Land producer; Catch Up effect not yet isolated | Maintained working rate |
| Fabrication Plant | 0.5 Probes/tick | Advanced Fabrication I/II; current Catch Up does not appear to apply | Strongly reconciled |
| Research Lab | 3 RP/tick | race Research modifier; Catch Up effect unknown | Strong historical/current model |

### Residents

Each Resident has two independent base effects:

- **2 Population production per tick**
- **50 Population capacity**

Population Tax does not alter either value.

Examples:

Historical Terran with 50 Residents and +20% Population Production & Limit:

`50 × 2 × 1.20 = 120 Population/tick`

`50 × 50 × 1.20 = 3,000 Population capacity`

Current Catch Up Ferrion:

`1,500 × 2 × 1.30 = 3,900 Population/tick`

`1,500 × 50 × 1.30 = 97,500 Population capacity`

Current Catch Up Marvion:

`1,000 × 50 × 1.30 = 65,000 Population capacity`

That current 65-per-Resident capacity is therefore consistent with a 50 base rate plus the dynamic +30% Catch Up modifier.

### Fusion Plants

Underlying base:

**1 Power per Fusion Plant per tick**

Advanced Power I and II each add **50% of base Power production**, and current evidence is consistent with those two bonuses adding to a 2.00× researched base before race/Catch Up modifiers.

Historical Terran:

`50 × 1 × 0.90 = 45 Power/tick`

Current Ferrion with Advanced Power I + II and Catch Up:

`1,500 × 1 × 2.00 × 1.25 × 1.30 = 4,875 Power/tick`

Both match the live Production values exactly.

### Iridium Plants

Iridium Plants produce Iridium from **Land** rather than Asteroids.

The maintained V5 production model uses:

**0.5 Iridium per Plant per tick**

This is the established working rate used by the UX calculator, but the September 2026 SingleFile capture had **0 completed Iridium Plants**, so that particular capture does not independently isolate the 0.5 rate.

Compared with the underlying Iridium Mine rate:

- Iridium Mine: 1.0/tick
- Iridium Plant: 0.5/tick

The strategic difference is not merely efficiency: the two buildings consume different territory pools.

Whether the current Catch Up modifier also boosts Iridium Plants has not yet been isolated.

### Fabrication Plants

Fabrication Plants produce regular probes once the technology is available.

Underlying base:

**0.5 Probes per Fabrication Plant per tick**

Advanced Fabrication Plants I and II each add 50% of the **base** probe production:

- Fabrication Plants only: 0.50 probes/Plant/tick
- + Advanced Fabrication Plants I: 0.75
- + Advanced Fabrication Plants II: 1.00

The current Ferrion capture had both Advanced Fabrication technologies, 4,352 completed Fabrication Plants and **4,352 Probe Production**.

That is an exact 1.00 probe/Plant/tick result and, importantly, shows no current +30% Catch Up multiplier on probe production.

### Research Labs

Underlying base:

**3 Research Points per Lab per tick**

A historical Terran opening state with 50 Labs produced exactly:

`50 × 3 = 150 RP/tick`

Ferrion's +25% Research Points racial modifier implies:

`3 × 1.25 = 3.75 RP/Lab/tick`

The current Ferrion capture had no completed Research Labs, so whether Alliance Catch Up currently affects RP production remains unknown.

### Population Tax

Population Tax is not a building, but it is easiest to understand alongside Residents and Credit production.

Current evidence supports:

- Population Tax I: **+1 Credit per population per tick**
- Population Tax II: **another +1 Credit per population per tick**

With both technologies and 97,500 Population:

`97,500 × 2 = 195,000 Credits/tick`

The current Catch Up Ferrion's total Credit Production reconciles only when this tax income is **not** multiplied by the +30% Catch Up factor.

### Recruits

Base recruit production remains:

`Population × 0.005`

The current Catch Up state appears to multiply that result by 1.30.

### Production rounding

The current Production interface reports whole-number totals.

Observed examples are consistent with fractional aggregate production being displayed as a whole number by dropping the remainder:

- `172.5 → 172`
- `1,828.125 → 1,828`
- `731.25 → 731`
- `633.75 → 633`

For planning, calculate with the full underlying value but treat the live whole-number Production display as authoritative.

---

## 12. Construction Capacity and Cost

The Buildings page displays:

- available Asteroids for construction
- current Mine construction cost
- available Land for construction
- current Land-building cost
- Built quantity
- Building quantity
- construction timers
- maximum constructible quantity

Current evidence shows building cost is **not safe to treat as a timeless fixed value**. Earlier V5 opening states showed 500 Credits per building, while a mature September empire displayed 1,140 Credits.

The scaling formula remains Unknown.

### What this means in practice

Use the current page's displayed price in economic calculations.

Buildings listed as **Building / In Progress** are treated as future production rather than current production. The UX calculator therefore distinguishes:

- Built
- Building
- Total after completion
- current production
- projected production after completion

This is the right mental model when comparing construction choices.

### Razing buildings

The Raze page charges per building demolished.

Prior V5 testing and the maintained UX implementation use:

**50 Credits per building razed**

The UX Suite first reads the live Advisor wording and only falls back to 50 if it cannot obtain a current value.

Use the live Advisor value whenever it is shown.

Razing is destructive. Do not demolish production merely to free a slot without accounting for both the demolition cost and the lost per-tick output.

---

## 13. Evaluating a Building

Do not ask:

> Which building is best?

Ask:

> Which resource is constraining the next useful action?

Useful metrics include:

**Simple break-even**

`building cost / additional production per tick`

**Territory efficiency**

`useful production / Land or Asteroid slot`

**Deadline value**

Will the production arrive before the resource is needed?

A Research Lab can be more valuable than a Credit building when a crucial technology is the bottleneck. A Fusion Plant can be more valuable than either when Power prevents ship construction.

---

# Part IV: Research

## 14. How Research Works

Research Points are generated by Research Labs.

The Research page currently shows:

- RP per tick
- Active Research
- Research Queue
- Tech Tree
- RP cost
- Info controls
- Research, Remove or other state controls

A September 2026 capture showed a research queue capacity of **1**, but players should trust their own live value if it differs.

### Research ETA

For a single research item, a useful current estimate is:

`ETA ticks = ceiling(remaining RP / current RP per tick)`

For a queue, estimate each item's duration separately and then add the rounded tick counts. The UX Suite deliberately does this conservatively rather than assuming unused Research Points carry perfectly through the finishing tick of one technology into the next.

### Important

Removing active research can destroy invested value or remove an active benefit depending on the technology and state.

Do not casually switch research because another option looks interesting.

---

## 15. Major Research Families

The current V5 tree is divided into:

- Empire
- Star Dock Technology
- Ship Technology
- Offence & Defence
- Intelligence
- Advanced Intelligence
- Counter Intelligence
- Respawn Technology

Several intelligence categories have selection limits.

The current interface explicitly showed:

- Intelligence: limit 3
- Advanced Intelligence: limit 2
- Counter Intelligence: limit 1

Plan those categories rather than researching without considering what must be excluded.

---

## 16. Empire Research

### Population Tax I
**Cost:** 10,000 RP

Adds **1 Credit per population per tick**.

### Population Tax II
**Cost:** 20,000 RP  
**Requires:** Population Tax I

Adds another **1 Credit per population per tick**.

With both technologies, current production reconciles to **2 Credits per population per tick**. The currently observed Alliance Catch Up modifier does not appear to multiply the tax itself.

### Advanced Power I
**Cost:** 12,500 RP

Adds **50% of base Fusion Plant Power production**.

### Advanced Power II
**Cost:** 20,000 RP  
**Requires:** Advanced Power I

Adds another **50% of base Fusion Plant Power production** and increases Power storage.

Current production reconciles with the two production bonuses adding to a **2.00× base Fusion Plant rate** before race and Catch Up multipliers.

### Advanced Mines I
**Cost:** 12,500 RP

Adds **25 Credits per Tri-Lithium Mine per tick**.

### Advanced Mines II
**Cost:** 20,000 RP  
**Requires:** Advanced Mines I

Adds another **25 Credits per Tri-Lithium Mine per tick**.

The current fully researched base is therefore 200 Credits/Mine/tick before applicable dynamic/race modifiers.

### Iridium Mines
**Cost:** 25,000 RP

Unlocks advanced Iridium mining.

### Advanced Buildings I
**Cost:** 15,000 RP

Reduces Land and Asteroid building construction time.

### Advanced Buildings II
**Cost:** 20,000 RP  
**Requires:** Advanced Buildings I

Further reduces building time.

---

## 17. Star Dock Technology

### Pulsar Technology
**Cost:** 25,000 RP

Unlocks an early tier of advanced ships.

### Particle Technology
**Cost:** 35,000 RP  
**Requires:** Pulsar Technology

Unlocks a later ship tier.

### Plasma Technology
**Cost:** 65,000 RP  
**Requires:** Particle Technology

Unlocks end-game Plasma capability.

**Important:** Plasma Technology conflicts with Probe Retention II in the observed tree. Treat this as a strategic path choice.

---

## 18. Ship Technology

### Big Hammer I
**Cost:** 15,000 RP

Observed effects include:

- increased resources returned from scrapping
- reduced ship construction time

### Big Hammer II
**Cost:** 20,000 RP

Further improves those effects.

### Build Dock Expansion
**Cost:** 20,000 RP

Adds Build Dock capacity.

### Advanced Engines
**Cost:** 25,000 RP

Reduces ship return time by 25%.

The current wording refers specifically to **return time**. Do not automatically assume it applies to every outbound journey.

### Repair Drones
**Cost:** 30,000 RP

Improves repair speed.

### Speed Repair
**Cost:** 20,000 RP  
**Requires:** Repair Drones

Allows an eligible defending ship to be repaired in 1 tick at a significant fraction of original build resources.

### Transfer Drones
**Cost:** 25,000 RP

Reduces ship-transfer time.

### Ship Salvage
**Cost:** 15,000 RP

Returns some resources when one of your ships is destroyed while Defending.

The exact return percentage depends on ship size and should be checked in the live Info panel.

---

## 19. Offence and Defence Research

### Fourth Leecher
**Cost:** 30,000 RP

Increases Leecher Dock capacity.

Dock capacities are not guaranteed to be identical across races or empire states, so use the live Star Dock.

---

## 20. Intelligence Research

### Fabrication Plants
**Cost:** 10,000 RP

Unlocks regular probe production and the Fabrication Plant building.

### General Scan
**Cost:** 5,000 RP

Provides broad target information.

### Defence Scan
**Cost:** 15,000 RP

Provides defensive information including relevant docks, Defence and platforms.

### Full Dock Scan
**Cost:** 30,000 RP

Provides detailed ship and dock information.

### Stealth Scan
**Cost:** 20,000 RP

A specialized defensive scan that can conceal the scan from the target when successful.

---

## 21. Advanced and Counter Intelligence

Advanced Intelligence includes probe production and loss-reduction paths.

**Advanced Fabrication Plants I** adds 50% of base Fabrication Plant probe production.

**Advanced Fabrication Plants II** adds another 50% of base production.

With both researched, the current effective unmodified rate is 1 probe per Fabrication Plant per tick.

Counter Intelligence includes defensive probe reinforcement and Counter Combat.

### Counter Combat

When an enemy fails a scan against you, Counter Combat can capture failed probes and add them to your own probe total.

Selection limits make this an actual build choice rather than a checklist.

---

## 22. Respawn Technology

Respawn research becomes available later in the round.

The tree includes:

- Base Expansion
- Resource Bunker
- Raid Eagle
- Probe Retention I
- Probe Retention II

These technologies improve the state in which an empire returns after defeat.

Do not automatically prioritize them early. Their opportunity cost depends heavily on round timing and expected war pressure.

---

# Part V: Ships

## 23. What a Ship Really Costs

A ship can consume:

- Credits
- Power
- Metal
- Deuterium
- Iridium
- Cadets
- construction ticks
- a construction slot
- continuing maintenance

This makes "Can I afford it?" a poor question.

Ask instead:

> Can I afford to build it, crew it, power it, maintain it and wait for it, while delaying everything else I could build?

---

## 24. Star Dock Roles

The Star Dock currently separates ships into:

- Attackers
- Defenders
- Raiders
- Leechers
- Building

Each role has a different strategic job.

---

## 25. Attack Ships

Attack ships perform normal attacks and can contribute to empire Defence.

Controlled V5 stat testing supports these role multipliers before other modifiers:

| Stat | Attack role |
|---|---:|
| Attack | 100% |
| Damage | 100% |
| Defence | 75% |

Attack role is therefore offensively efficient but provides less defensive contribution than Defence role.

---

## 26. Defence Ships

Defence ships provide full role Defence and are the currently confirmed ships used for Exploration.

Observed role multipliers:

| Stat | Defence role |
|---|---:|
| Attack | 75% |
| Damage | 75% |
| Defence | 100% |

Defence ships can still attack, but at reduced Attack and Damage compared with the same hull in Attack role.

---

## 27. Raider Ships

Raider ships participate in PvE raids.

Do not assume their stat multipliers are identical to Attack or Defence roles unless the current UI or a controlled test demonstrates it.

---

## 28. Leecher Ships

Leecher is a specialized raid and combat role.

A Leecher:

- can participate in raid Leecher positions
- can appear in normal attack selection
- can be power-modified when its current state permits
- **cannot change role**

Because a Leecher cannot change role, Flexible normally provides little benefit while still imposing the Flexible combat penalty.

A Fixed Leecher is therefore a strong default.

---

## 29. Fixed vs Flexible

### Fixed

A Fixed ship cannot transfer directly to another role.

It receives no inherent Flexible combat penalty.

A Fixed ship can still be power-modified when its current status permits. The current Ship Viewer explicitly distinguishes transferability from modification.

Earlier controlled V5 testing also observed a Fixed-to-Flexible reconstruction taking 4 ticks. No confirmed reverse path exists.

### Flexible

A Flexible ship can transfer among compatible roles.

The current Ship Viewer states that transfer is available when the ship is **Defending**.

Flexible imposes a permanent combat penalty of approximately:

- 5% Attack
- 5% Damage
- 5% Defence

### What this means in practice

Choose Flexible because you have a plausible future role change, not because "flexible sounds better."

Flexibility is purchased with permanent combat performance.

---

## 30. Ship Power Allocation

Every ship distributes its Power Core among:

- Weapons
- Engines
- Sensors

The values total 100%.

Power modifications take **2 ticks** when modification is currently available.

### Weapons

Weapon allocation scales combat output.

Controlled tests show a Corvette with base 2,000 Attack and 2,400 Damage at 25% Weapons displaying 500 Attack and 600 Damage before other empire modifiers.

Current evidence also shows Defence is weapon-power dependent.

A ship at W0 can therefore contribute no current Defence even if its theoretical maximum Defence is large.

### Engines

Engine allocation reduces travel time.

A Corvette observed at 0% Engines displayed a much longer engine time than the same class at high Engine allocation.

### Sensors

Sensor behavior is not sufficiently decoded to present a universal formula.

Do not use a balanced W/E/S split merely because it looks tidy. Configure a ship for a job.

---

## 31. Ship Status Matters

Current Star Dock and Ship Viewer captures show statuses including:

- Defending
- Returning
- Building
- Disabled

Actions are state-dependent.

For example:

- a returning Flexible Falcon stated that it **can be transferred**, but only when Defending, and **cannot currently be modified**
- a returning Fixed Attack Sentinal likewise could not be modified
- a disabled Fixed Defence Star Fury **could** be modified
- a returning Fixed Leecher Corvette **could** be modified

### What this means in practice

Modification availability is not governed by one simple "Returning = blocked" rule. Role and operational state both matter.

Read the current Ship Viewer before assuming transfer or modification is available.

---

## 32. Hull, Shields and HP

For kill calculations, the useful durability measure is:

`HP = current Hull + current Shields`

Examples from base values:

**Corvette**  
4,000 Hull + 3,000 Shields = 7,000 HP

**Eagle**  
13,000 Hull + 13,000 Shields = 26,000 HP

Current evidence supports using combined current Hull + Shields for break calculations.

---

## 33. Base Ship Reference

These are base site values collected from current V5 references. They do **not** include race, research, role, Fixed/Flexible, alliance or W/E/S modifiers.

| Class | Power | Hull | Shields | HP | Build | Credits | Metal | Deut | Irid | Crew | Maint/t | Attack | Damage | Defence |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Corvette | 2,000 | 4,000 | 3,000 | 7,000 | 2 | 45,000 | 2,500 | 1,000 | 0 | 150 | 1,000 | 2,000 | 2,400 | 1,800 |
| Wolverine | 4,000 | 8,000 | 7,000 | 15,000 | 5 | 75,000 | 4,500 | 2,000 | 0 | 300 | 2,000 | 4,000 | 4,800 | 3,600 |
| Talon | 6,000 | 11,000 | 8,000 | 19,000 | 8 | 123,500 | 6,100 | 4,250 | 0 | 475 | 2,850 | 6,900 | 7,200 | 5,400 |
| Raven | 8,000 | 14,000 | 9,000 | 23,000 | 10 | 160,000 | 8,450 | 5,000 | 0 | 550 | 3,500 | 8,400 | 10,000 | 7,200 |
| Raptor | 10,000 | 17,000 | 10,500 | 27,500 | 14 | 190,000 | 12,750 | 6,500 | 0 | 800 | 4,750 | 11,000 | 13,500 | 9,000 |
| Eagle | 13,000 | 13,000 | 13,000 | 26,000 | 12 | 100,000 | 10,000 | 10,000 | 0 | 350 | 250 | 14,300 | 14,300 | 11,700 |
| Frigate | 13,000 | 20,000 | 12,000 | 32,000 | 16 | 315,000 | 14,250 | 7,500 | 0 | 900 | 5,400 | 14,300 | 17,550 | 11,700 |
| Destroyer | 15,000 | 28,000 | 18,000 | 46,000 | 18 | 540,000 | 21,600 | 12,500 | 0 | 1,350 | 7,200 | 16,500 | 18,750 | 13,500 |
| GunShip | 18,000 | 36,000 | 28,000 | 64,000 | 20 | 810,000 | 32,400 | 14,500 | 0 | 1,575 | 12,600 | 18,000 | 25,200 | 16,200 |
| Falcon | 26,000 | 50,000 | 38,000 | 88,000 | 24 | 1,487,500 | 38,250 | 20,000 | 0 | 1,870 | 21,250 | 35,100 | 28,600 | 23,400 |
| Cruiser | 32,000 | 65,000 | 50,000 | 115,000 | 28 | 2,125,000 | 51,000 | 29,750 | 2,500 | 3,400 | 30,000 | 35,200 | 43,200 | 28,800 |
| Defender | 32,000 | 65,000 | 75,000 | 140,000 | 28 | 2,750,000 | 54,000 | 32,750 | 3,500 | 3,800 | 40,000 | 32,000 | 36,800 | 44,800 |
| Spectre | 32,000 | 65,000 | 55,000 | 120,000 | 28 | 2,250,000 | 52,000 | 31,000 | 3,000 | 3,500 | 32,500 | 33,600 | 44,800 | 28,800 |
| Sovereign | 45,000 | 80,000 | 70,000 | 150,000 | 36 | 3,200,000 | 64,000 | 40,000 | 10,000 | 4,800 | 40,000 | 58,500 | 41,400 | 40,500 |
| Scorpio | 46,000 | 70,000 | 80,000 | 150,000 | 38 | 3,500,000 | 72,000 | 52,000 | 10,000 | 5,400 | 36,000 | 62,100 | 46,000 | 41,400 |
| Dreadnought | 60,000 | 100,000 | 90,000 | 190,000 | 48 | 6,000,000 | 100,000 | 60,000 | 20,000 | 8,000 | 65,000 | 78,000 | 55,200 | 54,000 |
| Vanguard | 64,000 | 100,000 | 80,000 | 180,000 | 50 | 6,250,000 | 87,500 | 67,500 | 20,000 | 8,250 | 65,000 | 86,400 | 54,400 | 51,200 |
| Sentinal | 66,000 | 100,000 | 60,000 | 160,000 | 48 | 5,600,000 | 90,000 | 63,000 | 20,000 | 8,400 | 65,000 | 85,800 | 60,720 | 49,500 |
| Star Fury | 72,000 | 120,000 | 100,000 | 220,000 | 72 | 9,000,000 | 125,000 | 78,000 | 35,000 | 10,500 | 87,500 | 100,800 | 65,520 | 64,800 |

### Important exception: Eagle

The Eagle's base maintenance is only 250 Credits per tick, making it an extreme maintenance-efficiency outlier.

Do not use the Eagle as the baseline for normal hull economics.

---

# Part VI: Exploration and Expansion

## 34. Exploration

The current Exploration page describes Exploration as a method of using ships to gain additional **Land or Asteroids**.

It currently offers:

- Short: 4 ticks
- Medium: 6 ticks
- Long: 8 ticks

The page also displays:

- current Exploration Points
- available ships
- ship Power percentage
- estimated Short, Medium and Long results
- Land or Asteroid target choice

### Confirmed

**Exploration missions cannot be cancelled.**

### What this means in practice

Do not launch an 8-tick mission with a ship you may need for an imminent war, raid or role transfer.

---

## 35. Comparing Exploration Missions

Do not compare only gross expected territory.

Use:

`expected territory / total mission ticks`

Then consider the marginal value of the territory type.

If Land is fully built and your Asteroid economy is starving for Metal, Asteroids may be worth more than the raw estimate suggests.

If Research Labs, Residents or Power are your limiting infrastructure, Land may be more valuable.

---

# Part VII: Defence

## 36. The Defence Room

The current Defence page describes itself as the place to:

- manage defending ships
- raise and lower shields
- review empire Defence

It shows:

- Current Defence Points
- Max Possible Defence
- Attack Shield status
- Warp Shield status
- Defence Platforms
- defending ship status
- each ship's Defence
- current Hull and Shields
- one-click actions

---

## 37. Current Defence vs Max Possible Defence

These values should not be treated as synonyms.

### Current Defence

What your empire is contributing **right now** under current status and power configuration.

### Max Possible Defence

Controlled testing strongly supports this as the W100 defensive potential of eligible Attack and Defence ships, including latent potential from ships not currently contributing their maximum.

A current captured empire showed:

- Current Defence: 0
- Max Possible Defence: 552,567

Its major defending ships were Disabled, illustrating how enormous the difference can become.

### What this means in practice

A high Max Possible Defence does not mean you are presently defended.

Always look at Current Defence and ship status.

---

## 38. Attack Shields, Warp Shields and Platforms

The Defence page includes:

- Attack Shields
- Warp Shields
- Defence Platforms

Attack Shield and Warp Shield activation costs/effects were not exposed completely in the captured inactive state.

For **Defence Platforms**, maintained controlled notes use a raw contribution of:

**15 Defence points per completed platform**

No race, research, shield, alliance or other multiplier has been proven to apply to that raw platform contribution. The current acquisition/deployment path and interactions with other defensive systems should still be checked in the live game.

Do not import the remaining War Technology numbers from old guides or field spreadsheets without checking the live control or Info panel.

---

# Part VIII: Intelligence and the Universe

## 39. Intelligence Center

The current Intelligence page displays:

- regular probes available
- command probes available
- Intel Center
- Scan Log
- target selector
- available Intel types
- optional probe shield protection

The current page explicitly states:

**100 probes = 1 Power** for adding shield protection to probes.

---

## 40. Scan Types

Available scan types depend on research.

### General Scan

Broad empire information, including resources, probes and ship information.

### Defence Scan

Defensive information including Defence and relevant defensive assets.

### Full Dock Scan

Detailed ships, docks and active statuses.

### Stealth Scan

Defence-oriented intelligence with the possibility of avoiding target notification when successful.

The exact fields shown should be learned from the report itself because research and scan type differ.

---

## 41. Command Probes

The Intelligence page distinguishes regular probes from command probes.

Command Probe behavior has not been sufficiently isolated in current testing to justify inventing a formula here.

Treat the number shown by the interface as a separate intelligence resource until a current Info panel or controlled test establishes the exact mechanic.

---

## 42. Universe Browser

The Universe Browser lists empires by sector and shows values such as:

- coordinates
- empire
- Asteroids
- Land
- Networth
- rank

Current status colors are explicitly documented by the page:

- Blue: Newbie
- Green: Vacation
- Purple: Disbanding
- Orange: your empire
- Black: dead

---

## 43. Universe Scores

The Scores area contains several views:

- Top Scores
- Attack Statistics
- Defence Statistics
- General Stats
- My Empire Stats

General Stats includes current-universe values such as:

- total players and capacity
- dead empires
- average Networth
- average Land
- average Asteroids
- average Probes
- highest Probe count
- sector statistics
- alliance statistics
- total ships
- average ships per empire
- ship-class distribution

These are not just vanity statistics.

Average Probes matters to raid planning, and ship distribution can tell you something about the stage of the round.

---

## 44. Galaxy and Sector Leaders

The current Leaders page states:

**Galaxy Leader eligibility:** an empire in an alliance with more than **1,500,000 alliance Networth** may claim a free GL role.

**Sector Leader eligibility:** an empire in an alliance with more than **750,000 alliance Networth** may claim a free SL role.

Do not assume leadership is cosmetic. Check the current role information before claiming or planning around one.

---

## 45. Universe News

Universe News records alliance diplomatic events.

Current colors are explicitly defined as:

- Blue: peace treaty
- Green: neutral treaty
- Red: war declaration
- Orange: alliance disbanded or defeated

This page is one of the easiest ways for a new player to understand the current political state of the round.

---

# Part IX: Raids

## 46. What Is a Raid?

Raids are PvE operations against generated targets.

The Raid page tracks:

- daily raid limit
- ticks remaining before reset
- Raid Report
- Alliance Timers
- Raid Overview
- Raid Results

A September 2026 capture showed a daily limit of **3 raids**.

Raid gains can include:

- Credits
- Power
- Metal
- Deuterium
- Iridium
- Recruits

Some raid types or states may produce other rewards.

---

## 47. Raid Success Checks

Current raid results separate three major values:

**Raid Attack vs Target Defence**

**Raid Defence vs Target Attack**

**Raid Intel vs Target Intel**

A captured Universal Station raid showed the Attack and Defence checks succeeding while Intel failed, yet the overall raid still succeeded.

Therefore:

**Attack and Defence are the required combat checks. Intel is beneficial but not itself required for overall raid success in that observed case.**

Controlled testing has shown that a successful Intel wave can reduce target Attack and Defence by 10%.

---

## 48. Raid Party Structure

The current game supports multi-empire raid parties.

In the supplied 8-person raid capture, the interface arranged:

**Raid Fleet One**
- Leader
- Attack
- Defence
- Intel

**Raid Fleet Two**
- Leecher
- Leecher
- Leecher
- Leecher

Treat this as the confirmed structure of the captured 8-person raid. If the live game offers a different structure for another raid size or mode, use the live setup.

The raid setup also displayed each participant's:

- empire
- fleet
- payout percentage
- readiness

The interface warned that an incomplete raid fleet would expire after **4 ticks** in the captured state.

---

## 49. Leader Contribution

Controlled V5 raid arithmetic confirms:

**Leader contributes 50% of its participating ships' Attack to Raid Attack and 50% to Raid Defence.**

Example:

If Leader ships total 100,000 live Attack:

- +50,000 Raid Attack
- +50,000 Raid Defence

---

## 50. Intel Contribution

Intel positions contribute probes to the Intel check.

Controlled raid tests also indicate that ships attached to an Intel role can contribute combat strength based on 50% of ship Attack in the tested setup.

Because raid role arithmetic has changed during Star Fury's history, verify unusual compositions against the Raid Overview before committing.

---

## 51. Leechers in Raids

Leecher positions do not behave like Attack or Defence positions.

In the tested raid arithmetic, Leecher role contribution did not add normal Raid Attack or Intel points.

Their purpose is therefore specialized, and a new player should not assume four Leecher ships equal four ordinary combat contributors.

---

## 52. Raid Intel Requirements

Raid Intel requirements are tied to the current Universe Average Probes and vary by raid type.

Observed V5 target modifiers have included roughly:

| Raid type | Observed Intel target |
|---|---:|
| Trade Fleet | 80% of Universe Average Probes |
| Trade Convoy | 90% |
| Pirate Outpost | 100% |
| Sector Station | 110% |
| Galaxy Station | 120% |
| Pirate Stronghold | 130% |
| Universal Station | 140% |

Some lower-level raid targets appear to use caps. A Trade Convoy test produced an observed Intel cap of **2,750 probes** despite the raw percentage calculation being higher.

### Recommended practice

Use the requirement displayed by the current Raid screen or calculator rather than treating this table as a permanent formula.

---

## 53. Mercenaries

Raid mercenaries are selectable by role.

The captured **Add Raid Mercenary** page offered multiple strength tiers for:

- Attack
- Defence
- Intel
- Leecher

Each option carried a payout percentage.

For the raid shown, stronger Attack/Defence/Intel mercenaries consumed progressively larger payout shares, while exact loadouts and percentages were specific to that raid type.

### What this means in practice

A mercenary solves two problems at once:

1. It fills a missing role or threshold.
2. It consumes a portion of the raid reward.

Therefore the strongest mercenary is not automatically the best choice.

Use the weakest option that clears the threshold with an acceptable margin.

---

## 54. Raid Payouts

Payout is distributed according to the percentages shown in the raid party.

The captured 8-person setup had unequal shares rather than an automatic equal split.

Raid Results then broke the total reward into per-empire gains.

### What this means in practice

A raid can be combat-safe but economically mediocre for your empire if your payout share is small.

Treat raid safety and raid profitability as separate questions.

---

## 55. Raid Losses

Raid results report losses by participating empire.

Controlled combat observations support a **two-phase incoming-damage model** for the normal combat waves.

In one recorded raid:

- Target Defence: 195,700
- Target Attack: 206,000
- Combat ships in the relevant wave: 12

Phase 1 damage per ship:

`195,700 / 12 = 16,308.33`

Phase 2 damage per ship:

`206,000 / 12 = 17,166.67`

Total observed damage to each participating ship:

`16,308.33 + 17,166.67 = 33,475`

The actual post-raid ship damage matched **33,475 exactly**.

This supports the working rule:

`incoming damage per combat ship = target Defence / attack-wave ship count + target Attack / defence-wave ship count`

when the same ships participate in both phases.

If the wave counts differ, calculate the phases separately with their actual ship counts.

Leechers should not automatically be included in those combat-wave divisors merely because they appear in the raid party.

### What this means in practice

Do not divide target damage by the number of empires in the raid.

Count the ships participating in the relevant combat phase.

A ship can pass the raid's Attack/Defence thresholds and still die from accumulated phase damage, so raid planning needs both a **threshold check** and a **survivability check**.

---

# Part X: Boss Battles

## 56. Alliance Boss Battles

Boss Battles are completed as an alliance.

The current Boss Battle page explicitly describes several possible wave types, depending on boss difficulty:

### Intel Attack
Requires probes and General Scan.

### Damage Attack
Requires Attack Dock ships.

### Leech Attack
Requires Leecher Dock ships.

### EMP Attack
Requires Power.

Once a wave is beaten, another wave opens until the boss is defeated.

---

## 57. Boss Progression

A captured Omega battle was on:

**Wave 6: Leecher**

and displayed:

- Leechers Fleets Sent
- Leechers Required
- selectable Leecher ships

Alliance News separately showed repeated Omega Leech attacks and boss reward notifications.

### What this means in practice

Boss Battles are alliance progression content, not a single giant fleet check.

An empire can be valuable by contributing the resource required by the current wave rather than having the strongest overall fleet.

---

# Part XI: PvP Combat

## 58. Attack Types

The current Attack Room contains tabs for:

- Planetary
- Asteroid
- Resource

The captured Planetary state explicitly states that successful Land or Asteroid attacks **capture** enemy territory and add it to the attacking empire.

The exact behavior of Resource Attack was not captured in an active state and should not be filled in from an old manual without current confirmation.

---

## 59. Attack, Damage and Defence

These three values are not interchangeable.

A useful mental model is:

**Attack gets through.**

**Damage kills.**

**Defence keeps attacks out and retaliates.**

---

## 60. The Attack Gate

Attack is compared against the target's Defence threshold.

The exact behavior of equality has not been isolated strongly enough to recommend relying on it.

For planning, use a positive safety margin.

---

## 61. Damage Allocation

The working V5 combat model is:

`Damage per defending ship = total attacking Damage / number of defending ships in the wave`

Eligible defenders receive equal allocation.

This is why ship count matters.

---

## 62. Overkill Does Not Spill

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

## 63. Defender Retaliation

Controlled observations support:

`retaliation per attacker = defender Defence / number of attacking ships in the wave`

Each attacker must survive its share using current Hull + Shields.

Example:

Target Defence: 125,000

Two Destroyers attack:

`125,000 / 2 = 62,500 each`

Base Destroyer HP is 46,000, so both die.

Add one Corvette:

`125,000 / 3 = 41,666.7 each`

The Destroyers survive while the Corvette does not.

### What this means in practice

Cheap sacrificial ships can protect expensive attackers by increasing the retaliation divisor.

That is not flavor. It is a real tactical use of ship count.

---

## 64. Break Orders

A Break Order, usually written **BO**, expresses sequential Damage thresholds for eliminating layers of defenders.

Example:

Defenders:

- 3 Corvettes at 7,000 HP
- 1 Eagle at 26,000 HP

Four ships are initially alive.

To deal 7,000 to each:

`4 x 7,000 = 28,000`

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

## 65. Why Fleet Composition Matters

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

---

# Part XII: Alliances

## 66. Alliance Center

The current Alliance Center contains:

- invitations and requests
- War Room access
- alliance list
- alliance structure
- members list

Current alliance organizational roles observed include:

- Alliance Leader
- Commander
- Station Manager
- Ship Yard Manager
- War Leader
- Break Leader

Role limits are displayed by the game.

---

## 67. Alliance News

Alliance News records alliance-relevant events.

Current page colors are:

- Orange: attacks from the alliance
- Blue: failed enemy attacks
- Yellow: successful enemy attacks
- Red: an empire or Boss has been defeated
- Purple: Boss reward notification

The current page states that events are stored for **48 hours**.

---

## 68. Alliance Forums

The alliance forums are a persistent coordination space.

The current interface explicitly encourages new players to ask for help there.

The captured alliance used a forum thread to share scan reports, demonstrating a common and useful practice: keep intelligence available to more than the one player who sent the probes.

---

# Part XIII: Alliance Station

## 69. What the Alliance Station Is

The Alliance Station is a shared alliance economic and shipbuilding system.

Current captured functions include:

- Station Overview
- Star Dock Overview
- Fund / Stock
- View Stock
- Donation Log
- My Donation Stats

The Station Star Dock page states that the alliance can collectively build ships and send them to members in time of need.

This is strategically important after war losses and respawns.

---

## 70. Station Stock

Current Station resources include:

- Credits
- Power
- Metal
- Deuterium
- Iridium
- Cadets

The interface gives an important warning:

> With the exception of Credits, donated resources cannot be removed from the Station or sent directly back to alliance empires.

They are Station stock for upgrades and Station activity.

### What this means in practice

Do not dump scarce resources into the Station merely because you have permission to donate them.

A donation can be effectively irreversible at the individual-empire level.

---

## 71. Station Upgrades

Captured Station upgrades include:

### Defence Platforms

Multiple platform levels add Station Defence bonuses.

### Attack Upgrades

Increase Station Attack capability.

### Star Dock

Unlocks the shared Station shipbuilding system.

### Star Dock Size

Increases Station ship capacity.

### Big Hammer Upgrades

Reduce Station ship construction time.

### Ship Technology

Pulsar, Particle and Plasma technology can be developed for the Station.

These upgrades require substantial shared resources and construction time.

---

## 72. Donations and Accountability

The Station includes:

- a donation history
- personal donation statistics
- received Credits
- donated resource totals

This makes alliance logistics visible rather than purely trust-based.

A mature alliance can therefore use the Station as both a resource sink and a strategic reserve.

---

# Part XIV: Rewards and Preferences

## 73. Rewards

The current Rewards page states that reward points:

- are earned for daily activity
- can be exchanged for resources
- survive defeat and respawn

Observed September 2026 redemptions for **10 reward points** were:

| Reward | Amount |
|---|---:|
| Deuterium | 530 |
| Metal | 1,200 |
| Credits | 44,000 |
| Recruits | 42 |
| Power | 170 |

These are current observed values, not guaranteed permanent constants.

### What this means in practice

Reward Points are flexible bottleneck relief.

Do not maximize nominal quantity. Redeem what enables the highest-value next action.

---

## 74. Preferences

The current Preferences page includes controls for:

- VIP settings
- Delete Empire
- Delete Account
- Vacation Mode
- Leave Newbie Mode
- Default Ship Type
- Autocomplete Cadet Training

### Recommended defaults for a new player

**Cadet Training:** Manual

**Default Ship Type:** choose deliberately. Fixed is a safer default if you understand each ship's intended role; Flexible is useful when role reassignment is worth the permanent combat penalty.

**Leave Newbie Mode:** do not do this without a reason.

---

# Part XV: Newbie Protection, War and Timing

## 75. Newbie Protection

Newbie status is shown in the Universe Browser and can be voluntarily left through Preferences.

Protection is an asset.

Before leaving it, ask:

- What specific action requires me to leave?
- Are my ships where I need them?
- Is my alliance ready?
- Do I understand the current war state?
- Can my economy replace losses?
- Have I been scanned or targeted?

There is no prize for becoming vulnerable early.

---

## 76. War Preparation Checklist

Before a scheduled war or peace expiration:

1. Bring important ships home.
2. Allow travel-time buffer.
3. Finish necessary transfers.
4. Rearm ships currently configured for Engines or Sensors.
5. Check Current Defence, not only Max Possible Defence.
6. Refresh intelligence on likely targets.
7. Calculate Break Orders.
8. Calculate attacker survival against retaliation.
9. Preserve Power, cadets and resources for replacements.
10. Avoid long non-cancellable exploration.
11. Coordinate target order with the alliance.
12. Check current shields, war systems and alliance instructions.

The battle report is a costly place to discover that a ship was still Returning.

---

# Part XVI: Defeat, Respawn and Second Empires

## 77. Defeat Is Not Necessarily the End

Star Fury includes respawn systems so defeated empires can return.

Respawn research can improve:

- starting territory
- starting resources
- probe retention
- raid capability

A mature alliance can also use its Station and shared ships to help a respawned empire become useful again quickly.

---

## 78. Second Empires

V5 supports a Second Empire.

Observed rules include:

- both empires must belong to the same alliance
- the player cannot operate both simultaneously
- a second empire is not simply disposable
- scoring is affected when operating two empires
- each empire has its own race, research, economy and fleet state

### What this means in practice

A second empire is not free efficiency.

It is a second strategic position to manage.

Create one because you have a role for it, not because the button exists.

---

# Part XVII: A Sensible New-Player Opening

## 79. Phase 1: Learn Your Empire

Before committing to a build order:

- read race modifiers
- inspect starting research
- inspect Production
- inspect Buildings
- inspect Star Dock capacity
- inspect protection
- inspect Universe Scores
- inspect Universe News

There is no universal opening that ignores race and round state.

---

## 80. Phase 2: Build the Economy That Solves Your Constraints

Early production compounds.

Typical early constraints include:

- insufficient Power
- insufficient Credit income
- population capacity
- low Research Points
- Metal or Deuterium shortages

Do not try to maximize everything at once.

Solve the bottleneck preventing the next useful action.

---

## 81. Phase 3: Establish Exploration

A cheap Defence ship can create additional territory while the rest of the empire grows.

Before sending it, compare:

- mission duration
- estimated territory
- Land vs Asteroid need
- upcoming war or raid commitments

Remember that the mission cannot be cancelled.

---

## 82. Phase 4: Develop Research

Strong early technologies generally fall into two categories:

**Compounding technologies**  
Increase future production.

**Constraint-solving technologies**  
Unlock the specific ship, probe system, transfer capability or other mechanic you presently need.

A technology can be powerful and still be the wrong research now.

---

## 83. Phase 5: Join the Information Economy

Once probes and scans are relevant:

- learn what each scan reports
- watch Average Probes
- share useful intelligence with your alliance
- do not rely on stale scans
- distinguish current ship status from theoretical fleet strength

Information is often worth more than another small ship.

---

## 84. Phase 6: Expand the Fleet Deliberately

Every ship should have a job.

Examples:

- permanent explorer
- permanent Defender
- Attack ship
- Raider
- Leecher
- flexible wartime reserve
- sacrificial combat hull
- Boss contribution
- Station support target

If the answer is simply "it increases Networth," reconsider the build.

---

# Part XVIII: Common New-Player Mistakes

## 85. Building Too Much Military Too Early

Ships cost resources twice:

1. at construction
2. every tick through maintenance

Military strength that produces no strategic value can delay economic and research growth.

---

## 86. Treating Networth as Combat Strength

Networth does not tell you:

- ship status
- Hull damage
- Shield damage
- W/E/S
- dock role
- probes
- research
- Current Defence
- whether the fleet is home

Scan the target.

---

## 87. Confusing Attack and Damage

Attack is the threshold.

Damage is what kills ships.

Having one without enough of the other can produce a failed operation.

---

## 88. Treating Defence as Armor

Defence is not simply subtracted from incoming Damage.

The observed combat system uses Defence as a threshold and as retaliation.

---

## 89. Ignoring Ship Count

Equal damage allocation makes the number of ships tactically important.

Cheap hulls can dilute incoming retaliation.

Weak defenders can waste enemy overkill.

---

## 90. Building Every Ship Flexible

Flexible is not "Fixed, but better."

You are paying approximately 5% Attack, Damage and Defence for role mobility.

---

## 91. Building Flexible Leechers

Leecher cannot change role.

The main benefit of Flexible is therefore absent.

---

## 92. Forgetting W/E/S

A W0 combat ship can be physically present and strategically useless.

Check power allocation before war.

---

## 93. Sending Long Exploration Before War

Exploration cannot be cancelled.

The game will not care that you changed your mind three ticks later.

---

## 94. Training Huge Cadet Reserves Without a Plan

Cadets cost Credits.

Train what your planned construction requires, plus whatever operational buffer makes sense.

---

## 95. Using Stale Intelligence

A scan is a timestamped observation, not eternal truth.

Ships move, repair, die and change configuration.

---

## 96. Taking the Strongest Raid Mercenary Automatically

Mercenaries consume payout.

The best mercenary is usually the cheapest one that clears the required threshold with acceptable safety margin.

---

## 97. Donating Scarce Resources to the Station Reflexively

Most donated Station resources cannot simply be withdrawn to your empire.

Donation is an alliance investment.

Treat it accordingly.

---

# Part XIX: Decision Tools

## 98. Economic Break-Even

For a simple production improvement:

`break-even ticks = upfront cost / added production per tick`

This does not capture every opportunity cost, but it is a useful starting point.

---

## 99. Ship Efficiency

Useful metrics include:

**Attack per maintenance**

**Damage per maintenance**

**Defence per maintenance**

**HP per maintenance**

**Attack per build tick**

**Damage per build tick**

**Defence per build tick**

**HP per build tick**

Do not collapse Credits, Power, Metal, Deuterium, Iridium, crew and time into one arbitrary "cost score" unless you have explicitly chosen exchange values.

The current planning workbook highlights several base-stat examples:

- **Defender:** 5,000 HP produced per base build tick
- **Spectre:** 1,600 Damage per base build tick
- **Sentinal:** 1,787.5 Attack per base build tick
- **Corvette:** 3,500 HP per base build tick at very low absolute cost
- **Eagle:** extreme maintenance efficiency because its 250/tick maintenance is an intentional outlier

These are not overall rankings. Race availability, technology, role, W/E/S, deadlines and resource scarcity can reverse the practical choice.

### Engine-time reference

The ship workbook also records base engine figures alongside values consistent with the **25% Advanced Engines return-time reduction**, rounded to whole ticks.

Examples:

- Corvette: 10 → 8
- Wolverine: 11 → 8
- Talon: 13 → 10
- Raven/Raptor/Eagle: 14 → 11
- Star Fury: 20 → 15

Treat the reduced value as a calculated planning aid unless the live ship page displays the same value for your current configuration.

---

## 100. Exploration Efficiency

`expected territory / mission ticks`

Then adjust for whether Land or Asteroids is currently more valuable.

---

## 101. Deadline Planning

When war starts in `N` ticks:

A ship requiring more than `N` effective construction ticks does not contribute to the opening battle.

That does not always make it a bad build, but it changes the question from "Does this help the war?" to "Does this help the next phase of the war?"

---

# Appendix A: Current Interface Map

## Overview

Empire summary, alerts, adviser, Star Dock summary and major status information.

## Empire

- Buildings
- Production
- Research

## Military

- Star Dock
- Defence
- Exploration

## War Room

- Attack
- Boss Battle
- Intelligence
- Raid
- Break Calculator

## Alliance

- Center
- News
- Forums
- Station

## Universe

- Browser
- Leaders
- News
- Scores

## Comms

- Inbox
- Send Message
- Discord

## Options

- Rewards
- Preferences
- Patreon
- Support

---

# Appendix B: Status and Color Quick Reference

## Universe Browser

- Blue: Newbie
- Green: Vacation
- Purple: Disbanding
- Orange: your empire
- Black: dead

## Universe News

- Blue: peace treaty
- Green: neutral treaty
- Red: war declaration
- Orange: alliance disbanded or defeated

## Alliance News

- Orange: attacks from your alliance
- Blue: failed enemy attacks
- Yellow: successful enemy attacks
- Red: empire or Boss defeated
- Purple: Boss reward notification

---

# Appendix C: Quick Combat Reference

**HP**  
Current Hull + current Shields.

**Attack**  
Used to pass target Defence.

**Damage**  
Allocated across defending ships.

**Defence**  
Used to resist attacks and retaliate.

**Attack role**  
100% Attack, 100% Damage, 75% Defence before other modifiers.

**Defence role**  
75% Attack, 75% Damage, 100% Defence before other modifiers.

**Flexible**  
Approximately -5% Attack, Damage and Defence.

**Weapon Power**  
Scales combat output.

**Damage allocation**  
Total Damage divided among defending ships in the wave.

**Retaliation**  
Defender Defence divided among attacking ships in the wave.

**Overkill**  
Wasted on the ship that received it.

**Break Order**  
Sequential Damage required to remove layers of defenders.

---

# Appendix D: Quick Pre-War Checklist

- [ ] Important ships home
- [ ] No critical ship stranded Exploring
- [ ] Flexible transfers completed
- [ ] W/E/S checked
- [ ] Current Defence checked
- [ ] Shields and war controls reviewed
- [ ] Current target scans obtained
- [ ] Break Orders calculated
- [ ] Retaliation losses calculated
- [ ] Replacement Power reserved
- [ ] Replacement cadets reserved
- [ ] Metal / Deuterium / Iridium reserve checked
- [ ] Alliance target order understood

---

# Appendix E: Known Unknowns

The following mechanics should not be presented as fully solved without additional current evidence:

- exact building-cost scaling formula
- Alliance Catch Up's exact activation criteria, future percentages, and full system scope; current peace-time evidence supports ×1.30 for several economic outputs
- whether Catch Up affects Research Points or Iridium Plants
- complete Command Probe mechanics
- full Sensor Power formula
- exact equality behavior on all combat thresholds
- all Attack Shield activation costs and effects
- all Warp Shield activation costs and effects
- Defence Platform acquisition/deployment details and whether the confirmed raw 15 Defence/platform is modified by any other system
- Resource Attack mechanics in its current V5 state
- the complete current race-by-race ship roster, because the workbook contains a small internal availability discrepancy
- exact power recovery behavior after every possible form of ship loss or retirement
- all raid Damage role formulas
- whether every raid size uses the same role layout as the captured 8-person setup
- conditional pages that only appear during particular war, raid, respawn or leadership states

A good manual should mark these gaps rather than filling them with mechanics from older versions.

---

# Appendix F: Current Race Reference

The maintained workbook preserves the following current V5 race modifiers and starting advantages.

| Race | Advantages | Disadvantages |
|---|---|---|
| **Terran** | +20% Population production & limit; +15% Metal; +15% Deuterium; starts with Advanced Mines I and Transfer Drones | -10% Power production |
| **Herogen** | +20% Credit production; double Command Probes; unlimited Probe Research; starts with Fabrication Plants and Advanced Buildings I | -5% Defence Points |
| **Versuden** | +10% Damage; +1 Attack Dock slot; starts with Population Tax I, Population Tax II and Big Hammer I | -20% Power; -1 Defence Dock slot; half Command Probes |
| **Ferrion** | +25% Power; +25% Research Points; +1 Defence Dock slot; starts with Fourth Leecher and Shields | -10% Damage; -1 Attack Dock slot |
| **Marvion** | increased ship-capture chance; starts with Pulsar Technology and Warp Shields; Plasma Exciter research can add +20% Attack and +20% Damage | -25% Credits; -25% Metal; -25% Deuterium |

### Ship availability caution

The current planning workbook contains an internal discrepancy between its generic Ship table and its race-specific buildable-ship lists for a small number of hull/race combinations, notably around **Frigate** and **GunShip** availability.

For that reason this manual does **not** promote the workbook's full race-by-race hull roster as an authoritative rule.

Use the current live ship constructor / ship-stat page for race availability. Once a fresh current race-selection or complete ship-availability source is captured, this appendix can safely include the full roster.

### Reading race modifiers

Race modifiers explain why two empires with identical building counts or hulls may display different live values.

For production, conceptually separate:

1. underlying building base rate
2. research modifiers
3. race modifiers
4. dynamic modifiers such as Alliance Catch Up
5. whole-number display behavior

For ships, also include role, Fixed/Flexible and W/E/S effects.

If the live interface disagrees with a calculated value, the live value wins.

---

# Appendix G: Current Raid Planning Reference

The maintained raid workbook contains the following Horizon LIII/current-round planning values. Treat these as **observed current-round reference data**, not guaranteed constants for future rounds.

| Raid | Observed Low A/D Range | Observed High A/D Range | Intel target | Merc ships | Rewards observed |
|---|---:|---:|---:|---:|---|
| Trade Fleet | 3,450–7,500 | 3,600–8,250 | 80% avg probes | 1 | Credits, Power, Metal, Deuterium, Recruits |
| Trade Convoy | 11,500–16,200 | 12,000–18,600 | 90% avg probes | 1 | Credits, Power, Metal, Deuterium, Recruits |
| Pirate Outpost | 34,500–46,400 | 36,000–51,200 | 100% avg probes | 2 | Land, Asteroids, Credits, Power, Metal, Deuterium, Recruits |
| Sector Station | 74,750–87,750 | 78,000–100,750 | 110% avg probes | 3 | Credits, Power, Iridium, Metal, Deuterium, Recruits |
| Galaxy Station | 110,000–137,500 | 121,000–148,500 | 120% avg probes | 4 | Credits, Power, Iridium, Metal, Deuterium, Recruits |
| Pirate Stronghold | 190,000–250,000 | 199,500–270,000 | 130% avg probes | 4 | Land, Asteroids, Credits, Power, Metal, Deuterium, Recruits |
| Universal Station | 275,000–337,500 | 287,500–350,000 | 140% avg probes | 5 | Credits, Power, Iridium, Metal, Deuterium, Recruits |

### Mercenary examples

Mercenary loadouts scale with raid type. For the captured **Sector Station**, the available tiers matched the workbook:

- Attack: 39,000 / 45,500 / 52,000
- Defence: 39,000 / 45,500 / 52,000
- Intel: 21,000 / 23,000 / 24,000 probes

The associated payout percentages increase with stronger tiers.

Always use the live Add Raid Mercenary page for the raid you are actually building.

---

# Appendix H: Glossary

**BO / Break Order**  
Sequence of Damage thresholds needed to destroy layers of defenders.

**Cadets**  
Trained recruits used as ship crew.

**Current Defence**  
Defence currently being contributed under present ship status and configuration.

**Defence Platform**  
A defensive system shown on the Defence page. Exact current acquisition and effects should be checked in game.

**EP / Exploration Points**  
Resource used by the Exploration system.

**Fixed**  
Ship modification state that does not have the Flexible combat penalty and cannot directly transfer roles.

**Flexible**  
Ship state that allows compatible role transfer at the cost of reduced combat stats.

**HP**  
Current Hull + current Shields.

**IGT**  
In-game time.

**Intel**  
Information gathered through probes and scan technologies.

**Leecher**  
Specialized ship and raid role that cannot change role.

**Networth**  
General empire-value measure. It is not equivalent to live military power.

**Probes**  
Units used in intelligence and counter-intelligence.

**Raid**  
PvE operation against a generated target.

**Recruits**  
Population-derived manpower that can be trained into Cadets.

**RP**  
Research Points.

**Station**  
Alliance Station, the shared alliance infrastructure and shipbuilding system.

**Tick**  
A game update interval used for production, construction, travel and other timers.

**W/E/S**  
Weapons / Engines / Sensors ship Power distribution.

---

# Final Advice

Star Fury has a lot of buttons, but strong play is mostly about understanding constraints.

Grow what compounds.

Build ships for jobs.

Gather information before committing force.

Keep an eye on the clock.

And when the game offers an irreversible button, assume it has been waiting twenty-five years for you to click it without reading.
