//=========================
//========================
//======QUESTION SECTION==
//========================
//========================

//variables for the question section.
const body = document.querySelector('body');
const questionContent = document.querySelector('.questionContent');
const questionContainer = document.querySelector('.question-container');
const op1 = document.querySelector('.option1');
const op2 = document.querySelector('.option2');
const op3 = document.querySelector('.option3');
const op4 = document.querySelector('.option4');
let chosen = 0;
const submit = document.querySelector('.question-submit');
const next = document.querySelector('.next');
let questionNumber=0;

//Question list
let list = [
    ['About what perentage of coral reefs remain?', 50, 60, 80, 95, 1],
    ['What year will we run out of seafood?', 2025, 2048, 2096, 3050, 2],
    ['What is the goal of Life Below Water?', "To make the ocean bigger", "To understand about water", "To protect marine and coastal system to avoid significant damage", "To be able to live underwater by 2045", 3],
    ['Where is the most garbage in the ocean?', "The Great Pacific Garbage Patch", "The Great Atlantic Garbage Patch", "The Mexican Garbage Patch", "The Indian Ocean Gyre", 1],
    ['How many species of fish are overfished or considered completely depleted?', "2 out of 10", "5 out of 10", "4 out of 100", "9 out of 10", 4]
];

//functions, runQuestion, resetColor, finish 
function runQuestion(num){
    questionContent.innerHTML = " "+ list[num][0];
    op1.innerHTML = list[num][1];
    op2.innerHTML = list[num][2];
    op3.innerHTML = list[num][3];
    op4.innerHTML = list[num][4];
    questionContainer.style.background="rgba(95, 95, 192, 0.372)";
    document.querySelector(".msg").innerHTML="";
    chosen=-45;
    resetColor();

}
function resetColor(){
    op1.style.backgroundColor="rgba(218, 218, 255, 0.372)";
    op2.style.backgroundColor="rgba(218, 218, 255, 0.372)";
    op3.style.backgroundColor="rgba(218, 218, 255, 0.372)";
    op4.style.backgroundColor="rgba(218, 218, 255, 0.372)";
}
function finish(){
    questionContainer.innerHTML = `
  <h1>You Finished!</h1><br>
  <p class="retry">Great job!</p>`;
}

//Event listeners to select each option
op1.addEventListener('click', ()=>{
    resetColor();
    op1.style.backgroundColor="rgb(168, 254, 195, 0.8)";
    chosen=1;
})
op2.addEventListener('click', ()=>{
    resetColor();
    op2.style.backgroundColor="rgb(168, 254, 195, 0.8)";
    chosen=2;
})
op3.addEventListener('click', ()=>{
    resetColor();
    op3.style.backgroundColor="rgb(168, 254, 195, 0.8)";
    chosen=3;
})
op4.addEventListener('click', ()=>{
    resetColor();
    op4.style.backgroundColor="rgb(168, 254, 195, 0.8)";
    chosen=4;
})

//Start by running the first question
runQuestion(0);

//If the user clicks submit/next and verification
let good=false;
submit.addEventListener('click', ()=>{
    if(chosen == list[questionNumber][5]){
        questionContainer.style.background="rgb(154, 248, 201, 0.5)";
        document.querySelector(".msg").innerHTML="That's Correct! Good Job";
        good=true;
    }else{
        questionContainer.style.background="rgba(147, 40, 51, 0.5)";
        document.querySelector(".msg").innerHTML="Sorry, that was wrong. Please Retry";
    }
})
next.addEventListener('click', ()=>{
  if(good==true){
    questionNumber++;
    if(questionNumber==5){finish();}
    runQuestion(questionNumber);
    good=false;
  }
})

//=========================
//========================
//======FUN FACT SECTION==
//========================
//========================

//Variables
let funfact = document.querySelector('.funfact');
let funfactimg = document.querySelector('.funfactimg');
let generate = document.querySelector('.generate');
let learn = document.querySelector('.learnmore');
let factnum=0;

