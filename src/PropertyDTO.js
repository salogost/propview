class PropertyDTO {
  constructor() {
    // Extra Data
    this.lat = ''
    this.long = ''

    // Poperty Head Section Data
    this.address1 = ''
    this.address2 = ''
    this.bathsTotal = 0
    this.sqft = 0
    this.backImg = ''

    // Poperty Overview Section Data
    this.overview = ''    

    // Property Features Section Data
    this.yearBuilt = ''
    this.pool = ''
    this.bldgType = ''
    this.lotSize = ''
    this.cooling = ''
    this.roof = ''
    this.heating = ''
    this.walls = ''

    // Property Details Section Data
    this.bathsFull = ''
    this.bathsHalf = ''
    this.beds = ''
    this.bldgSize = ''
    this.groundFloorSize = ''
    this.livingSize = ''
    this.blockNum = ''
    this.countrySecSubd = ''
    this.subdName = ''
    this.taxCodeArea = ''

    // Property Value Section Data
    this.avm = 0
    this.avmDate = ''    
    // Property Sales History Section Data
    this.saleHistory = []

    // Property Schools Section Data
    this.schools = []
  }
}

export default PropertyDTO;