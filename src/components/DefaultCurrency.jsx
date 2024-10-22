import { ConfigProvider, Select } from "antd";
import React from "react";
import { LuCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

function DefaultCurrency() {
  return (
    <div className="p-8 w-full h-fit flex flex-col gap-5 text-lightBlackText/80">
      <form className="w-full flex flex-col gap-4 max-w-[300px]">
        {/* section title */}
        <h1 className="text-lg ">Default Currency</h1>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Set Currency</h1>
          <ConfigProvider
            theme={{
              token: {
                colorPrimaryBg: "#026fc740",
                colorBgContainer: "#fff",
                fontSize: 14,
                lineWidth: 0,
                borderRadius: 12,
              },
            }}
          >
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="label"
              className="ring-1 rounded-xl ring-stone-200 "
              defaultValue={{
                value: "USD",
                label: "USD",
              }}
              options={[
                {
                  value: "USD",
                  label: "USD",
                },
                {
                  value: "RWF",
                  label: "RWF",
                },
              ]}
            />
          </ConfigProvider>
        </div>
        <button className="h-[35px] px-4 w-fit max-md:w-full rounded-xl flex items-center justify-center gap-1 bg-mainColor text-white text-sm font-medium">
          <LuCheck className="text-lg" />
          Save
        </button>
      </form>
    </div>
  );
}

export default DefaultCurrency;