//Fact list, with website and image
let facts=[
    ["Did you know, 94% of Life exists in the Ocean?", "https://i.guim.co.uk/img/media/101f71a27904e48e1f9d42a3551cc44b6ceddb54/63_543_4781_2870/master/4781.jpg?width=1200&quality=85&auto=format&fit=max&s=15b3d077c0386e8ad7ec15ce70dbbc29", "https://oceanservice.noaa.gov/facts/ocean-species.html"],
    ["Did you know, less than 50% of Coral Reefs remain?", "https://images.theconversation.com/files/239870/original/file-20181009-72106-6bsj7z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop", "https://www.gvicanada.ca/blog/the-worlds-disappearing-underwater-cities-coral-reefs/#:~:text=Why%20are%20coral%20reefs%20disappearing,coral%20reefs%3B%20and%20coastal%20development."],
    ["Did you know, Oceans provide jobs for over 3 billion people who depend on marine biodiversity to live?", "https://media.npr.org/assets/img/2017/11/28/mtk-0014c3a1b5e44c2b7c1cf14a791039ebb4de4878.jpeg", "https://www.ocean.org/education/the-ocean-and-humans-are-connected/"],
    ["Did you know, only 5% of oceans have been explored?", "https://images.encounteredu.com/excited-hare/production/uploads/subject-update-about-exploring-the-deep-hero.jpg?w=1200&h=630&q=82&auto=format&fit=crop&dm=1631569543&s=48f275c76c565fdaa5d4bd365246afd3",    "https://oceanexplorer.noaa.gov/"],
    ["Did you know, oceans provide over HALF of the oxygen we breathe?", "https://oceanservice.noaa.gov/facts/ocean-surface-960.jpg",   "https://oceanservice.noaa.gov/facts/ocean-oxygen.html#:~:text=Scientists%20estimate%20that%20roughly%20half,smallest%20photosynthetic%20organism%20on%20Earth."],
    ["Did you know, the average depth of the ocean is 12,000 feet?", "https://hips.hearstapps.com/hmg-prod/images/rays-of-sunlight-into-the-underwater-cave-royalty-free-image-1665512420.jpg",    "https://oceanservice.noaa.gov/facts/oceandepth.html"],
    ["Did you know, scientist predict that by 2040, more than half of the polar bear population will be spending over a quarter of their life on land?", "https://www.wwf.org.uk/sites/default/files/styles/hero_m/public/2016-09/Medium_WW215268.jpg?h=fed0e6e9&itok=24XMsKvU",     "https://www.worldwildlife.org/species/polar-bear"],
    ["Did you know, the longest mountain range in the world is the Mid-Oceanic Ridge. It is an underwater mountain chain that stretches over 56,000km?", "https://www.marineinsight.com/wp-content/uploads/2019/05/Mid-Ocean-Ridge.png",    "https://oceanexplorer.noaa.gov/facts/mid-ocean-ridge.html"],
    ["Did you know, we now know almost a quarter of a million marine species", "https://www.marinespecies.org/charms/images/intro_species.png", "https://www.marinebio.org/creatures/facts/#:~:text=So%2C%20there%20are%20at%20least,97%25%20of%20the%20Earth's%20water."],
    ["Did you know, an estimated 8 Million tons of plastic enters our oceans every year? There are 5.25 trillion pieces of plastic waste estimated to be in our oceans.", "https://media.newyorker.com/photos/5d7bc2e91ef5810008e18628/master/w_2560%2Cc_limit/Kormann--Plastics.jpg",  "https://oceanservice.noaa.gov/hazards/marinedebris/plastics-in-the-ocean.html"]
];

//Function to create the fact
function createFact(num){
    funfact.innerHTML = facts[num][0];
    funfactimg.src = facts[num][1];
    learn.setAttribute("href", facts[num][2]);
}

//Starting the generator
createFact(0);

//When generate is clicked.
generate.addEventListener('click', ()=>{
    let random = Math.floor(Math.random()*5);
    if(random != factnum){
        createFact(random);
        factnum=random;
    }else{
        if(random==2){random=0;}
        createFact(random+1);
        factnum=random+1;
    }
})


//=========================
//========================
//======GRAPH SECTION==
//========================
//========================

