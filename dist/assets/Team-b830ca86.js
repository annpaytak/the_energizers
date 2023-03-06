import{j as i,a as e,e as m,c as n,n as r,d as s,b as o,f as d}from"./index-dcdb1750.js";import{T as h}from"./config-ceeca765.js";import{E as t,T as p}from"./icons-2286d943.js";function b(){return i(f,{id:"team",children:[e(m,{content:"05",children:"Team"}),i(g,{children:[i(a,{children:[e(t,{fill:n.aquaGreen}),e(l,{children:"Sofi"}),i(c,{children:[e("span",{children:"Ceo"}),e("span",{children:"Graphic designer"}),e("span",{children:"Story teller"})]})]}),i(a,{children:[e(t,{fill:n.purple}),e(l,{children:"Kristi"}),i(c,{children:[e("span",{children:"Founder"}),e("span",{children:"Graphic designer"}),e("span",{children:"Artist"}),e(x,{href:h,target:"_blank",children:e(p,{fill:n.black,width:"100%",height:"27px"})})]})]}),i(a,{children:[e(t,{fill:n.pink}),e(l,{children:"Ann"}),e(c,{children:" Developer"})]})]})]})}const f=r.section`
  background-color: ${n.lightPink};
`,g=r.div`
  margin: auto;
  padding-top: ${s};
  padding-bottom: ${s};

  height: 100%;
  background-color: ${n.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media (min-width: ${o.sm}) {
    flex-direction: row;
  }
`,a=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &:first-of-type,
  &:last-of-type {
    margin: 0 3.2rem;
  }
  margin: 3.2rem;
  max-width: unset;

  @media (min-width: ${o.md}) {
    max-width: 15vw;
  }

  @media (min-width: ${o.sm}) {
    margin: 0;
  }
`,l=r.p`
  margin: 0;
  margin-top: 2rem;
  ${d({size:"1.125rem",color:"inherit"})};
  text-transform: uppercase;
`,c=r.p`
  margin: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${d({size:"0.9rem",color:"inherit"})};
`,x=r.a`
  margin-top: 1rem;
`;export{b as Team};
