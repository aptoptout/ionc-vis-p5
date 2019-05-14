let open_piechart;
let showThisNow;

function setup() {
    let thisCanvas = createCanvas(windowWidth, windowHeight);
    thisCanvas.parent('this-canvas');

    open_piechart = new pieChart(open_data, "open");

    colorMode(HSB);
    textSize(12);
    textFont('Courier');
}

function draw() {
    background(255);

    switch(showThisNow) {
        case 'open_piechart':
            open_piechart.display(windowHeight * 0.8, 244);
            break;
        default: 
    }
}

function showThis(publisher) {
    console.log(publisher);
    showThisNow = publisher;
}