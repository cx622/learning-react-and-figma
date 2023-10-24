import './Section1.css'
import Featbtn from './items/featbtn'

export default function Section1() {
  return (
    <div id='spacer'>
      <div id='section1'>
        <div className='top'>
          <div>
            <h1>We offer a range of innovative solutions</h1>
          </div>
          <div>
            <p>Our solutions can help our clients to automate their operations, optimize their workflows, and transform their businesses.</p>
          </div>
        </div>
        <hr></hr>
        <div className='bottom'>
            <div className='left'>
              <Featbtn width="13.75rem" message="Predictive analytics"/>
              <div className='flex'>
              <Featbtn width="12rem" message="AI development"/>
              <Featbtn width="9.75rem" message="Industry 4.0"/>
              </div>
            <div className='flex'>
              <Featbtn width="11.0625rem" message="Deep Learning"/>
              <Featbtn width="10.375rem" message="Neural networks"/>
              <Featbtn width="7.9375rem" message="Big data"/>
            </div>
            </div>
            <div className="right">
              <h2>Meet the CtF</h2>
              <p>Our team of skilled developers and engineers has expertise in a variety of cutting-edge technologies, including machine learning, natural language processing, computer vision, and robotics.</p>
            </div>
        </div>
      </div>
    </div>
    )
}