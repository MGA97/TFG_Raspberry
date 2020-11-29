window.onload = function() {
	console.log("LOADED");

    	//Configuration variables
    	var updateInterval = 500 //in ms
    	var numberElements = 200;

    	//Globals
    	var updateCount = 0;

    	// Chart Objects
	var d1Chart = $("#d1Chart");
	var d2Chart = $("#d2Chart");
	var d3Chart = $("#d3Chart");
	var d4Chart = $("#d4Chart");
	var d5Chart = $("#d5Chart");

    	var xAccelChart = $("#xAccelChart");
    	var yAccelChart = $("#yAccelChart");
   	var zAccelChart = $("#zAccelChart");
    	var xGyroChart = $("#xGyroChart");
    	var yGyroChart = $("#yGyroChart");
    	var zGyroChart = $("#zGyroChart");
	var xMagnChart = $("#xMagnChart");
	var yMagnChart =$("#yMagnChart");
	var zMagnChart =$("#zMagnChart");

    //chart instances & configuration

    	var commonOptions = {
        	scales: {
          		xAxes: [{
            			type: 'time',
            			time: {
              				displayFormats: {
                				millisecond: 'mm:ss:SSS'
              				}
            			}
          		}],
            		yAxes: [{
                		ticks: {
                    			beginAtZero:true
                		}
            		}]
        	},
        	legend: {display: false},
        	tooltips:{
          		enabled: false
        	}
    	};

	var d1ChartInstance = new Chart(d1Chart, {
        	type: 'line',
        	data: {
         		datasets: [{
              			label: "Flexion 1",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
          		title:{
            			display: true,
            			text: "Flexion1",
            			fontSize: 18
          		}
        	})
    	});

	var d2ChartInstance = new Chart(d2Chart, {
        	type: 'line',
        	data: {
         		datasets: [{
              			label: "Flexion 2",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
          		title:{
            			display: true,
            			text: "Flexion2",
            			fontSize: 18
          		}
        	})
    	});


	var d3ChartInstance = new Chart(d3Chart, {
        	type: 'line',
        	data: {
         		datasets: [{
              			label: "Flexion 3",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
          		title:{
            			display: true,
            			text: "Flexion3",
            			fontSize: 18
          		}
        	})
    	});

	var d4ChartInstance = new Chart(d4Chart, {
        	type: 'line',
        	data: {
         		datasets: [{
              			label: "Flexion 4",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
          		title:{
            			display: true,
            			text: "Flexion4",
            			fontSize: 18
          		}
        	})
    	});


	var d5ChartInstance = new Chart(d5Chart, {
        	type: 'line',
        	data: {
         		datasets: [{
              			label: "Flexion 5",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
          		title:{
            			display: true,
            			text: "Flexion5",
            			fontSize: 18
          		}
        	})
    	});

    	var xAccelChartInstance = new Chart(xAccelChart, {
        	type: 'line',
        	data: {
          		datasets: [{
              			label: "X Aceleracion",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
          		title:{
            			display: true,
           	 		text: "Aceleracion - X",
            			fontSize: 18
          		}
        	})
    	});

    	var yAccelChartInstance = new Chart(yAccelChart, {
        	type: 'line',
        	data: {
          		datasets: [{
             			 label: "Y Aceleracion",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
         		title:{
            			display: true,
            			text: "Aceleraxion - Y",
            			fontSize: 18
          		}
        	})
	});

    	var zAccelChartInstance = new Chart(zAccelChart, {
		type: 'line',
		data: {
          		datasets: [{
              			label: "Z Aceleracion",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
         		title:{
				display: true,
            			text: "Aceleracion - Z",
            			fontSize: 18
          		}
        	})
      	});

	var xGyroChartInstance = new Chart(xGyroChart, {
        	type: 'line',
        	data: {
          		datasets: [{
              			label: "X Giroscopio",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
             			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
          		title:{
            			display: true,
            			text: "Giroscopio - X",
            			fontSize: 18
          		}
        	})
	});

	var yGyroChartInstance = new Chart(yGyroChart, {
        	type: 'line',
        	data: {
          		datasets: [{
              			label: "Y Giroscopio",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
          		title:{
            			display: true,
            			text: "Giroscopio - Y",
            			fontSize: 18
         		 }
       		 })
	});

	var zGyroChartInstance = new Chart(zGyroChart, {
        	type: 'line',
        	data: {
          		datasets: [{
              			label: "Z Giroscopio",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
          		title:{
          	  		display: true,
            			text: "Giroscopio - Z",
            			fontSize: 18
          		}
        	})
	});

	var xMagnChartInstance = new Chart(xMagnChart, {
        	type: 'line',
        	data: {
          		datasets: [{
              			label: "X Magnetometro",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
          		title:{
            			display: true,
            			text: "Magnetometro - X",
            			fontSize: 18
          		}
        	})
	});

	var yMagnChartInstance = new Chart(yMagnChart, {
        	type: 'line',
        	data: {
          		datasets: [{
              			label: "Y Magnetometro",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
         		title:{
            			display: true,
            			text: "Magnetometro - Y",
            			fontSize: 18
          		}
        	})
	});

	var zMagnChartInstance = new Chart(zMagnChart, {
        	type: 'line',
        	data: {
          		datasets: [{
              			label: "Z Magnetometro",
              			data: 0,
              			fill: false,
              			borderColor: '#349a84',
              			borderWidth: 1
          		}]
        	},
        	options: Object.assign({}, commonOptions, {
          		title:{
            			display: true,
            			text: "Magnetometro - Z",
            			fontSize: 18
         		 }	
       	 	})
	});


	function addData(data) {
      		console.log("executing addData function")

      		if(data){
		d1ChartInstance.data.labels.push(new Date());
        	d1ChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['Dedo1'])});
		d2ChartInstance.data.labels.push(new Date());
        	d2ChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['Dedo2'])});
		d3ChartInstance.data.labels.push(new Date());
        	d3ChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['Dedo3'])});
		d4ChartInstance.data.labels.push(new Date());
        	d4ChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['Dedo4'])});
		d5ChartInstance.data.labels.push(new Date());
        	d5ChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['Dedo5'])});

        	xAccelChartInstance.data.labels.push(new Date());
        	xAccelChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['AccX'])});
        	yAccelChartInstance.data.labels.push(new Date());
        	yAccelChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['AccY'])});
        	zAccelChartInstance.data.labels.push(new Date());
        	zAccelChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['AccZ'])});
        	xGyroChartInstance.data.labels.push(new Date());
        	xGyroChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['GyroX'])});
        	yGyroChartInstance.data.labels.push(new Date());
        	yGyroChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['GyroY'])});
        	zGyroChartInstance.data.labels.push(new Date());
        	zGyroChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['GyroZ'])});
		xMagnChartInstance.data.labels.push(new Date());
        	xMagnChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['MagnX'])});
        	yMagnChartInstance.data.labels.push(new Date());
        	yMagnChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['MagnY'])});
        	zMagnChartInstance.data.labels.push(new Date());
        	zMagnChartInstance.data.datasets.forEach((dataset) =>{dataset.data.push(data['MagnZ'])});

        	if(updateCount > numberElements){
		d1ChartInstance.data.labels.shift();
          	d1ChartInstance.data.datasets[0].data.shift();
		d2ChartInstance.data.labels.shift();
          	d2ChartInstance.data.datasets[0].data.shift();
		d3ChartInstance.data.labels.shift();
          	d3ChartInstance.data.datasets[0].data.shift();
		d4ChartInstance.data.labels.shift();
          	d4ChartInstance.data.datasets[0].data.shift();
		d5ChartInstance.data.labels.shift();
          	d5ChartInstance.data.datasets[0].data.shift();

         	xAccelChartInstance.data.labels.shift();
          	xAccelChartInstance.data.datasets[0].data.shift();
          	yAccelChartInstance.data.labels.shift();
          	yAccelChartInstance.data.datasets[0].data.shift();
          	zAccelChartInstance.data.labels.shift();
          	zAccelChartInstance.data.datasets[0].data.shift();
          	xGyroChartInstance.data.labels.shift();
          	xGyroChartInstance.data.datasets[0].data.shift();
          	yGyroChartInstance.data.labels.shift();
          	yGyroChartInstance.data.datasets[0].data.shift();
          	zGyroChartInstance.data.labels.shift();
          	zGyroChartInstance.data.datasets[0].data.shift();
		xMagnChartInstance.data.labels.shift();
          	xMagnChartInstance.data.datasets[0].data.shift();
          	yMagnChartInstance.data.labels.shift();
          	yMagnChartInstance.data.datasets[0].data.shift();
          	zMagnChartInstance.data.labels.shift();
          	zMagnChartInstance.data.datasets[0].data.shift();
        	}
        	else updateCount++;
        	d1ChartInstance.update();
        	d2ChartInstance.update();
        	d3ChartInstance.update();
        	d4ChartInstance.update();
        	d5ChartInstance.update();
        	xAccelChartInstance.update();
        	yAccelChartInstance.update();
        	zAccelChartInstance.update();
        	xGyroChartInstance.update();
        	yGyroChartInstance.update();
        	zGyroChartInstance.update();
		xMagnChartInstance.update();
        	yMagnChartInstance.update();
        	zMagnChartInstance.update();

      		}
	};


	function updateData() {
      		console.log("Update Data");
      		$.getJSON("http://172.16.0.100:80/archivo.json", addData);
      		setTimeout(updateData,updateInterval);
    	}
	updateData();
}

