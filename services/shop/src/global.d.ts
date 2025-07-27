declare module "*module.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "@packages/build-config" {
  import webpack from "webpack";
  export interface BuildMode {}
  export interface BuildPaths {}
  export interface BuildOptions {}
  export interface BuildPlatform {}
  export function buildWebpack(options: {
    port: number;
    mode: BuildMode;
    paths: BuildPaths;
    analyzer: boolean;
    platform: BuildPlatform;
  }): webpack.Configuration;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __PLATFORM__: "mobile" | "desktop";
declare const __ENV__: "production" | "development";
