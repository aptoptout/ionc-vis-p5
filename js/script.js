function setup() {
    let thisCanvas = createCanvas(600, 400);
    thisCanvas.parent('this-canvas');

    new pieChart(openset_data, "open set");
}

function draw() {
    background(0);
    ellipse(width/2, height/2, 50, 50);
}