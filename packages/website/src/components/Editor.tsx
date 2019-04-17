import React, { Dispatch, SetStateAction } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import styled from "@emotion/styled";

type EditorStateProps = {
  code: string | (() => string);
};

type EditorProps = {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  mode?: string;
  theme?: string;
};

export const useEditorState = ({ code: initial = "" }: EditorStateProps) => {
  const [code, setCode] = React.useState(initial);
  return { code, setCode };
};

const StyledCodeMirror = styled(CodeMirror)`
  border-radius: 0.3rem;
  overflow: hidden;
  .CodeMirror {
    padding: 10px;
  }
`;

export const Editor = ({
  code,
  setCode,
  mode = "jsx",
  theme = "dracula"
}: EditorProps) => {
  const [touched, setTouched] = React.useState(false);
  const touch = () => setTouched(true);
  return (
    <StyledCodeMirror
      value={code}
      onBeforeChange={(_, __, value) => setCode(value)}
      onMouseDown={touch}
      onChange={touch}
      options={{
        mode,
        theme,
        extraKeys: touched
          ? {}
          : {
              Tab: false,
              "Shift-Tab": false
            }
      }}
    />
  );
};
