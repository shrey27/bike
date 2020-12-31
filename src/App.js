import React, { useState } from "react";
import "./styles.css";
import l1 from "./1.jpg";
import l2 from "./2.jpg";
import l3 from "./4.jpg";
import l4 from "./5.jpg";
import l5 from "./7.webp";
import l6 from "./8.webp";
import l7 from "./11.png";
import l8 from "./24.jpg";
import l9 from "./14.jpg";
import l10 from "./15.jpg";
import l11 from "./17.jpg";
import l12 from "./18.jpg";
import Image from "./red.jpg";

var dict = {
  "Cruiser":"A cruiser is a motorcycle in the style of American machines with riding position usually places the feet forward and the hands up, with the spine erect or leaning back slightly. Typical cruiser engines emphasize easy rideability and shifting, with plenty of low-end torque but not necessarily large amounts of horsepower, traditionally V-twins but inline engines have become more common. Their engines are tuned for low-end torque, making them less demanding to ride because it is not necessary to shift as frequently to accelerate or maintain control.",
  "Standard":"Standards, also called naked bikes or roadsters, are versatile, general-purpose street motorcycles. They are recognized primarily by their upright riding position, partway between the reclining rider posture of the cruisers and the forward leaning sport bikes. Because of their flexibility, lower costs, and moderate engine output, standards are particularly suited to motorcycle beginners.Standards usually do not come with fairings or windscreens, or if they have them, they are relatively small. Standard is often a synonym for naked, a term that was used in reference to 1950s road racing bikes.",
  "Sportsbike":"Sport bikes emphasize top speed, acceleration, braking, handling and grip on paved roads, typically at the expense of comfort and fuel economy in comparison to less specialized motorcycles. Sport bikes have comparatively high performance engines resting inside a lightweight frame. Braking systems combine higher performance brake pads and multi-piston calipers that clamp onto oversized vented rotors. Suspension systems are advanced in terms of adjustments and materials for increased stability and durability. Most sport bikes have fairings, often completely enclosing the engine, and windscreens that effectively deflect the air at very high speeds, or at least reduce overall drag.",
  "Touring":"Although any motorcycle can be equipped and used for touring, touring motorcycles are specifically designed to excel at covering long distances.They have large-displacement engines, fairings and screens that offer od weather and wind protection, large-capacity fuel tanks for long ranges between fill-ups, and a relaxed, upright seating position. Passenger accommodation is excellent and expansive luggage space is the norm for this class.",
  "Dual Sport":"Dual-sports, sometimes called dual-purpose or on/off-road motorcycles or adventure motorcycles, are street legal machines that are also designed to enter off-road situations.Typically based on a dirt bike chassis, they have added lights, mirrors, signals, and instruments that allow them to be licensed for public roads. They are higher than other street bikes, with a high center of gravity and tall seat height, allowing good suspension travel for rough ground.",
  "Dirt Bike":"There are various types of off-road motorcycles, also known as dirt bikes, specially designed for off-road events. The term off-road refers to driving surfaces that are not conventionally paved. These are rough surfaces, often created naturally, such as sand, gravel, a river, mud or snow. These types of terrain can sometimes only be travelled on with vehicles designed for off-road driving (such as SUVs, ATVs, snowmobiles and mountain bikes) or vehicles that have off-road equipment. Compared to road-going motorcycles, off-road machines are lighter and more flexible, having long suspension travel, high ground clearance, and are geared higher to provide more torque in off-road situations."
};

var img_dict = {
  "Cruiser" : [{image:l1,name:"Royal Enfield Classic 350"},{image:l2,name:"JAWA Perak"}],
   "Standard" : [{image:l3,name:"Honda Hornet 2.0"},{image:l4,name:"Husqvarna Svartpilen 250"}],
   "Sportsbike" : [{image:l5,name:"Suzuki Gixxer SF"},{image:l6,name:"Yamaha YZF R15"}],
   "Touring" : [{image:l7,name:"Bajaj Avenger Cruise 220"},{image:l8,name:"Honda Gold Wing"}],
   "Dual Sport" : [{image:l9,name:"Suzuki V-Strom 250"},{image:l10,name:"Honda CRF 250L Rally"}],
   "Dirt Bike" : [{image:l11,name:"KTM 500 EXC-F"},{image:l12,name:"Husqvarna FE 501s"}]
}


export default function App() {
  var [value, setValue] = useState(["Cruiser"]);
  var [img,setImg] = useState([{image:l1,name:"Royal Enfield Classic 350"},{image:l2,name:"JAWA Perak"}]);
  var [err,setErr] = useState("");

  function type(event) {
    var userInput = event.target.value;
    setValue(userInput);
    setImg(img_dict[userInput]);
    setErr("");
  }

  function click() {
    
    var userInput = document.getElementById("category").value
    var val = dict[userInput];
    if (val === undefined) {
      setErr("Please, Search for the right category");
    }
    else{
      setValue(userInput);
      setImg(img_dict[userInput]);
      setErr("");
    }
    console.log(userInput);
  }
  return (
    <div className="App" style={{backgroundImage:'url('+Image+')'}}>
      <section>
        <h1>Know your Bike</h1>
        <input id="category" type="text" />
        <button class="button_search" onClick={click}> Search </button>
      </section>

      <h3 class="error" style={{color:'goldenrod'}}>{err}</h3>
      <section>
        <button class="button_type" id="btn1" value="Cruiser" onClick={type}>Cruiser</button>
        <button class="button_type" id="btn2" value="Sportsbike" onClick={type}>Sportsbike</button>
        <button class="button_type" id="btn3" value="Touring" onClick={type}>Touring</button>
        <button class="button_type" id="btn4" value="Standard" onClick={type}>Standard</button>
        <button class="button_type" id="btn5" value="Dual Sport" onClick={type}>Dual Sport</button>
        <button class="button_type" id="btn6" value="Dirt Bike" onClick={type}>Dirt Bike</button>
        
      </section>

      <section>    
        <h2 class="type">{value}</h2>
        <p>{dict[value]}</p>
        <ul>
        {
          img.map(
            (element)=>{
            return (
            <li key={element} style={{listStyle:"none"}} ><img src={element.image} alt="bike" /> <br/> <h3>{element.name}</h3></li>
            );
          }
          )
        }
        </ul>             
      </section>

    </div>
  );
}
