class Form {
    constructor (){
         this.input=createInput('name')
         this.button=createButton('play')
         this.greeting=createElement('h3');
    }
    hide (){
     this.greeting.hide();
     this.button.hide();
     this.input.hide();
    }    
    display(){
        var title =createElement('h2');
        title.html("car Racing Game")
        title.position(130,0);
        this.input.position(50,200);
        this.button.position(200,250);
        this.button.mousePressed(()=>{
           this.input.hide();
            this.button.hide();
            var name=this.input.value();
            playerCount=playerCount+1
            player.update(name);
            player.updateCount(playerCount)
            this.greeting.html("hello "+name)
            this.greeting.position(200,300);
        })
    }
}