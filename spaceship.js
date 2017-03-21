class Spaceship {
  constructor(name, crew , phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.crew = crew
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = 'uncharged'
    if (crew.length > 0) {
      this.active = true
      this.docked = false
      for (var i = 0; i<crew.length; i++) {
        debugger
        crew[i].currentShip = this
      }
    } else {
      this.active = false
      this.docked = true
    }
  }
}
