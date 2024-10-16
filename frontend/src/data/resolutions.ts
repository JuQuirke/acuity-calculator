export interface ResolutionInfo {
  name?: string;
  width: number;
  height: number;
}

export const resolutions: ResolutionInfo[] = [
  {
    name: "1080p",
    width: 1920,
    height: 1080
  },
  {
    name: "1440p",
    width: 2560,
    height: 1440
  },
  {
    name: "4k",
    width: 3840,
    height: 2160
  },
  {
    name: "UWQHD",
    width: 3440,
    height: 1440
  },
  {
    name: "UW4K",
    width: 3840,
    height: 1600
  }
]
