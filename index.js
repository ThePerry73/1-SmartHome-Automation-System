// 引入必要的库和模块
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// 创建Express应用程序
const app = express();
const port = 3000;

// 允许跨域请求
app.use(cors());

// 解析POST请求的JSON数据
app.use(bodyParser.json());

// 模拟家居设备的状态
let devices = {
  lights: false,
  thermostat: 72,
  securitySystem: 'disarmed',
};

// 路由：获取所有设备状态
app.get('/devices', (req, res) => {
  res.json(devices);
});

// 路由：控制灯光状态
app.post('/controlLights', (req, res) => {
  const { action } = req.body;
  devices.lights = action === 'on';
  res.json({ success: true, message: `Lights turned ${action}` });
});

// 路由：设置恒温器温度
app.post('/setThermostat', (req, res) => {
  const { temperature } = req.body;
  devices.thermostat = temperature;
  res.json({ success: true, message: `Thermostat set to ${temperature} degrees` });
});

// 路由：控制安全系统状态
app.post('/controlSecuritySystem', (req, res) => {
  const { action } = req.body;
  devices.securitySystem = action;
  res.json({ success: true, message: `Security system ${action}` });
});

// 启动Express服务器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
