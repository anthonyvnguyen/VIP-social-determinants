import { useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import DynamicMenu from "../components/vip-made/image-menu";

function Home() {
  const [cwSelectedYear, setCWSelectedYear] = useState("");
  const [prmSelectedYear, setPRMSelectedYear] = useState("");
  const [prdSelectedYear, setPRDSelectedYear] = useState("");
  const [cwImage, setCWImage] = useState(<></>);
  const [prmImage, setPRMImage] = useState(<></>);
  const [prdImage, setPRDImage] = useState(<></>);

  const cwYears = [
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];

  const prmYears = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];

  const prdYears = ["2003-2007", "2008-2012", "2013-2017", "2018-2022"];

  return (

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
      </VStack>

  );
}

export default Home;
