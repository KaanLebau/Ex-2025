/** @format */

import { getCurrentShift } from "./shiftUtil.js";

const ufoSchema = {
  ham: {
    ufoTasks: [
      {
        taskId: 1,
        taskType: "maintenanceCheck",
        machineId: "SV90341",
        machineName: "Doosan",
        task: "Hydraulaggregatet",
        type: "Kontroll",
        shift: "NATT",
        interval: ["Tis", "Tor"],
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        std: "Pos std",
      },
      {
        taskId: 2,
        taskType: "maintenanceCheck",
        machineId: "SV90341",
        machineName: "Doosan",
        task: "Centralsmörjningen",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "NATT",
        interval: ["Tis", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 3,
        taskType: "maintenanceCheck",
        machineId: "SV90341",
        machineName: "Doosan",
        task: "Hydraulaggregatet för paletter",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "NATT",
        interval: ["Tis", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 4,
        taskType: "maintenanceCheck",
        machineId: "SV90341",
        machineName: "Doosan",
        task: "Spindelkylningen",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "NATT",
        interval: ["Tis", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 5,
        taskType: "maintenanceCheck",
        machineId: "SV90341",
        machineName: "Doosan",
        task: "Arbets- och laddutrymmet",
        type: "Städning",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "NATT",
        interval: ["Mån", "Ons"],
        std: "Pos std",
      },
      {
        taskId: 6,
        taskType: "maintenanceCheck",
        machineId: "SV90341",
        machineName: "Doosan",
        task: "paletterna",
        type: "Städning",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "NATT",
        interval: ["Mån", "Ons"],
        std: "Pos std",
      },
      {
        taskId: 7,
        taskType: "maintenanceCheck",
        machineId: "SV90341",
        machineName: "Doosan",
        task: "Manometrarna",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "NATT",
        interval: ["Mån", "Ons"],
        std: "Pos std",
      },
      {
        taskId: 8,
        taskType: "maintenanceCheck",
        machineId: "SV90341",
        machineName: "Doosan",
        task: "Oljedimavskiljarna",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "NATT",
        interval: ["Mån", "Ons"],
        std: "Pos std",
      },
      {
        taskId: 9,
        taskType: "maintenanceCheck",
        machineId: "SV39933",
        machineName: "DMG",
        task: "Hydraulaggregatet",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "FM",
        interval: ["Tis", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 10,
        taskType: "maintenanceCheck",
        machineId: "SV39933",
        machineName: "DMG",
        task: "Centralsmörjningen",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "FM",
        interval: ["Tis", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 11,
        taskType: "maintenanceCheck",
        machineId: "SV39933",
        machineName: "DMG",
        task: "Läckage runt maskinen",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "FM",
        interval: ["Tis", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 12,
        taskType: "maintenanceCheck",
        machineId: "SV39933",
        machineName: "DMG",
        task: "Takluckan",
        type: "Städning",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "FM",
        interval: ["Mån", "Tis", "Ons", "Tor", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 13,
        taskType: "maintenanceCheck",
        machineId: "SV39933",
        machineName: "DMG",
        task: "Absolenthink",
        type: "Städning",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "FM",
        interval: ["Ons"],
        std: "Pos std",
      },
      {
        taskId: 14,
        taskType: "maintenanceCheck",
        machineId: "SV93326",
        machineName: "Unior",
        task: "Maskin fixure",
        type: "Städning",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "FM",
        interval: ["Mån", "Tis", "Ons", "Tor", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 15,
        taskType: "maintenanceCheck",
        machineId: "SV93326",
        machineName: "Unior",
        task: "Maskin fixure",
        type: "Städning",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Tis", "Ons", "Tor", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 16,
        taskType: "maintenanceCheck",
        machineId: "SV93326",
        machineName: "Unior",
        task: "Maskin fixure",
        type: "Städning",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "Natt",
        interval: ["Mån", "Tis", "Ons", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 17,
        taskType: "maintenanceCheck",
        machineId: "SV93326",
        machineName: "Unior",
        task: "Kylvattennivån",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "Natt",
        interval: ["Tis", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 18,
        taskType: "maintenanceCheck",
        machineId: "SV93326",
        machineName: "Unior",
        task: "Centralsmörjningen",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "Natt",
        interval: ["Tis", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 19,
        taskType: "maintenanceCheck",
        machineId: "SV93326",
        machineName: "Unior",
        task: "Hydrauloljenivån",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "Natt",
        interval: ["Tis", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 20,
        taskType: "maintenanceCheck",
        machineId: "SV93326",
        machineName: "Unior",
        task: "Manometrar",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "Natt",
        interval: ["Tis", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 21,
        taskType: "maintenanceCheck",
        machineId: "SV93326",
        machineName: "Unior",
        task: "Spilldunk SPC3",
        type: "Städning",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "Natt",
        interval: ["Mån", "Tis", "Ons", "Tor"],
        std: "Pos std",
      },
      {
        taskId: 22,
        taskType: "maintenanceCheck",
        machineId: "SV93328",
        machineName: "WMZ",
        task: "Hydrauloljenivån",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 23,
        taskType: "maintenanceCheck",
        machineId: "SV93328",
        machineName: "WMZ",
        task: "Kylvattennivån",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 24,
        taskType: "maintenanceCheck",
        machineId: "SV93328",
        machineName: "WMZ",
        task: "Centralsmörjningen",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 25,
        taskType: "maintenanceCheck",
        machineId: "SV93328",
        machineName: "WMZ",
        task: "Manometrar",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 26,
        taskType: "maintenanceCheck",
        machineId: "SV93328",
        machineName: "WMZ",
        task: "Läckage runt maskinen",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 27,
        taskType: "maintenanceCheck",
        machineId: "SV93328",
        machineName: "WMZ",
        task: "Fetta chucken",
        type: "Städning",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Tis", "Ons", "Tor", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 28,
        taskType: "maintenanceCheck",
        machineId: "SV93325",
        machineName: "Liebherr",
        task: "Hydrauloljenivån",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "FM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 29,
        taskType: "maintenanceCheck",
        machineId: "SV93325",
        machineName: "Liebherr",
        task: "Kylvattennivån",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "FM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 30,
        taskType: "maintenanceCheck",
        machineId: "SV93325",
        machineName: "Liebherr",
        task: "Centralsmörjningen",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "FM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 31,
        taskType: "maintenanceCheck",
        machineId: "SV93325",
        machineName: "Liebherr",
        task: "Gejder oljanivå",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "FM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 32,
        taskType: "maintenanceCheck",
        machineId: "SV90345",
        machineName: "Lil-Doosan",
        task: "Spindelkona",
        type: "Städning",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 33,
        taskType: "maintenanceCheck",
        machineId: "SV90345",
        machineName: "Lil-Doosan",
        task: "Manometrar",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 34,
        taskType: "maintenanceCheck",
        machineId: "SV90345",
        machineName: "Lil-Doosan",
        task: "Luftrör läckage",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 35,
        taskType: "maintenanceCheck",
        machineId: "SV90345",
        machineName: "Lil-Doosan",
        task: "Oljanivåerna",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 36,
        taskType: "maintenanceCheck",
        machineId: "SV90345",
        machineName: "Lil-Doosan",
        task: "Gejder oljanivå",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 37,
        taskType: "maintenanceCheck",
        machineId: "SV90345",
        machineName: "Lil-Doosan",
        task: "Skärvätsketryck",
        type: "Kontroll",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 38,
        taskType: "maintenanceCheck",
        machineId: "SV90345",
        machineName: "Lil-Doosan",
        task: "Takluckan",
        type: "Städning",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        shift: "EM",
        interval: ["Mån", "Ons", "Fre"],
        std: "Pos std",
      },
    ],
    dailyCheck: [
      {
        taskId: 1,
        taskType: "safetyCheck",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        task: "Dagligtillsyn",
        type: "Kontroll",
        machineName: "Lyftbord / lyftvertyg inbana",
        shift: ["FM", "EM", "NATT"],
        interval: ["Mån", "Tis", "Ons", "Tor", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 2,
        taskType: "safetyCheck",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        task: "Dagligtillsyn",
        type: "Kontroll",
        machineName: "Doosan / SPC 1",
        shift: ["FM", "EM", "NATT"],
        interval: ["Mån", "Tis", "Ons", "Tor", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 3,
        taskType: "safetyCheck",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        task: "Dagligtillsyn",
        type: "Kontroll",
        machineName: "DMG / SPC 2",
        shift: ["FM", "EM", "NATT"],
        interval: ["Mån", "Tis", "Ons", "Tor", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 4,
        taskType: "safetyCheck",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        task: "Dagligtillsyn",
        type: "Kontroll",
        machineName: "Unior / SPC 3",
        shift: ["FM", "EM", "NATT"],
        interval: ["Mån", "Tis", "Ons", "Tor", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 5,
        taskType: "safetyCheck",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        task: "Dagligtillsyn",
        type: "Kontroll",
        machineName: "WMZ / SPC 6",
        shift: ["FM", "EM", "NATT"],
        interval: ["Mån", "Tis", "Ons", "Tor", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 6,
        taskType: "safetyCheck",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        task: "Dagligtillsyn",
        type: "Kontroll",
        machineName: "Liebherr / SPC 4",
        shift: ["FM", "EM", "NATT"],
        interval: ["Mån", "Tis", "Ons", "Tor", "Fre"],
        std: "Pos std",
      },
      {
        taskId: 7,
        taskType: "safetyCheck",
        sign: {
          status: "",
          date: "",
          signingShift: "",
          checkt: false,
        },
        task: "Dagligtillsyn",
        type: "Kontroll",
        machineName: "Lil-doosan / SPC 5",
        shift: ["FM", "EM", "NATT"],
        interval: ["Mån", "Tis", "Ons", "Tor", "Fre"],
        std: "Pos std",
      },
    ],
    weeklyCheck: [
      {
        taskId: 1,
        taskType: "weeklyCheck",
        machineId: "SV90306",
        machineName: "Gudel 1",
        tasks: [
          {
            task: "Kör till serviceplattform.",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Häng upp gult kort på avsedd plats",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Gör rent griparna",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Se till att det inte finns oljepölar på balken",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Gör rent i portalburen",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
        ],
      },
      {
        taskId: 2,
        taskType: "weeklyCheck",
        machineId: "SV90341",
        machineName: "Doosan",
        tasks: [
          {
            task: "Stoppa maskinen enligt rutin",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Häg upp gult kort på avsedd plats",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Borsta bort spånor runt paletterna",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Borsta bort spånor i maskinutrymmet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Kontrollera teleskopskydden och avstrykarna i arbetsutrymmet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Kontrollera skalan samt avstrykarna",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Kontrollera och gör rent skyddet till spindeltornet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Borsta bort spånor / dammsug vid spåntransportör bakom maskinen",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
        ],
      },
      {
        taskId: 2,
        taskType: "weeklyCheck",
        machineId: "SV39933",
        machineName: "DMG",
        tasks: [
          {
            task: "Stoppa maskinen enligt rutin.",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Borsta bort spånor och torka av skenorna till takluckan",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Borsta bort spånor i maskinutrymmet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Kontrollera teleskopskydd och avstrykare i maskinutrymmet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Kontrollera linjärstyrning samt avstrykare",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Rengör grov- samt finfiltret till spåntransportören",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
        ],
      },
      {
        taskId: 3,
        taskType: "weeklyCheck",
        machineId: "SV93326",
        machineName: "Unior",
        tasks: [
          {
            task: "Stoppa maskinen enligt rutin.",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Häg upp gult kort på avsedd plats",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Borsta bort spånor i maskinutrymmet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Borsta bort spånor i och runt fixturen",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Inspektera fixturen",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Inspektera gejdskydd samt avstrykare",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Rengör rutorna",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
        ],
      },
      {
        taskId: 4,
        taskType: "weeklyCheck",
        machineId: "SV93328",
        machineName: "WMZ",
        tasks: [
          {
            task: "Stoppa maskinen enligt rutin.",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Borsta bort spånor i maskinutrymmet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Rengör proben",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Inspektera mätproben",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Inspektera verktygshållare",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Kontrollera teleskopskydd och avstrykare i arbetsutrymmet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
        ],
      },
      {
        taskId: 5,
        taskType: "weeklyCheck",
        machineId: "SV93325",
        machineName: "Liebher",
        tasks: [
          {
            task: "Stoppa maskinen enligt rutin.",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Borsta bort spånor i maskinutrymmet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Borsta bort spånor / dammsug i laddutrymmet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Kontrollera slider samt avstrykare",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Kontrollera oljenivå samt slangar till A1-axeln",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
        ],
      },
      {
        taskId: 6,
        taskType: "weeklyCheck",
        machineId: "SV90345",
        machineName: "Lil-Doosan",
        tasks: [
          {
            task: "Stoppa maskinen enligt rutin.",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Spola rent maskinutrymmet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Kontrollera teleskopskydd och avstrykare i arbetsutrymmet",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Torka av Renishaw",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Rengör spindel samt spindelkona",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Torka av skenorna till takluckan",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Rengör ventilen till spindelspolningen",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Rengör filtret till spåntransportören",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Kontrollera slangar samt kablar i och runt maskinen",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
        ],
      },
      {
        taskId: 7,
        taskType: "weeklyCheck",
        machineId: "SV90348",
        machineName: "PickaPicka",
        tasks: [
          {
            task: "Stoppa cell enligt rutin.",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Häg upp gult kort på avsedd plats",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Gör rent och kontrollera laddstationen",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Gör rent och kontrollera märkspetsen",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
        ],
      },
      {
        taskId: 8,
        taskType: "weeklyCheck",
        machineId: "SV90307",
        machineName: "Gudel 2",
        tasks: [
          {
            task: "Kör till serviceplattform.",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Häng upp gult kort på avsedd plats",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Gör rent griparna",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Se till att det inte finns oljepölar på balken",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
          {
            task: "Gör rent i portalburen",
            check: false,
            status: null,
            time: "",
            comment: "",
            std: "Pos std",
          },
        ],
      },
    ],
  },

  sam: {},
  fam: {},
  iam: {},
};

export async function fetchCurrentUfoTasks(
  line,
  manualShift = null,
  manualDay = null
) {
  let shift = manualShift ?? getCurrentShift();
  if (shift.includes("→")) return []; // Prevent overlapping shifts

  const swedishDays = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"];
  let day = manualDay ?? swedishDays[new Date().getDay()];

  try {
    const response = await getShiftUfoTasks(line, shift, day);
    return response;
  } catch (error) {
    console.error(`Error fetching UFO tasks: ${error.message}`);
    return [];
  }
}

export async function fetchDailyControlTasks(line) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ufoSchema[line]) {
        reject(new Error(`Ufo Schema för ${line} hittades inte`));
        return;
      }
      const tasks = ufoSchema[line].dailyCheck || [];
      resolve(tasks);
    }, 2000);
  });
}

export async function fetchWeeklyControlTasks(line) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ufoSchema[line]) {
        reject(new Error(`Ufo Schema för ${line} hittades inte`));
        return;
      }
      const tasks = ufoSchema[line].weeklyCheck || [];
      resolve(tasks);
    }, 2000);
  });
}

export function getShiftUfoTasks(line, shift, day) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ufoSchema[line]) {
        reject(new Error(`Ufo Schema för ${line} hittades inte`));
        return;
      }
      const tasks = ufoSchema[line].ufoTasks || [];

      // ✅ Filter by shift AND interval.includes(day)
      const filteredTasks = tasks.filter(
        (task) => task.shift === shift && task.interval.includes(day)
      );

      resolve(filteredTasks);
    }, 2000);
  });
}
