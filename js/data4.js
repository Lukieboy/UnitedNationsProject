var densityData = {
    label: 'Exportation of fish and fishery products in millions of U.S. dollars',
    data: [36.2, 20.8, 11.9, 8.1, 6.7, 6.2, 5.8, 5.5, 5.5, 5.4, 5.4, 4.7],
    backgroundColor: [
      'rgba(0, 99, 132, 0.6)',
      'rgba(30, 99, 132, 0.6)',
      'rgba(60, 99, 132, 0.6)',
      'rgba(90, 99, 132, 0.6)',
      'rgba(120, 99, 132, 0.6)',
      'rgba(150, 99, 132, 0.6)',
      'rgba(180, 99, 132, 0.6)',
      'rgba(210, 99, 132, 0.6)',
      'rgba(240, 99, 132, 0.6)'
    ],
    borderColor: [
      'rgba(0, 99, 132, 1)',
      'rgba(30, 99, 132, 1)',
      'rgba(60, 99, 132, 1)',
      'rgba(90, 99, 132, 1)',
      'rgba(120, 99, 132, 1)',
      'rgba(150, 99, 132, 1)',
      'rgba(180, 99, 132, 1)',
      'rgba(210, 99, 132, 1)',
      'rgba(240, 99, 132, 1)'
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