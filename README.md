
# beuld addon's
### [ChatTriger](https://www.chattriggers.com/) module for [hypixel](hypixel.net) - [skybock](wiki.hypixel.net)

this module add some QOL feature based on my activitie in this game like:
 - kuudra
 - dungeon
 - some other tings

## features:
<h4>
<details><summary>Etherwarp sound</summary>

customizable Etherwarp sound

</details>
<details><summary>social</summary>

make join/leave guild/friend message clickable to add /pv.
 
</details>
<details><summary>pc area</summary>

not very usefully except some case on slash

<img src="asset/readme/pc.png" alt="pc">
</details>
<details><summary>pearl waypoint</summary>

pearl lineup waypoint depend on your position. example if your at tri the module stop rendering square waypoint
some waypoint can be added in one of those files: [PearlWaypoint](./feature/kuudra/sup/PearlLineup/PearlWaypoint.json), [SuppWaypoint](./feature/kuudra/sup/PearlLineup/SuppWaypoint.json) 
</details>


<details><summary>beacon at ballista piles (p1)</summary>

todo : insert screen

</details>
<details><summary>beacon at ballista piles (p2)</summary>

todo : insert screen

</details>
<details><summary>display closest piles percentage</summary>

/title closest pile percentage

</details>
<details><summary>rend info</summary>

display rend pull in chat
<img src="asset/readme/rend.png" alt="pc">
</details>
<details><summary>format mana drain</summary>

<br>todo: insert screen

<img src="asset/readme/rend.png" alt="pc">
</details>
</h4>

### Auto restart

 - Auto restart: 
   - auto start kuudra or dg at the end of a run (can config downtime)
   - `!dt` party chat command automatically stop auto mode

## Commands:
- `/beuld` - open the main config menu
- `/beuldautors [<dg/kuudra> <on/off>](optional)` - open auto restart config or toggle auto rs
- `/fo` - show all online friend(s)
- alias: 
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
### many features of this module are inspired by other module or mod like
 - odin, chearys (don't cheat, it's bad)
 - nwjn or volcaddons
#### in the case a part of code does is not my own it will be notified in the code