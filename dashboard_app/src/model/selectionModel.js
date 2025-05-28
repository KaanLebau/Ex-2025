class SelectionModel {
    constructor() {
        this.currentPRU = 'DX'
        this.currentDepartment = null;
        this.currentTempo = null;
        this.currentLine = null;
    }
  
    setDepartment(dep) {
        this.currentDepartment = dep;
        this.currentTempo = null; 
        this.currentLine = null;
    }
  
    getDepartment() {
        return this.currentDepartment;
    }
  
    setTempo(tempo) {
        if (this.currentDepartment) {
            this.currentTempo = tempo;
            this.currentLine = null; 
        } else {
            console.warn("Select a department first!");
        }
    }
  
    getTempo() {
        return this.currentTempo;
    }
  
    setLine(line) {
        if (this.currentTempo) {
            this.currentLine = line;
        } else {
            console.warn("Select a tempo (M/H) first!");
        }
    }
  
    getLine() {
      return this.currentLine;
    }
  
    reset() {
      this.currentDepartment = null;
      this.currentTempo = null;
      this.currentLine = null;
    }
  


  }
  
  export const selectionModel = new SelectionModel();
  