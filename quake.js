const canvas = d3.select(".canva")

var width = "100%";
var height = "100%";

const api_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"


const svg = canvas.append("svg")
.attr("width", width)
.attr("height", height)


//Define div for tooltip

var div = d3.select("body").append("div")
.attr("class", "tooltip")
.style("opacity", "0")


function timeStamptoDate(mTime){
  var mDate = new Date(mTime);
  return mDate.toLocaleDateString('en-US')
}



//Parse JSOON

// d3.json('.json', function(err, data){
//
//
// })


d3.json(api_url)
.then(data => {

// console.log(data)

const circle = svg.selectAll("circle").data(data.features)
// console.log(data.features)
//
// circle.attr('cx', (d, i) => (d.properties.mag)*75).attr('cy', 14).attr('r', (d, i) => (d.properties.mag)*2).attr('fill', 'magenta')

circle.enter().append('circle')
.attr('cx', (d, i, n) => Math.floor(Math.random() * 500) + d.properties.mag*i)
.attr('cy', (d, i, n) => Math.floor(Math.random() * 80) + d.properties.mag)
.attr('r', (d, i, n) => (d.properties.mag)*3)


.style('top', 156)


.on("mouseover", function(d, i, n){



  console.log(d3.select(n[i]))
  d3.select(n[i])
  .style("opacity", 0.2)
  .transition()
  .duration(100)

  div.transition()
  .duration(200)
  .style("opacity", .9)

  div.html(`Mag: ${d.properties.mag} Time: ${timeStamptoDate(d.properties.time)} Where: ${d.properties.place.split(",")[1]}`).style("left", (d3.event.pageX) + "px")
  .style("top", (d3.event.pageY) + "px")




})

.on("mouseout", function(d, i, n){

  d3.select(n[i])

  .transition()
  .duration(100)
  .style("opacity", 1)


  div.transition()
  .duration(500)
  .style("opacity", 0)



})

.attr('fill', (d, i, n) => d.properties.alert)



})

//
// .attr('r', function(d, i, n){
//
// d3.select(n[i])
//
//     return d.properties.mag*2;
// })


// .attr('r', function(d, i, n){
//
//    d3.select(n[i])
// })

// (d, i) => (d.properties.mag)*2)
