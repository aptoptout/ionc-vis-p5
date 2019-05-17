// pie charts
let amateurcities_piechart;
let open_piechart;
let openset_piechart;
let unstudio_piechart;

// timelines
let amateurcities_timeline;
let open_timeline;

let showThisNow;

function setup() {
    let thisCanvas = createCanvas(windowWidth, windowHeight);
    thisCanvas.parent('this-canvas');

    // pie charts
    open_piechart          = new pieChart(open_data);
    amateurcities_piechart = new pieChart(amateurcities_data);

    // timeline
    open_timeline          = new timeLine(open_data);
    amateurcities_timeline = new timeLine(amateurcities_data);

    colorMode(HSB, 255, 255, 255, 255);
    textSize(8);
    textLeading(10);
    textFont('Courier');
}

function draw() {
    background(255);

    switch(showThisNow) {
        case 'amateurcitiesPieChart':
            amateurcities_piechart.display(windowHeight * 0.9, 170);
            break;
        case 'openPieChart':
            open_piechart.display(windowHeight * 0.9, 69);
            break;
        case 'openSetPieChart':
            break;
        case 'unstudioPieChart':
            break;
        case 'amateurcitiesTimeLine':
            amateurcities_timeline.display(windowWidth * 0.75, 170);
            break;
        case 'openTimeLine':
            open_timeline.display(windowWidth * 0.75, 69);
            break;
        default: 
    }
}

function showThis(publisher) {
    console.log(publisher);
    showThisNow = publisher;
}