document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {
        edge: "right",
    });

	var tabs = document.querySelectorAll(".mainUlNavbar");
	M.Tabs.init(tabs, {
        swipeable: true,
    });

	var fastAccessButtom = document.querySelectorAll(".fixed-action-btn");
	M.FloatingActionButton.init(fastAccessButtom, {
        toolbarEnabled: true,
    });

	var quickAccessNodes = Array.prototype.slice.call(document.querySelectorAll
		(".quickAccessItem"));

	for(const item of quickAccessNodes){
		item.addEventListener('click', function(){
			let index = quickAccessNodes.indexOf(item) + 1;
			let menuItemList = document.querySelectorAll(".menuItemList");
			
			setTimeout(function(){
				menuItemList[index].click();
			},100)
		})
	}
});
