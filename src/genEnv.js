const fs = require("fs");

let content = "";

if (process.env.VCAP_APPLICATION) {
  var app_info = JSON.parse(process.env.VCAP_APPLICATION);

  content = `REACT_APP_NAME=${app_info.name}
REACT_APP_URIS=${app_info.uris.join(", ")}
REACT_APP_SPACE=${app_info.space_name}
REACT_APP_MEM_LIMITS=${app_info.limits.mem}
REACT_APP_DISK_LIMITS=${app_info.limits.disk}
`;
}

if (process.env.VCAP_SERVICES) {
  var svc_info = JSON.parse(process.env.VCAP_SERVICES);
  for (var label in svc_info) {
    var svcs = svc_info[label];
    for (var index in svcs) {
      content += "REACT_APP_SVC_NAME=" + svcs[index].name;
      content += "\nREACT_APP_SVC_LABEL=" + svcs[index].label;
      content += "\nREACT_APP_SVC_PLAN=" + svcs[index].plan;
    }
  }
}

fs.writeFile(".env", content, (err) => {
  if (err) throw err;
  console.log("saved!");
});
