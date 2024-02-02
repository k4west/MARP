var svgHeight = 235;
var dataSet = [120, 70, 175, 80, 220];
var barElements = d3.select("#myGraph").selectAll("bar").data(dataSet);

// offset
var offsetX = 40;
var offsetY = 10;

// range limit
var y_range_limit = 300;

var interval = 5;

// axis y
var y = d3.scaleLinear().range([y_range_limit, 0]).domain([0, 300]);
var yScale = d3
  .axisLeft(y)
  .tickValues(d3.range(0, 301, 50))
  .tickFormat(function (d) {
    return " $" + d;
  });

d3.select("#myGraph")
  .append("g")
  .attr("class", "axis")
  .attr("transform", "translate(" + offsetX + "," + (svgHeight - y_range_limit - offsetY) + ")")
  .call(yScale);

// axis x
d3.select("#myGraph")
  .append("rect")
  .attr("class", "axis_x")
  .attr("width", 320)
  .attr("height", 1)
  .attr("transform", "translate(" + offsetX + ", " + (svgHeight - offsetY) + ")");

xElements = d3.select("#myGraph").selectAll("#barName").data(dataSet);
xElements
  .enter()
  .append("text")
  .attr("class", "barName")
  .attr("x", function (d, i) {
    return i * 30 + 10 + interval + offsetX;
  })
  .attr("y", svgHeight + 15 - offsetY)
  .text(function (d, i) {
    return ["A", "B", "C", "D", "E"][i];
  });

barElements
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("height", function (d) {
    return d;
  })
  .attr("width", 20)
  .attr("x", function (d, i) {
    return i * 30 + interval + offsetX;
  })
  .attr("y", function (d) {
    return svgHeight - d - offsetY;
  });

textElements = d3.select("#myGraph").selectAll("#barNum").data(dataSet);
textElements
  .enter()
  .append("text")
  .attr("class", "barNum")
  .attr("x", function (d, i) {
    return i * 30 + 10 + interval + offsetX; // 막대그래프 표시간격 맞춤 // updated offsetX
  })
  .attr("y", svgHeight - 5 - offsetY) //updated offsetY
  .text(function (d, i) {
    return d;
  });
