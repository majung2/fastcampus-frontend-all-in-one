function getToken() {
  return localStorage.getItem("token");
}

async function save(event) {
  event.preventDefault(); // html에서 submit을 눌렀을 때 form이 하는 행동 막기
  event.stopPropagation(); // form을 가진 상위 DOM에도 이벤트 전달 안되게
  console.log("save");

  event.target.classList.add("was-validated"); // bootstrap기능, 유효성 검사를 DOM에 보여줌

  const titleElement = document.querySelector("#title");
  const messageElement = document.querySelector("#message");
  const authorElement = document.querySelector("#author");
  const urlElement = document.querySelector("#url");

  const title = titleElement.value;
  const message = messageElement.value;
  const author = authorElement.value;
  const url = urlElement.value;

  if (title === "" || message === "" || author === "" || url === "") {
    return;
  }

  const token = getToken();
  if (token === null) {
    location.assign("/login");
    return;
  }

  try {
    await axios.post(
      "https://api.marktube.tv/v1/book",
      {
        title,
        message,
        author,
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    location.assign("/");
  } catch (error) {
    console.log("save error", error);
    alert("책 추가 실패");
  }
}

function bindSaveButton() {
  const form = document.querySelector("#form-add-book");
  form.addEventListener("submit", save);
}

async function getUserByToken(token) {
  try {
    const res = await axios.get("https://api.marktube.tv/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("getUserByToken error", error);
    return null; // 문제 발생 시 null 값 넘기기
  }
}

async function main() {
  // 버튼에 이벤트 연결
  bindSaveButton();

  // 토큰 체크
  const token = getToken();
  if (token === null) {
    location.assign("/login");
    return;
  }

  // 토큰으로 서버에서 나의 정보 받아오기
  const user = await getUserByToken(token);
  if (user === null) {
    localStorage.clear();
    location.assign("/login");
    return;
  }
  console.log(user); // user 정보 제대로 들어오는지 확인
}
document.addEventListener("DOMContentLoaded", main);
