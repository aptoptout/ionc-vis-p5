let open_piechart;
let amateurcities_piechart;
let showThisNow;

function setup() {
    let thisCanvas = createCanvas(windowWidth, windowHeight);
    thisCanvas.parent('this-canvas');

    open_piechart          = new pieChart(open_data, "open");
    amateurcities_piechart = new pieChart(open_data, "amateur cities");

    colorMode(HSB, 255, 255, 255);
    textSize(10);
    textFont('Courier');
}

function draw() {
    background(255);

    switch(showThisNow) {
        case 'amateurcitiesPieChart':
            amateurcities_piechart.display(windowHeight * 0.9, 170);
            break;
        case 'openPieChart':
            open_piechart.display(windowHeight * 0.9, 244);
            break;
        default: 
    }
}

function showThis(publisher) {
    console.log(publisher);
    showThisNow = publisher;
}