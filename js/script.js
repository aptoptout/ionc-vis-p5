let open_piechart;

function setup() {
    let thisCanvas = createCanvas(windowWidth, windowHeight);
    thisCanvas.parent('this-canvas');

    open_piechart = new pieChart(open_data, "open");

    colorMode(HSB);
    textSize(16);
}

function draw() {
    background(255);
    open_piechart.display(400, 244);
}