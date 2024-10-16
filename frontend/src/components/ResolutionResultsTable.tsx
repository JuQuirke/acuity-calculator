import { useMemo } from "react";
import { calculateAcuityValues } from "@components/utils";
import { ResolutionInfo } from "@data/resolutions";
import { AcuityResultColumn } from "@hooks/useAcuityResultColumn";

interface ResolutionResultsTableProps {
  screenSize: number;
  resolutions: ResolutionInfo[];
  desiredPpd: number;
}
const columns = [
  {
    title: "Min View Distance",
    dataIndex: "minViewingDistance",
    key: "minViewingDistance",
    width: 100,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 100,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 200,
  },
];
export function ResolutionResultsTable({ resolutions, screenSize, desiredPpd }: ResolutionResultsTableProps) {
  const acuityValues = useMemo(() => {
    return resolutions.map((resolution) => calculateAcuityValues({ resolution, screenSize, desiredPpd }));
  }, [resolutions, screenSize, desiredPpd]);
  return (
    <>
      {resolutions.map((resolution) => (
        <AcuityResultColumn resolution={resolution} screenSize={screenSize} desiredPpd={desiredPpd} />
      ))}
    </>
  );
}
