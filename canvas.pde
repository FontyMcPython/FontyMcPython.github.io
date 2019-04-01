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

    stroke(random(50), random(255), random(255), 100);
    
    // draw the line
    line(30, 0, random(0, width), height);
    

}
