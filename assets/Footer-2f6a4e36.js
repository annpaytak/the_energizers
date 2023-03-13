import{j as r,g as i,d as e,n as t,i as a,e as o,f as n}from"./index-a1c0e167.js";import{T as l,D as s}from"./config-8411edbb.js";import{T as m,D as c}from"./icons-b86f8087.js";function T(){return r(g,{children:i(p,{children:[i(f,{children:["Join us on Twitter ",r("br",{}),"and Discord"]}),i(h,{children:[r("span",{children:"@2023. TheEnergizers."}),r("span",{children:"All rights reserved!"})]}),i(w,{children:[r(d,{href:l,target:"_blank",children:r(m,{fill:e.white,width:"100",height:"86px"})}),r(d,{href:s,target:"_blank",children:r(c,{fill:e.white,width:"110",height:"86px"})})]})]})})}const g=t.div`
  padding: ${a} 4rem;
  background-color: ${e.black};
`,p=t.footer`
  width: fit-content;
  margin: auto;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  row-gap: 2.2rem;

  @media (min-width: ${o.md}) {
    grid-template-columns: minmax(24rem, 35rem) minmax(18rem, 22rem);
    grid-template-rows: auto auto;
  }
`,f=t.p`
  grid-row-start: 1;
  grid-row-end: 2;

  ${n({size:"1.75rem",color:e.white})};
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: ${o.md}) {
    ${n({size:"2.25rem",color:e.white})};
    text-align: left;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`,h=t.p`
  grid-row-start: 3;
  grid-row-end: 4;

  ${n({size:"1.125rem",color:e.white})};
  text-align: center;
  margin: 0;
  display: flex;
  flex-direction: column;

  & > span:first-of-type {
    margin-right: 0.4rem;
  }

  @media (min-width: ${o.md}) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;

    display: inline;
    text-align: left;
  }
`,w=t.div`
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: center;

  display: flex;
  background-color: ${e.black};

  @media (min-width: ${o.md}) {
    justify-self: end;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`,d=t.a`
  margin: 0.8rem 0;
  display: flex;
  align-items: center;

  &:first-of-type {
    padding-right: 1.45rem;
  }
  &:last-of-type {
    padding-left: 1.45rem;
  }
`;export{T as Footer};
