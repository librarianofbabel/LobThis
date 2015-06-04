function getSelectedText() {
	var text = "";
	if (window.getSelection) {
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

var formext = document.createElement("form");
formext.setAttribute("method", "POST");
formext.setAttribute("target", "_blank");
formext.setAttribute("action", "https://libraryofbabel.info/resourcelocator.cgi");

var hiddenField = document.createElement("input");
hiddenField.setAttribute("type", "hidden");
hiddenField.setAttribute("name", "extension");
hiddenField.setAttribute("value", getSelectedText() || document.body.innerHTML); // take selected text OR bodytext

formext.appendChild(hiddenField);
document.body.appendChild(formext);
formext.submit();
