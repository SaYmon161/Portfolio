const webdriver = require("webdriverio");
const wdioConf = require("../wdio.conf");
const client = webdriver.multiremote(wdioConf);

jest.setTimeout(30000);

beforeAll(() => {
  return client.init().url("http://localhost:3000");
});

test(`На странице есть кнопка "Авторизация"`, () => {
  return client.isExisting(".auth-btn").then(browsers => {
    for (const browserName in browsers) {
      expect(browsers[browserName]).toBe(true);
    }
  });
});

afterAll(() => {
  return client.end();
});
