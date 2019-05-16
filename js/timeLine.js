class timeLine {
    
    constructor(tempJson) {
        this.data = tempJson;
        this.dateArray = [];
        this.sortedDateFreq = [];
        this.graphPoints = [];

        for(var row in this.data) {
            this.dateArray.push(this.getDateSplit(this.data[row].mod));
        }

        for(var date in this.dateArray) {
            this.freqDates = this.dateArray.reduce(function (acc, curr) {
                if (typeof acc[curr] == 'undefined') {
                    acc[curr] = 1;
                } else {
                    acc[curr] += 1;
                }
                return acc;
            }, {});
        }

        for(var date in this.freqDates) {
            this.sortedDateFreq.push([date, this.freqDates[date]]);
        }

        this.sortedDateFreq.sort(function(a, b) {
            return a[1] - b[1];
        });

        this.highestInt = this.sortedDateFreq[this.sortedDateFreq.length - 1][1];
    }

    display(tempDiameter, tempCol) {
        this.lastPosition = 0;
        this.trueLastPost = 0;
        this.index = 0;

        noStroke();
        fill(tempCol, 255, 0);
        textSize(18);
        text("Total articles: " + this.dateArray.length, ((width - tempDiameter) / 2) + 6, ((height - (tempDiameter/1.5)) / 2) - 10);
        
        stroke(tempCol, 255, 0);
        noFill();
        beginShape();
            vertex(((width - tempDiameter) / 2), ((height - (tempDiameter/1.5)) / 2) - 6);
            vertex(((width - tempDiameter) / 2), ((height - (tempDiameter/1.5)) / 2) - 30);
            vertex(((width - tempDiameter) / 2) + tempDiameter, ((height - (tempDiameter/1.5)) / 2) - 30);
            vertex(((width - tempDiameter) / 2) + tempDiameter, ((height - (tempDiameter/1.5)) / 2) - 6);
        endShape();

        for(key in this.sortedDateFreq) {
            this.amountArticles = this.sortedDateFreq[key][1];
            this.mappedValue = map(this.amountArticles, 0, this.dateArray.length, 0, tempDiameter);
            this.gray = map(this.amountArticles, 0, this.highestInt, 0, 255);
            this.articleWidth = this.mappedValue / this.amountArticles;
            
            stroke(tempCol, 255, this.gray);
            strokeWeight(1);
            fill(tempCol, 255, this.gray, 21);
            rect(((width - tempDiameter) / 2) + this.lastPosition, (height - (tempDiameter/1.5)) / 2, this.mappedValue, tempDiameter/1.5);
            
            push();
                textAlign(RIGHT);
                textSize(18);
                translate(((width - tempDiameter) / 2) + (this.lastPosition + 18), ((height - (tempDiameter/1.5)) / 2) + 6);
                rotate(-HALF_PI);
                fill(tempCol, 255, this.gray, 255);
                text(this.sortedDateFreq[key][0] + ": " + int(this.amountArticles) + " article(s)", 0, 0);
            pop();

            for(var i = 0; i < this.amountArticles; i++) {
                this.x = map(i, 0, this.amountArticles, 0, this.mappedValue);
                this.y = map(this.calculateWordCount(i), 0, 12000, tempDiameter/1.5 + ((height - (tempDiameter/1.5)) / 2), (height - (tempDiameter/1.5)) / 2);

                push();
                    textSize(10);
                    translate(((width - tempDiameter) / 2) + this.lastPosition + (this.articleWidth/2), this.y);
                    textAlign(CENTER);
                    text(this.calculateWordCount(i), this.x, 0);
                    strokeWeight(5);
                    point(this.x, 4);
                    this.graphPoints[i] = createVector(this.x, 4 + this.y);
                pop();
            }
              
            push();
                noFill();
                strokeWeight(1);
                stroke(129, 31);
                translate(((width - tempDiameter) / 2) + this.lastPosition + (this.articleWidth/2), 0);
                beginShape();
                    for(var i = 0; i < this.amountArticles; i++) {
                        vertex(this.graphPoints[i].x, this.graphPoints[i].y);
                    }
                endShape();
            pop();
            
            this.lastPosition += this.mappedValue;
            this.trueLastPost += this.amountArticles;
            this.index++;
        }
    }

    getDateSplit(tempString) {
        this.thisString = tempString;
        this.thisStringArr = splitTokens(this.thisString, "-:+");
        return this.thisStringArr[0];
    }

    calculateWordCount(key) {
        let tokens = splitTokens(this.data[key].body, "\n\" .?!,*()'<>{}[]‘;:=+-`~");
        return tokens.length;
    }

}