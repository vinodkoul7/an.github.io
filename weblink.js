var links = document.getElementById('weblist');
links.onchange = function () {
    var userlink = this.options [this.selectedIndex];
    if (userOption.value != "nothing") {
        window.open(userOption.value, "")
    }
}