//Variables
const line = document.querySelector('.line');
const pie = document.querySelector('.pie');
const map = document.querySelector('.map');
const canvas = document.querySelector('#chart');
const canvas2 = document.querySelector('#chart1');
const plasticscript = document.querySelector('.plasticscript');
const title = document.querySelector('.graphtitle');
const subtitle = document.querySelector('.graphsubtitle');

//presets
canvas.style.display="none";
title.innerHTML="Plastic waste emitted to the ocean per capita, 2019";

//Linegraph and piegraph function.
function lineGraph(){
    let labelsList = [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972,1973, 1974, 1975, 1976,1977, 1978, 1979,1980,1981, 1982,1983, 1984, 1985, 1986,1987, 1988, 1989, 1990,1991, 1992,1993, 1994, 1995, 1996,1997, 1998, 1999, 2000, 2001, 2002, 2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017, 2018, 2019]
let Pollution = [2,
  2,
  2,
  3,
  3,
  4,
  5,
  5,
  6,
  7,
  8,
  9,
  11,
  13,
  15,
  17,
  20,
  23,
  27,
  32,
  35,
  38,
  44,
  51,
  52,
  46,
  54,
  59,
  64,
  71,
  70,
  72,
  73,
  80,
  86,
  90,
  96,
  104,
  110,
  114,
  120,
  124,
  132,
  137,
  151,
  156,
  168,
  180,
  188,
  202,
  213,
  218,
  231,
  241,
  256,
  263,
  280,
  295,
  281,
  288,
  313,
  325,
  338,
  352,
  367,
  381,
  400.05,
  420.05,
  441.06,
  459.75]


new Chart(document.getElementById("chart"), {
    type: 'line',
    data: {
      labels: labelsList,
      datasets: [
        {
          label: "Pollution (millions of tonnes)",
          data: Pollution,
          borderColor: 'rgb(177,227,187)',
          backgroundColor: 'rgb(177,227,187,0.6)',

        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Plastic in the Ocean'
      },

      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Amount of Plastic (millions of tonnes)'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Year'
          },
          ticks: {
            autoSkip:true
          }
        }]
      }
      
    }
});

Chart.defaults.global.defaultFontColor = "rgb(199, 199, 199)";

}

function pieGraph(){
    var xValues = ["Plastic", "Metal", "Glass", "Processed Lumber", "Cloth/Fabric","Rubber"];
var yValues = [85, 5, 3, 3, 2,2];
var barColors = ['#b1e3bb', '#9edeaa' ,'#8cdb9b','#6bcf7e', '#2cd14d' ,'#19cf3d', '#04cf2c'];

new Chart(document.getElementById("chart1"), {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
      text: "Marine Debris By Material Type(According to NOAA)"
    }
  }
});

Chart.defaults.global.defaultFontColor = "rgb(199, 199, 199)";
}

//Event listeners for each of the graphs
line.addEventListener('click', ()=>{
  document.querySelector(".two").style.backgroundColor="rgb(50,106,70)";
  document.querySelector(".one").style.backgroundColor="rgb(187,226,190)";
  document.querySelector(".three").style.backgroundColor="rgb(187,226,190)";

    canvas.style.display="block";
    canvas2.style.display="none";
    let realmap = document.querySelector('#map2');
    realmap.style.display="none";
   lineGraph();
   title.innerHTML="Amount of plastic in the Ocean(millions of tonnes)";
//    subtitle.innerHTML="From Bridgewater State University.";
});

pie.addEventListener('click', ()=>{
  document.querySelector(".three").style.backgroundColor="rgb(50,106,70)";   
  document.querySelector(".one").style.backgroundColor="rgb(187,226,190)";
  document.querySelector(".two").style.backgroundColor="rgb(187,226,190)";

   canvas2.style.display="block";
    canvas.style.display="none";
    let realmap = document.querySelector('#map2');
    realmap.style.display="none";
    pieGraph();
    title.innerHTML="Different Types of Ocean pollution";
    // subtitle.innerHTML="From NOAA";
});

