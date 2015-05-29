var bodytext = document.body;
var formext = document.createElement("form");
formext.setAttribute("method", "POST");
formext.setAttribute("action", "http://libraryofbabel.info/resourcelocator.cgi");
formext.setAttribute("target", "_blank");

var hiddenField = document.createElement("input");
hiddenField.setAttribute("type", "hidden");
hiddenField.setAttribute("name", "extension");
hiddenField.setAttribute("value", bodytext.innerHTML);

console.log(bodytext);
formext.appendChild(hiddenField);
document.body.appendChild(formext);
formext.submit();
