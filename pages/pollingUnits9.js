import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "../styles/wards.module.css";
import resultStyle from "../styles/resultStyle.module.css";
import apc from "../public/apc.png";
import Data from "../Components/ElectionData";

const pollenUnits = () => {
  const [dropResult, setDropResult] = useState(null);
  let dataa = Data.kosofe[8];

  const openResults = (i) => {
    if (!dropResult) {
      setDropResult(i);
    } else if (dropResult === i) {
      setDropResult(null);
    } else setDropResult(i);
    console.log(dropResult);
  };

  const ward1 = {
    wardNo: dataa.wardNo,
    wardName: dataa.wardName,
  };

  const pollingUnits = dataa.pollingUnits;

  return (
    <div className={Style.ward1}>
      <div className={Style.wards_box}>
        <div className={Style.wards_box_head}>
          <Image
            className={Style.wards_box_head_img}
            src={apc}
            alt="apc-logo"
            width={50}
            height={50}
          />
          <h2>{ward1.wardName} Polling Units</h2>
        </div>
        <div className={Style.wards_box_wards}>
          {pollingUnits.map((pollingUnit, i) => (
            <p
              className={Style.wards_box_ward}
              onClick={() => openResults(i + 1)}
            >
              {pollingUnit.PU_No}
              {"."} {"  "} {pollingUnit.PU_Name}
              {dropResult === i + 1 ? (
                <div className={Style.resultDisplay}>
                  <h3>{pollingUnit.PU_Name} RESULT SUMMARY</h3>

                  <div className={resultStyle.pres}>
                    <h4>PRESIDENTIAL</h4>
                    <p>
                      APC: {pollingUnit.Result.Presidential.APC}, PDP:{" "}
                      {pollingUnit.Result.Presidential.PDP}, LP:
                      {pollingUnit.Result.Presidential.LP}, NNPP:{" "}
                      {pollingUnit.Result.Presidential.NNPP}, ADC:{" "}
                      {pollingUnit.Result.Presidential.ADC},
                    </p>
                  </div>

                  <div className={resultStyle.pres}>
                    <h4>LAGOS EAST SENETORIAL</h4>
                    <p>
                      APC: {pollingUnit.Result.LagosEastSenatorial.APC}, PDP:{" "}
                      {pollingUnit.Result.LagosEastSenatorial.PDP}, LP:
                      {pollingUnit.Result.LagosEastSenatorial.LP}, NNPP:{" "}
                      {pollingUnit.Result.LagosEastSenatorial.NNPP}, ADC:{" "}
                      {pollingUnit.Result.LagosEastSenatorial.ADC},
                    </p>
                  </div>

                  <div className={resultStyle.pres}>
                    <h4>HOUSE OF REPRESENTATIVE</h4>
                    <p>
                      APC: {pollingUnit.Result.HouseOfRepresentative.APC}, PDP:{" "}
                      {pollingUnit.Result.HouseOfRepresentative.PDP}, LP:
                      {pollingUnit.Result.HouseOfRepresentative.LP}, NNPP:{" "}
                      {pollingUnit.Result.HouseOfRepresentative.NNPP}, ADC:{" "}
                      {pollingUnit.Result.HouseOfRepresentative.ADC},
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>

        <p>WARD SUMMARY</p>
        <div className={resultStyle.resultDisplay}>
          <h3>{ward1.wardName} RESULT SUMMARY</h3>

          <div className={resultStyle.pres}>
            <h4>PRESIDENTIAL</h4>
            <p>
              APC:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 + currentValue.Result.Presidential.APC * 1
                );
              }, 0)}
              , PDP:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 + currentValue.Result.Presidential.PDP * 1
                );
              }, 0)}
              , LP:
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 + currentValue.Result.Presidential.LP * 1
                );
              }, 0)}
              , NNPP:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 + currentValue.Result.Presidential.NNPP * 1
                );
              }, 0)}
              , ADC:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 + currentValue.Result.Presidential.ADC * 1
                );
              }, 0)}
              ,
            </p>
          </div>

          <div className={resultStyle.pres}>
            <h4>LAGOS EAST SENETORIAL</h4>
            <p>
              APC:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 +
                  currentValue.Result.LagosEastSenatorial.APC * 1
                );
              }, 0)}
              , PDP:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 +
                  currentValue.Result.LagosEastSenatorial.PDP * 1
                );
              }, 0)}
              , LP:
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 +
                  currentValue.Result.LagosEastSenatorial.LP * 1
                );
              }, 0)}
              , NNPP:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 +
                  currentValue.Result.LagosEastSenatorial.NNPP * 1
                );
              }, 0)}
              , ADC:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 +
                  currentValue.Result.LagosEastSenatorial.ADC * 1
                );
              }, 0)}
              ,
            </p>
          </div>

          <div className={resultStyle.pres}>
            <h4>HOUSE OF REPRESENTATIVE</h4>
            <p>
              APC:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 +
                  currentValue.Result.HouseOfRepresentative.APC * 1
                );
              }, 0)}
              , PDP:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 +
                  currentValue.Result.HouseOfRepresentative.PDP * 1
                );
              }, 0)}
              , LP:
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue +
                  currentValue.Result.HouseOfRepresentative.LP * 1
                );
              }, 0)}
              , NNPP:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 +
                  currentValue.Result.HouseOfRepresentative.NNPP * 1
                );
              }, 0)}
              , ADC:{" "}
              {pollingUnits.reduce(function (previousValue, currentValue) {
                return (
                  previousValue * 1 +
                  currentValue.Result.HouseOfRepresentative.ADC * 1
                );
              }, 0)}
              ,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pollenUnits;
