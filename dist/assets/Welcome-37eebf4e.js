import{j as r,a as n,n as t,f as s,c as x,r as i}from"./index-dcdb1750.js";import{E as v}from"./icons-2286d943.js";const w="/assets/homepage_1-4027e088.png",b="/assets/homepage_2-63cbb71c.png",y="/assets/homepage_3-50340c5b.png",z="/assets/homepage_4-4bae290a.png",I="/assets/homepage_5-a8c28cfb.png",H="/assets/homepage_6-09fe4e4d.png",p=[w,y,I],g=[b,z,H];function A(){const a=i.useRef(0),c=i.useRef(0),[m,f]=i.useState(0),[h,u]=i.useState(0);return i.useEffect(()=>(a.current=setInterval(()=>{f(e=>e===p.length-1?0:e+1)},2500),()=>{clearInterval(a.current)}),[m]),i.useEffect(()=>(c.current=setInterval(()=>{u(e=>e===g.length-1?0:e+1)},2650),()=>{clearInterval(c.current)}),[h]),r(_,{children:[n(E,{children:p.map((e,o)=>o===m&&n(l,{className:"active",src:e,alt:""},e))}),n(S,{children:g.map((e,o)=>o===h&&n(l,{className:"active",src:e,alt:""},e))})]})}function T(){return r(C,{id:"welcome",children:[n($,{children:"the energizers"}),n(R,{}),r(j,{children:["find and choose your ",n("br",{})," energizes!"]}),n(A,{})]})}const l=t.img`
  height: 0;

  transition: opacity 1s ease-out;
  transition-delay: 2500ms;
  opacity: 0;
  height: 0;
  overflow: hidden;

  &.active {
    opacity: 1;

    @media (min-width: 768px) {
      height: 100vh;
    }

    height: 50vh;
  }
`,d=t.div`
  position: absolute;
  margin: auto;
  top: 0%;
  bottom: 0;
  width: auto;
  height: fit-content;

  @media (min-width: 768px) {
    top: 5%;
  }
`,E=t(d)`
  left: 0;
`,S=t(d)`
  right: 0;
`,_=t.div`
  height: 100%;
`,$=t.h1`
  z-index: 2;
  position: relative;
  margin: 0;
  ${s({size:"10vw"})};
  text-align: center;
  text-transform: uppercase;

  // text biggest screen
  @media (min-width: 1536px) {
    ${s({size:"10rem"})};
  }
`,j=t.p`
  align-self: center;
  z-index: 1;
  margin: 0;
  ${s({size:"1.75rem"})};
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    ${s({size:"2.25rem"})};
  }
`,C=t.section`
  background-color: ${x.purple};

  position: relative;
  display: grid;
  grid-template-rows: 12vw 2fr 1fr;

  justify-items: center;
  padding-top: 4.75rem;

  height: calc(100vh - 50px);
`,R=t(v)`
  width: 73px;
  height: fit-content;

  @media (min-width: 768px) {
    width: 92px;
    height: 128px;
  }
`;export{T as Welcome};
