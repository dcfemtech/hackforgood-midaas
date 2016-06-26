var color_hash = {
  "$1.03m-$1.04m": "#c33f2e",
  "$1.00m-$1.01m": "#c64430",
  "$950.00k-$960.00k": "#ca4a33",
  "$890.00k-$900.00k": "#cd5036",
  "$870.00k-$880.00k": "#d15638",
  "$810.00k-$820.00k": "#d45c3b",
  "$780.00k-$790.00k": "#d8623e",
  "$740.00k-$750.00k": "#db6840",
  "$730.00k-$740.00k": "#df6e43",
  "$710.00k-$720.00k": "#e37346",
  "$690.00k-$700.00k": "#e67948",
  "$680.00k-$690.00k": "#ea7f4b",
  "$670.00k-$680.00k": "#ed854e",
  "$660.00k-$670.00k": "#f18b50",
  "$650.00k-$660.00k": "#f49153",
  "$640.00k-$650.00k": "#f89756",
  "$630.00k-$640.00k": "#fc9d59",
  "$620.00k-$630.00k": "#fca15c",
  "$610.00k-$620.00k": "#fca55f",
  "$600.00k-$610.00k": "#fca962",
  "$590.00k-$600.00k": "#fcad65",
  "$580.00k-$590.00k": "#fcb168",
  "$570.00k-$580.00k": "#fcb66b",
  "$560.00k-$570.00k": "#fcba6e",
  "$550.00k-$560.00k": "#fdbe72",
  "$540.00k-$550.00k": "#fdc275",
  "$530.00k-$540.00k": "#fdc678",
  "$520.00k-$530.00k": "#fdcb7b",
  "$510.00k-$520.00k": "#fdcf7e",
  "$500.00k-$510.00k": "#fdd381",
  "$490.00k-$500.00k": "#fdd784",
  "$480.00k-$490.00k": "#fddb87",
  "$470.00k-$480.00k": "#fee08b",
  "$460.00k-$470.00k": "#fce18a",
  "$450.00k-$460.00k": "#fae289",
  "$440.00k-$450.00k": "#f8e389",
  "$430.00k-$440.00k": "#f6e488",
  "$420.00k-$430.00k": "#f4e587",
  "$410.00k-$420.00k": "#f2e787",
  "$400.00k-$410.00k": "#f0e886",
  "$390.00k-$400.00k": "#efe986",
  "$380.00k-$390.00k": "#edea85",
  "$370.00k-$380.00k": "#ebeb84",
  "$360.00k-$370.00k": "#e9ed84",
  "$350.00k-$360.00k": "#e7ee83",
  "$340.00k-$350.00k": "#e5ef82",
  "$330.00k-$340.00k": "#e3f082",
  "$320.00k-$330.00k": "#e1f181",
  "$310.00k-$320.00k": "#e0f381",
  "$300.00k-$310.00k": "#d9f07f",
  "$290.00k-$300.00k": "#d2ed7e",
  "$280.00k-$290.00k": "#ccea7d",
  "$270.00k-$280.00k": "#c5e87c",
  "$260.00k-$270.00k": "#bee57b",
  "$250.00k-$260.00k": "#b8e27a",
  "$240.00k-$250.00k": "#b1df79",
  "$230.00k-$240.00k": "#abdd78",
  "$220.00k-$230.00k": "#a4da76",
  "$210.00k-$220.00k": "#9dd775",
  "$200.00k-$210.00k": "#97d474",
  "$190.00k-$200.00k": "#90d273",
  "$180.00k-$190.00k": "#89cf72",
  "$170.00k-$180.00k": "#83cc71",
  "$160.00k-$170.00k": "#7cc970",
  "$150.00k-$160.00k": "#76c76f",
  "$140.00k-$150.00k": "#71c373",
  "$130.00k-$140.00k": "#6dbf78",
  "$120.00k-$130.00k": "#69bb7d",
  "$110.00k-$120.00k": "#65b782",
  "$100.00k-$110.00k": "#60b387",
  "$90.00k-$100.00k": "#5caf8c",
  "$80.00k-$90.00k": "#58ab91",
  "$70.00k-$80.00k": "#54a796",
  "$60.00k-$70.00k": "#4fa39a",
  "$50.00k-$60.00k": "#4b9f9f",
  "$40.00k-$50.00k": "#479ba4",
  "$30.00k-$40.00k": "#4397a9",
  "$20.00k-$30.00k": "#3e93ae",
  "$10.00k-$20.00k": "#3a8fb3",
  "$0.00-$10.00k": "#368bb8",
  "($10.00k)-$0.00": "#FF0000"
};

var dataSet = {};

