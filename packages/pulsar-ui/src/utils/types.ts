import * as React from "react";

export type As<P = any> = React.ReactType<P>;

/**
 * @template T Object
 * @template K Union of T keys
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
