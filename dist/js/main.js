function autoDateTimeUpdate(){var e=new Date,t=e.toLocaleString("en-us",{weekday:"long"}),n=e.toLocaleString("en-us",{month:"long"}),l=e.getDate(),d=e.getFullYear();let o=e.getHours();var i=String(e.getMinutes()).padStart(2,"0"),e=String(e.getSeconds()).padStart(2,"0"),s=document.getElementById("period");12<=o?s.innerHTML="PM":s.innerHTML="AM",12<o&&(o-=12),0===o&&(o=12),document.getElementById("hours").innerHTML=o+":",document.getElementById("minutes").innerHTML=i+":",document.getElementById("seconds").innerHTML=e,document.getElementById("day").innerHTML=t,document.getElementById("month").innerHTML=n,document.getElementById("daynum").innerHTML=l+",",document.getElementById("year").innerHTML=d}setInterval(autoDateTimeUpdate,1),document.querySelectorAll(".tool").forEach(n=>{n.addEventListener("click",e=>{var t=n.alt;console.log(t),document.getElementById("selected-tool").innerHTML=t.replace("tool","")})}),document.getElementById("exit").addEventListener("click",function(){document.getElementById("greeting-popup").classList.toggle("hidden"),document.getElementById("prompt").classList.toggle("hidden")}),document.getElementById("prompt").addEventListener("click",function(){document.getElementById("prompt").classList.toggle("hidden"),document.getElementById("greeting-popup").classList.toggle("hidden")});let seeAllTags=document.querySelectorAll(".see-all"),tagsHidden=document.querySelectorAll(".tags-hidden");for(let e=0;e<seeAllTags.length;e++)seeAllTags[e].addEventListener("click",function(){tagsHidden[e].classList.toggle("tags-hidden")});let formBtn=document.getElementById("submit-btn");function showSubmissionMessage(){console.log("the email has been sent"),document.getElementById("resume-link").classList.toggle("hidden"),document.getElementById("submission-message").classList.remove("hidden"),document.getElementById("contact-form").reset(),setTimeout(function(){document.getElementById("submission-message").className="hidden",document.getElementById("resume-link").classList.toggle("hidden")},5e3)}formBtn.disabled=!0,document.querySelectorAll(".input-field").forEach(e=>{e.addEventListener("input",function(e){var t=document.querySelectorAll(".input-field")[0].value,n=document.querySelectorAll(".input-field")[3].value,l=document.querySelectorAll(".input-field")[4].value;""==t||""==n||""==l?(formBtn.style.opacity=.5,formBtn.disabled=!0):(formBtn.style.opacity=1,formBtn.disabled=!1)})});