function callMidaas(ageGroup, year) {
  var EPurl = "https://api.commerce.gov/midaas/distribution?";
  EPurl += "year=" + year;
  // EPurl += "&sex=" + gender;
  EPurl += "&agegroup=" + ageGroup;
  EPurl += "&callbackname=JSON_CALLBACK";
  EPurl += "&api_key=YvcIGwzbGiud9JcHl0gPnVJXH5B4s7b5fXOkOVuq";

  $.getJSON(EPurl, {
      format: "json"
    })
    .done(function(data) {
      data["age-group"] = ageGroup;
      dataSet[year].push(data);
    })
}

var genders = ["female", "male"];
var ageGroups = ["18-24", "25-34", "35-44", "45-54", "55-64", "65%2B"];
var years = ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"];

// for (var j = 0; j < years.length; j++) {
//   dataSet[years[j]] = []
//   for (var i = 0; i < ageGroups.length; i++) {
//     callMidaas(ageGroups[i], years[j]);
//   }
// }

var margin = {
    top: 10,
    right: 20,
    bottom: 100,
    left: 50
  },
  width = 1000 - margin.left - margin.right,
  height = 700 - margin.top - margin.bottom,
  that = this;

var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.4); //what is 0.3 is the width of the bar

var y = d3.scale.linear().rangeRound([height, 0]);

var color = d3.scale.category20();

var xAxis = d3.svg.axis().scale(x).orient("bottom");

var yAxis = d3.svg.axis().scale(y).orient("left").tickFormat(d3.format(".0%"));

