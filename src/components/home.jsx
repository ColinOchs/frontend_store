<<<<<<< HEAD
import './home.css';
import { Link } from "react-router-dom"


const Home = () => {
    return (

        <div className='home-page'>
            <div className='bannerName'>
            <h1>Cobblestone Studio</h1>
            <h4>Creative Design Solutions</h4>
            </div>
            <div className='homeImage'>
            <img src="/images/4-frame.jpg" alt="check us out" className='homePic'></img>
            </div>
            <div className='invButton'>
            <Link to="/catalog" className='btn btn-outline-info'>
                Check out our catalog...
            </Link>
            </div>
        </div>
    )

}

=======
import './home.css';
import { Link } from "react-router-dom"


const Home = () => {
    return (

        <div className='home-page'>
            <div className='bannerName'>
            <h1>Cobblestone Studio</h1>
            <h4>Creative Design Solutions</h4>
            </div>
            <div className='homeImage'>
            <img src="/images/4-frame.jpg" alt="check us out" className='homePic'></img>
            </div>
            <div className='invButton'>
            <Link to="/catalog" className='btn btn-outline-info'>
                Check out our catalog...
            </Link>
            </div>
        </div>
    )

}

>>>>>>> 323943c13d6993301b94ca4eb51962f7e7c9bd9e
export default Home;