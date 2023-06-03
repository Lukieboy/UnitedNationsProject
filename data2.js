var xValues = ["Plastic", "Metal", "Glass", "Processed Lumber", "Cloth/Fabric","Rubber", "Unclassified"];
var yValues = [85, 5, 3, 3, 2,2,0];
var barColors = [
  "#1d60cc",
  "#00aba9",
  "#2b5797",
  "seagreen",
  "#1e7145",
  "darkgreen",
  "red"
];

new Chart("chart", {
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
      display: true,
    }
  }
});

Chart.defaults.global.defaultFontColor = "rgb(199, 199, 199)";