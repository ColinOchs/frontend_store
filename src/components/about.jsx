

import "./about.css";

const About = () => {

    const exercise = () =>{
        console.log("Welcome to the console");

        const ages = [13,45,74,12,78,23,56,33,72,62,46,18,3,93,10];

        //find and console.log the sum of all ages
        //find oldest person

        let total = 0;

        for(let i=0; i < ages.length; i++){
            let num = ages[i];
            total += num;
        }
            console.log("congratulations!  you can click a button... You will go far in life.",total);
          
        };

    return(
        <div className="about-page">
            <h1>Cobblestone Studio</h1>
            <h5>Created by: Colin Ochs</h5>
            <div className="space">Check out all this invisible text!</div>
            <div className="history">
            Cobblestone Studio was established in 1832 in rural Loudoun County, Virginia, by Lord Wellington, the Earl of Duquesne.  Originally a collection of small animal prints he collected in his barn, the studio branched out to feature more local artists of the region. It has since flourished and become the premier source of design inspiration for millions of creatives and uncreatives alike.  Check out our great inventory.  Behold it's glory, Behold!!!</div>
            <button  type="button" className="btn btn-info" onClick={exercise}>Click Me!</button>
        </div>
    )

};

export default About;