class wordFrequency {
    constructor(tempJson, numWords) {
        this.data           = tempJson;
        this.freqArray      = [];
        this.highestInt     = 0;

        switch(numWords) {
            case'1':
                for(row in this.data) {
                    for(words in this.data[row]["word-freq"]) {
                        let word  = this.data[row]["word-freq"][words][0];
                        let freq  = this.data[row]["word-freq"][words][1];
                        // let relav = this.data[row]["word-freq"][words][2];

                        this.freqArray.push([word, freq]);

                        this.freqArray.sort(function(a, b) {
                            return a[1] - b[1];
                        });

                        this.highestInt = this.freqArray[this.freqArray.length - 1][1];
                    }
                }
                break;
            case'2':
                break;
            case'3':
                break;
            default:
                break;
        }

        console.log(freqArray);
    }

    display() {
    
    }
}