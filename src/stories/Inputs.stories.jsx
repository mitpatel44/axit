import React from "react";

import { Input } from "components";

export default {
  title: "mit_s_application1/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder0",
  size: "sm",
  variant: "OutlineGray900",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
