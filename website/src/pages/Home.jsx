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
      <h1 className="d-flex">Maya Ramkishun's Website</h1>
      <Navbar></Navbar>
      <h2 className="d-flex">About Me</h2>
      <p>Hello! My name is Maya Ramkishun. As of August 2024, I'm proud to say I'm a certified full-stack engineer after attending the Marcy Lab School in Brooklyn, NY. The Marcy Lab School teaches many software engineering technologies to their fellows such as: JavaScript, HTML, CSS, React, and VS Code.</p>
      <h2 className="d-flex">My Projects</h2>
      <div className='d-inline-flex flex-row flex-wrap mb-3'>
        <Microlink className='m-2' url='https://github.com/marcy-capstone/physics-calculator' />
        <Microlink className='m-2' url='https://github.com/Wheeze-Watchers/wheeze-watchers-civic-tech' />
        <Microlink className='m-2' url='https://github.com/Maya-and-Moh-K/edible-adventures'/>
        <Microlink className='m-2 flex-fill' url='https://github.com/Maya-and-Cris-Supershow/Mod-4-Project' />
      </div>
      <h2 className="d-flex">My Journey</h2>
      <p>Growing up, I spent a lot of my time fixing and changing the settings in my parents' devices, from their phones and tablets to TVs and refrigerators. Fixing things around my house became a practice I began to look forward to, and I even took the liberty in further developing my problem solving and critical thinking skills by playing around with any option I discover in all types of device settings. Eventually, I discovered my love for programming in middle school, then continued exploring this passion by attending a Computer Science based charter school.</p>
      <p>Check out my <a href="https://github.com/mayayr115">Github!</a></p>
      <p>Check out my <a href="https://www.linkedin.com/in/mayaramkishun/">LinkedIn!</a></p>
      <p>Feel free to email me at <a href="mailto:mayaramkishuncsh2027@gmail.com">mayaramkishuncsh2027@gmail.com!</a></p>

    </>
  )
}

export default Home