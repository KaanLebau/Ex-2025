/** @format */

// Simulated User Database (Replace with API calls later)
const users = [
  { userId: "tl", password: "tl", role: "Team leader" },
  { userId: "op", password: "op", role: "Operatör" },
];

/**
 * Simulate an API call to authenticate the user.
 * @param {string} userId - The user ID.
 * @param {string} password - The user's password.
 * @returns {Promise<Object|null>} - Resolves with user data if authentication is successful, otherwise null.
 */
export async function authenticateUser(userId, password) {
  console.log(
    `incoming request to authenticateUser useruId : ${userId} , password : ${password}`
  );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundUser = users.find(
        (user) => user.userId === userId && user.password === password
      );

      if (foundUser) {
        resolve({ userId: foundUser.userId, role: foundUser.role });
      } else {
        reject(new Error("Fel id eller lösenord"));
      }
    }, 1000); // Simulate API delay
  });
}