var svg = d3.select(".midaasviz").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var jsondata = d3.json("distribution_data.json", function(error, jsondata) {
  function getData(year){

    function naturalCompare(a, b) {
       var ax = [], bx = [];

       a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
       b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });

       while(ax.length && bx.length) {
           var an = ax.shift();
           var bn = bx.shift();
           var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
           if(nn) return nn;
       }
       return ax.length - bx.length;
    }

    // color.domain() = ["$0.00-$10.00k", "$1.03m-$1.04m", "$1.00m-$1.01m", "$10.00k-$20.00k", "$100.00k-$110.00k", "$110.00k-$120.00k", "$120.00k-$130.00k", "$130.00k-$140.00k", "$140.00k-$150.00k", "$150.00k-$160.00k", "$160.00k-$170.00k", "$170.00k-$180.00k", "$180.00k-$190.00k", "$190.00k-$200.00k", "$20.00k-$30.00k", "$200.00k-$210.00k", "$210.00k-$220.00k", "$220.00k-$230.00k", "$230.00k-$240.00k", "$240.00k-$250.00k", "$250.00k-$260.00k", "$260.00k-$270.00k", "$270.00k-$280.00k", "$280.00k-$290.00k", "$290.00k-$300.00k", "$30.00k-$40.00k", "$300.00k-$310.00k", "$310.00k-$320.00k", "$320.00k-$330.00k", "$330.00k-$340.00k", "$340.00k-$350.00k", "$350.00k-$360.00k", "$360.00k-$370.00k", "$370.00k-$380.00k", "$380.00k-$390.00k", "$390.00k-$400.00k", "$40.00k-$50.00k", "$400.00k-$410.00k", "$410.00k-$420.00k", "$420.00k-$430.00k", "$430.00k-$440.00k", "$440.00k-$450.00k", "$450.00k-$460.00k", "$460.00k-$470.00k", "$470.00k-$480.00k", "$480.00k-$490.00k", "$490.00k-$500.00k", "$50.00k-$60.00k", "$500.00k-$510.00k", "($10.00k)-$0.00", "$510.00k-$520.00k", "$520.00k-$530.00k", "$530.00k-$540.00k", "$540.00k-$550.00k", "$550.00k-$560.00k", "$560.00k-$570.00k", "$570.00k-$580.00k", "$580.00k-$590.00k", "$590.00k-$600.00k", "$600.00k-$610.00k", "$60.00k-$70.00k", "$610.00k-$620.00k", "$620.00k-$630.00k", "$630.00k-$640.00k", "$640.00k-$650.00k", "$650.00k-$660.00k", "$660.00k-$670.00k", "$680.00k-$690.00k", "$690.00k-$700.00k", "$70.00k-$80.00k", "$710.00k-$720.00k", "$730.00k-$740.00k", "$780.00k-$790.00k", "$80.00k-$90.00k", "$810.00k-$820.00k", "$870.00k-$880.00k", "$890.00k-$900.00k", "$90.00k-$100.00k", "$950.00k-$960.00k"]
    console.log(year)
    jsondata[year].forEach(function(d) {
      var y0 = 0;
      color.domain(d3.keys(d).filter(function(key) {
        return key !== "agegroup";
      }));

      millionaires = []

      color.domain().forEach(function(cat, i){
       if (cat.indexOf('m') != -1){
         millionaires.push(cat)
         color.domain().splice(i, 1)
       }
      })

      color.domain().sort(naturalCompare)
      millionaires.sort(naturalCompare)

      millionaires.forEach(function(cat){
       color.domain().push(cat)
      })

      // console.log(color.domain())


      d.rates = color.domain().map(function(name) {
        // console.log(name)
        return {
          name: name,
          y0: y0,
          y1: y0 += +d[name],
          amount: d[name]
        };
      });
      d.rates.forEach(function(d) {
        d.y0 /= y0;
        d.y1 /= y0;
      });

    });

    jsondata[year].sort(function(a, b) {
      return a.agegroup.localeCompare(b.agegroup);
    })

    x.domain(jsondata[year].map(function(d) {
      return d.agegroup;
    }));
    return jsondata[year];
  }


  svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);

  svg.append("g").attr("class", "y axis").call(yAxis);

  var income_range = svg.selectAll(".income_range")
  .data(getData("2005"))
  .enter()
  .append("g")
  .attr("class", "income_range")
  .attr("transform", function(d) {
    return "translate(" + x(d.agegroup) + ",0)";
  });

  income_range.selectAll("rect").data(function(d) {
      return d.rates;
    }).enter().append("rect").attr("width", x.rangeBand()).attr("y", function(d) {
      return y(d.y1);
    }).attr("height", function(d) {
      return y(d.y0) - y(d.y1);
    }).style("fill", function(d) {
      return color_hash[d.name];
    }).style("stroke-width", 0.5)
    .style("stroke", "#4B4E4F");

  var label = svg.append("text")
    .attr("class", "year label")
    .attr("text-anchor", "end")
    .attr("y", height - 24)
    .attr("x", width)
    .text(2005);

  var box = label.node().getBBox();

  var overlay = svg.append("rect")
    .attr("class", "overlay")
    .attr("x", box.x)
    .attr("y", box.y)
    .attr("width", box.width)
    .attr("height", box.height)
    .on("mouseover", enableInteraction);

  // Start a transition that interpolates the data based on year.
  svg.transition()
    .duration(30000)
    .ease("linear")
    .tween("year", tweenYear)
    .each("end", enableInteraction);

  // After the transition finishes, you can mouseover to change the year.
  function enableInteraction() {
    var yearScale = d3.scale.linear()
      .domain([2005, 2014])
      .range([box.x + 10, box.x + box.width - 10])
      .clamp(true);

    svg.transition().duration(0);

    overlay
      .on("mouseover", mouseover)
      .on("mouseout", mouseout)
      .on("mousemove", mousemove)
      .on("touchmove", mousemove);

    function mouseover() {
      label.classed("active", true);
    }

    function mouseout() {
      label.classed("active", false);
    }

    function mousemove() {
      displayYear(yearScale.invert(d3.mouse(this)[0]));
    }
  }

  // Tweens the entire chart by first tweening the year, and then the data.
  // For the interpolated data, the dots and label are redrawn.
  function tweenYear() {
    var year = d3.interpolateNumber(2005, 2014);
    return function(t) {
      displayYear(year(t));
    };
  }

  // Updates the display to show the specified year.
  function displayYear(year) {
    income_range.data(getData(String(Math.round(year)))).enter();
    // dot.data(interpolateData(year), key).call(position).sort(order);
    label.text(Math.round(year));
  }

  // Interpolates the dataset for the given (fractional) year.
  function interpolateData(year) {
    return nations.map(function(d) {
      return {
        name: d.name,
        region: d.region,
        income: interpolateValues(d.income, year),
        population: interpolateValues(d.population, year),
        lifeExpectancy: interpolateValues(d.lifeExpectancy, year)
      };
    });
  }
  //
  // var legend = svg.append("g")
  //   .attr("class", "legend")
  //   .attr("transform", function(d, i) {
  //     return "translate(900,0)";
  //   })
  //   .attr("x", 90)
  //   .attr("y", 29)
  //   .attr("height", 150)
  //   .attr("width", 100);
  // legend.selectAll("g").data(Object.keys(color_hash))
  //   .enter()
  //   .append('g')
  //   .each(function(d, i) {
  //     // console.log(d)
  //     var g = d3.select(this);
  //     g.append("rect")
  //       .attr("x", 90)
  //       .attr("y", i * 25 + 10)
  //       .attr("width", 10)
  //       .attr("height", 10)
  //       .style("fill", color_hash[d]);
  //
  //     g.append("text")
  //       .attr("x", 120)
  //       .attr("y", i * 25 + 20)
  //       .attr("height", 30)
  //       .attr("width", 100)
  //       .style("fill", color_hash[d])
  //       .text(d);
  //   });


});
