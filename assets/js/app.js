document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {
        edge: "right",
    });

	var tabs = document.querySelectorAll(".mainUlNavbar");
	M.Tabs.init(tabs, {
        swipeable: true,
    });
});
