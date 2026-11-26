// Clash Verge 全局扩展脚本：将 Apple 开发证书校验、TestFlight 上传与 iCloud/CloudKit 规则前置为 DIRECT
function main(config) {
  const appleDevDirectRules = [
    // 真机开发证书在线校验
    "DOMAIN,ppq.apple.com,DIRECT",
    "DOMAIN-SUFFIX,ocsp.apple.com,DIRECT",
    "DOMAIN-SUFFIX,ocsp2.apple.com,DIRECT",

    // App Store Connect & TestFlight 上传 (Transporter / altool / Xcode)
    "DOMAIN,appstoreconnect.apple.com,DIRECT",
    "DOMAIN,api.appstoreconnect.apple.com,DIRECT",
    "DOMAIN,itunesconnect.apple.com,DIRECT",
    "DOMAIN,contentdelivery.itunes.apple.com,DIRECT",
    "DOMAIN,upload.itunes.apple.com,DIRECT",
    "DOMAIN,developerservices2.apple.com,DIRECT",
    "DOMAIN,idmsa.apple.com,DIRECT",
    "DOMAIN,gsa.apple.com,DIRECT",
    "DOMAIN-SUFFIX,mzstatic.com,DIRECT",
    "DOMAIN-SUFFIX,cdn-apple.com,DIRECT",
    "DOMAIN-SUFFIX,aaplimg.com,DIRECT",

    // iCloud & CloudKit
    "DOMAIN-SUFFIX,icloud.com,DIRECT",
    "DOMAIN-SUFFIX,icloud-content.com,DIRECT",
    "DOMAIN-SUFFIX,apple-cloudkit.com,DIRECT",
  ];

  config.rules = [...appleDevDirectRules, ...(config.rules || [])];
  return config;
}
