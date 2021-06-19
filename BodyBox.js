// // class BOX{
// //     constructor(x,y,width,height){
// //         var options = {
// //             restitution:0.67,
// //             mass:3,
// //             friction:0.1,
         
             
// //         }

// //         this.body = Bodies.rectangle(x,y,this.width,this.height,options);
// //         World.add(world,this.body);


// //     }

// //     display(){

// //         rectMode(CENTER);
// //         rect(0,0,this.width,this.height);

// //     }



// // }
// class Box {
//     constructor(x, y, width, height) {
//       var options = {
//           restitution:1.2,
//           mass:3,
//           friction:0.1,
//           isStatic:true
          

       
           
//       }
//       this.body = Bodies.rectangle(x, y, width, height, options);
//       this.width = width;
//       this.height = height;
//       this.body.x = chopper.x;
//       this.body.y = chopper.y;
      
      
//       World.add(world, this.body);
//     }
//     display(){
//       var pos =this.body.position;
//       var angle = this.body.angle;
  
//       push();
//       translate(pos.x,pos.y)
//       rotate(angle);
  
  
//       rectMode(CENTER);
//       fill(255);
//       rect(0,0, this.width, this.height);
//       pop();
//     }
//   }

class Box {
  constructor(x, y, width, height) {
    var options = {
        restitution:0.67,
        mass:3,
        friction:0.1,
     
         
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y)
    rotate(angle);


    // rectMode(CENTER);
    // fill(255);
    // rect(0,0, this.width, this.height);
    rectMode(CENTER);
    this.sprite = createSprite(0,0,this.width,this.height)
    pop();
  }
}