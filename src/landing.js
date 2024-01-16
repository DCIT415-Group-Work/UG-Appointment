import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import './styles/landing.css'
const Landing = () => {
    return(
        <main>
            <header>
                <Navbar/>
            </header>
            <section>
                <div className="landing">
                    <h2>Book an appointment</h2>
                    <h4>Book private sessions with your lecturers with bookit</h4>
                </div>
                <div>
                    <Link to='/login'>
                    <button>Book now</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Landing;