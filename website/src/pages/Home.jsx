import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
    <div className="d-flex justify-content-start">
      <h1>Maya Ramkishun's Website</h1>
    </div>
      <Navbar></Navbar>
      <p>This is Maya.</p>
    </>
  )
}

export default Home