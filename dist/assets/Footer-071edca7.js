import{g as i,j as t,d as r,n as e,i as d,e as o,m as a,f as n}from"./index-f4a535f1.js";import{T as s,D as c}from"./config-8411edbb.js";import{T as g,D as m}from"./icons-4d642a70.js";function b(){return i(h,{children:[i(w,{children:["Join us on Twitter ",t("br",{}),"and Discord"]}),i(p,{children:[t("span",{children:"@2023. TheEnergizers."}),t("span",{children:"All rights reserved!"})]}),i(f,{children:[t(l,{href:s,target:"_blank",children:t(g,{fill:r.white,width:"100",height:"86px"})}),t(l,{href:c,target:"_blank",children:t(m,{fill:r.white,width:"110",height:"86px"})})]})]})}const h=e.footer`
  padding-top: ${d};
  padding-bottom: ${d};

  background-color: ${r.black};
  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 2.2rem;

  @media (min-width: ${o.md}) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    padding-left: ${a};
    padding-right: ${a};
  }

  color: ${r.white};
`,w=e.p`
  ${n({size:"1.75rem",color:r.white})};
  text-transform: uppercase;
  text-align: center;
  margin: 0;

  grid-row-start: 1;
  grid-row-end: 2;

  @media (min-width: ${o.md}) {
    ${n({size:"2.25rem",color:r.white})};
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;

    text-align: left;
  }

  background-color: ${r.black};
  display: flex;
  flex-direction: column;

  color: ${r.white};
`,p=e.p`
  display: flex;
  ${n({size:"1.125rem",color:r.white})};
  text-align: center;
  margin: 0;

  grid-row-start: 3;
  grid-row-end: 4;

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
  background-color: ${r.black};
  display: flex;
  flex-direction: column;

  color: ${r.white};
`,f=e.div`
  width: 100%;
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  justify-content: center;
  background-color: ${r.black};

  @media (min-width: ${o.md}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;

    justify-content: flex-end;
  }
`,l=e.a`
  margin: 0.8rem 1.45rem;
  display: flex;
  align-items: center;
`;export{b as Footer};
