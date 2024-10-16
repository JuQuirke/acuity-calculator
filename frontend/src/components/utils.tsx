import { ResolutionInfo } from "@data/resolutions";

interface AcuityCalculatorProps {
  screenSize: number;
  resolution: ResolutionInfo;
  desiredPpd: number;
}
export function calculateAcuityValues({ screenSize, resolution, desiredPpd }: AcuityCalculatorProps) {
  // Display Aspect Ratio
  const divisor = resolution.height / 9;
  const aspectRatioWidth = resolution.width / divisor;
  const aspectRatioHeight = resolution.height / divisor;

  // Calculate PPI
  const diagonalPixels = Math.sqrt(Math.pow(resolution.width, 2) + Math.pow(resolution.height, 2));
  const ppi = diagonalPixels / screenSize;

  // Calculate Minimum Viewing Distance
  // Sine Rule
  // a/sin89.5 = b/sin1
  // b = sin1 * a/sin89.5
  const minViewingDistancePixels = desiredPpd * (Math.sin(toRadians(89.5)) / Math.sin(toRadians(1)));
  const minViewingDistanceInches = minViewingDistancePixels / ppi;
  const minViewingDistance = minViewingDistanceInches / 39.37;

  return {
    minViewingDistance,
    ppi,
    aspectRatioHeight,
    aspectRatioWidth,
  };
}

function toRadians(angle: number) {
  return angle * (Math.PI / 180);
}
