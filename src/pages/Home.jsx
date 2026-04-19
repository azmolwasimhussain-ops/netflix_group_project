import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Banner />
            <section className="content">
                <Row title="Trending Now" />
                <Row title="Continue Watching" />
                <Row title="New Releases" />
            </section>
        </div>
    );
}

export default Home;
