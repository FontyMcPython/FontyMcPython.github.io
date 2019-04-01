int i = 50;
int j = 50;
int diri = int(random(10)) - 2;
int dirj = int(random(10)) - 5;
int anti = 50;
int antj = 50;

void setup() {  // this is run once.   
    
    // set the background color
    background(255);
    
    // canvas size (Integers only, please.)
    size(300, 300); 
      
    // smooth edges
    smooth();
    
    // limit the number of frames per second
    frameRate(30);
    
    // set the width of the line. 
    strokeWeight(12);
} 

void draw() {  // this is run repeatedly. 
    background(255);
    anti = i;
    antj = j;
    
    i += diri;
    j += dirj;

    if (i < 0 || i > width){
        diri = -diri;
        dirj = dirj + int(random(2)-1);
        stroke(int(random(255)), int(random(255)), int(random(255)));
    }

    if (j < 0 || j > height) {
        dirj = -dirj;
        diri = diri + int(random(2)-1);
        stroke(int(random(255)), int(random(255)), int(random(255)));
    }

    point(i, j);
}
