
# beuld addon
### [ChatTriger](https://www.chattriggers.com/) module for [hypixel](hypixel.net) - [skybock](wiki.hypixel.net)

this module adds some QOL features based on my activities in this game, such as:
 - Kuudra
 - Dungeon
 - other things

## Features:
<h4>
<details><summary>Etherwarp sound</summary>

Customizable Etherwarp sound

</details>
<details><summary>social</summary>

Make join/leave guild/friend messages clickable to add /pv.
 
</details>
<details><summary>pc area</summary>

Not very useful except in some cases on slash

<img src="asset/readme/pc.png" alt="pc">
</details>
<details><summary>pearl waypoint</summary>

pearl lineup waypoint depends on your position. For example, if you are at tri, the module stops rendering square waypoints
Some waypoints can be added in one of these files: [PearlWaypoint](./feature/kuudra/sup/PearlLineup/PearlWaypoint.json), [SuppWaypoint](./feature/kuudra/sup/PearlLineup/SuppWaypoint.json) 
</details>


<details><summary>beacon at ballista piles (p1)</summary>

TODO: insert screen

</details>
<details><summary>beacon at ballista piles (p2)</summary>

TODO: insert screen

</details>
<details><summary>Display closest piles percentage</summary>

/title closest pile percentage

</details>
<details><summary>rend info</summary>

Display rend pull in chat
<img src="asset/readme/rend.png" alt="pc">
</details>
<details><summary>Format mana drain</summary>

<br>TODO: insert screen

<img src="asset/readme/rend.png" alt="pc">
</details>
</h4>

### Auto restart

 - Auto Restart: 
   - Automatically start Kuudra or DG at the end of a run (configurable downtime)
   - `!dt` party chat command automatically stops auto mode

## Commands:
- `/beuld` - Open the main config menu
- `/beuldautors [<dg/kuudra> <on/off>](optional)` - Open auto restart config or toggle auto rs
- `/fo` - Show all online friend(s)
- Aliases: 
  - `/t5` -> `/join_instance KUUDRA_INFERNAL`
  - `/t4` -> `/join_instance KUUDRA_FIERY` 
  - `/t3` -> `/join_instance KUUDRA_BURNING` 
  - `/t2` -> `/join_instance KUUDRA_HOT` 
  - `/t1` -> `/join_instance KUUDRA_NORMAL` 

## Dependencies:
- [ChatTriger]()
- Bloomcore
- [Vigilance](https://www.chattriggers.com/modules/v/Vigilance)
- [RenderLib](https://www.chattriggers.com/modules/v/RenderLib)
- [BeaconBeam](https://www.chattriggers.com/modules/v/BeaconBeam)

## Credit:
### Many features of this module are inspired by other module or mod like
 - odin, chearys (don't cheat, it's bad)
 - nwjn or volcaddons
#### In the case a part of code does is not my own it will be notified in the code