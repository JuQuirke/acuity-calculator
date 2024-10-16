import { useAcuityCalculator } from "@components/utils";
import { ResolutionInfo } from "@data/resolutions";

interface AcuityCalculatorProps {
  screenSize: number;
  resolution: ResolutionInfo;
  desiredPpd: number;
}
export function AcuityResultColumn({ screenSize, resolution, desiredPpd }: AcuityCalculatorProps) {
  const { minViewingDistance, ppi, aspectRatioHeight, aspectRatioWidth } = useAcuityCalculator({
    screenSize,
    resolution,
    desiredPpd,
  });

  return (
    <>
      <p>
        Aspect Ratio: {aspectRatioWidth}:{aspectRatioHeight}
      </p>
      <p>Total Pixels: {(resolution.width * resolution.height).toLocaleString()}</p>
      <p>PPI: {ppi}</p>
      <p>Minimum Viewing Distance (metres): {minViewingDistance}</p>
    </>
  );
}
