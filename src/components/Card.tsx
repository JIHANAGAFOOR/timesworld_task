import { Card as BootstrapCard, Row, Col, Image } from "react-bootstrap";

type Country = {
  name: string;
  region: string;
  flag: string;
};

type CardProps = {
  countryData: Country;
};

const Card = ({ countryData }: CardProps) => {
  return (
    <BootstrapCard
      className="shadow-sm border border-dark mb-3 rounded-0"
      style={{ height: "120px" }}
    >
      <BootstrapCard.Body className="p-2 h-100">
        <Row className="h-100">
          <Col xs={4} md={4} className="h-100">
            <Image
              src={countryData.flag}
              alt={`${countryData.name} Flag`}
              fluid
              rounded
              className="object-cover rounded-0 w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col
            xs={8}
            md={8}
            className="d-flex flex-column justify-content-center align-items-start h-100"
          >
            <h5 className="mb-1">{countryData.name}</h5>
            <small className="text-muted">{countryData.region}</small>
          </Col>
        </Row>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
