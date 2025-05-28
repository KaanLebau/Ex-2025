/** @format */

const users = [
  { userId: "tl", password: "tl", role: "Team leader" },
  { userId: "op", password: "op", role: "Operatör" },
];

export default function auth(userId, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundUser = users.find(
        (user) => user.userId === userId && user.password === password
      );

      if (foundUser) {
        resolve({ success: true, role: foundUser.role });
      } else {
        reject({ success: false, message: "Fel id eller lösenord" });
      }
    }, 1000);
  });
}
