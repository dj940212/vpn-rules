# vpn-rules

个人代理分流插件与规则集合（支持托管配置不覆盖）。

## 覆盖范围
- **真机开发证书校验**：`ppq.apple.com`、`ocsp.apple.com`、`ocsp2.apple.com`
- **TestFlight / App Store Connect 上传**：`appstoreconnect.apple.com`、`api.appstoreconnect.apple.com`、`contentdelivery.itunes.apple.com`、`upload.itunes.apple.com`、`itunesconnect.apple.com`、`developerservices2.apple.com`、`idmsa.apple.com`、`gsa.apple.com`、`mzstatic.com`、`cdn-apple.com`、`aaplimg.com`
- **iCloud / CloudKit**：`icloud.com`、`icloud-content.com`、`apple-cloudkit.com`

*(不放行无关的 Apple 全量域名，保留外区 App Store 与 Apple Intelligence 走代理。)*

---

## iOS · Loon 插件

- Raw 链接：`https://raw.githubusercontent.com/dj940212/vpn-rules/main/apple-dev-verify-direct.plugin`
- 导入方式：Loon → **配置** → **插件** → 右上角 **＋** → 粘贴链接安装并启用。

---

## macOS · Clash Verge 全局扩展脚本

- Raw 链接：`https://raw.githubusercontent.com/dj940212/vpn-rules/main/clash-verge-apple-dev-direct.js`
- 导入方式：Clash Verge → **订阅（Profiles）** → **新建（选择 Script 类型）** 或编辑 **全局扩展脚本（Global Extend Script）**，粘贴脚本内容或导入链接即可自动将上述规则前置为 `DIRECT`。
