class Marker {
  constructor(size, color, remainingInk){
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }

  write (stringToBeWritten) { 
    let numChars = stringToBeWritten.split(' ').length;
    this.remainingInk -= numChars;
    
    let upToIndex = stringToBeWritten.length - numChars 
    
    return stringAbleToBeWritten.substring(0,upToIndex);
  }
}

module.exports = Marker
