

import "./about.css";

const About = () => {

    const exercise = () =>{
        console.log("testes testes 1, 2");

        const ages = [13,45,74,12,78,23,56,33,72,62,46,18,3,93,10];

        //find and console.log the sum of all ages
        //find oldest person

        let total = 0;

        for(let i=0; i < ages.length; i++){
            let num = ages[i];
            total += num;
        }
            console.log("congratulations!  you can click a button... ",total);
          
        };

    return(
        <div className="about-page">
            <h1>Cobblestone Studio</h1>
            <h5>Created by: Colin Ochs</h5>
            <div className="space">.</div>
            <button  type="button" className="btn btn-info" onClick={exercise}>Click Me!</button>
        </div>
    )

};

export default About;