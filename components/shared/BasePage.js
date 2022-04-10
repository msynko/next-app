import { Container } from "reactstrap";

const BaseLayout = ({children, className }) => {
    return (
        <div className={`base-page ${className}`}>
            <Container>
                {children}
            </Container>
        </div>
    )
  }

export default BaseLayout;
