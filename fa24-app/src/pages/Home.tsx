import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuItem,
  Heading,
  Image,
} from "@chakra-ui/react";

function Home() {
  const [cwSelectedYear, setCWSelectedYear] = useState("");
  const [prmSelectedYear, setPRMSelectedYear] = useState("");
  const [prdSelectedYear, setPRDSelectedYear] = useState("");

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

  const renderImage = (directory: string, year: string) => {
    if (!year) return null;
    const path = `/oasis_data/${directory}/${year}.png`;
    return <Image src={path} alt={year} height={500} width={500} />;
  };

  interface DropdownProps {
    btnText: string;
    btnOptions: string[];
    onSelect: (year: string) => void;
  }

  const handleYearSelect = (
    year: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    setter(year);
  };
  return (
    <div style={{ padding: "16px" }}>
      <Heading as="h1">T2DM Social Determinants in Georgia</Heading>
      <div className="section">
        <Heading as='h2'>County-Wide Discharges 1999-2022</Heading>
        <Dropdown
          btnText="Year"
          btnOptions={cwYears}
          onSelect={(year: string) => handleYearSelect(year, setCWSelectedYear)}
        />
        {renderImage(
          "_CountyWise_DischargesYearly_1999through2022",
          cwSelectedYear
        )}
      </div>

      <div className="section">
        <Heading as='h2'>Perinatal Mortality Trends 2010-2022</Heading>
        <Dropdown
          btnText="Year"
          btnOptions={prmYears}
          onSelect={(year: string) =>
            handleYearSelect(year, setPRMSelectedYear)
          }
        />
        {renderImage(
          "PerinatalRegion_MortalityTrendMap_2010through2022",
          prmSelectedYear
        )}
      </div>

      <div className="section">
        <Heading as='h2'>Perinatal Number Discharges 5 Year Aggregate</Heading>
        <Dropdown
          btnText="Year"
          btnOptions={prdYears}
          onSelect={(year: string) =>
            handleYearSelect(year, setPRDSelectedYear)
          }
        />
        {renderImage("PerinatalRegion_NumberDischarges5YrAgg", prdSelectedYear)}
      </div>
    </div>
  );
}

export default Home;
