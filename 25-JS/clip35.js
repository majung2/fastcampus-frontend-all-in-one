function bindLogoutButton() {
  const btnLogout = document.querySelector("#btn_logout");
  btnLogout.addEventListener("click", logout);
}

function getToken() {
  return localStorage.getItem("token");
}

async function getUserByToken(token) {
  try {
    const res = await axios.get("https://api.marktube.tv/vl/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("getUserByToken error", error);
    return null;
  }
}

async function getBooks(token) {
  try {
    const res = await axios.get("https://api.marktube.tv/vl/book", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("getBooks error", error);
    return null;
  }
}

async function main() {
  // 받아온 책을 그리기
  render(books);
}

document.addEventListener("DOMContentLoded", main);
