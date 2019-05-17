class wordFrequency {
    constructor(tempJson, numWords) {
        this.data = tempJson;
        this.freqArray = [];
        this.highestInt = 0;

        this.notLogged = true;

        switch(numWords) {
            case'1':
                for(var row in this.data) {
                    for(var words in this.data[row]["word-freq"]) {
                        let word  = this.data[row]["word-freq"][words][0];
                        let freq  = this.data[row]["word-freq"][words][1];
                        // let relav = this.data[row]["word-freq"][words][2];
                        // console.log(word, freq);
                        this.freqArray.push([word, freq]);
                    }
                }

                this.freqArray.sort(function(a, b) {
                    return a[1] - b[1];
                });

                this.freqArray.reverse();

                this.highestInt = this.freqArray[0][1];

                if(this.notLogged) {
                    console.log(this.freqArray);
                    console.log(this.highestInt);
                    this.notLogged = false;
                }

                break;
            case'2':
                break;
            case'3':
                break;
            default:
                console.log("No number passed!");
                break;
        }
    }

    display(tempDiameter, tempCol) {
        if(this.freqArray.length > 20) {
            for(var i = 0; i < 20; i++) {
                this.pos  = map(i, 0, 20, 0, tempDiameter);
                this.high = map(this.freqArray[i][1], 0, this.highestInt, 0, tempDiameter/1.5);
                this.gray = map(this.freqArray[i][1], 0, this.highestInt, 0, 255);
                this.barWidth = (tempDiameter) / 20;

                push();
                    translate((width-tempDiameter)/2, (height-(tempDiameter/1.5))/2 + (tempDiameter/1.5));
                    fill(tempCol, 255, this.gray);
                    stroke(255);
                    // textSize(10);
                    textAlign(CENTER);
                    text(this.freqArray[i][0], this.pos + (this.barWidth/2), 20);
                    rect(this.pos, 0, this.barWidth, -this.high);
                    text(this.freqArray[i][1], this.pos + (this.barWidth/2), -this.high-20);
                pop();
            }
        } else {
            for(var i = 0; i < this.freqArray.length; i++) {
                this.pos  = map(i, 0, 20, 0, tempDiameter);
                this.high = map(this.freqArray[i][1], 0, this.highestInt, 0, tempDiameter/1.5);
                this.gray = map(this.freqArray[i][1], 0, this.highestInt, 0, 255);
                this.barWidth = (tempDiameter) / 20;

                push();
                    translate((width-tempDiameter)/2, (height-(tempDiameter/1.5))/2 + (tempDiameter/1.5));
                    fill(tempCol, 255, this.gray);
                    stroke(255);
                    // textSize(10);
                    textAlign(CENTER);
                    text(this.freqArray[i][0], this.pos + (this.barWidth/2), 20);
                    rect(this.pos, 0, this.barWidth, -this.high);
                    text(this.freqArray[i][1], this.pos + (this.barWidth/2), -this.high-20);
                pop();
            }
        }
    }
}