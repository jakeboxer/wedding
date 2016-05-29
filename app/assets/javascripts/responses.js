if (window.attachEvent) {
  window.attachEvent("onload", setupSound);
}
else {
  window.addEventListener("load", setupSound, false);
}

function setupSound() {
        if (navigator.appName == "Microsoft Internet Explorer")
        {
                var snd = document.createElement("bgsound");
                document.getElementsByTagName("body")[0].appendChild(snd);

                playSound = function(url)
                {
                        snd.src = url;
                }
        }
        else
        {
                playSound = function(url)
                {
                        var obj = document.createElement("object");
                        obj.width="0px";
                        obj.height="0px";
                        obj.type = "audio/mp3";
                        obj.data = url;

                        var body = document.getElementsByTagName("body")[0];
                        body.appendChild(obj);
                }
        }
}