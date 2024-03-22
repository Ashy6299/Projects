import React from "react";
import SliderComponents from "./comon/SliderComponents";

const SlideSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <>
      <SliderComponents
        label='Home value'
        min={0}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onchange={(e, value) => setData({ homeValue: Value })}
        unit='$'
        amount={data.homeValue}
      />
      <SliderComponents
        label='Down Payment'
        min={0}
        max={1000}
        defaultValue={100}
        value={data.downPayment}
        step={100}
        onchange={(e, value) => setData({ downPayment: Value })}
        unit='$'
        amount={5000}
      />
      <SliderComponents
        label='Loan Amount'
        min={0}
        max={1000}
        defaultValue={100}
        value={data.loanAmount}
        step={100}
        onchange={(e, value) => setData({ loanAmount: Value })}
        unit='$'
        amount={7000}
      />
      <SliderComponents
        label='Interest Rate'
        min={0}
        max={1000}
        defaultValue={100}
        step={100}
        onchange={(e, value) => setData({ increaseRate: Value })}
        unit='$'
        amount={7000}
      />
    </>
  );
};

export default SlideSelect;
