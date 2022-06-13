import BaseLayout from "@/components/Layout"
import { Container, Row, Col } from 'reactstrap';
import Image from "next/image";
import Typed from 'react-typed';
import { useGetUser } from '@/actions/user';

let ROLES  = ["Developer", "Tech Lover", "Team Player", "React JS", "Angular"]

export default function Home() {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout
    user={data}
    loading={loading}
    className="cover">
    <div className="main-section">
      <div className="background-image">
        {/* <img src="/images/background-index.png" /> */}
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
                  <img className="image" src="/images/section-1.png"/>
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
                Welcome to the portfolio website of Filip Jerga.
                Get informed, collaborate and discover projects I was working on through the years!
              </h1>
            </div>
            <Typed
              loop
              typeSpeed={70}
              backSpeed={70}
              strings={ROLES}
              backDelay={1000}
              loopCount={0}
              showCursor
              className="self-typed"
              cursorChar="|"
            />
            <div className="hero-welcome-bio">
              <h1>
                Lets take a look on my work.
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </BaseLayout>
  )
}
