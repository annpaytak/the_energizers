import{j as o,a as i,n as t,b as n,f as s,c as v,r}from"./index-bc3ec08d.js";import{E as x}from"./icons-ab667e2a.js";const $="/assets/homepage_1-4027e088.png",b="/assets/homepage_2-63cbb71c.png",y="/assets/homepage_3-50340c5b.png",z="/assets/homepage_4-4bae290a.png",I="/assets/homepage_5-a8c28cfb.png",H="/assets/homepage_6-09fe4e4d.png",d=[$,y,I],p=[b,z,H];function A(){const c=r.useRef(0),m=r.useRef(0),[h,u]=r.useState(0),[g,w]=r.useState(0);return r.useEffect(()=>(c.current=setInterval(()=>{u(e=>e===d.length-1?0:e+1)},2500),()=>{clearInterval(c.current)}),[h]),r.useEffect(()=>(m.current=setInterval(()=>{w(e=>e===p.length-1?0:e+1)},2650),()=>{clearInterval(m.current)}),[g]),o(_,{children:[i(E,{children:d.map((e,a)=>a===h&&i(l,{className:"active",src:e,alt:""},e))}),i(S,{children:p.map((e,a)=>a===g&&i(l,{className:"active",src:e,alt:""},e))})]})}function T(){return o(R,{id:"welcome",children:[i(j,{children:"the energizers"}),i(k,{}),o(C,{children:["find and choose your ",i("br",{})," energizes!"]}),i(A,{})]})}const l=t.img`
  height: 0;

  transition: opacity 1s ease-out;
  transition-delay: 2500ms;
  opacity: 0;
  height: 0;
  overflow: hidden;

  &.active {
    opacity: 1;

    @media (min-width: ${n.md}) {
      height: 80vh;
    }

    @media (min-width: ${n.lg}) {
      height: 100vh;
    }

    height: 50vh;
  }
`,f=t.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  width: auto;
  height: fit-content;

  @media (min-width: ${n.lg}) {
    top: 5%;
  }
`,E=t(f)`
  left: 0;
`,S=t(f)`
  right: 0;
`,_=t.div`
  height: 100%;
`,j=t.h1`
  z-index: 2;
  position: relative;
  margin: 0;
  ${s({size:"10vw"})};
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${n.xl}) {
    ${s({size:"8rem"})};
  }
`,C=t.p`
  align-self: center;
  z-index: 1;
  margin: 0;
  ${s({size:"1.75rem"})};
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${n.md}) {
    ${s({size:"2.25rem"})};
  }
`,R=t.section`
  background-color: ${v.purple};
  position: relative;
  display: grid;
  grid-template-rows: 12vw 2fr 1fr;
  justify-items: center;
  padding-top: 6rem;
  height: calc(100vh - 50px);

  @media (min-width: ${n.md}) {
    padding-top: 4.75rem;
    grid-template-rows: 12vw 3fr 1fr;
  }

  @media (min-width: ${n.lg}) {
    grid-template-rows: 12vw 2fr 2fr;
  }
`,k=t(x)`
  width: 73px;
  height: fit-content;

  @media (min-width: ${n.md}) {
    width: 92px;
    height: 128px;
  }
`;export{T as Welcome};
