import React from "react";
import CoreLayout from "../layout/CoreLayout";
import { StyleguideConsumer } from "../containers/StyleguideContext";

export const Components = () => {
  return (
    <CoreLayout>
      <h1>Components</h1>
      <StyleguideConsumer>
        {({ styleguidist }: { styleguidist: any }) =>
          styleguidist.sections[0].components.map((component: any) => (
            <p>{component.name}</p>
          ))
        }
      </StyleguideConsumer>
    </CoreLayout>
  );
};
