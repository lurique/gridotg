![version](https://lhenrique.com.br/img/gridotg/version.svg)
![release](https://lhenrique.com.br/img/gridotg/release.svg)
![dependencies](https://lhenrique.com.br/img/gridotg/dependencies.svg)
![license](https://lhenrique.com.br/img/gridotg/license.svg)

# Grid On-The-Go
Grid On-The-Go - A simple powerful grid system for modern browsers

---
## How to install
This frameworks is available on Github and Npm, you can either download via cli or clone the github repository.

Installing via npm:
```{r, engine='bash', count_lines}
npm install gridotg --save
```
Installing via github (via HTTPS):
```{r, engine='bash', count_lines}
git clone https://github.com/lurique/gridotg.git
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

**NOTE**: The *row* needs to be inside container and with one of the additional classes listed above. Inside the row needs to be the columns in the same amount as the class described in row.

---

## Elements
Documentation will be coming soon, below are all elements listed in this framework:
* Buttons
* Forms
* Tables

---
## Components
The components below don't have specific documentation about them, only the HTML code. The components have some javascript on it (and it's your option to use)

You could use the javascript by just adding ***data-script="name of script"*** on your parent element. - See below for JS documentation.

### Navbar
```html
<nav class="navbar navbar-default navbar-fixed-top" id="default-navbar" data-script="Navbar">
  <div class="navbar-open" data-navbar="default-navbar"><span class="bar"></span><span class="bar"></span><span class="bar"></span></div>
  <div class="navbar-items with-three-columns has-uppercase-text">
    <div class="is-aligned-left">
      <ul>
        <li><a href="#" rel="bookmark" title="GridOTG">GridOTG</a></li>
      </ul>
    </div>
    <div class="is-aligned-center">
      <ul>
        <li class="dropdown"><a href="#" rel="bookmark" title="Documentation">Docs</a>
          <ul>
            <li><a href="#" rel="bookmark" title="Items">Items</a></li>
            <li><a href="#" rel="bookmark" title="Modal">Modal</a></li>
          </ul>
        </li>
        <li><a href="#" rel="bookmark" title="News">News</a></li>
        <li><a href="#" rel="bookmark" title="Contribute">Contribute</a></li>
      </ul>
    </div>
    <div class="is-aligned-right">
      <ul>
        <li><a href="#" target="_blank" rel="noopener" title="Github">Github</a></li>
        <li><a href="#" target="_blank" rel="noopener" title="Codepen">Codepen</a></li>
        <li><a href="#" target="self" rel="bookmark" title="Download">Download</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### Footer
```html
<footer class="footer footer-default">
  <div class="container is-fullwidth">
    <div class="row with-two-columns">
      <div class="column is-aligned-left">
        <p>2017 &copy; GridOTG - All rights reserved.</p>
      </div>
      <div class="column is-aligned-right">
        <p>Created by <a href="#">Lucas Henrique</a></p>
      </div>
    </div>
  </div>
</footer>
```

### Modal
```html
<div class="modal modal-default" id="modal-announcement" data-script="Modal">
  <div class="modal-content">
    <div class="modal-header">
      <h1>Modal annoucement</h1><a class="modal-close" href="#"><span class="bar"></span><span class="bar"></span></a>
    </div>
    <div class="modal-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut assumenda ullam, autem possimus? Sint voluptatibus mollitia quibusdam, culpa neque ducimus voluptas totam animi obcaecati velit aspernatur optio. Assumenda, sapiente, enim?</p>
    </div>
    <div class="modal-footer is-aligned-right">
      <button class="modal-close button button-error">No</button>
      <button class="modal-close button button-success">Yes</button>
    </div>
  </div>
</div>
<button class="modal-open button button-default" data-modal="modal-announcement">Open modal</button>
```

### Toast
```html
<div class="toast toast-success active" data-script="Toast"><a class="toast-close" href="#"><span class="bar"></span><span class="bar"></span></a>
  <div class="toast-content">
    <p>This is a toast example</p>
  </div>
</div>
```

### Panel
```html
<div class="container">
  <div class="row with-one-column">
    <div class="column">
      <div class="panel panel-default">
        <div class="panel-header">
          <h1>Panel heading</h1>
        </div>
        <div class="panel-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit minima perspiciatis aperiam, necessitatibus reprehenderit, consequuntur, id dolores sequi enim facilis rem ullam! Repellendus aut, eum nihil cumque velit veniam eveniet.</p>
        </div>
        <div class="panel-footer is-aligned-right">
          <button class="button button-success">Accept</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Javascript
Documentation coming soon (code already available).

---

### Some notes

YES! It's already responsive (*~~kinda~~*).

---
### Author
| [<img src="https://avatars0.githubusercontent.com/u/18560758?v=4&u=a081aceab30289c595d3a0a6acf96e13d12fbc8a&s=115"><br><sub>@lurique</sub>](https://github.com/lurique) |
| :---: |
