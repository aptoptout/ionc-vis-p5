class pieChart {

    constructor(tempJson, tempName) {
        this.data = tempJson;
        this.currentName = tempName;
        this.tagArray = [];
        this.sortedTagFreq = [];

        for(var row in this.data) {
            for(var tag in this.data[row].tags) {
                this.tagArray.push(this.data[row].tags[tag]);
            }
        }

        for(var tag in this.tagArray) {
            this.freqTags = this.tagArray.reduce(function (acc, curr) {
                if (typeof acc[curr] == 'undefined') {
                    acc[curr] = 1;
                } else {
                    acc[curr] += 1;
                }
                return acc;
            }, {});
        }
        
        for(var tag in this.freqTags) {
            this.sortedTagFreq.push([tag, this.freqTags[tag]]);
        }

        this.sortedTagFreq.sort(function(a, b) {
            return a[1] - b[1];
        });

        this.highestInt = this.sortedTagFreq[this.sortedTagFreq.length - 1][1];
    }

    display(tempDiameter, tempCol) {
        this.lastAngle = 0;

        for(key in this.sortedTagFreq) {      
            this.value = this.sortedTagFreq[key][1];
            this.mappedValue = map(this.value, 0, this.tagArray.length, 0, 360);

            if(this.mappedValue < 2.5) {
                this.x = ((tempDiameter * 0.5) / 2) * cos(this.lastAngle + radians(this.mappedValue / 2));
                this.y = ((tempDiameter * 0.5) / 2) * sin(this.lastAngle + radians(this.mappedValue / 2));

                push();
                    translate(width / 2, height / 2);
                    line(((tempDiameter * 0.75) / 2) * cos(this.lastAngle + radians(this.mappedValue / 2)), 
                         ((tempDiameter * 0.75) / 2) * sin(this.lastAngle + radians(this.mappedValue / 2)), 
                         (tempDiameter) * cos(this.lastAngle + radians(this.mappedValue)), 
                         (tempDiameter) * sin(this.lastAngle + radians(this.mappedValue)));
                pop();
            } else {
                this.x = (tempDiameter / 2) * cos(this.lastAngle + radians(this.mappedValue / 2));
                this.y = (tempDiameter / 2) * sin(this.lastAngle + radians(this.mappedValue / 2));
            }

            this.gray = map(this.value, 0, this.highestInt, 0, 255);
            fill(tempCol, 255, this.gray);
            noStroke();
            arc(width / 2, height / 2, tempDiameter, tempDiameter, this.lastAngle, this.lastAngle + radians(this.mappedValue));
            
            this.xLine = (tempDiameter / 2) * cos(this.lastAngle + radians(this.mappedValue));
            this.yLine = (tempDiameter / 2) * sin(this.lastAngle + radians(this.mappedValue));
            
            push();
                translate(width / 2, height / 2);
                noFill();
                stroke(255);
                strokeWeight(2);
                line(0, 0, this.xLine, this.yLine);
            pop();
            
            this.lastAngle += radians(this.mappedValue);
        }

        fill(255);
        noStroke();
        ellipse(width / 2, height / 2, tempDiameter / 2.5, tempDiameter / 2.5);

        for(key in this.sortedTagFreq) {      
            this.value = this.sortedTagFreq[key][1];
            this.mappedValue = map(this.value, 0, this.tagArray.length, 0, 360);

            if(this.mappedValue < 2.5) {
                this.x = ((tempDiameter * 0.75) / 2) * cos(this.lastAngle + radians(this.mappedValue / 2));
                this.y = ((tempDiameter * 0.75) / 2) * sin(this.lastAngle + radians(this.mappedValue / 2));
            } else {
                this.x = (tempDiameter / 2) * cos(this.lastAngle + radians(this.mappedValue / 2));
                this.y = (tempDiameter / 2) * sin(this.lastAngle + radians(this.mappedValue / 2));
            }

            this.gray = map(this.value, 0, this.highestInt, 0, 255);

            push();
                translate((width / 2) + this.x, (height / 2) + this.y);
                
                if(this.mappedValue < 2.5) {
                    if(this.x >= 0) {
                        textAlign(LEFT);
                        rotate(this.lastAngle + radians(this.mappedValue / 2));
                    } else {
                        textAlign(RIGHT);
                        rotate(this.lastAngle + radians((this.mappedValue) / 2) + radians(180));
                    }

                    fill(tempCol, 255, this.gray);
                } else {
                    if(this.x >= 0) {
                        textAlign(RIGHT);
                        rotate(this.lastAngle + radians(this.mappedValue / 2));
                    } else {
                        textAlign(LEFT);
                        rotate(this.lastAngle + radians((this.mappedValue) / 2) + radians(180));
                    }
                    fill(255, 0, 255);
                }

                if(this.sortedTagFreq[key][0] == "") {
                    text("  None  ", 0, 0);
                } else {
                    text("  " + this.sortedTagFreq[key][0] + "  ", 0, 0);
                }
            pop();
                        
            this.lastAngle += radians(this.mappedValue);
        }
        
    }
    
}