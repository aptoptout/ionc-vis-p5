class wordOverlap {
    constructor(_objAm, _objOp) {
        this.totalDict = {};
        this.sortedWordFreq = [];
        // this.amateurcitiesData = _objAm.freqArray;
        // this.openData          = _objOp.freqArray;
        // this.opensetData       = _objOpSe.freqArray;
        // this.unstudioData      = _objUn.freqArray;

        for(var key in _objAm.freqArray) {
            for(var val in _objOp.freqArray) {
                if(_objAm.freqArray[key][0] == _objOp.freqArray[val][0] || this.totalDict.hasOwnProperty(_objAm.freqArray[key][0])) {
                    this.totalDict[_objAm.freqArray[key][0]] = _objAm.freqArray[key][1];
                }
            }
        }

        console.log(this.totalDict);

        // for(var key in Object.keys(_objOp.dictionary)) {
        //     if(this.totalDict.hasOwnProperty(key) || _objAm.dictionary.hasOwnProperty(key)) {
        //         this.totalDict[key] += _objAm.dictionary[key];
        //     }
        // }

        // console.log(this.totalDict);

        // for(var word in this.totalDict) {
        //     this.sortedWordFreq.push([word, this.totalDict[word]]);
        // }

        // this.sortedWordFreq.sort(function(a, b) {
        //     return a[1] - b[1];
        // });
    }

    display() {
    
    }
}