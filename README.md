![build](https://travis-ci.org/lurique/gridotg.svg?branch=master)
![release](https://lhenrique.com.br/img/gridotg/release.svg)

# Grid On-The-Go
Grid On-The-Go - A simple powerful grid system for modern browsers (BETA)

---
## How to install
This frameworks is available on Github and Npm, you can either download via cli or clone the github repository.

Installing via npm:
```{r, engine='bash', count_lines}
npm install gridotg --save
```
Now you've downloaded it, you can compile the file ***main.scss*** under ***SCSS*** folder or copy the compiled version of it under ***CSS*** folder (***gridotg.min.css***).

---
## Grids
After compiling / copying the compiled file, just import it in the header of your website.

You'll need to create a ***container*** to be able to use rows and columns.
Inheritance will be explained below:

```html
<div class="container">
  <div class="row with-three-columns">
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
  </div>
</div>
```

**Remember: If you set "with-three-columns", the column count needs to be exactly 3, or it'll not work.**

The gridotg comes with twelve columns system, and you can call it like the demo above or follow the cheatsheet with all classes below:

```css
# List of standalone classes
.container
.row
.column

# List of classes for container
.is-fullwidth

# List of classes for row
.with-one-column
.with-two-columns
.with-three-columns
.with-four-columns
.with-five-columns
.with-six-columns
.with-seven-columns
.with-eight-columns
.with-nine-columns
.with-ten-columns
.with-eleven-columns
.with-twelve-columns

# List of classes for column
.is-1
.is-2
.is-3
.is-4
.is-5
.is-6
.is-7
.is-8
.is-9
.is-10
.is-11
.is-12
```

**NOTE**: The *row* needs to be inside container and with one of the additional classes listed above. Inside the row needs to be the columns in the same amount as the class described in row. (Updates coming soon!)

---
### Author
| [<img src="https://avatars0.githubusercontent.com/u/18560758?v=4&u=a081aceab30289c595d3a0a6acf96e13d12fbc8a&s=115"><br><sub>@lurique</sub>](https://github.com/lurique) |
| :---: |
