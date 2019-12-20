const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

const createWindow = () => {
  /**
   * * 앱이 실행될 때 보여줄 기본 화면에 대한 셋팅 1920 x 1080의 해상도를 가진다.
   */
  const window = new BrowserWindow({
    width: 1920,
    height: 1080,
    minWidth: 980,
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
  window.loadURL(startUrl);
};

app.on("ready", createWindow);