map.addEventListener('click', ()=>{
  document.querySelector(".one").style.backgroundColor="rgb(50,106,70)";  
  document.querySelector(".two").style.backgroundColor="rgb(187,226,190)";
  document.querySelector(".three").style.backgroundColor="rgb(187,226,190)";
    
   let realmap = document.querySelector('#map2');
    realmap.style.display="block";
    canvas.style.display="none";
    canvas2.style.display="none";
    title.innerHTML="Plastic waste emitted to the ocean per capita, 2019";
    // subtitle.innerHTML="Data from Our World in Data, 2020. This is an annual estimate of plastic emissions. A country's total does not include the waste that is exported overseas and that may be at higher risk of entering the ocean.";
});
//Start with the map
map.click();

// Swiper to use swiping container buttons
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



//=========================
//========================
//======GRAPH SECTION 2==
//========================
//========================

//variables
const map2 = document.querySelector('.map2');
const line2 = document.querySelector('.line2');
const bar = document.querySelector('.bar');
const aquaspot = document.querySelector('#aquachart');
const barspot = document.querySelector('#barchart');
const title2 = document.querySelector('.graphtitle2');


//initial
canvas.style.display="none";
title2.innerHTML="Fish and Seafood Production by country(2020)";

//functions
function lineGraph2(){
    var dataFirst = {
        label: "Aquaculture",
        data: [
            2029179,
            1948048,
            2014404,
            2247676,
            2402677,
            2604353,
            2791746,
            2915674,
            3092313,
            3238166,
            3526017,
            3930472,
            4280803,
            4504942,
            4941524,
            5219603,
            5408491,
            6282015,
            6593363,
            6714748,
            7347225,
            7818586,
            8213439,
            9089265,
            10191481,
            11354349,
            12670909,
            13971504,
            15531105,
            16486351,
            16850460,
            18305028,
            21211488,
            24467926,
            27798480,
            31232256,
            33790684,
            34296276,
            36463876,
            39604752,
            41724568,
            44324824,
            47375084,
            50271408,
            54570316,
            57820200,
            61591980,
            64937296,
            68799080,
            73045256,
            78020016,
            82635400,
            90020576,
            97110168,
            101084800,
            106004184
          ],
        lineTension: 0,
        // fill: rgb(255, 121, 121),
        borderColor: 'rgb(255, 121, 121)',
        backgroundColor: 'rgb(255, 121, 121, 0.2)'
      };
    
    var dataSecond = {
        label: "Capture Fisheries",
        data: [
            34790180,
            38630192,
            42035680,
            42996372,
            47586828,
            48653612,
            52568636,
            56020668,
            59336232,
            57903208,
            63886816,
            63917908,
            59670600,
            60227296,
            63470416,
            62941132,
            66328024,
            65083616,
            67115744,
            67583584,
            68257272,
            70308776,
            72121096,
            71946272,
            77654920,
            79380104,
            84935064,
            85595384,
            89066600,
            89603184,
            86024296,
            84921536,
            86415584,
            87749048,
            93361400,
            93696568,
            95159584,
            94464032,
            86874552,
            92812112,
            94763864,
            91957968,
            92313232,
            89559024,
            94176616,
            93697960,
            91237776,
            91558656,
            90694760,
            90266896,
            88855992,
            93180832,
            90512336,
            91753928,
            92360624,
            93736944
          ],
        lineTension: 0,
        // fill: ,
      borderColor: 'rgb(121, 121, 255)',
      backgroundColor: 'rgb(121, 121, 255, 0.2)'
      };
    
    var speedData = {
      labels: [
        1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
        1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
        1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
        1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
        2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014, 2015
      ],
      datasets: [dataSecond, dataFirst],
    };
    
    
    
    var lineChart = new Chart(document.getElementById("aquachart"), {
      type: 'line',
      data: speedData,
      options: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 40
          }
        }
      }
    });
    
    Chart.defaults.global.defaultFontColor = "rgb(199, 199, 199)";
 
}

