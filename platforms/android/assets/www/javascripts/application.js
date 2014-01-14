
// steroids.view.navigationBar.show("Hello World");

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function gotFS(fileSystem) {
    alert(fileSystem.root.fullPath);
}

function fail(error) {
    console.log(error.code);
}
