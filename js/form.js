class Form{
    constructor(){
       this.input=createInput("name");
       this.button=createButton("play");
       this.greeting=createElement('h3');


    }
      hide(){

    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}
    display(){
       var title = createElement('h2');
       title.html("car racing game by nandana");
       title.position(230,0);

      
    
       this.input.position(230,160);
      this.button.position(350,200);
     this.button.mousePressed(()=>{
          this.input.hide();
           this.button.hide();
           player.name=this.input.value();
           playerCount+=1;
           player.index=playerCount;
           player.update();
           player.updateCount(playerCount);
          this.greeting.html("hello"+player.name);
           this.greeting.position(130,160);
           
       })

    }
}