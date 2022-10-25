d3.select("p").style("color", "purple")


const canvas = d3.select('.canva')


const svg = canvas.append("svg")
.attr("width", "600").attr("height", "600")


// const rect = svg.append("rect");




const rect = svg.selectAll("rect")


d3.json('test.json')
.then(data => {
  console.log(data)


rect.data(data)
  .enter().append("rect")
  .attr('width', 24)
  // .attr('height', 100)
  .attr('fill', (d, i) => d.fill)

  .attr("height", function(d, i){
    return d.height*2;
  })
  .attr('x', function(d, i) {
    return i*28;

  })
  .attr("y", function(d, i){
    return 200 - (d.height*2);
  })


})



// svg.append("circle").attr("cx", "134").attr("cy", "100").attr("r", "50").attr("fill", "blue")


//
// svg.append("rect").attr("width", "120").attr("height", "100")
// .attr("x", 240).attr("y", 20).attr("fill", "pink").attr("rx", "15").attr("ry", "15")
//
//
//
// svg.append("line").attr("x1", 129).attr("x2", 45).attr("y1", 100).attr("y2", 40).attr("stroke", "purple")
//
//
// svg.append("text").text("hello there").attr("x",100).attr("y", 100)
