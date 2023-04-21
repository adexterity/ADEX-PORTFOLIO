import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/headerImg.svg";
import { Typewriter } from "react-simple-typewriter";

export const Banner = () => {
  /*  const [loopNum, setLoopNum] = useState(0); //this signifies the index of the word displayed on the screen
  const [isDeleting, setIsDeleting] = useState(false); //to know is the word is being typed out or deleted
  const toRotate = ["web Developer", "web Designer", "Illustrator"]; //list of all the words to be displayed
  const [text, setText] = useState[""]; //this indicate the portion of the word to be displayed
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000; // it indicates arbitrarily how much time passes out as each word is being typed out

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);
 */
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {"Hello, I'm Adex "} <br /> {"I'm a "}
              <span className="wrap">
                <Typewriter
                  words={["web developer", "illustrator", "web designer"]}
                  loop={true}
                  cursor={true}
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p>
              This is some dummy placehoder text. it is used as a dummy to fill
              some part of my portfolio website and it is meant to look good.
            </p>
            <button
              onClick={() => {
                console.log("connect");
              }}
            >
              Let's Connect <ArrowRightCircle />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={headerImg}
              alt="an illustration of a man in front of a computer"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
