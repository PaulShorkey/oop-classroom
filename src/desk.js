class Desk {
  constructor (length, width, height, isWhiteboard) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.isWhiteboard = isWhiteboard;
    this.content = '';
  }
  write(inputString){
    this.content = this.content + inputString;
  }
  wipe(){
    if (this.isWhiteboard){
        this.content = '';
    }
  }
}

module.exports = Desk
