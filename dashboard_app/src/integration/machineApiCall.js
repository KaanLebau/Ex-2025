/** @format */

const machines = [
  {
    id: "SV90341",
    name: "DOOSAN",
    ct: 252.5,
    lastCt: 265,
    state: 7,
    measurement: {
      nextMeasurement: 2,
      lastManuell: "14:11:23",
      lastAutomated: "12:12:00",
    },
    missingPart: 0,
    toolChangeTime: "10",
    manuallyQualityCheckTime: "6",
    tools: [
      { toolNumber: 30, toolLife: 12 },
      { toolNumber: 31, toolLife: 72 },
      { toolNumber: 32, toolLife: 112 },
      { toolNumber: 33, toolLife: 12 },
      { toolNumber: 35, toolLife: 72 },
      { toolNumber: 12, toolLife: 72 },
    ],
    temporaryInfo: [],
    avs: {
      active: true,
      metaData: {
        id: "",
        desc: "",
        start: "",
        end: "",
        nextMeeting: "",
      },
      tasks: [
        {
          activity: "",
          responsible: "",
          start: "",
          status: "",
          compleate: false,
        },
      ],
    },
  },
  {
    id: "SV39933",
    name: "DMG",
    ct: 352.5,
    lastCt: 378,
    state: 7,
    measurement: {
      nextMeasurement: 2,
      lastManuell: new Date("2024-02-28T14:10:23"),
      lastAutomated: new Date("2024-02-28T14:11:00"),
    },
    missingPart: 2,
    toolChangeTime: "10",
    manuallyQualityCheckTime: "6",
    tools: [
      { position: "OR", toolNumber: 1, toolLife: 50 },
      { position: "OR", toolNumber: 2, toolLife: 50 },
      { position: "OR", toolNumber: 3, toolLife: 100 },
      { position: "OR", toolNumber: 4, toolLife: 50 },
      { position: "OR", toolNumber: 5, toolLife: 50 },
      { position: "OR", toolNumber: 6, toolLife: 50 },
      { position: "UL", toolNumber: 1, toolLife: 50 },
      { position: "UL", toolNumber: 2, toolLife: 50 },
      { position: "UL", toolNumber: 3, toolLife: 100 },
      { position: "UL", toolNumber: 4, toolLife: 50 },
      { position: "UL", toolNumber: 5, toolLife: 50 },
      { position: "UL", toolNumber: 6, toolLife: 50 },
    ],
    temporaryInfo: [
      { id: "t1", desc: "verktygs test" },
      { id: "t1", desc: "PD körning" },
    ],
  },
  {
    id: "SV93326",
    name: "UNIOR",
    ct: 152.5,
    lastCt: 183,
    state: 7,
    measurement: {
      nextMeasurement: 2,
      lastManuell: new Date("2024-02-28T14:10:23"),
      lastAutomated: new Date("2024-02-28T14:11:00"),
    },
    missingPart: 0,
    toolChangeTime: "10",
    manuallyQualityCheckTime: "6",
    tools: [
      { position: "R", toolNumber: 1, toolLife: 50 },
      { position: "R", toolNumber: 2, toolLife: 50 },
      { position: "R", toolNumber: 3, toolLife: 100 },
      { position: "R", toolNumber: 4, toolLife: 50 },
      { position: "M", toolNumber: 1, toolLife: 50 },
      { position: "M", toolNumber: 2, toolLife: 50 },
      { position: "M", toolNumber: 3, toolLife: 50 },
      { position: "M", toolNumber: 4, toolLife: 50 },
      { position: "L", toolNumber: 1, toolLife: 50 },
      { position: "L", toolNumber: 2, toolLife: 50 },
      { position: "L", toolNumber: 3, toolLife: 100 },
      { position: "L", toolNumber: 4, toolLife: 50 },
    ],
    temporaryInfo: [
      { id: "t1", desc: "verktygs test" },
      { id: "t1", desc: "PD körning" },
    ],
  },
  {
    id: "SV93328",
    name: "WMZ",
    ct: 300.5,
    lastCt: 303,
    state: 7,
    measurement: {
      nextMeasurement: 7,
      lastManuell: new Date("2024-02-28T14:10:23"),
      lastAutomated: new Date("2024-02-28T14:11:00"),
    },
    missingPart: 1,
    toolChangeTime: "10",
    manuallyQualityCheckTime: "6",
    tools: [
      { position: "R", toolNumber: 1, toolLife: 50 },
      { position: "R", toolNumber: 2, toolLife: 50 },
      { position: "R", toolNumber: 3, toolLife: 100 },
      { position: "R", toolNumber: 4, toolLife: 50 },
      { position: "M", toolNumber: 1, toolLife: 300 },
    ],
    temporaryInfo: [
      { id: "t1", desc: "verktygs test" },
      { id: "t1", desc: "PD körning" },
    ],
  },
  {
    id: "SV93325",
    name: "LIEBHERR",
    state: 7,
    ct: 152.5,
    lastCt: 228.25,
    measurement: {
      nextMeasurement: 7,
      lastManuell: new Date("2024-02-28T14:10:23"),
      lastAutomated: new Date("2024-02-28T14:11:00"),
    },
    missingPart: 1,
    toolChangeTime: "10",
    manuallyQualityCheckTime: "6",
    tools: [{ toolNumber: 1, toolLife: 600 }],
    temporaryInfo: [
      { id: "t1", desc: "verktygs test" },
      { id: "t1", desc: "PD körning" },
    ],
  },
  {
    id: "SV90345",
    name: "LIL-DOOSAN",
    ct: 252.5,
    lastCt: 253,
    state: 7,
    measurement: {
      nextMeasurement: 2,
      lastManuell: new Date("2024-02-28T14:11:23"),
      lastAutomated: new Date("2024-02-28T14:12:00"),
    },
    missingPart: 1,
    toolChangeTime: "10",
    manuallyQualityCheckTime: "6",
    tools: [
      { toolNumber: 30, toolLife: 12 },
      { toolNumber: 31, toolLife: 72 },
      { toolNumber: 32, toolLife: 112 },
      { toolNumber: 33, toolLife: 12 },
      { toolNumber: 35, toolLife: 72 },
      { toolNumber: 12, toolLife: 72 },
    ],
    temporaryInfo: [
      { id: "t1", desc: "verktygs test" },
      { id: "t1", desc: "PD körning" },
    ],
  },
  { id: "SV90306", name: "GUDEL 1", state: 7 },
  { id: "SV90307", name: "GUDEL 2", state: 7 },
];

export function fetchMachineList() {
  console.log("******* Api **********");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(machines.map(({ id, name }) => ({ id, name })));
    }, 500);
  });
}

export function fetchMachineById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const machine = machines.find((machine) => machine.id === id);
      if (machine) {
        resolve(machine);
      } else {
        reject({ success: false, message: "Machine not found" });
      }
    }, 500); // Simulate API delay
  });
}
