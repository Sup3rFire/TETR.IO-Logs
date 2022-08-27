if (!window.hasOwnProperty("filters")) window.filters = [];
filters.push((text) => {
  text =
    `let packetLogs = '';window.getPacketLogs = () => {
const a = document.createElement("a");
a.download = "data.log";
a.href = (window.webkitURL || window.URL).createObjectURL(
  new Blob([packetLogs], { type: "text/plain;charset=utf-8" })
);
a.dataset.downloadurl = ["text/plain", a.download, a.href].join(":");
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
};` + text;
  text = text.replace(
    "function SmartEncode(packet, packr = null, extensionData = null) {",
    "function SmartEncode(packet, packr = null, extensionData = null) {console.log(`[O ${new Date().toLocaleString()}] ${JSON.stringify(packet)}`); packetLogs += `[O ${new Date().toLocaleString()}] ${JSON.stringify(packet)}\\n`;"
  );
  text = text.replace(
    "function SmartDecode(packet, unpackr = null) {",
    "function SmartDecode(packet, unpackr = null) {const data = SmartDecoder(packet, unpackr); console.log(`[I ${new Date().toLocaleString()}] ${JSON.stringify(data)}`); packetLogs += `[I ${new Date().toLocaleString()}] ${JSON.stringify(data)}\\n`; return data;};function SmartDecoder(packet, unpackr = null) {"
  );
  return text;
});
