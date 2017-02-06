function init() {

/*  #############################
    Obtención de los números aleatorios entre 0 y 1
*/

  function getRandom() {
    return Math.random();
  }
  var aux;
  var numEstados = 32;
  var dataset = [];
  for (x=0; x<numEstados; x++){
        aux = getRandom();
        dataset.push(aux);
  }
  //var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
  var w = 600;
  var h = 200;
  var barPadding = 1;

  /*  #############################
      Visualizar datos mediante SVG utilizando d3.js
  */

  var svg = d3.select("#Bart")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
      return i * (w / dataset.length);
    })
    .attr("y", function(d) {
      return h - (d*100);                                    //Altura menos el dato
    })
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function(d) {
      return d * 100;                                         //Solo el dato
    })
    .attr("fill", "teal");

    /*  #############################
        Con el uso de los atributos SVG se
        le proporciona coorenadas, alto y ancho de
        las gráficas de barras. 
    */

  svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
      return d;
    })
    .attr("x", function(d, i) {
      return i * (w / dataset.length) + 13;
    })
    .attr("y", function(d) {
      return h - (d * 100) + 15;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr("text-anchor", "middle");
}
window.onload = init;
