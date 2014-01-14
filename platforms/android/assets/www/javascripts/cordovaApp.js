
// steroids.view.navigationBar.show("Hello World");

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    window.discover(MediaType.VIDEO, function (list) {
      alert(JSON.stringify(list));
    });
}
