import { useState, useEffect } from "react";
import { Heading, VStack, Button, Input, Box } from "@chakra-ui/react";
import DynamicMenu from "../components/vip-made/image-menu";
import emailjs from 'emailjs-com';

function Home() {
  const [cwSelectedYear, setCWSelectedYear] = useState("");
  const [prmSelectedYear, setPRMSelectedYear] = useState("");
  const [prdSelectedYear, setPRDSelectedYear] = useState("");
  const [cwImage, setCWImage] = useState(<></>);
  const [prmImage, setPRMImage] = useState(<></>);
  const [prdImage, setPRDImage] = useState(<></>);
  const [email, setEmail] = useState("");
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  // Show the pop-up when the page loads
  useEffect(() => {
    setIsPopUpVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);

    emailjs.send(
      'service_jkdz769',       // Replace with your EmailJS Service ID
      'template_neioyij',      // Replace with your EmailJS Template ID
      { to_email: email },     // Variables to pass to your template
      'ItqHdhflsa05GtvCU'           // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setIsPopUpVisible(false);
    }, (error) => {
      console.error('Failed to send email:', error);
    });
  };

  const cwYears = [
    "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007",
    "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016",
    "2017", "2018", "2019", "2020", "2021", "2022",
  ];

  const prmYears = [
    "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018",
    "2019", "2020", "2021", "2022",
  ];

  const prdYears = ["2003-2007", "2008-2012", "2013-2017", "2018-2022"];

  return (
    <>
      <VStack p={16}>
        <Heading size={"5xl"}>T2DM Social Determinants in Georgia</Heading>

        <Heading size={"2xl"}>County-Wide Discharges 1999-2022</Heading>
        <DynamicMenu
          items={cwYears}
          setVal={setCWSelectedYear}
          setIm={setCWImage}
          dir={"_CountyWise_DischargesYearly_1999through2022"}
        />
        {cwImage}

        <Heading size={"2xl"}>Perinatal Mortality Trends 2010-2022</Heading>
        <DynamicMenu
          items={prmYears}
          setVal={setPRMSelectedYear}
          setIm={setPRMImage}
          dir={"PerinatalRegion_MortalityTrendMap_2010through2022"}
        />
        {prmImage}

        <Heading size={"2xl"}>
          Perinatal Number Discharges 5 Year Aggregate
        </Heading>
        <DynamicMenu
          items={prdYears}
          setVal={setPRDSelectedYear}
          setIm={setPRDImage}
          dir={"PerinatalRegion_NumberDischarges5YrAgg"}
        />
        {prdImage}

        {/* Button to Open Pop-Up */}
        <Box mt={10} ml={4}>
          <Button onClick={() => setIsPopUpVisible(true)} colorScheme="blue">
            Enter Your Email Here
          </Button>
        </Box>
      </VStack>

      {/* Custom Email Pop-Up */}
      {isPopUpVisible && (
        <>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              zIndex: 1000,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Heading size="md" mb={4}>
                Enter Your Email
              </Heading>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div style={{ marginTop: "10px", textAlign: "right" }}>
                <Button
                  type="submit"
                  colorScheme="blue"
                  style={{ marginRight: "10px" }}
                  isDisabled={!email}
                >
                  Submit
                </Button>
                <Button onClick={() => setIsPopUpVisible(false)}>Cancel</Button>
              </div>
            </form>
          </div>

          {/* Background Overlay */}
          <div
            onClick={() => setIsPopUpVisible(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
          />
        </>
      )}
    </>
  );
}

export default Home;