# README.md

## Preview HTML Chart
[HTML Preview provided by htmlpreview.github.io](https://htmlpreview.github.io/?https://github.com/hadleyrose/COVIDCases-D3/blob/master/covid_final.html)

## Background and Resources

This is my first attempt at creating a d3.js interactive multi-line chart. I will be following along with **these tutorials**:

* [d3.js Line Chart Tutorial from datawanderings](http://datawanderings.com/2019/10/28/tutorial-making-a-line-chart-in-d3-js-v-5/)
* [d3.js Interactive Line Chart Tutorial from datawanderings](http://datawanderings.com/2019/11/01/tutorial-making-an-interactive-line-chart-in-d3-js-v-5/)
* [Combining Python and d3.js from Towards Data Science](https://towardsdatascience.com/combining-python-and-d3-js-to-create-dynamic-visualization-applications-73c87a494396)
* [Flask and d3.js from RealPython](https://realpython.com/web-development-with-flask-fetching-data-with-requests/)

to recreate [this chart](https://ourworldindata.org/grapher/covid-confirmed-cases-since-100th-case). My goal is to add more functionality, such as date filters and dynamic data, as I become better versed in d3.

I just learned the basics of d3.js from [this source](https://square.github.io/intro-to-d3/) and [this source](https://www.freecodecamp.org/news/learn-d3-js-in-5-minutes-c5ec29fb0725/). While I have a background in HTML and CSS, I do not know javascript and do not use it regularly (see: self-proclaimed Pythonista in LinkedIn headline). This project is for learning purposes only and is not intended to inform in any way on the COVID-19 crisis.

**UPDATE**: [a server is required, even if just local, for csv files to be accessible to the fetch API](https://stackoverflow.com/a/58129062).

**2020-04-02:** I had some issues with the code from datawanderings. I will focus on adapting parts of that code with other examples and tutorials to chart my data. Specifically, I'll be adapting [this gist](https://gist.github.com/mbostock/3884955) to my data.

**csv loading is async**: [d3 v5 uses fetch API](https://stackoverflow.com/a/49604124) and [an interesting blog post that helped in my learning](http://tech4teaching.net/several-things-i-learned-when-using-d3-js-to-import-and-parse-csv-file/)

[Good tutorial on d3 scale](http://www.d3noob.org/2012/12/setting-scales-domains-and-ranges-in.html)

[Walkthrough - @razpudding's d3 multiline chart](https://observablehq.com/@razpudding/d3-multi-line-chart)

[Great link for filtering an array of arrays](https://stackoverflow.com/a/53115809)

**Note:** using Live Server extension in VS Code for development.

**2020-04-04** Finally got a functional chart with appropriate axes! The World line is really stealing the focus of the viz, so I'm going to filter out any data with 'World' as the entity. Additionally, to better match the original chart, I'm going to filter out any data where Total Confirmed Cases is not greater than or equal to 100.

**2020-04-06** Added tooltip to display the number of cases for each data point on hover. The tooltip is a little laggy and needs to be further edited to fit my purposes. I want to incorporate "ghost lines" in the next iteration, where all lines are grey until hovered over.