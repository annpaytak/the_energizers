import{g as o,j as e,S as r,n as t,d as n,h as a,e as i,f as l}from"./index-a1c0e167.js";const s="/assets/emotional_circkle-d2c7ff10.png";function g(){return o(d,{id:"about",children:[o(m,{children:[e(r,{content:"01",children:"About"}),o(c,{children:[e("p",{children:"THE ENERGIZERS is an NFT collection where all elements symbolize feelings and emotions. This collection about human energy. Always unrepeatable, unique and different."}),e("p",{children:"They are 8 primary emotions: Joy, Acceptance, Fear, Surprise, Sadness, Disgust, Anger and Anticipation. Which are always interconnected and flow from each other."}),e("p",{children:"So our collection about us! About our emotional states and energy which we share to the world!"})]})]}),e(h,{src:s,alt:""})]})}const d=t.section`
  display: grid;
  height: 100%;
  background-color: ${n.black};
  padding-bottom: 3rem;

  color: ${n.white};
`,m=t.div`
  width: ${a};
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 2rem;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;

  @media (min-width: ${i.md}) {
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto;
  }
`,c=t.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media (min-width: ${i.md}) {
    margin-top: 0;
  }

  p {
    ${l({size:"1rem",color:"inherit",leading:1})};
  }

  p:first-of-type {
    margin: 0;
  }

  p:last-of-type {
    margin-top: 0;
  }
`,h=t.img`
  margin: auto;
  width: ${a};
  margin-bottom: 3rem;

  @media (min-width: ${i.md}) {
    width: 60vw;
  }
`;export{g as About};
