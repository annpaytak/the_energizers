import{j as i,a as e,S as c,n,c as t,d as o,i as r,h as l,b as d,f as h}from"./index-bc3ec08d.js";const m=["Website creation & launch","Growing Meaningful Community on Twitter & Discord","The energizers NFT Collection Mint","$ENRG Token creation","ENRG Token Launch",'Creating a Unique Gallery & Club "THE ENERGIZERS"',"Collaboration with artists and creating different art projects",'Publication and distribution of new projects "THE ENERGIZERS"','Сreating own universe of "THE ENERGIZERS"',"More to come"];function g(){return i(p,{id:"roadmap",children:[e(c,{content:"04",children:"Roadmap"}),e("table",{children:e("tbody",{children:m.map((s,a)=>i("tr",{children:[i(w,{children:[(a+1)*10,"%"]}),e(b,{children:s})]},a))})})]})}const p=n.section`
  background-color: ${t.black};
  padding-top: ${o};
  padding-bottom: ${o};

  h2 {
    margin-left: ${r};
    padding-bottom: ${o};
    width: ${l};
  }

  @media (min-width: ${d.md}) {
    h2 {
      padding-bottom: 5vw;
      width: fit-content;
    }
  }

  color: ${t.white};
`,w=n.td`
  width: auto;
  padding: 0.6rem;
  border-top: 1px solid ${t.white};
  border-bottom: 1px solid ${t.white};

  @media (min-width: ${d.sm}) {
    width: 17%;
    padding: 0.6rem;
    padding-left: ${r};
  }
`,b=n.td`
  width: auto;

  padding: 0.6rem;
  border-top: 1px solid ${t.white};
  border-bottom: 1px solid ${t.white};

  ${h({size:"1.125rem",color:"inherit"})};

  @media (min-width: ${d.sm}) {
    width: 83%;
  }

  & > span {
    text-transform: uppercase;
  }
`;export{g as Roadmap};
