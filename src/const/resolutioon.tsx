interface ResolutionParams {
  name: ResolutionTypes;
  minWidth: number;
  maxWidth: number;
}

export type ResolutionTypes = "lg" | "md" | "sm";

export const whichResolution = (width: number): ResolutionTypes => {
  const resolution = Resolutions.find(
    (item) => item.minWidth <= width && width <= item.maxWidth
  );
  return resolution ? resolution.name : "lg";
};

export const SmallResolution: ResolutionParams = {
  name: "sm",
  minWidth: 0,
  maxWidth: 450,
};

export const MediumResolution: ResolutionParams = {
  name: "md",
  minWidth: 451,
  maxWidth: 1280,
};

export const LargeResolution: ResolutionParams = {
  name: "lg",
  minWidth: 1281,
  maxWidth: 9999,
};

export const Resolutions: ResolutionParams[] = [
  SmallResolution,
  MediumResolution,
  LargeResolution,
];
