# jQuery Counter Up
A jQuery plugin to count up a number with start on element visible feature - [DOCS](https://bissolli.github.io/jquery-counter-up/)

[![npm](https://img.shields.io/npm/v/jquery-counter-up.svg)](https://www.npmjs.com/package/jquery-counter-up)
[![npm](https://img.shields.io/npm/dt/jquery-counter-up.svg)](https://www.npmjs.com/package/jquery-counter-up)
[![npm](https://img.shields.io/npm/l/jquery-counter-up.svg)](https://github.com/bissolli/jquery-counter-up/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/bissolli/jquery-counter-up.svg)](https://github.com/bissolli/jquery-counter-up/stargazers)
[![gzip size](http://img.badgesize.io/https://unpkg.com/jquery-counter-up?compression=gzip)](https://github.com/bissolli/jquery-counter-up)

## Getting Started

### 1. Install package using NPM or download it from the repository;
```bash
npm install jquery-counter-up --save
```

### 2. Require [jQuery](https://jquery.com/) and Counter-Up
```html
<script src="jquery.min.js"></script>
<script src="jquery.counterup.min.js"></script>
```
or
```javascript
require('jquery');
require('jquery-counter-up');
```

### 4. Add data attributes
```html
<span data-counter data-offset="100" data-duration="1000" data-delay="1000">400</span>
```
Through data properties you can set the following parameters:
| Prop | Type | Default | Note |
|---|---|---|---|
| `offset` | `String` | 200 | Element top offset (in pixels) based on view top offset to start the animation
| `duration` | `String` | 3000 | Time (in milliseconds) to count it up
| `delay` | `String` | 200 | Delay (in milliseconds) to start the animation as per the element becomes visible

### 5. Call Revealer
```javascript
$('[data-counter]').counterUp();
```


## JavaScript Options
```javascript
$('[data-counter]').counterUp({
    decimals: 0,
    decPoint: ".",
    thousandsSep: ","
});
```


## Methods
```javascript
$('[data-counter]').counterUp('bind');
```
