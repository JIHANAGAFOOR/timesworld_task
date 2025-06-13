import { Col, Container, Row, Button, Spinner } from "react-bootstrap";
import NavbarItem from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCountryData } from "../service";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { countryActions } from "../store/slice/country";
import ImageCarousel from "../components/Carousel/Carousel";
import type { RootState } from "../store";

const Home = () => {
  const dispatch = useDispatch();

  const { displayedCountries, hasMore, loadingMore } = useSelector(
    (state: RootState) => state.country
  );

  const loading = displayedCountries.length === 0;

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountryData();
        dispatch(countryActions.countryDataSelected(data));
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    getCountries();
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(countryActions.startLoadingMore());
    setTimeout(() => {
      dispatch(countryActions.loadMoreCountries());
    }, 500);
  };

  return (
    <div>
      <NavbarItem />
      <Container>
        <Row className="align-items-center d-none d-md-flex mb-4">
        
          <Col className="relative">
            <div className="absolute bottom-4 w-full border-t-2 " />
          </Col>

          {/* Center Heading */}
          <Col xs="auto">
            <h3 className="display-6 fw-bold px-4">WELCOME</h3>
          </Col>

         
          <Col className="relative">
            <div className="absolute top-2 w-[100%] border-t-2  right-4" />
          </Col>
        </Row>

        <div className="d-md-none text-center my-5">
          <div className=" border-1 mb-3" />
          <h2 className="display-4 fw-bold text-uppercase mb-3">WELCOME</h2>
          <div className=" border-1 mt-3" />
        </div>

        <Row className="mb-5">
          <Col sm={9} className="order-2 order-sm-1 mb-3 mb-sm-0">
            <div className="h-[40vh] w-[100%] flex">
              <ImageCarousel />
            </div>
          </Col>
          <Col sm={3} className="order-1 order-sm-2 mb-3 mb-sm-0">
            <div>
              <img
                src="https://img.freepik.com/free-photo/full-shot-woman-creating-vision-board_23-2150037642.jpg?uid=R182202618&ga=GA1.1.22162105.1725358686&semt=ais_hybrid&w=740"
                className="h-[40vh]"
              />
            </div>
          </Col>
        </Row>

        {/* Countries Cards */}
        <div className="mb-4">
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <>
              <Row className="mt-4">
                {displayedCountries.map((country, index) => (
                  <Col key={index} xs={12} md={6} className="mb-3">
                    <Card countryData={country} />
                  </Col>
                ))}
              </Row>

              {hasMore && (
                <Row className="mt-4">
                  <Col className="text-center">
                    <Button
                      variant="dark"
                      onClick={handleLoadMore}
                      disabled={loadingMore}
                      size="lg"
                      className="px-5 rounded-0"
                    >
                      {loadingMore ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          Loading...
                        </>
                      ) : (
                        "Load More"
                      )}
                    </Button>
                  </Col>
                </Row>
              )}

              {!hasMore && displayedCountries.length > 0 && (
                <Row className="mt-4">
                  <Col className="text-center">
                    <p className="text-muted">
                      You've reached the end! No more countries to load.
                    </p>
                  </Col>
                </Row>
              )}
            </>
          )}
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
