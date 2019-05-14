class pieChart {

    constructor(tempJson, tempName) {
        this.data = tempJson;
        this.currentName = tempName;
        this.sortedTagFreq = [];

        // console.log(this.data);

        for(var row in this.data) {
            this.freqTags = this.data[row].tags.reduce(function (acc, curr) {
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

        console.log(sortedTagFreq);
    }

    display(tempDiameter, tempCol) {
        fill(255, 255, 0);
        ellipse(width/2, height/2, tempDiameter/2.5, tempDiameter/2.5);

        this.lastAngle = 0;
        this.index = 0;

        for(key in unique_freq_tagList.keySet()) {      
        //     this.value = unique_freq_tagList.get(key);
        //     this.mappedValue = map(value, 0, tableRows, 0, 360);      
        //     this.gray = map(value, 0, highestInt, 0, 255);
        //     this.x = (tempDiameter/2) * cos(lastAngle+radians(mappedValue/2));
        //     this.y = (tempDiameter/2) * sin(lastAngle+radians(mappedValue/2));

        //     fill(tempCol, 255, gray);
        //     noStroke();
        //     arc(width/2, height/2, tempDiameter, tempDiameter, lastAngle, lastAngle + radians(mappedValue));
            
        //     pushMatrix();
        //     translate((width / 2) + x, (height / 2) + y);
            
        //     if(x >= 0) {
        //         textAlign(RIGHT);
        //         rotate(lastAngle+radians(mappedValue/2));
        //     } else {
        //         textAlign(LEFT);
        //         rotate(lastAngle + radians((mappedValue) / 2) + radians(180));
        //     }
            
        //     fill(255, 0, 255);
        //     if(key == "") text("  None  ", 0, 0);
        //     else text("  " + key + "  ", 0, 0);
        //     popMatrix();
            
        //     float xLine = (tempDiameter/2) * cos(lastAngle+radians(mappedValue));
        //     float yLine = (tempDiameter/2) * sin(lastAngle+radians(mappedValue));
            
        //     pushMatrix();
        //     translate(width / 2, height / 2);
        //     noFill();
        //     stroke(255);
        //     strokeWeight(2);
        //     line(0, 0, xLine, yLine);
        //     popMatrix();
            
        //     lastAngle += radians(mappedValue);
        //     index++;
        // }
        
        // fill(255);
        // noStroke();
        // ellipse(width/2, height/2, tempDiameter/2.5, tempDiameter/2.5);
    }
    
}