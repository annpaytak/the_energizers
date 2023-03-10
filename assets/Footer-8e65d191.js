import{j as e,a as t,n as o,d,c as r,b as i,i as a,f as n}from"./index-bd279ba7.js";import{a as c,D as s}from"./config-ceeca765.js";import{NavIconLink as l}from"./Header-b228761b.js";import{T as g,D as m}from"./icons-8e739c4e.js";function k(){return e(h,{children:[e(p,{children:["Join us on Twitter ",t("br",{}),"and Discord"]}),e(w,{children:[t("span",{children:"@2023. TheEnergizers."}),t("span",{children:"All rights reserved!"})]}),e(f,{children:[t(l,{href:c,target:"_blank",children:t(g,{width:"100%",height:"86px"})}),t(l,{href:s,target:"_blank",children:t(m,{width:"100%",height:"86px"})})]})]})}const h=o.footer`
  padding-top: ${d};
  padding-bottom: ${d};

  background-color: ${r.black};
  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 2.2rem;

  @media (min-width: ${i.md}) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    padding-left: ${a};
    padding-right: ${a};
  }

  color: ${r.white};
`,p=o.p`
  ${n({size:"1.75rem",color:r.white})};
  text-transform: uppercase;
  text-align: center;
  margin: 0;

  grid-row-start: 1;
  grid-row-end: 2;

  @media (min-width: ${i.md}) {
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
`,w=o.p`
  display: flex;
  ${n({size:"1.125rem",color:r.white})};
  text-align: center;
  margin: 0;

  grid-row-start: 3;
  grid-row-end: 4;

  & > span:first-of-type {
    margin-right: 0.4rem;
  }

  @media (min-width: ${i.md}) {
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
`,f=o.div`
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  justify-content: center;
  background-color: ${r.black};
  color: ${r.white};

  & > a {
    padding: 0.45rem 1.45rem;
    color: ${r.white};
  }

  @media (min-width: ${i.md}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;

    justify-content: flex-end;
  }
`;export{k as Footer};
