class pieChart {

    constructor(tempJson, tempName) {
        this.data = tempJson;
        this.currentName = tempName;
        this.tagArray = [];
        this.sortedTagFreq = [];

        // console.log(this.data);

        for(var row in this.data) {
            for(var tag in this.data[row].tags) {
                this.tagArray.push(this.data[row].tags[tag]);
            }
        }

        // console.log(this.tagArray);

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

        // console.log(this.sortedTagFreq);
    }

    display(tempDiameter, tempCol) {
        this.lastAngle = 0;
        this.index = 0;

        for(key in this.sortedTagFreq) {      
            this.value = this.sortedTagFreq[key][1];
            this.mappedValue = map(value, 0, this.tagArray.length(), 0, 360);
            this.gray = map(value, 0, highestInt, 0, 255);
            this.x = (tempDiameter/2) * cos(this.lastAngle+radians(this.mappedValue/2));
            this.y = (tempDiameter/2) * sin(this.lastAngle+radians(this.mappedValue/2));

            fill(tempCol, 255, gray);
            noStroke();
            arc(width/2, height/2, tempDiameter, tempDiameter, this.lastAngle, this.lastAngle + radians(this.mappedValue));
            
            pushMatrix();
            translate((width/2) + x, (height/2) + y);
            
            if(x >= 0) {
                textAlign(RIGHT);
                rotate(this.lastAngle+radians(this.mappedValue/2));
            } else {
                textAlign(LEFT);
                rotate(this.lastAngle + radians((this.mappedValue)/2) + radians(180));
            }
            
            fill(255, 0, 255);
            if(this.sortedTagFreq[key][0] == "") {
                text("  None  ", 0, 0);
            } else {
                text("  " + this.sortedTagFreq[key][0] + "  ", 0, 0);
            }
            popMatrix();
            
            this.xLine = (tempDiameter/2) * cos(this.lastAngle+radians(this.mappedValue));
            this.yLine = (tempDiameter/2) * sin(this.lastAngle+radians(this.mappedValue));
            
            pushMatrix();
                translate(width/2, height/2);
                noFill();
                stroke(255);
                strokeWeight(2);
                line(0, 0, this.xLine, this.yLine);
            popMatrix();
            
            this.lastAngle += radians(this.mappedValue);
            this.index++;
        }
        
        fill(255);
        noStroke();
        ellipse(width/2, height/2, tempDiameter/2.5, tempDiameter/2.5);
    }
    
}