class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("WriteYouName");
        this.button = createButton("playStory");
        this.greeting = createElement('h2');
        this.greeting1 = createElement('h2');
        this.greeting2 = createElement('h2');
        this.greeting3 = createElement('h2')
        this.button1 = createButton('PlayLevel1');
        this.buttonExtra = createButton("playLevel1");
        
    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.greeting1.hide();
        this.greeting2.hide();
        this.button1.hide();
        this.buttonExtra.hide();

    }
    display(){
        this.title.html("Agent009-Missions");
        this.title.position(displayWidth/2-0.00000001,0);

        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2 + 30,displayHeight/2);
        this.buttonExtra.position(displayWidth/2 + 30,displayHeight/2+30)

        
        this.buttonExtra.mousePressed(()=>{
            this.input.hide();
            this.title.hide();
            this.button.hide();
            this.button1.hide();
            this.buttonExtra.hide();

            level1 = new Level1();
            level1.display();
           })
        
        this.button.mousePressed(()=>{
             this.input.hide();
             this.title.hide();
             this.button.hide();
             this.buttonExtra.hide();
            
             this.greeting.html("Hi Agent  "+ this.input.value());
             this.greeting.position(displayWidth/4-70,displayHeight/4);

             this.greeting1.html(",now your secret name is Agent009  you have to find the secret chip hidden by a theif." );
             this.greeting1.position(displayWidth/4+180,displayHeight/4);

             this.greeting2.html("There are many theifs who have made many types of obstacles and you have to find one by one until their boss. Good luck Agent009! ")
             this.greeting2.position(displayWidth/4-30,displayHeight/4+30);
             
             this.button1.position(displayWidth/2 + 30,displayHeight/2);

           this.button1.mousePressed(()=>{
            this.greeting.hide();
            this.greeting1.hide();
            this.greeting2.hide();
            this.button1.hide();

            level1 = new Level1();
            level1.display();
           })

            
        })

    }

}