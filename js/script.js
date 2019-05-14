var openset_piechart;

function setup() {
    let thisCanvas = createCanvas(600, 400);
    thisCanvas.parent('this-canvas');

    openset_piechart = new pieChart(open_data, "open set");
}

function draw() {
    background(0);
    openset_piechart.display(400, 244);
}