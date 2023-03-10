import{j as n,a as e,e as d,c as s,n as i,d as a,b as m,f as l}from"./index-370f9653.js";import{T as h}from"./config-ceeca765.js";import{T as p}from"./icons-73f352b2.js";const g="/assets/photo_1_ann-00b13878.jpg",f="/assets/photo_2_s-a3566833.jpg",x="/assets/photo_3_x-cb55e33b.jpg";function _(){return n(u,{id:"team",children:[e(d,{content:"05",children:"Team"}),n(b,{children:[n(t,{children:[e(r,{src:x}),e(o,{children:"Kristi"}),n(c,{children:[e("span",{children:"Founder"}),e("span",{children:"Graphic designer"}),e("span",{children:"Artist"}),e(T,{href:h,target:"_blank",children:e(p,{fill:s.black,width:"100%",height:"27px"})})]})]}),n(t,{children:[e(r,{src:f}),e(o,{children:"Sofi"}),n(c,{children:[e("span",{children:"Ceo"}),e("span",{children:"Graphic designer"}),e("span",{children:"Story teller"})]})]}),n(t,{children:[e(r,{src:g}),e(o,{children:"Ann"}),n(c,{children:[e("span",{children:"Frontend developer"}),e("span",{children:"Crypto enthusiast"})]})]})]})]})}const u=i.section`
  background-color: ${s.lightPink};
`,b=i.div`
  margin: auto;
  padding-top: ${a};
  padding-bottom: ${a};

  height: 100%;
  background-color: ${s.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${m.sm}) {
    flex-direction: row;
    align-items: flex-start;
  }
`,t=i.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 2rem;
`,r=i.img`
  width: 100%;
  max-width: 277px;
`,o=i.p`
  margin: 0;
  margin-top: 2rem;
  ${l({size:"1.125rem",color:"inherit"})};
  text-transform: uppercase;
`,c=i.p`
  margin: 0;
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${l({size:"0.9rem",color:"inherit"})};
`,T=i.a`
  margin-top: 1rem;
`;export{_ as Team};
