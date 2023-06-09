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
          backgroundColor: "seagreen",
          data: Pollution,
          backgroundColor: '#9BD0F5',

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


