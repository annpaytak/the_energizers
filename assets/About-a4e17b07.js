import{j as o,a as e,S as r,n as t,c as i,h as n,b as a}from"./index-dcdb1750.js";const l="/assets/emotional_circkle-d2c7ff10.png";function p(){return o(s,{id:"about",children:[o(c,{children:[e(r,{content:"01",children:"About"}),o(d,{children:[e("p",{children:"THE ENERGIZERS is an NFT collection where all elements symbolize feelings and emotions. This collection about human energy. Always unrepeatable, unique and different."}),e("p",{children:"They are 8 primary emotions: Joy, Acceptance, Fear, Surprise, Sadness, Disgust, Anger and Anticipation. Which are always interconnected and flow from each other."}),e("p",{children:"So our collection about us! About our emotional states and energy which we share to the world!"})]})]}),e(m,{src:l,alt:""})]})}const s=t.section`
  display: grid;
  height: 100%;
  background-color: ${i.black};
  padding-bottom: 3rem;

  color: ${i.white};
`,c=t.div`
  width: ${n};
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 2rem;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;

  @media (min-width: ${a.md}) {
    width: 86vw;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`,d=t.div`
  display: flex;
  flex-direction: column;

  p:first-of-type {
    margin: 1.6rem 0 0;
  }

  p:last-of-type {
    margin-top: 0;
  }
`,m=t.img`
  margin: auto;
  width: ${n};
  margin-bottom: 3rem;

  @media (min-width: ${a.md}) {
    width: 60vw;
  }
`;export{p as About};
