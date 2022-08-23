function preload()
{}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    circle(112, 115, 40);
    rect(100, 140, 20, 300);
    circle(112, 465, 40);
    rect(140, 465, 375, 20);
    circle(540, 465,40)
    rect(530, 140, 20, 300);
    circle(540, 115, 40);
    rect(135, 110, 380, 20);

    image(video, 150, 150, 350, 300)
}

function take_snapshot()
{
    save("image.png");
}