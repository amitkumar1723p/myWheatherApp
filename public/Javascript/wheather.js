let searchbox = document.getElementById("search");
let searchbtn = document.getElementById("searchbtn");
let errorbox = document.getElementById("error");
let cityname = document.getElementById("cityname");
let temp = document.getElementById("temp");
let icon = document.getElementById("icon");
let iconname = document.getElementById("iconname");

const fetchdata = async (e) => {
  e.preventDefault();
  let val = searchbox.value;
  const arr = val.split(" ");

  if (searchbox.value == " ") {
    errorbox.innerText = "Empty field does not respond";
    iconname.innerText = " ";
    cityname.innerText = " ";
    temp.innerText = " ";
    icon.innerHTML = " ";
  } else {
    searchbox.value = "";

    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=af4ec3760291266002169c9c1f236cac`;
      errorbox.innerText = "your name is match please wait to get response";
      cityname.innerText = " ";
      iconname.innerText = " ";
      temp.innerText = " ";
      icon.innerHTML = " ";
      let response = await fetch(url);
      let res_data = await response.json();
      temp.style.visibility = "visible";
      icon.style.visibility = "visible";

      errorbox.innerText = "";

      cityname.innerText = `${res_data.name} , ${res_data.sys.country}`;
      temp.innerHTML = `${res_data.main.temp} <sup>o</sup><span>C</span> `;

      if (res_data.weather[0].main == "Clear") {
        icon.innerHTML = '<i class="fa-solid fa-sun yellow font"></i>';
        iconname.style.display = "block";
        iconname.innerText = "Clear Sky";
      } else if (res_data.weather[0].main == "	Rain") {
        icon.innerHTML = ' <i class="fa-solid fa-cloud-rain font blue"></i>';
        iconname.style.display = "block";
        iconname.innerText = "Rain";
      } else if (res_data.weather[0].main == "Clouds") {
        icon.innerHTML = '<i class="fa-solid fa-cloud font wheat"></i>';

        iconname.style.display = "block";
        iconname.innerText = "Clouds";
      } else if (res_data.weather[0].main == "Smoke") {
        icon.innerHTML = '<i class="fa-solid fa-smog font wheat"></i>';
        iconname.style.display = "block";
        iconname.innerText = "Smoke";
      } else if (res_data.weather[0].main == "Haze") {
        icon.innerHTML = ' <i class="fa-solid fa-water font wheat"></i>';
        iconname.style.display = "block";
        iconname.innerText = "Haze";
      } else {
        icon = innerHTML = res_data.weather[0].main;
      }
    } catch (err) {
      errorbox.innerText = "oops 404 error  This city name is does not found";
      icon.innerHTML = " ";
      temp.innerHTML = " ";
    }
  }
};

searchbtn.addEventListener("click", fetchdata);

//  Set Date and Time
let daybox = document.getElementById("day");
let date_month = document.getElementById("date_month");

let currentTime = new Date();
let date = currentTime.getDate();
let day = currentTime.getDay();
let month = currentTime.getMonth();
let dayarr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedensday",
  "Thusday",
  "Friday",
  "Saturday",
];

let montharr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

daybox.innerHTML = dayarr[day];

if (date > 10) {
  date_month.innerHTML = `${date} ${montharr[month]}`;
} else {
  date_month.innerHTML = `0${date} ${montharr[month]}`;
}

// responsive navbar

let navbar = document.querySelector(".navbar");
let navbar_ul = document.getElementById("navbar_ul");
console.log(navbar_ul);
let hamburger_btn = document.getElementById("hamburger_btn");
console.log(hamburger_btn);
let nav = true;
hamburger_btn.addEventListener("click", function () {
  if (nav == true) {
    nav = false;
    navbar.style.height = "200px";

    // navbar_ul.style.visibility = 'visible'
    navbar_ul.style.display = "flex";
  } else {
    nav = true;
    navbar.style.height = "50px";
    // navbar_ul.style.visibility = 'hidden'
    navbar_ul.style.display = "none";
  }
});
