# unocss-preset-scalpel

[<img src="https://img.shields.io/npm/v/unocss-preset-scalpel">](https://npmjs.com/package/unocss-preset-scalpel)
[<img src="https://img.shields.io/node/v/unocss-preset-scalpel">](https://nodejs.org/en/about/releases/)
[<img src="https://github.com/macheteHot/unocss-preset-scalpel/actions/workflows/ci.yml/badge.svg">](https://github.com/macheteHot/unocss-preset-scalpel/actions/workflows/ci.yml)

> Scalpel Preset for UnoCSS 

## Installation
```sh
npm i unocss-preset-scalpel unocss --save-dev # with npm
yarn add unocss-preset-scalpel unocss -D # with yarn
pnpm add unocss-preset-scalpel unocss -D # with pnpm
```

## Usage

```js

import { defineConfig } from 'unocss'
import { presetScalpel } from 'unocss-preset-scalpel'

export default defineConfig({
  presets: [
    presetScalpel({
      // config 
    }),
  ],
})
```

## why Scalpel
Atomic css should scalpel-like precision

you can use any colors and any unit with number 

why you need memorize rules? like tailwindcss <del><code>w-1{width: 0.25rem;}</code></del>

why 1 mean 0.25 if you need 0.25rem just write it ! like <code>w-0.25rem</code>

you can write like native css <code>width-0.25rem</code> 

Usually you can write like native css use <code>-</code> concat key value like <code>display-flex</code>

of course you can use some shortcuts

## shortcuts
#### native css is sooooo long this preset define some shortcuts 

| shortcut | mean | desc |
| :---: | :----: | :--- |
| m | margin | |
| p | padding | |
| w | width | |
| h | height | |
| t | top | |
| r | right | |
| b | bottom | |
| l | left | |
| x | left and right | |
| y | top and bottom | |
| m- | Minus sign | negative number in some value  |

## special unit
#### there are some special units 
| unit | mean | desc |
| :---: | :----: | :--- |
| p | % | percent eq % |
| v | variable | usually used for px to rem |


## pesudo
you can pesudo before any className   
<code>active</code> <code>any-link</code> <code>blank</code> <code>checked</code> <code>current</code> <code>default</code> <code>defined</code> <code>disabled</code> <code>drop</code> <code>empty</code> <code>enabled</code> <code>first</code> <code>first-child</code> <code>first-of-type</code> <code>fullscreen</code> <code>future</code> <code>focus</code> <code>focus-visible</code> <code>focus-within</code> <code>host</code> <code>hover</code> <code>indeterminate</code> <code>in-range</code> <code>invalid</code> <code>last-child</code> <code>last-of-type</code> <code>left</code> <code>link</code> <code>local-link</code> <code>only-child</code> <code>only-of-type</code> <code>optional</code> <code>out-of-range</code> <code>past</code> <code>placeholder-shown</code> <code>read-only</code> <code>read-write</code> <code>required</code> <code>right</code> <code>root</code> <code>scope</code> <code>target</code> <code>target-within</code> <code>user-invalid</code> <code>valid</code> <code>visite</code>   
like this
```html
<div class="hover:color-transparent">hover me to transparent</div>
```

### media query
> you can use media query before any className and pesudo 
>> the default media query has <code>sm</code> <code>md</code> <code>lg</code> <code>xl</code>
like this

```html
<div class="md@hover:color-transparent">hover me to transparent</div>
<div class="md@color-f00 xl@color-red color-blue"></div>
```

## Configurations
config object like this 

```js 
// this is preset default value
{
  /**
   * you can define color name 
   * also you can just use hex 
   */
  colors:{
    red: '#f00',
    white: '#fff',
    black: '#000',
    blue: '#00f',
    yellow: '#ff0',
    transparent: 'transparent',
    // diyColor:'#30336b' 
  },
  /**
   * the default unit you canm omitted 
   * like width-1 mean this unit ⬇
   */
  unit:'px',
  /**
   * write you like mediaQuery 
   */
  mediaQueries:{
    sm: 'media (min-width: 640px)',
    md: 'media (min-width: 768px)',
    lg: 'media (min-width: 1024px)',
    xl: 'media (min-width: 1280px)',
    // supportGrid: 'supports (display: grid)'
  },
  // all css has important 
  important:false,
  // convert unit v 
  vToAny: {
    unit: 'rem', // convert v to rem
    rootValue: 16, // value ÷ this 
    unitPrecision: 5, 
    minPixelValue: 1,
  },

}
```

## rule and use demo

+ width and height

  | Class | Properties |
  | :--- |   :----   |
  | w-0  | width:0; |
  | w-20  | width:20px; |
  | width-20  | width:20px; |
  | w-0.25vh  | width:0.25vh |
  | width-333.333p  | width:333.333%  |
  | w-3.1415  | width:3.1415%  |
  | width-100v  | width:6.25rem  |
  | h-0  | height:0; |
  | height-20  | height:20px; |
  | h-20  | height:20px; |
  | height-0.25vh  | height:0.25vh |
  | h-333.333p  | height:333.333%  |
  | height-3.1415  | height:3.1415%  |
  | h-100v  | height:6.25rem  |
    
+ min max widht and height   
    >add min- or max- before width or height  

  | Class | Properties |
  | :--- |   :----   |
  | min-w-0.25vh  | min-width:0.25vh |
  | min-width-0.25vh  | min-width:0.25vh |
  | max-h-0.25vh  | max-height:0.25vh |
  | max-height-0.25vh  | max-height:0.25vh |
    
+ square
  > use square set same width and height 

  | Class | Properties |
  | :--- |   :----   |
  | square-25  | width:25px;height:25px; |
  | square-0.25vh  | width:0.25vh;height:0.25vh |

 

+ margin and padding
  > set margin and padding with direction

  | Class | Properties |
  | :--- |   :----   |
  | m-25  | margin:25px; |
  | p-25  | padding:25px; |
  | m-m-25  | margin:-25px; |
  | p-x-999vh  | padding-left:999vh;padding-right:999vh; |
  | m-l-0.25rem  | margin-right:0.25rem; |

+ alignItems
  > set align-items

  | Class | Properties |
  | :--- |   :----   |
  | align-items-baseline   | align-items:baseline; |
  | align-items-center     | align-items:center; |
  | align-items-end        | align-items:end; |
  | align-items-flex-start | align-items:flex-start; |

+ border 
  > set border with direction   
  > use <code>border</code> or <code>border-w</code> or <code>border-width</code>    

  > for visualization default has <code>border-style: solid</code> and <code>border-color: rgba(0,0,0,1)</code>

  | Class | Properties |
  | :--- |   :----   |
  | border-1 | border-width:1px |
  | border-x-3 | border-left-width:3px;border-right-width:3px; |
  | border-l-0 | border-left-width:0; |
  | border-r-1.25rem | border-right-width:1.25rem; |
  | border-w-2 | border-width:2px; |
  | border-width-0 | border-width:0; |

+ border radius
  > set border-radius any number and unit   
  > you can use <code>br</code> or <code>border-radius</code>   

  | Class | Properties |
  | :--- |   :----   |
  | br-8 | border-radius:8px; |
  | border-radius-15% | border-radius:15%; |

+ circle
  > set border-radius 50% is static preset

  | Class | Properties |
  | :--- |   :----   |
  | circle | border-radius:50%; |

+ box-sizing
  > set box-sizng

  | Class | Properties |
  | :--- |   :----   |
  | box-sizing-content-box | box-sizing:content-box; |
  | box-sizing-border-box | box-sizing:border-box; |

+ color 
  > Amazing! you can use all color by hex and set opacity, and you can define color name!   
  > support 3bit and 6bit and 8bit(rgba) hex just copy design like figma!! just copy it !   
  > color has some shortcut 

  | shortcut | mean | 
  | :---: | :---: | 
  | c | color |
  | text | color |
  | bg | background |
  | border-c | border-color |

  | Class | Properties |
  | :--- |   :----  |
  | c-red | color:rgba(255, 0, 0, 1)|
  | text-f00-25 | background:rgba(255, 0, 0, 0.25)|
  | color-#54a0ff | color:rgba(84, 160, 255, 1)|
  | bg-#fffc0140 | background:rgba(255, 252, 1, 0.25)|
  | background-10ac84 | background:rgba(16, 172, 132, 1)|
  | border-c-000 | background:rgba(0, 0, 0, 1)|
  | border-color-000-15 | background:rgba(0, 0, 0, 0.15)|

 <!-- todo  -->
 # Add soon ...

