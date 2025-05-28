/** @format */

import { mockData } from "../dummyData/mockData";
import {
  fetchMachineList,
  fetchMachineById,
} from "../integration/machineApiCall";
import { getLine } from "../dummyData/lineApiCall";

import { authenticateUser } from "../integration/authService";
import {
  getDepartmentList,
  getTempoList,
  getLineList,
} from "../integration/organisationService";

import {
  fetchCurrentUfoTasks,
  fetchDailyControlTasks,
  fetchWeeklyControlTasks,
} from "../util/ufoUtil";

class AppModel {
  constructor() {
    this.sessions = this.loadFromStorage("sessions") || {}; // Store multiple user sessions
    this.activeUserId = this.loadFromStorage("activeUserId") || null; // Track the logged-in user
    //this.mockData = this.loadFromStorage("mockData") || mockData; // Load persistent mock data
    this.machineList = [];
    this.focusMachine = null;
  }

  /*** USER AUTHENTICATION ***/
  async loginUser(userId, password) {
    try {
      const userData = await authenticateUser(userId, password);

      if (!userData) throw new Error("Fel id eller löenord");
      this.sessions[userData.userId] = {
        userId,
        role: userData.role,
      };
      this.activeUserId = userData.userId;
      return userData;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  /***  LOGOUT ACTIVE USER  & SESSION ***/
  logout() {
    if (this.activeUserId) {
      delete this.sessions[userId]; // Optional: remove user session
      this.activeUserId = null;
      this.saveToStorage();
    }
  }

  /***  GET ACTIVE USER SESSION ***/
  getActiveUserSession() {
    return this.activeUserId ? this.sessions[this.activeUserId] : null;
  }

  /***  ORGANIZATION RELATED FUNCTIONS ***/
  async fetchDepartments() {
    return await getDepartmentList();
  }

  async fetchTempos() {
    return await getTempoList();
  }

  async fetchLines(selectedTempo) {
    return await getLineList(selectedTempo);
  }

  authCheck() {
    return Boolean(this.activeUserId && this.sessions[this.activeUserId]);
  }

  /***  MACHINE RELATED FUNCTIONS ***/
  async getMachines() {
    console.log("******* Model **********");

    return await fetchMachineList();
  }

  async getMachineById(id) {
    return await fetchMachineById(id);
  }

  getLineByName(name) {
    return getLine(name);
  }

  async fetchUfoTasks(line) {
    const response = await fetchCurrentUfoTasks(line);
    return response;
  }

  async fetchUfoTaskByMachine(line, machineId) {
    const response = await fetchCurrentUfoTasks(line);
    const filteredTasks = response.filter(
      (task) => task.machineId === machineId
    );
    return filteredTasks;
  }

  async fetchDailyControl(line) {
    const resp = await fetchDailyControlTasks(line);
    return resp;
  }
  async fetchWeeklyControl(line) {
    const resp = await fetchWeeklyControlTasks(line);
    return resp;
  }

  saveHandoverReport(data) {
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    const formattedClock = now.toLocaleDateString("sv-SE", { hour12: false });

    const fileName = `handoverReport-${formattedDate}-${formattedClock.replace(
      /:/g,
      "-"
    )}.json`;
    const report = {
      ...data,
      date: formattedDate,
      clock: formattedClock, // Now formatted correctly
    };

    const fileBlob = new Blob([JSON.stringify(report, null, 2)], {
      type: "application/json",
    });

    // Create a link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(fileBlob);
    link.download = fileName;

    // Append link to body, trigger download, and remove link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("Report saved:", fileName);
  }

  /*** 🛠️ PERSISTENCE METHODS ***/
  saveToStorage() {
    localStorage.setItem("sessions", JSON.stringify(this.sessions));
    localStorage.setItem("activeUserId", JSON.stringify(this.activeUserId));
    localStorage.setItem("mockData", JSON.stringify(this.mockData));
  }

  loadFromStorage() {
    const storedSessions = localStorage.getItem("sessions");
    this.sessions = storedSessions ? JSON.parse(storedSessions) : {};

    const storedUserId = localStorage.getItem("activeUserId");
    this.activeUserId = storedUserId ? JSON.parse(storedUserId) : null;

    const storedMockData = localStorage.getItem("mockData");
    this.mockData = storedMockData ? JSON.parse(storedMockData) : mockData;
  }
}

/*** 🌟 EXPORT SINGLETON INSTANCE ***/
export const appModel = new AppModel();
