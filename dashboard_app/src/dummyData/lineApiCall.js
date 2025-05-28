const lines= [{
    line: "ham",
    CNC_machines: [
      { id: "SV90341", name: "DOOSAN" },
      { id: "SV39933", name: "DMG" },
      { id: "SV93326", name: "UNIOR" },
      { id: "SV93328", name: "WMZ" },
      { id: "SV93325", name: "LIEBHERR" },
      { id: "SV90345", name: "LIL-DOOSAN" },
      { id: "SV90306", name: "GUDEL 1" },
      { id: "SV90307", name: "GUDEL 2" }
    ],
    Utility_machines: [
      { id: "SV90306", name: "INBANA" },
      { id: "SV90905", name: "LYFTBORD" },
      { id: "SV90906", name: "LYFTBORD" },
      { id: "SV90929", name: "LYFTVERKTYG" },
      { id: "SV93328", name: "WMZ" }
    ],
    order: {
      number: "3175075-18",
      size: 405,
      left: 139,
      next: "3175075-19"
    },
    classifications: [
      { name: "Klassifierad", value: 400 },
      { name: "Ej klassifierad", value: 50 },
    ],
    jphTarget:16,
    jph:[{ time : "08:00", value: 16 },
      { time:"08:30", value: 3 },
      { time: "09:00", value: 12 },
      { time:"09:30", value: 8 },
      { time: "10:00", value: 5 },
      { time: "10:30", value: 17 },
      { time: "11:00", value: 16 },
      { time: "11:30", value: 6 }]
  },
        ]



        export function getLine(name) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const line = lines.find(theLine => theLine.line === name);
                    if (line) {
                        resolve(line);
                    } else {
                        reject({ success: false, message: "Line not found" });
                    }
                }, 2000); // Simulate API delay
            });
        }