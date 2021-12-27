<p align="center">
<img src="https://raw.githubusercontent.com/macheteHot/unocss-preset-scalpel/master/src/assets/logo.svg" style="width:100px;" />
</p>
<h1 align="center">unocss-preset-scalpel</h1>
<h3 align="center">Scalpel Preset for UnoCSS</h3>

[<img src="https://img.shields.io/npm/v/unocss-preset-scalpel">](https://npmjs.com/package/unocss-preset-scalpel)
[<img src="https://img.shields.io/node/v/unocss-preset-scalpel">](https://nodejs.org/en/about/releases/)
[<img src="https://github.com/macheteHot/unocss-preset-scalpel/actions/workflows/ci.yml/badge.svg">](https://github.com/macheteHot/unocss-preset-scalpel/actions/workflows/ci.yml)

>

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

use any colors and any unit with number

why we need memorize rules? like tailwindcss <del><code>w-1{width: 0.25rem;}</code></del>

why 1 mean 0.25 if need 0.25rem just write it ! like <code>w-0.25rem</code>

write atomic css like native css <code>width-0.25rem</code>

this preset usually write like native css, use <code>-</code> concat key value like <code>display-flex</code>

of course we has some shortcuts

## shortcuts

#### native css is sooooo long this preset define some shortcuts

| shortcut |      mean      | desc                          |
| :------: | :------------: | :---------------------------- |
|    m     |     margin     |                               |
|    p     |    padding     |                               |
|    w     |     width      |                               |
|    h     |     height     |                               |
|    t     |      top       |                               |
|    r     |     right      |                               |
|    b     |     bottom     |                               |
|    l     |      left      |                               |
|    x     | left and right |                               |
|    y     | top and bottom |                               |
|    m-    |   Minus sign   | negative number in some value |

## special unit

#### there are some special units

| unit |   mean   | desc                       |
| :--: | :------: | :------------------------- |
|  p   |    %     | percent eq %               |
|  v   | variable | usually used for px to rem |

## pesudo

use pesudo before any className

like this

|    pesudo     |               |                   |             |
| :-----------: | :-----------: | :---------------: | :---------: |
|   any-link    |     blank     |      checked      |   current   |
|    default    |    defined    |     disabled      |    drop     |
|     empty     |    enabled    |       first       | first-child |
| first-of-type |  fullscreen   |      future       |    focus    |
| focus-visible | focus-within  |       host        |    hover    |
| indeterminate |   in-range    |      invalid      |   active    |
|  last-child   | last-of-type  |       left        |    link     |
|  local-link   |  only-child   |   only-of-type    |  optional   |
| out-of-range  |     past      | placeholder-shown |  read-only  |
|  read-write   |   required    |       right       |    root     |
|    target     | target-within |   user-invalid    |    valid    |
|    visite     |     scope     |                   |             |

```html
<div class="hover:color-transparent">hover me to transparent</div>
```

### media query

> use media query before any className and pesudo
>
> > the default media query has <code>sm</code> <code>md</code> <code>lg</code> <code>xl</code>
> > like this

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
   * define color name
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
   * the default unit you can omitted
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
  // set all css has important
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

- ### width and height

  | Class          | Properties      |
  | :------------- | :-------------- |
  | w-0            | width:0;        |
  | w-20           | width:20px;     |
  | width-20       | width:20px;     |
  | w-0.25vh       | width:0.25vh    |
  | width-333.333p | width:333.333%  |
  | w-3.1415       | width:3.1415%   |
  | width-100v     | width:6.25rem   |
  | h-0            | height:0;       |
  | height-20      | height:20px;    |
  | h-20           | height:20px;    |
  | height-0.25vh  | height:0.25vh   |
  | h-333.333p     | height:333.333% |
  | height-3.1415  | height:3.1415%  |
  | h-100v         | height:6.25rem  |

- ### min max widht and height

  > add min- or max- before width or height

  | Class             | Properties        |
  | :---------------- | :---------------- |
  | min-w-0.25vh      | min-width:0.25vh  |
  | min-width-0.25vh  | min-width:0.25vh  |
  | max-h-0.25vh      | max-height:0.25vh |
  | max-height-0.25vh | max-height:0.25vh |

- ### square

  > use square set same width and height

  | Class         | Properties                 |
  | :------------ | :------------------------- |
  | square-25     | width:25px;height:25px;    |
  | square-0.25vh | width:0.25vh;height:0.25vh |

- ### margin and padding

  > set margin and padding with direction

  | Class       | Properties                              |
  | :---------- | :-------------------------------------- |
  | m-25        | margin:25px;                            |
  | p-25        | padding:25px;                           |
  | m-m-25      | margin:-25px;                           |
  | p-x-999vh   | padding-left:999vh;padding-right:999vh; |
  | m-l-0.25rem | margin-right:0.25rem;                   |

- ### alignItems

  > set align-items

  | Class                  | Properties              |
  | :--------------------- | :---------------------- |
  | align-items-baseline   | align-items:baseline;   |
  | align-items-center     | align-items:center;     |
  | align-items-end        | align-items:end;        |
  | align-items-flex-start | align-items:flex-start; |

- ### border

  > set border with direction  
  > use <code>border</code> or <code>border-w</code> or <code>border-width</code>

  > for visualization default has <code>border-style: solid</code> and <code>border-color: rgba(0,0,0,1)</code>

  | Class            | Properties                                    |
  | :--------------- | :-------------------------------------------- |
  | border-1         | border-width:1px                              |
  | border-x-3       | border-left-width:3px;border-right-width:3px; |
  | border-l-0       | border-left-width:0;                          |
  | border-r-1.25rem | border-right-width:1.25rem;                   |
  | border-w-2       | border-width:2px;                             |
  | border-width-0   | border-width:0;                               |

- ### border radius

  > set border-radius any number and unit  
  > use <code>br</code> or <code>border-radius</code>

  | Class             | Properties         |
  | :---------------- | :----------------- |
  | br-8              | border-radius:8px; |
  | border-radius-15% | border-radius:15%; |

- ### circle

  > set border-radius 50% is static preset

  | Class  | Properties         |
  | :----- | :----------------- |
  | circle | border-radius:50%; |

- ### box-sizing

  > set box-sizng

  | Class                  | Properties              |
  | :--------------------- | :---------------------- |
  | box-sizing-content-box | box-sizing:content-box; |
  | box-sizing-border-box  | box-sizing:border-box;  |

- ### color

  > Amazing! we can use all color by hex and set opacity, and you can define color name!  
  > support 3-digit and 6-digit and 8-digit (rgba) hex just copy from design darft like figma!! just copy it !  
  > color has some shortcut

  | Shortcut |     Desc     |
  | :------: | :----------: |
  |    c     |    color     |
  |   text   |    color     |
  |    bg    |  background  |
  | border-c | border-color |

  | Class               | Properties                         |
  | :------------------ | :--------------------------------- |
  | c-red               | color:rgba(255, 0, 0, 1)           |
  | text-f00-25         | background:rgba(255, 0, 0, 0.25)   |
  | color-#54a0ff       | color:rgba(84, 160, 255, 1)        |
  | bg-#fffc0140        | background:rgba(255, 252, 1, 0.25) |
  | background-10ac84   | background:rgba(16, 172, 132, 1)   |
  | border-c-000        | background:rgba(0, 0, 0, 1)        |
  | border-color-000-15 | background:rgba(0, 0, 0, 0.15)     |

- ### columnGap

  > set column-gap with any number unit or native value  
  > support native value is <code>unset</code> <code>initial</code> <code>inherit</code> <code>normal</code>

  | Class             | Properties          |
  | :---------------- | :------------------ |
  | column-gap-normal | column-gap:normal;  |
  | column-gap-0.25cm | column-gap:0.25cm;  |
  | column-gap-99999  | column-gap:99999px; |

- ### cursor

  > set cursor value  
  > rule is cursor-\<value\>

  | Class          | Properties      |
  | :------------- | :-------------- |
  | cursor-pointer | curosr:pointer; |
  | cursor-no-drop | curosr:no-drop; |

  > support values

  |    Value     |             |               |
  | :----------: | :---------: | :-----------: |
  |     auto     |   default   |     none      |
  | context-menu |    help     |    pointer    |
  |   progress   |    wait     |     cell      |
  |  crosshair   |    text     | vertical-text |
  |    alias     |    copy     |     move      |
  |   no-drop    | not-allowed |   e-resize    |
  |   n-resize   |  ne-resize  |   nw-resize   |
  |   s-resize   |  se-resize  |   sw-resize   |
  |   w-resize   |  ew-resize  |   ns-resize   |
  | nesw-resize  | nwse-resize |  col-resize   |
  |  row-resize  | all-scroll  |    zoom-in    |
  |   zoom-out   |    grab     |   grabbing    |

- ### display

  > set display value  
  > rule is <code>display-\<value\></code> or <code>d-\<value\></code>

  | Class        | Properties     |
  | :----------- | :------------- |
  | d-table      | display:table; |
  | display-flex | display:flex;  |

  > support values

  |    Value    |             |              |
  | :---------: | :---------: | :----------: |
  |    unset    |   revert    |   initial    |
  |   inherit   |  list-item  |  table-row   |
  |    table    |  contents   |     none     |
  |  flow-root  | inline-grid |     grid     |
  | inline-flex |    flex     | inline-block |
  |   inline    |    block    |              |

- ### flexBasis

  > set flex-basis use nonnegative number and unit or native

  | Class              | Properties          |
  | :----------------- | :------------------ |
  | flex-basis-1       | flex-basis:1px;     |
  | flex-basis-3.25rem | flex-basis:3.25rem; |
  | flex-basis-auto    | flex-basis:auto;    |

  > support values

  |  Value  |         |      |
  | :-----: | :-----: | :--: |
  | initial | inherit | auto |

- ### flex-direction

  > set flex-direction  
  > support shortcut <code>flex</code>

  | Class                      | Properties                     |
  | :------------------------- | :----------------------------- |
  | flex-direction-row         | flex-direction;row;            |
  | flex-direction-row-reverse | flex-direction;row-reverse;    |
  | flex-column                | flex-direction;column;         |
  | flex-column-reverse        | flex-direction;column-reverse; |

  > support values

  | Value |             |        |                |
  | :---: | :---------: | :----: | :------------: |
  |  row  | row-reverse | column | column-reverse |

  <!-- todo  -->

- ### flexJustAli

  > set display flex with justify-content with align-items in one className  
  > rule is <b>flex-\<justify>-\<align></b>

  | shortcut | desc          |
  | :------- | :------------ |
  | between  | space-between |
  | around   | space-around  |
  | evenly   | space-evenly  |

  > support values

  | justify values | align values |
  | :------------: | :----------: |
  |     center     |     auto     |
  |     center     |   baseline   |
  |     start      |    center    |
  |      end       |     end      |
  |   flex-start   |   flex-end   |
  |    flex-end    |  flex-start  |
  |      left      |   inherit    |
  |     right      |   initial    |
  | space-between  |    normal    |
  |    between     |   self-end   |
  |  space-around  |  self-start  |
  |     around     |    start     |
  |  space-evenly  |   stretch    |
  |     evenly     |    unset     |
  |    stretch     |              |
  |    inherit     |              |
  |    initial     |              |
  |     unset      |              |

  | normal

  | Class                    | Properties                                                                 |
  | :----------------------- | :------------------------------------------------------------------------- |
  | flex-center-center       | display:flex;<br />justify-content:center;<br />align-items:center;        |
  | flex-flex-start-flex-end | display:flex;<br />justify-content:flex-start;<br />align-items:flex-end;  |
  | flex-between-center      | display:flex;<br />justify-content:space-between;<br />align-items:center; |

- ### flex num

  > set sets how a flex <i>item</i> will grow or shrink to fit the space available in its flex container.  
  > like flex-\<number\> or native value

  | Class     | Properties |
  | :-------- | :--------- |
  | flex-0    | flex:0;    |
  | flex-1    | flex:1;    |
  | flex-999  | flex:999;  |
  | flex-auto | flex:auto; |

  > support native values

  | Value |      |      |
  | :---: | :--: | :--: |
  | null  | auto | none |

- ### flexShrinkAndGrow

  > set flex-shrink or flex-grow

  | Class               | Properties           |
  | :------------------ | :------------------- |
  | flex-shrink-20      | flex-shrink:20;      |
  | flex-grow-5         | flex-grow:5;         |
  | flex-shrink-initial | flex-shrink:initial; |

  > support native values

  |  Value  |
  | :-----: |
  | initial |
  | inherit |

# Add soon ...
