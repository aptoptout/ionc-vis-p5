var openset_piechart;

function setup() {
    let thisCanvas = createCanvas(windowWidth, windowHeight);
    thisCanvas.parent('this-canvas');

    openset_piechart = new pieChart(open_data, "open set");
}

function draw() {
    background(255);
    openset_piechart.display(400, 244);
}