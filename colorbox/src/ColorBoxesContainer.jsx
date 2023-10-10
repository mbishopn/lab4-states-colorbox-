/* 
lab 4 - REACT - States -
ID: 4362207
*/

import ColorBox from "./ColorBox";
export default function ColorBoxesContainer({colors})
{
    let arr1=['','','','','']; // why can't I use a for loop inside return?

    return(
        <>I'm the container
        <div style={{display:'flex',border:'solid 15px black',padding:'3px'}}>
             {arr1.map(() => (<div> {arr1.map(() => (<ColorBox colors={colors}/>))} </div>))}
        </div>
        </>
    )


//     Originally, as you instructed I put 5 <div> tags containing 5 ColorBox components like this one below,
//     but I was trying to find how to do it using loops, I couldn't find how to use a for inside return
//     
//     <div>
//     <ColorBox  colors={colors}/>
//     <ColorBox  colors={colors}/>
//     <ColorBox  colors={colors}/>
//     <ColorBox  colors={colors}/>
//     <ColorBox  colors={colors}/>
//     </div>

}
