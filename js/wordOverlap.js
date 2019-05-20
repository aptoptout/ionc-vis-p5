class wordOverlap {
    constructor(_objAm, _objOp) {
        this.totalDict = {};
        // this.amateurcitiesData = _objAm.freqArray;
        // this.openData          = _objOp.freqArray;
        // this.opensetData       = _objOpSe.freqArray;
        // this.unstudioData      = _objUn.freqArray;

        for(var key in Object.keys(_objAm.dictionary)) {
            if(this.totalDict.hasOwnProperty(key) || _objOp.dictionary.hasOwnProperty(key)) {
                this.totalDict[key] = _objAm.dictionary[key];
            }
        }
    }

    display() {
    
    }
}