const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

const createWindow = () => {
  /**
   * * 앱이 실행될 때 보여줄 기본 화면에 대한 셋팅 1920 x 1080의 해상도를 가진다.
   */
  let window = new BrowserWindow({
    width: 1920,
    height: 1080,
    minWidth: 680,
    maxWidth: 1920,
    /**
     * * NODE API를 사용 가능하게 해주는 설정
     */
    webPreferences: {
      nodeIntegration: true
    }
  });

  /*
   * DEVELOP : 실행 시 환경 변수로 제공하 URL을 로드합니다.
   * PRODUCTION :  React 앱이 빌드되는 build 폴더의 index.html 파일을 로드합니다.
   * */
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true
    });

  /*
   * BrowserWindow에 해당 URL을 실행
   * */

  window.on("close", () => {
    window = nul;
  });

  window.loadURL(startUrl);
};

app.on("ready", createWindow);

/**
 * 모든 창이 닫혔을 때 종료
 * Mac OS에서 사용자가 명확하게 CMD + Q를 누르기 전까지
 * 애플맄케이션이나 메뉴 바가 활성 상태로 머물러 있어야 함ㅁ
 */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  /**
   * MacOS에서 Dock 아이콘이 클릭되고 다른 윈도우가 열려있지 않다면
   * 앱에서 새로운 창을 여는 것이 일방적
   */
  if (window === null) {
    createWindow();
  }
});
