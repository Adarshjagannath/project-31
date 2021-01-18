  const Engine = Matter.Engine
  const World = Matter.World
  const Events = Matter.Events
  const Bodies = Matter.Bodies

  var engine,world;
  var ground;
  var div1,div2,div3,div4,div5,div6,div7;
  
  var particles = [];
  var plinko = [];
  var division = [];

  var divisionHeight = 300;



  function setup() {
    createCanvas(480,800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,785,480,15);

    /*middle Division*/
    div1 = new Division(240,590,7,370);
    /*Right 3 Divisions*/
    div2 = new Division(320,590,7,370);
    div3 = new Division(400,590,7,370);
    div4 = new Division(475,590,7,370);
    /*left 3 Divisions*/
    div5 = new Division(160,590,7,370);
    div6 = new Division(80,590,7,370);
    div7 = new Division(1,590,7,370);

    /*Plinko first row*/
    pln1 = new Plinko(30,50,10);
    pln2 = new Plinko(90,50,10);
    pln3 = new Plinko(150,50,10);
    pln4 = new Plinko(210,50,10);
    pln5 = new Plinko(270,50,10);
    pln6 = new Plinko(330,50,10);
    pln7 = new Plinko(390,50,10);
    pln8 = new Plinko(450,50,10);
    /*plinko second row*/
    pln9 = new Plinko(60,100,10);
    pln10 = new Plinko(120,100,10);
    pln11 = new Plinko(180,100,10);
    pln12 = new Plinko(250,100,10);
    pln13 = new Plinko(310,100,10);
    pln14 = new Plinko(370,100,10);
    pln15 = new Plinko(430,100,10);
    /*Plinko third row*/
    pln16 = new Plinko(30,150,10);
    pln17 = new Plinko(90,150,10);
    pln18 = new Plinko(150,150,10);
    pln19 = new Plinko(210,150,10);
    pln20 = new Plinko(270,150,10);
    pln21 = new Plinko(330,150,10);
    pln22 = new Plinko(390,150,10);
    pln23 = new Plinko(450,150,10);
    /*plinko fourth row*/
    pln24 = new Plinko(60,200,10);
    pln25 = new Plinko(120,200,10);
    pln26 = new Plinko(180,200,10);
    pln27 = new Plinko(250,200,10);
    pln28 = new Plinko(310,200,10);
    pln29 = new Plinko(370,200,10);
    pln30 = new Plinko(430,200,10);

    /*Plinko fifth row*/
    pln31 = new Plinko(30,250,10);
    pln32 = new Plinko(90,250,10);
    pln33 = new Plinko(150,250,10);
    pln34 = new Plinko(210,250,10);
    pln35 = new Plinko(270,250,10);
    pln36 = new Plinko(330,250,10);
    pln37 = new Plinko(390,250,10);
    pln38 = new Plinko(450,250,10);

    /*plinko sixth row*/
    pln39 = new Plinko(60,300,10);
    pln40 = new Plinko(120,300,10);
    pln41 = new Plinko(180,300,10);
    pln42 = new Plinko(250,300,10);
    pln43 = new Plinko(310,300,10);
    pln44 = new Plinko(370,300,10);
    pln45 = new Plinko(430,300,10);
    
  }

  function draw() {
    background("black");  

    Engine.update(engine);

    ground.display();

    if(frameCount%60===0){
      particles.push(new Particle(random(210,270), 10,10));
    }

    div1.display();
    div2.display();
    div3.display();
    div4.display();
    div5.display();
    div6.display();
    div7.display();

    pln1.display();
    pln2.display();
    pln3.display();
    pln4.display();
    pln5.display();
    pln6.display();
    pln7.display();
    pln8.display();

    pln9.display();
    pln10.display();
    pln11.display();
    pln12.display();
    pln13.display();
    pln14.display();
    pln15.display();

    pln16.display();
    pln17.display();
    pln18.display();
    pln19.display();
    pln20.display();
    pln21.display();
    pln22.display();
    pln23.display();

    pln24.display();
    pln25.display();
    pln26.display();
    pln27.display();
    pln28.display();
    pln29.display();
    pln30.display();

    pln31.display();
    pln32.display();
    pln33.display();
    pln34.display();
    pln35.display();
    pln36.display();
    pln37.display();
    pln38.display();

    pln39.display();
    pln40.display();
    pln41.display();
    pln42.display();
    pln43.display();
    pln44.display();
    pln45.display();

  }