function barGraph(){
    var densityData = {
        label: 'Exportation of fish and fishery products in millions of U.S. dollars',
        data: [36.2, 20.8, 11.9, 8.1, 6.7, 6.2, 5.8, 5.5, 5.5, 5.4, 5.4, 4.7],
        backgroundColor: [
          'rgba(0, 99, 132, 0.6)',
          'rgba(20, 99, 132, 0.6)',
          'rgba(40, 99, 132, 0.6)',
          'rgba(60, 99, 132, 0.6)',
          'rgba(80, 99, 132, 0.6)',
          'rgba(100, 99, 132, 0.6)',
          'rgba(120, 99, 132, 0.6)',
          'rgba(140, 99, 132, 0.6)',
          'rgba(160, 99, 132, 0.6)',
          'rgba(180, 99, 132, 0.6)',
          'rgba(200, 99, 132, 0.6)',
          'rgba(220, 99, 132, 0.6)'
        ],
        borderColor: [
          'rgba(0, 99, 132, 1)',
          'rgba(20, 99, 132, 1)',
          'rgba(40, 99, 132, 1)',
          'rgba(60, 99, 132, 1)',
          'rgba(80, 99, 132, 1)',
          'rgba(100, 99, 132, 1)',
          'rgba(120, 99, 132, 1)',
          'rgba(140, 99, 132, 1)',
          'rgba(160, 99, 132, 1)',
          'rgba(180, 99, 132, 1)',
          'rgba(200, 99, 132, 1)',
          'rgba(220, 99, 132, 1)'
        ],
        borderWidth: 2,
        hoverBorderWidth: 0
      };
      
      var config = {
        type: 'horizontalBar',
        data: {
              labels: ["European Union", "China", "Norway", "Vietnam", "Chile", "India", "Thailand", "United States", "Canada", "Ecuador", "Russia", "Indonesia"],
          datasets: [densityData],
        },
        options: {
          scales: {
          yAxes: [{
            barPercentage: 0.5
          }]
        },
        elements: {
          rectangle: {
            borderSkipped: 'left',
          }
        }
        }
      }
      
      var ctx = document.getElementById('barchart').getContext('2d');
      new Chart(ctx, config);
}

//event listeners
line2.addEventListener('click', ()=>{
  document.querySelector(".twoa").style.backgroundColor="rgb(52, 52, 252)";   
  document.querySelector(".onea").style.backgroundColor="rgb(141, 184, 252)";
  document.querySelector(".threea").style.backgroundColor="rgb(141, 184, 252)";
    aquaspot.style.display="block";
    barspot.style.display="none";
    let realmap = document.querySelector('#map1');
    realmap.style.display="none";
    lineGraph2();
    title2.innerHTML="Exportation of fish and fishery products in of U.S. dollars";
//    subtitle.innerHTML="From Bridgewater State University.";
});

bar.addEventListener('click', ()=>{
  document.querySelector(".threea").style.backgroundColor="rgb(52, 52, 252)";   
  document.querySelector(".onea").style.backgroundColor="rgb(141, 184, 252)";
  document.querySelector(".twoa").style.backgroundColor="rgb(141, 184, 252)";
    barspot.style.display="block";
    aquaspot.style.display="none";
    let realmap = document.querySelector('#map1');
    realmap.style.display="none";
    barGraph();
    title2.innerHTML="Leading exporting countries of fish and fishery products worldwide in 2020";
    // subtitle.innerHTML="From NOAA";
});

map2.addEventListener('click', ()=>{
  document.querySelector(".onea").style.backgroundColor="rgb(52, 52, 252)";   
  document.querySelector(".threea").style.backgroundColor="rgb(141, 184, 252)";
  document.querySelector(".twoa").style.backgroundColor="rgb(141, 184, 252)";
    let realmap = document.querySelector('#map1');
    realmap.style.display="block";
    aquaspot.style.display="none";
    barspot.style.display="none";
    title2.innerHTML="Fish and Seafood Production by country (2020)";
    // subtitle.innerHTML="Data from Our World in Data, 2020. This is an annual estimate of plastic emissions. A country's total does not include the waste that is exported overseas and that may be at higher risk of entering the ocean.";
});
map2.click();


//run the photo gallery
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
    // baguetteBox.run('.setting');
  });
  




var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
