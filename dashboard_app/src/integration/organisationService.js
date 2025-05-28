/** @format */

// Simulating an API call for fetching departments
export async function getDepartmentList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["DXMS", "DXMC"]);
    }, 500); // Simulating API delay
  });
}

// Simulating an API call for fetching tempos
export async function getTempoList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Mjuk", "Hård"]);
    }, 500);
  });
}

// Simulating an API call for fetching lines based on tempo selection
export async function getLineList(selectedTempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (selectedTempo === "Mjuk") {
        resolve(["FAM", "HAM", "SAM", "IAM"]);
      } else if (selectedTempo === "Hård") {
        resolve(["FAH", "HAH", "SAH", "IAH"]);
      } else {
        resolve([]);
      }
    }, 500);
  });
}
