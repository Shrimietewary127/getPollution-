
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dropdown,dropdown2; 

var bgImg;
function preload(){

	bgImg= loadImage("bgImg.png")

}

function setup() {
	createCanvas(1530,865)

	 let bot = new RiveScript();

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

const brains = [
  'https://raw.githubusercontent.com/Shrimietewary127/selfDesignedGame/main/chatbot.rive'
];

bot.loadFile(brains).then(botReady).catch(botNotReady);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  selfReply(input_box.value);
  input_box.value = '';
});

function botReply(message){
  message_container.innerHTML += `<div class="bot">${message}</div>`;
  location.href = '#edge';
}

function selfReply(message){
  message_container.innerHTML += `<div class="self">${message}</div>`;
  location.href = '#edge';
  
  bot.reply("local-user", message).then(function(reply) {
    botReply(reply);
  });
}

function botReady(){
  bot.sortReplies();
  botReply('Hello');
}

function botNotReady(err){
  console.log("An error has occurred.", err);
}
	/* bot.loadFile(brains).then(botReady).catch(botNotReady);
	bot.loadFile("chatbot.rive", brainReady, brainError);

	function brainError() {
		console.log('Chatbot error!')
	  }
	  function brainReady() {
		console.log('Chatbot ready!');
		bot.sortReplies();
	  }

	let button=select('#submit')
	let user_input=select('#user_input')
	let output=select('#output')*/
	
	
	

	engine = Engine.create();
	world = engine.world;

    
	dropdown = createSelect(); 
		dropdown.position(20,300); 
		dropdown.size(300,30)
		dropdown.option("----select----"); 
		dropdown.option("kolkata"); 
		dropdown.option("mumbai"); 
		dropdown.option("delhi");
		dropdown.option("chennai");
		dropdown.option("hyderabad");
		dropdown.option("shillong");
		dropdown.option("bangalore");
		dropdown.option("patna");
		dropdown.option("bhopal");
		dropdown.option("gandhinagar");
		dropdown.option("chandigarh");
		dropdown.option("Jaipur");
		dropdown.option("nagpur");
		

		
	dropdown.changed(getPOllutionData)	

	dropdown2 = createSelect(); 
		dropdown2.position(550,200); 
		dropdown2.size(500,30)
		dropdown2.option("----select----");
		dropdown2.option("Pollution prevention for businesses"); 
		dropdown2.option("Report an environmental incident"); 
		dropdown2.option("Personal actions - Follow these Tips Every Day to Reduce Pollution "); 
		dropdown2.option("Personal actions - On Days when High Ozone Levels are Expected"); 
		dropdown2.option("Personal actions - On Days when High Particle Levels are Expected"); 
	dropdown2.changed(dropdown2Event)
   
	
	
	Engine.run(engine);

	
  
}


function draw() {
  background(bgImg)
 
  
  //dropdown2.value()
  //console.log(dropdown2.value())
  //getPOllutionData(dropdown.value());
  drawSprites();
  noLoop();
 
}


async function getPOllutionData(){
	background(bgImg)
	
	var cityName= dropdown.value()
	/*var url = "https://google.com/"+ cityName
	console.log(url)*/
	var apiUrl= "https://api.waqi.info/feed/"+ cityName + "/?token=69b6ef4e79ac4fb9e1f6f15b240962379af5aa4b"
	var response = await fetch(apiUrl);
	var responseJSON = await response.json();
	var aqiData = responseJSON.data.aqi
	console.log(responseJSON.data.aqi)

	if(aqiData> 0 && aqiData<51 ){
		fill("green")
		textSize(20);
		textFont('Arial Rounded MT Bold')
		text("GOOD",70,550)
		
	}
	else if(aqiData> 50  && aqiData < 101 ){
		fill("yellow")
		textSize(15);
		textFont('Arial Rounded MT Bold')
		text("                             MODERATE \n \n Active children and adults, \n \n and people with respiratory disease, such as asthma, \n \n should limit prolonged outdoor exertion.",10,500)
	}
	else if(aqiData> 100  && aqiData < 151 ){
		fill("orange")
		textSize(15);
		textFont('Arial Rounded MT Bold')
		text("                          Unhealthy for Sensitive Groups \n \n Active children and adults,\n \n and people with respiratory disease, such as asthma, \n \n should limit prolonged outdoor exertion.",10,500)
	}
	else if(aqiData> 150  && aqiData < 201 ){
		fill("red")
		textSize(15);
		textFont('Arial Rounded MT Bold')
		text("                     Unhealthy \n \nActive children and adults, \n \n and people with respiratory disease, such as asthma,\n \n should avoid prolonged outdoor exertion; everyone else,\n \n especially  children, should limit prolonged outdoor exertion",10,500)
	}
	else if(aqiData> 200  && aqiData < 301 ){
		fill("purple")
		textSize(15);
		textFont('Arial Rounded MT Bold')
		text("                         Very Unhealthy\n \n  Active children and adults, and people with\n \n respiratory disease, such as asthma,  should avoid all\n \n outdoor exertion; everyone else,  especially\n \n children, should limit outdoor exertion.",10,500)
		
	}
	else if(aqiData>  299 ){
		fill("brown")
		textSize(20);
		textFont('Arial Rounded MT Bold')
		text("                      HAZARDOUS \n \n Everyone should avoid all outdoor exertion",10,500)
	}
	
	
}

