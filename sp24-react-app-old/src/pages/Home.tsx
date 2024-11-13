"use client"

import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Image from 'next/image'

function Home() {
    const [cwSelectedYear, setCWSelectedYear] = useState("");
    const [prmSelectedYear, setPRMSelectedYear] = useState("");
    const [prdSelectedYear, setPRDSelectedYear] = useState("");

    const cwYears=["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]

    const prmYears = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]

    const prdYears = ["2003-2007", "2008-2012", "2013-2017", "2018-2022"]

    interface DropdownProps {
        btnText: string;
        btnOptions: string[];
        onSelect: (year: string) => void;
    }

    const handleYearSelect = (year: string, setter: React.Dispatch<React.SetStateAction<string>>): void => {
        setter(year);
    };

    return (
        <div className="main">
            <h1>T2DM Social Determinants in Georgia</h1>

            <div className="section">
                <h2>County-Wide Discharges 1999-2022</h2>
                <Dropdown btnText="Year" btnOptions={ cwYears } onSelect={(year: string) => handleYearSelect(year, setCWSelectedYear)} />


                <div className="image-viz-display">
                { cwSelectedYear && (
                    <Image src={require(`../oasis_data/_CountyWise_DischargesYearly_1999through2022/${cwSelectedYear}.png`)} alt="text" height={500} width={500}/>
                )}
                
                </div>
            </div>

            <div className="section">
                <h2>Perinatal Mortality Trends 2010-2022</h2>
                <Dropdown btnText="Year" btnOptions={ prmYears } onSelect={(year: string) => handleYearSelect(year, setPRMSelectedYear)} />


                <div className="image-viz-display">
                { prmSelectedYear && (
                    <Image src={require(`../oasis_data/PerinatalRegion_MortalityTrendMap_2010through2022/${prmSelectedYear}.png`)} alt="text" height={500} width={500}/>
                )}
                
                </div>
            </div>

            <div className="section">
                <h2>Number of Deaths by SES Vulnerability</h2>
                <div className="image-viz-display">
                    <Image src={require(`../oasis_data/_GeorgiaState_MortalityTrendsbySES_2013through2022/NumberofDeaths_2013-2022.png`)} alt="text" height={700} width={700}></Image>
                </div>
                
            </div>

            <div className="section">
                <h2>Percent Discharges by Ethnicity</h2>
                <div className="image-viz-display">
                    <Image src={require(`../oasis_data/_GeorgiaState_PercentDischargebyEthnicity_1999through2022/PercentofDischargesbyCause_1999-2022.png`)} alt="text" height={700} width={700}></Image>
                </div>
                
            </div>

            <div className="section">
                <h2>Discharge Rate by Payor</h2>
                <div className="image-viz-display">
                    <Image src={require(`../oasis_data/GeorgiaState_DischargeRatebyPayor_1999through2022/DischargeRate_1999-2022.png`)} alt="text" height={700} width={700}></Image>
                </div>
                
            </div>

            <div className="section">
                <h2>Number of Deaths by Education</h2>
                <div className="image-viz-display">
                    <Image src={require(`../oasis_data/GeorgiaState_MortalityTrendsbyEdu_2013through2022/NumberofDeaths_2013-2022.png`)} alt="text" height={700} width={700}></Image>
                </div>
                
            </div>

            <div className="section">
                <h2>Perinatal Number Discharges 5 Year Aggregate</h2>
                <Dropdown btnText="Year" btnOptions={ prdYears } onSelect={(year: string) => handleYearSelect(year, setPRDSelectedYear)} />


                <div className="image-viz-display">
                { prdSelectedYear && (
                    <Image src={require(`../oasis_data/PerinatalRegion_NumberDischarges5YrAgg/${prdSelectedYear}.png`)} alt="text" height={500} width={500}/>
                )}</div>
                
            </div>

            
        </div>
    )
}

export default Home