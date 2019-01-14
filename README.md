# jQuery Counter
A jQuery plugin to count up a number with start on element visible feature

[![npm](https://img.shields.io/npm/v/jquery-counter.svg)](https://www.npmjs.com/package/jquery-counter)
[![npm](https://img.shields.io/npm/dt/jquery-counter.svg)](https://www.npmjs.com/package/jquery-counter)
[![npm](https://img.shields.io/npm/l/jquery-counter.svg)](https://github.com/bissolli/jquery-counter/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/bissolli/jquery-counter.svg)](https://github.com/bissolli/jquery-counter/stargazers)
[![gzip size](http://img.badgesize.io/https://unpkg.com/jquery-counter?compression=gzip)](https://github.com/bissolli/jquery-counter)

## Getting Started

### 1. Install package using NPM or download it from the repository;
```bash
npm install jquery-counter --save
```

### 2. Require [jQuery](https://jquery.com/) and Counter
```html
<script src="jquery.min.js"></script>
<script src="jquery.counterup.min.js"></script>
```
or
```javascript
require('jquery');
require('jquery-counter');
```

### 4. Add data attributes
```html
<span data-counter data-offset="100" data-duration="1000" data-delay="1000">400</span>
```
Through data properties you can set the following parameters:

| Prop | Type | Default | Note
|---|---|---|---
| `offset` | `String` | 200 | Element top offset (in pixels) based on view top offset to start the animation
| `duration` | `String` | 3000 | Time (in milliseconds) to count it up
| `delay` | `String` | 200 | Delay (in milliseconds) to start the animation as per the element becomes visible

### 5. Call Counter
```javascript
$('[data-counter]').counter();
```


## JavaScript Options
```javascript
$('[data-counter]').counter({
    decimals: 0,
    decPoint: ".",
    thousandsSep: ","
});
```


## Methods
```javascript
$('[data-counter]').counter('bind');
```
