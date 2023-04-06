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

why we need memorize rules? like tailwind css <del><code>w-1{width: 0.25rem;}</code></del>

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

## important

use end with <code>!</code> className toggle <code>!important</code>

## pseudo

use pseudo before any className

like this

|    pseudo     |               |                   |             |
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

> use media query before any className and pseudo
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
  // ignore some rules like ['flexBasis']
  ignoreRules:[],
  // convert unit v
  vToAny: {
    unit: 'rem', // convert v to rem
    rootValue: 16, // value ÷ this
    unitPrecision: 5,
    minPixelValue: 1,
  },

}
```

## How to use

- ### width and height

  > support shortcut <code>w</code> <code>h</code>

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

- ### min max width and height

  > add min- or max- before width or height  
  > support shortcut <code>w</code> <code>h</code>

  | Class             | Properties        |
  | :---------------- | :---------------- |
  | min-w-0.25vh      | min-width:0.25vh  |
  | min-width-0.25vh  | min-width:0.25vh  |
  | max-h-0.25vh      | max-height:0.25vh |
  | max-height-0.25vh | max-height:0.25vh |

- ### square

  > use square set same width and height

  | Class         | Properties                      |
  | :------------ | :------------------------------ |
  | square-25     | width:25px;<br/>height:25px;    |
  | square-0.25vh | width:0.25vh;<br/>height:0.25vh |

- ### margin and padding

  > set margin and padding with direction  
  > this value has <b>negative number</b>  
  > support shortcut <code>m</code> <code>p</code> <code>m-</code> <code>t</code> <code>r</code> <code>b</code> <code>l</code> <code>x</code> <code>y</code>

  | Class       | Properties                                   |
  | :---------- | :------------------------------------------- |
  | m-25        | margin:25px;                                 |
  | p-25        | padding:25px;                                |
  | m-m-25      | margin:-25px;                                |
  | p-x-999vh   | padding-left:999vh;<br/>padding-right:999vh; |
  | m-l-0.25rem | margin-right:0.25rem;                        |

- ### border

  > set border with direction  
  > use <code>border</code> or <code>border-w</code> or <code>border-width</code>

  | Class            | Properties                                         |
  | :--------------- | :------------------------------------------------- |
  | border-1         | border-width:1px                                   |
  | border-x-3       | border-left-width:3px;<br/>border-right-width:3px; |
  | border-l-0       | border-left-width:0;                               |
  | border-r-1.25rem | border-right-width:1.25rem;                        |
  | border-w-2       | border-width:2px;                                  |
  | border-width-0   | border-width:0;                                    |

- ### border-style

  > set border-style  
  > support shortcut <code>border</code>

  | Class              | Properties           |
  | :----------------- | :------------------- |
  | border-style-solid | border-style:solid;  |
  | border-dotted      | border-style:dotted; |

  > enum values

  | Value  |         |        |
  | :----: | :-----: | :----: |
  |  none  | hidden  | dotted |
  | dashed |  solid  | double |
  | groove |  ridge  | inset  |
  | outset | inherit |   -    |

- ### border-radius

  > set border-radius any number and unit  
  > use <code>br</code> or <code>border-radius</code>  
  > support shortcut <code>t</code> <code>l</code> <code>r</code> <code>b</code> <code>tl</code> <code>lt</code> <code>tr</code> <code>rt</code> <code>bl</code> <code>lb</code> <code>br</code> <code>rb</code>

  | Class             | Properties                                                       |
  | :---------------- | :--------------------------------------------------------------- |
  | br-8              | border-radius:8px;                                               |
  | border-radius-15% | border-radius:15%;                                               |
  | br-t-50%          | border-top-left-radius:50%;<br/>border-top-right-radius:50%;     |
  | br-l-20           | border-top-left-radius:20px;<br/>border-bottom-left-radius:20px; |
  | br-bl-3           | border-bottom-left-radius:3px;                                   |

- ### circle

  > set border-radius 50% is static preset

  | Class  | Properties         |
  | :----- | :----------------- |
  | circle | border-radius:50%; |

- ### box-sizing

  > set box-sizing

  | Class                  | Properties              |
  | :--------------------- | :---------------------- |
  | box-sizing-content-box | box-sizing:content-box; |
  | box-sizing-border-box  | box-sizing:border-box;  |

- ### color

  > Amazing! we can use all color by hex and set opacity, and you can define color name!  
  > has special value <b>transparent</b>  
  > use 3-digit and 6-digit and 8-digit (rgba) hex just copy from design draft like figma!! just copy it !  
  > color has some shortcut

  | Shortcut |     Desc     |
  | :------: | :----------: |
  |    c     |    color     |
  |   text   |    color     |
  |    bg    |  background  |
  | border-c | border-color |
  |  border  | border-color |

  | Class               | Properties                          |
  | :------------------ | :---------------------------------- |
  | c-red               | color:rgba(255, 0, 0, 1);           |
  | c-transparent       | color:transparent;                  |
  | text-f00-25         | background:rgba(255, 0, 0, 0.25);   |
  | color-#54a0ff       | color:rgba(84, 160, 255, 1);        |
  | bg-#fffc0140        | background:rgba(255, 252, 1, 0.25); |
  | background-10ac84   | background:rgba(16, 172, 132, 1);   |
  | border-000          | background:rgba(0, 0, 0, 1);        |
  | border-color-000-15 | background:rgba(0, 0, 0, 0.15);     |

- ### cursor

  > set cursor value  
  > rule is cursor-\<value\>

  | Class          | Properties      |
  | :------------- | :-------------- |
  | cursor-pointer | cursor:pointer; |
  | cursor-no-drop | cursor:no-drop; |

  > enum values

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

  > enum values

  |    Value    |             |              |
  | :---------: | :---------: | :----------: |
  |    unset    |   revert    |   initial    |
  |   inherit   |  list-item  |  table-row   |
  |    table    |  contents   |     none     |
  |  flow-root  | inline-grid |     grid     |
  | inline-flex |    flex     | inline-block |
  |   inline    |    block    |              |

- ### flex-basis

  > set flex-basis use nonnegative number and unit or native

  | Class              | Properties          |
  | :----------------- | :------------------ |
  | flex-basis-1       | flex-basis:1px;     |
  | flex-basis-3.25rem | flex-basis:3.25rem; |
  | flex-basis-auto    | flex-basis:auto;    |

  > enum values

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

  > enum values

  | Value |             |        |                |
  | :---: | :---------: | :----: | :------------: |
  |  row  | row-reverse | column | column-reverse |

- ### flex with justify-content and align-items

  > set display flex with justify-content with align-items in one className  
  > rule is <b>flex-\<justify>-\<align></b>

  | shortcut | desc          |
  | :------- | :------------ |
  | between  | space-between |
  | around   | space-around  |
  | evenly   | space-evenly  |

  > enum values

  | justify values | align values |
  | :------------: | :----------: |
  |     center     |     auto     |
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
  |    stretch     |   baseline   |
  |    inherit     |              |
  |    initial     |              |
  |     unset      |              |

  | normal

  | Class                    | Properties                                                                 |
  | :----------------------- | :------------------------------------------------------------------------- |
  | flex-center-center       | display:flex;<br />justify-content:center;<br />align-items:center;        |
  | flex-flex-start-flex-end | display:flex;<br />justify-content:flex-start;<br />align-items:flex-end;  |
  | flex-between-center      | display:flex;<br />justify-content:space-between;<br />align-items:center; |

- ### align-items

  > set align-items enum values look ⬆

  | Class                  | Properties              |
  | :--------------------- | :---------------------- |
  | align-items-baseline   | align-items:baseline;   |
  | align-items-center     | align-items:center;     |
  | align-items-end        | align-items:end;        |
  | align-items-flex-start | align-items:flex-start; |

- ### justify-content

  > set justify-content enum values look ⬆

  | Class                   | Properties                     |
  | :---------------------- | :----------------------------- |
  | justify-content-left    | justify-content:left;          |
  | justify-content-between | justify-content:space-between; |

- ### flex-num

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

- ### flex-shrink and flex-grow

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

- ### flex-wrap

  > set flex-wrap  
  > support shortcut <code>flex</code>

  | Class          | Properties      |
  | :------------- | :-------------- |
  | flex-wrap-wrap | flex-wrap:wrap; |

  > enum values

  |    Value     |
  | :----------: |
  |   inherit    |
  |   initial    |
  |    nowrap    |
  |     wrap     |
  | wrap-reverse |

- ### font-size

  > set font size  
  > support shortcut <code>fs</code>

  | Class          | Properties        |
  | :------------- | :---------------- |
  | font-size-12   | flex-wrap:12px;   |
  | font-size-5rem | flex-wrap:5rem;   |
  | fs-0.22vh      | flex-wrap:0.22vh; |

- ### font-weight

  > set font weight  
  > support shortcut <code>fw</code>

  | Class              | Properties          |
  | :----------------- | :------------------ |
  | font-weight-bolder | font-weight:bolder; |
  | fw-100             | font-weight:100;    |

  > enum values

  |  Value  |         |         |
  | :-----: | :-----: | :-----: |
  |   100   |   200   |   300   |
  |   400   |   500   |   600   |
  |   700   |   800   |   000   |
  |  bold   | bolder  | inherit |
  | initial | lighter | normal  |
  |  unset  |         |         |

- ### gap

  > set column-gap and row-gap in one className

  | Class      | Properties                             |
  | :--------- | :------------------------------------- |
  | gap-0      | column-gap:0;<br/>row-gap:0;           |
  | gap-25.5p  | column-gap:25.5%;<br/>row-gap:25.5%;   |
  | gap-15%    | column-gap:15%;<br/>row-gap:15%;       |
  | gap-normal | column-gap:normal;<br/>row-gap:normal; |

  > enum values

  |  Value  |
  | :-----: |
  |  unset  |
  | initial |
  | inherit |
  | normal  |

- ### column-gap

  > set column-gap with any number unit or native value
  > support shortcut <code>c-gap</code>

  | Class             | Properties          |
  | :---------------- | :------------------ |
  | column-gap-normal | column-gap:normal;  |
  | c-gap-0.25cm      | column-gap:0.25cm;  |
  | c-gap-99999       | column-gap:99999px; |

  > enum values same [gap](#gap) ⬆️

- ### row-gap

  > set row-gap with any number unit or native value  
  > support shortcut <code>r-gap</code>  
  > support native value is <code>unset</code> <code>initial</code> <code>inherit</code> <code>normal</code>

  | Class          | Properties       |
  | :------------- | :--------------- |
  | r-gap-normal   | row-gap:normal;  |
  | row-gap-0.25cm | row-gap:0.25cm;  |
  | r-gap-99999    | row-gap:99999px; |

  > enum values same [gap](#gap) ⬆️

- ### letter-spacing

  > set letter spacing use any number and unit  
  > this value has <b>negative number</b>

  | Class                      | Properties                |
  | :------------------------- | :------------------------ |
  | letter-spacing-3.1415rem   | letter-spacing:3.1415rem  |
  | letter-spacing-m-3.1415rem | letter-spacing:-3.1415rem |
  | letter-spacing-9999px      | letter-spacing:9999px     |

- ### line-height

  > set line height use nonnegative number and any unit
  > support shortcut <code>lh</code>

  | Class          | Properties           |
  | :------------- | :------------------- |
  | lh-0.25rem     | line-height:0.25rem; |
  | line-height-20 | line-height:20px;    |

- ### object-fit

  > set object file

  | Class              | Properties          |
  | :----------------- | :------------------ |
  | object-fit-fill    | object-fit:fill;    |
  | object-fit-contain | object-fit:contain; |

  > enum values

  |  Value  |            |         |
  | :-----: | :--------: | :-----: |
  |  fill   |  contain   |  cover  |
  |  none   | scale-down | inherit |
  | initial |   revert   |  unset  |

- ### opacity

  > set opacity (1 to 100 ) ÷ 100

  | Class      | Properties   |
  | :--------- | :----------- |
  | opacity-20 | opacity:0.2  |
  | opacity-55 | opacity:0.55 |

- ### orientation

  > set orientation with any number any unit  
  > this value has <b>negative number</b> use <code>-m</code>  
  > support shortcut <code>t</code> <code>r</code> <code>b</code> <code>l</code> <code>-m</code>

  | Class          | Properties       |
  | :------------- | :--------------- |
  | t-20           | top:20px;        |
  | bottom-3.14rem | bottom:3.14rem;  |
  | b-m-3.14rem    | bottom:-3.14rem; |
  | r-m-60vh       | right:-60vh;     |

- ### overflow

  > set overflow-x or overflow-y

  | Class             | Properties         |
  | :---------------- | :----------------- |
  | overflow-x-scroll | overflow-x:scroll; |
  | overflow-y-auto   | overflow-y:auto;   |

  > enum values

  |  Value  |
  | :-----: |
  | hidden  |
  |  auto   |
  | visible |
  | scroll  |
  | inherit |

- ### position

  > set position

  | Class             | Properties         |
  | :---------------- | :----------------- |
  | position-sticky   | position:sticky;   |
  | position-absolute | position:absolute; |
  | position-fixed    | position:fixed;    |

  > enum values

  |  Value  |          |        |
  | :-----: | :------: | :----: |
  | static  | relative | sticky |
  |  unset  | absolute | fixed  |
  | inherit | initial  |   -    |

- ### text-align

  > set text-align
  > support shortcut <code>text</code>

  | Class              | Properties          |
  | :----------------- | :------------------ |
  | text-center        | text-align:center;  |
  | text-align-justify | text-align:justify; |

  > enum values

  |    Value     |        |         |
  | :----------: | :----: | :-----: |
  |    start     |  end   |  left   |
  |    right     | center | justify |
  | match-parent |   -    |    -    |

- ### text-align-last

  > set text-align-last
  > support shortcut <code>text-last</code>

  | Class                 | Properties              |
  | :-------------------- | :---------------------- |
  | text-last-center      | text-align-last:center; |
  | text-align-last-start | text-align-last:start;  |

  > enum values

  | Value  |         |         |
  | :----: | :-----: | :-----: |
  |  auto  |  left   |  right  |
  | center | justify |  start  |
  |  end   | initial | inherit |

- ### text-decoration

  > set text-decoration
  > support shortcut <code>text</code>

  | Class                    | Properties                 |
  | :----------------------- | :------------------------- |
  | text-underline           | text-decoration:underline; |
  | text-decoration-overline | text-decoration:overline;  |

  > enum values

  |    Value     |           |          |
  | :----------: | :-------: | :------: |
  |     none     | underline | overline |
  | line-through |   blink   | inherit  |

- ### text-ellipsis

  > set ellipsis support multiline
  > support shortcut <code>ellipsis</code>

  | Class           | Properties                                                                                                                           |
  | :-------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
  | ellipsis        | overflow: hidden;<br/>text-overflow: ellipsis;<br/>white-space: nowrap                                                               |
  | ellipsis-2      | overflow: hidden;<br/>text-overflow: ellipsis;<br/>display: -webkit-box;<br/>-webkit-line-clamp:2;</br>-webkit-box-orient: vertical; |
  | text-ellipsis-5 | overflow: hidden;<br/>text-overflow: ellipsis;<br/>display: -webkit-box;<br/>-webkit-line-clamp:5;</br>-webkit-box-orient: vertical; |

- ### user-select

  > set user-select
  > support shortcut <code>select</code>

  | Class       | Properties   |
  | :---------- | :----------- |
  | select-auto | select:auto; |
  | select-none | select:none; |

  > enum values

  | Value |         |         |
  | :---: | :-----: | :-----: |
  | none  |  auto   |  text   |
  |  all  | contain | element |

- ### visibility

  > set visibility

  | Class              | Properties          |
  | :----------------- | :------------------ |
  | visibility-visible | visibility:visible; |
  | visibility-hidden  | visibility:hidden;  |

  > enum values

  |  Value  |         |          |
  | :-----: | :-----: | :------: |
  | visible | hidden  | collapse |
  | inherit | initial |  revert  |
  |  unset  |    -    |    -     |

- ### word-break

  > set word-break

  | Class                | Properties            |
  | :------------------- | :-------------------- |
  | word-break-break-all | word-break:break-all; |
  | word-break-keep-all  | word-break:keep-all;  |

  > enum values

  |   Value    |           |          |
  | :--------: | :-------: | :------: |
  |   normal   | break-all | keep-all |
  | break-word |  inherit  | initial  |
  |   unset    |     -     |    -     |

- ### z-index

  > set z-index with number  
  > this value has <b>negative number</b>

  | Class         | Properties     |
  | :------------ | :------------- |
  | z-index-0     | z-index:0;     |
  | z-index-1     | z-index:1;     |
  | z-index-m-5   | z-index:-5;    |
  | z-index-99999 | z-index:99999; |
