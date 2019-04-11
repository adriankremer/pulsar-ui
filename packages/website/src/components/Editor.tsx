import React, { Dispatch, SetStateAction } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

type EditorStateProps = {
  code: string | (() => string);
};

type EditorProps = {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  mode?: string;
};

export const useEditorState = ({ code: initial = "" }: EditorStateProps) => {
  const [code, setCode] = React.useState(initial);
  return { code, setCode };
};

export const Editor = ({ code, setCode, mode = "jsx" }: EditorProps) => {
  const [touched, setTouched] = React.useState(false);
  const touch = () => setTouched(true);
  return (
    <CodeMirror
      value={code}
      onBeforeChange={(_, __, value) => setCode(value)}
      onMouseDown={touch}
      onChange={touch}
      options={{
        mode,
        theme: "dracula",
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
