import { css } from "@pulsar-ui/core";

const InputCheckbox = props => css`
  &[type="checkbox"] {
    &:after {
      content: "";
      display: block;
      border: 1px solid ${props.theme.palette.grayScale[1]};
      border-radius: ${props.theme.border.radius};
      background-color: ${props.theme.palette.white};
      width: 1rem;
      height: 1rem;
      margin-left: -1px;
    }
    &:checked:after {
      border: 1px solid ${props.theme.palette.primary[2]};
      background-color: ${props.theme.palette.primary[2]};
      color: ${props.theme.palette.white};
      box-shadow: none;
      background-position: center;
      background-size: .8rem;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml;utf8,\
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>\
          <path fill='none' d='M0 0h24v24H0z'/>\
          <path fill='\
          ${encodeURIComponent(props.theme.palette.white)}\
          ' d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'/>\
          </svg>\
      ");
    }
  }
`;

export default InputCheckbox;
