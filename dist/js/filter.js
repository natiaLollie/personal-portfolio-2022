const dropMenuList=document.getElementById("project-dropdown");let projectCard=document.querySelectorAll(".project-card > div"),tabMenuList=document.querySelectorAll("#project-filter ul li");const tabMenuListArr=["all","aiml","webdev","archive"],defaultSubDirectory=document.getElementById("subdirectory-url").innerHTML;let hashtagMenuItem=document.querySelectorAll("#project-filter-skillset ul li");function filterByDropDown(){var e,t=dropMenuList.options[dropMenuList.selectedIndex].value.toLowerCase();resetHashtagMenu(),e=t,resetTabMenu(),document.getElementById(e).classList.add("active"),filterByTab(e),updateUrl(t)}function filterByTab(t){var e;resetHashtagMenu(),projectCard.forEach(e=>{e.style.display="none","archive"===e.getAttribute("data-filter")&&"archive"!=t.toLowerCase()?e.style.display="none":e.getAttribute("data-filter")!=t.toLowerCase()&&"all"!=t||(e.style.display="block")}),t&&(e=tabMenuListArr.indexOf(t),dropMenuList.selectedIndex=e),updateUrl(t)}function filterBySkillsFolder(e){document.getElementById("projects").scrollIntoView(),e=e.toString().toLowerCase(),console.log("selected skills folder: "+e),document.getElementById(e).click()}function filterByHashtagMenu(r){resetTabMenu(),console.log(`hashtag menu item ${r} was selected`),projectCard.forEach(e=>{e.style.display="none";var t=e.getAttribute("tag-filter");new Array(t).toString().split(" ").includes(r)&&"archive"!=e.getAttribute("data-filter")&&(e.style.display="block")})}function resetTabMenu(){tabMenuList.forEach(e=>{tabMenuList.forEach(e=>{e.className=""}),document.getElementById("subdirectory-url").innerHTML=defaultSubDirectory,dropMenuList.selectedIndex=0})}function resetHashtagMenu(){hashtagMenuItem.forEach(e=>{hashtagMenuItem.forEach(e=>{e.className=""})})}function updateUrl(e){e+="-projects",document.getElementById("subdirectory-url").innerHTML=e,document.getElementById("subdirectory-url").className="flicker",setTimeout(function(){document.getElementById("subdirectory-url").className=""},600)}filterByTab("all"),tabMenuList.forEach(e=>{e.onclick=function(){tabMenuList.forEach(e=>{e.className=""}),e.className="active",filterByTab(e.id)}}),document.querySelectorAll(".skills-folder").forEach(t=>{t.addEventListener("click",e=>{filterBySkillsFolder(t.alt)})}),hashtagMenuItem.forEach(t=>{t.onclick=function(){hashtagMenuItem.forEach(e=>{e.className=""}),t.className="hashtag-active";var e=t.textContent;resetTabMenu(),filterByHashtagMenu(e)}});