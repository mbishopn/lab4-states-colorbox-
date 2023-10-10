import { useState } from "react";

export default function ColorBox({colors}){

    const [colorBox,setcolorBox]=useState(-1); // useed to keep track and set box color 
    const [counter,setCounter]=useState(0); // I use this to count the clicks on each box
    //console.log(colors)
    //let num=() =>  Math.ceil(Math.random()*20)-1; // this was my first approach to pass a parameter for setcolorBox 
    //                                              // then I remembered I could use this directly to define setcolorBox function
     console.log(colorBox )  // why when I click on a box I got 2 diferent values?
    return(
        <div    style={{fontSize:'8px',  // still hard to understand what and how can be written inside return
                        width:'50px',
                        height:'50px',
                        backgroundColor: colors[colorBox < 0 ? setcolorBox(() =>  Math.ceil(Math.random()*20)-1):colorBox]}}
                onClick={()=>{setcolorBox(() =>  Math.ceil(Math.random()*20)-1); setCounter(counter + 1)}}  >
        {/*
                   Clicks : {counter}<br/>       
                   Index :  {colorBox}<br/>
                   HexColor: {colors[colorBox]}
         */}
        </div>
        )

}