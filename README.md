# README.md

## Background and Resources

This is my first attempt at creating a d3.js interactive multi-line chart. I will be following along with **these tutorials**:

* [d3.js Line Chart Tutorial from datawanderings](http://datawanderings.com/2019/10/28/tutorial-making-a-line-chart-in-d3-js-v-5/)
* [d3.js Interactive Line Chart Tutorial from datawanderings](http://datawanderings.com/2019/11/01/tutorial-making-an-interactive-line-chart-in-d3-js-v-5/)
* [Combining Python and d3.js from Towards Data Science](https://towardsdatascience.com/combining-python-and-d3-js-to-create-dynamic-visualization-applications-73c87a494396)
* [Flask and d3.js from RealPython](https://realpython.com/web-development-with-flask-fetching-data-with-requests/)

to recreate [this chart](https://ourworldindata.org/grapher/covid-confirmed-cases-since-100th-case). My goal is to add more functionality, such as date filters and dynamic data, as I become better versed in d3.

I just learned the basics of d3.js from [this source](https://square.github.io/intro-to-d3/) and [this source](https://www.freecodecamp.org/news/learn-d3-js-in-5-minutes-c5ec29fb0725/). While I have a background in HTML and CSS, I do not know javascript and do not use it regularly (see: self-proclaimed Pythonista in LinkedIn headline). This project is for learning purposes only and is not intended to inform in any way on the COVID-19 crisis.

**2020-04-02:** The code from datawanderings did not work for me, even the original code did not work. I will focus on adapting other examples and tutorials to chart my data. Specifically, I'll be adapting [this gist](https://gist.github.com/mbostock/3884955) to my data. **UPDATE**: [a server is required, even if just local, for csv files to be accessible to the fetch API](https://stackoverflow.com/a/58129062).

**csv loading is async**: [d3 v5 uses fetch API](https://stackoverflow.com/a/49604124) and [an interesting blog post that helped in my learning](http://tech4teaching.net/several-things-i-learned-when-using-d3-js-to-import-and-parse-csv-file/)

[Good tutorial on d3 scale](http://www.d3noob.org/2012/12/setting-scales-domains-and-ranges-in.html)

[Walkthrough - @razpudding's d3 multiline chart](https://observablehq.com/@razpudding/d3-multi-line-chart)

**Note:** using Live Server extension in VS Code