import BaseLayout from "../components/shared/Layout"
import { Container, Row, Col } from 'reactstrap';
import Image from "next/image";
import Typed from 'react-typed';


let types = ["Developer", "Tech Lover", "Team Player", "React JS", "Angular"]
export default function Home() {
  return (
    <BaseLayout className="cover">
      <div className="main-section">
        <div className="background-image">
          <Image src="/images/background-index.png" layout="fill" objectFit='cover' alt="backgroundImage"/>
        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <Image className="image" src="/images/section-1.png" width="100%" height="100%" layout="responsive" objectFit="contain" alt="developer"/>
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome to the portfolio website of John Doe.
                  Get informed, collaborate and discover projects I was working on through the years!
                </h1>
              </div>
              <div className="hero-welcome-bio">
                <h1>
                <Typed
                    strings={types}
                    loop
                    typeSpeed={70}
                    backSpeed={70}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    className="self-typed"
                    cursorChar="|"
                />
                <br/>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  )
}
