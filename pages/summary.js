import React from "react";
import Image from "next/image";

import Style from "../styles/summary.module.css";
import Data from "../Components/ElectionData";
import apc from "../public/apc.png";

const summary = () => {
  const kosofeData = Data.kosofe;

  let PreAPC = 0;
  let PrePDP = 0;
  let PreLP = 0;
  let PreNNPP = 0;
  let PreADC = 0;

  let LESAPC = 0;
  let LESPDP = 0;
  let LESLP = 0;
  let LESNNPP = 0;
  let LESADC = 0;

  let HORAPC = 0;
  let HORPDP = 0;
  let HORLP = 0;
  let HORNNPP = 0;
  let HORADC = 0;

  kosofeData.map((ward) => {
    PreAPC += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return previousValue * 1 + currentValue.Result.Presidential.APC * 1;
    }, 0);
    PrePDP += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return previousValue * 1 + currentValue.Result.Presidential.PDP * 1;
    }, 0);
    PreLP += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return previousValue * 1 + currentValue.Result.Presidential.LP * 1;
    }, 0);
    PreNNPP += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return previousValue * 1 + currentValue.Result.Presidential.NNPP * 1;
    }, 0);
    PreADC += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return previousValue * 1 + currentValue.Result.Presidential.ADC * 1;
    }, 0);

    LESAPC += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return (
        previousValue * 1 + currentValue.Result.LagosEastSenatorial.APC * 1
      );
    }, 0);
    LESPDP += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return (
        previousValue * 1 + currentValue.Result.LagosEastSenatorial.PDP * 1
      );
    }, 0);
    LESLP += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return previousValue * 1 + currentValue.Result.LagosEastSenatorial.LP * 1;
    }, 0);
    LESNNPP += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return (
        previousValue * 1 + currentValue.Result.LagosEastSenatorial.NNPP * 1
      );
    }, 0);
    LESADC += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return (
        previousValue * 1 + currentValue.Result.LagosEastSenatorial.ADC * 1
      );
    }, 0);

    HORAPC += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return (
        previousValue * 1 + currentValue.Result.HouseOfRepresentative.APC * 1
      );
    }, 0);
    HORPDP += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return (
        previousValue * 1 + currentValue.Result.HouseOfRepresentative.PDP * 1
      );
    }, 0);
    HORLP += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return (
        previousValue * 1 + currentValue.Result.HouseOfRepresentative.LP * 1
      );
    }, 0);
    HORNNPP += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return (
        previousValue * 1 + currentValue.Result.HouseOfRepresentative.NNPP * 1
      );
    }, 0);
    HORADC += ward.pollingUnits.reduce(function (previousValue, currentValue) {
      return (
        previousValue * 1 + currentValue.Result.HouseOfRepresentative.ADC * 1
      );
    }, 0);
  });

  return (
    <div className={Style.summary}>
      <div className={Style.summary_box}>
        <div className={Style.summary_box_head}>
          <Image
            className={Style.summary_box_head_img}
            src={apc}
            alt="apc-logo"
            width={70}
            height={70}
          />
          <h2>ELECTION RESULTS FOR KOSOFE FEDERAL CONSTITUENCY</h2>
        </div>
        <div className={Style.summary_box_result}>
          <div className={Style.summary_box_result_pres}>
            <h3>PRESIDENTIAL</h3>
            <p> APC: {PreAPC}</p>
            <p> PDP: {PrePDP}</p>
            <p>LP: {PreLP}</p>
            <p>NNPP: {PreNNPP}</p>
            <p>ADC: {PreADC}</p>
          </div>
          <div className={Style.summary_box_result_pres}>
            <h3>SENETORIAL</h3>
            <p>APC: {LESAPC}</p>
            <p>PDP: {LESPDP}</p>
            <p>LP: {LESLP}</p>
            <p>NNPP: {LESNNPP}</p>
            <p>ADC: {LESADC}</p>
          </div>
          <div className={Style.summary_box_result_pres}>
            <h3>FEDERAL REPRESENTATIVE</h3>
            <p>APC: {HORAPC}</p>
            <p>PDP: {HORPDP}</p>
            <p>LP: {HORLP}</p>
            <p>NNPP: {HORNNPP}</p>
            <p>ADC: {HORADC}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default summary;