function dropdown2Event(){
	var item = dropdown2.value()
	//console.log(item)
	

if(dropdown2.value()== "Pollution prevention for businesses" ){
	background(bgImg)
	
	
        fill("black")
		textSize(20);
		textFont('Arial Rounded MT Bold')
		text("     You can reduce the risk of pollution by following this guidance and other specific \n guidance for:\n oil above ground, including petrol, diesel, mineral oil, heating oil or vegetable oil \n petrol in underground tanks \n silage, slurry and agricultural fuel oil\nsheep dip \n' pesticides, biocides, herbicides and other chemicals \n solvents \n  air pollution \n\n \n Make a drain plan \n \n Drainage systems can very quickly transport pollutants off site and into the environment.\n It’s important to make a plan of your drains to help you use them correctly,carry out \n maintenance and deal more effectively with pollution if there’s a spill, leak or other incident. \n The plan should show:\n \n where the drains are \n the types of drains - surface water, foul water, or combined \n  \n direction of flow \n  where drains leave your property \n  where they discharge into, for example, a watercourse,\n  clean-water soakaway or sewage treatment works \n  Everyone who works at the site should be able to easily find and understand the plan.                ",450,230)

}

if(dropdown2.value()== "Report an environmental incident" ){
	background(bgImg)
	
	fill("black")
		textSize(20);
		textFont('Arial Rounded MT Bold')
		text("     Call the Environment Agency incident hotline to report: \n \ndamage or danger to the natural environment\n \npollution to water or land\n \npoaching or illegal fishing\n \ndead fish or fish gasping for air\nmain rivers blocked by a vehicle or fallen tree causing risk of flooding\n \nflooding from any river, stream, canal, natural spring or the sea\n \nincidents at Environment Agency-regulated waste sites\nillegal removals from watercourses\n \nunusual changes in river flow\n \ncollapsed or badly damaged river or canal banks ",450,230)
	
}

if(dropdown2.value()== "Personal actions - Follow these Tips Every Day to Reduce Pollution " ){
	background(bgImg)
	fill("black")
		textSize(20);
		textFont('Arial Rounded MT Bold')
		text("    Conserve energy - at home, at work, everywhere. \n \nLook for the ENERGY STAR label when buying home or office equipment.\n \nCarpool, use public transportation, bike, or walk whenever possible.\n \nFollow gasoline refueling instructions for efficient vapor recovery,\n \n being careful not to spill fuel and \n \nalways tightening your gas cap securely.\n \nConsider purchasing portable gasoline containers \n \nlabeled “spill-proof,” where available.\n \nKeep car, boat, and other engines properly tuned.\n \nBe sure your tires are properly inflated.\n \nUse environmentally safe paints and cleaning products whenever possible.\n \nMulch or compost leaves and yard waste.\n \nConsider using gas logs instead of wood.\n \n",450,230)
	
}

if(dropdown2.value()== "Personal actions - On Days when High Ozone Levels are Expected" ){
	background(bgImg)
	fill("black")
		textSize(20);
		textFont('Arial Rounded MT Bold')
		text("    Choose a cleaner commute - share a ride to work or use public transportation. \n \nCombine errands and reduce trips. Walk to errands when possible.\n \nAvoid excessive idling of your automobile.\n \nRefuel your car in the evening when its cooler.\nConserve electricity and set air conditioners no lower than 78 degrees.\n \nDefer lawn and gardening chores that use gasoline-powered equipment, or wait until evening.\n \n",450,230)
	
}

if(dropdown2.value()== "Personal actions - On Days when High Particle Levels are Expected" ){
	background(bgImg)
	fill(0)
		textSize(20);
		textFont('Arial Rounded MT Bold')
		text("    Reduce the number of trips you take in your car.  \n \nReduce or eliminate fireplace and wood stove use.\n \nAvoid burning leaves, trash, and other materials.\n \nAvoid using gas-powered lawn and garden equipment.\n \n",450,230)
	

}




}
