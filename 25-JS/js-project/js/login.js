async function login(event) {
  event.preventDefault(); // submit의 default 로직이 발생하지 않게 막기
  event.stopPropagation(); // submit 이벤트가 상위로 전달되지 않게 막기

  const emailElement = document.querySelector("#email"); // dom element
  const passwordElement = document.querySelector("#password");

  const email = emailElement.value; // 값
  const password = passwordElement.value;

  try {
    const res = await axios.post("https://api.marktube.tv/v1/me", {
      email,
      password,
    });
    const { token } = res.data; // const token = res.data.token; 과 동일
    if (token === undefined) {
      return;
    }
    localStorage.setItem("token", token);
    location.assign("/");
  } catch (error) {
    const data = error.response.data;
    if (data) {
      const state = data.error;
      if (state === "USER_NOT_EXIST") {
        // 서버가 정의한 코드
        alert("사용자가 존재하지 않습니다.");
      } else if (state === "PASSWORD_NOT_MATCH") {
        alert("비밀번호가 틀렸습니다.");
      }
    }
  }
}

function bindLoginButton() {
  const form = document.querySelector("#form-login");
  form.addEventListener("submit", login);
}

function getToken() {
  return localStorage.getItem("token");
}
function main() {
  // 버튼에 이벤트 연결
  bindLoginButton();

  // 토큰 체크
  const token = getToken();
  if (token !== null) {
    location.assign("/");
    return;
  }
}

document.addEventListener("DOMContentLoaded", main);
