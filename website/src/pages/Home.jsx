import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'
import Microlink from '@microlink/react';
import styled from 'styled-components';

function Home() {
  // const MyCustomCard = styled(Microlink)`
  // font-family: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace';
  // max-width: 100%;
  // border-radius: 0.42857em;
  // `
  return (
    <>
      <h1 className="d-flex justify-content-start">Maya Ramkishun's Website</h1>
      <Navbar></Navbar>
      <p>This is Maya.</p>
      <h2 className="d-flex justify-content-start">My Projects</h2>
      <div className='d-inline-flex p-2 flex-row mb-3'>
        <Microlink className='m-2' url='https://github.com/marcy-capstone/physics-calculator' />
        <Microlink className='m-2' url='https://github.com/Wheeze-Watchers/wheeze-watchers-civic-tech' />
        <Microlink className='m-2' url='https://github.com/Maya-and-Moh-K/edible-adventures'/>
        <Microlink className='m-2' url='https://github.com/Maya-and-Cris-Supershow/Mod-4-Project' />
      </div>
    </>
  )
}

export default Home