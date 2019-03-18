import { css } from "@pulsar-ui/core";
import inputRange from "./InputRange";
import inputText from "./InputText";
import inputCheckbox from "./InputCheckbox";

const Input = props => css`
  ${inputText(props)};
  ${inputCheckbox(props)};
  ${inputRange(props)};
`;

export default Input;
