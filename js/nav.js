var nav = document.getElementById("navigation");
/**
 * Формирование ссылок на пункты меню
 */
function linkHref(link, name) {
  return `<a class="dropdown-item" href="#" data-theme="${link}">${name}</a>`;
}

function subsubmenu(parent, childdata) {
  var submenumainlink = document.getElementById("submenu-" + parent.keyName);
  var submenu = document.createElement("ul");
  submenu.className = "dropdown-menu dropdown-submenu shadow";
  submenu.setAttribute("id", "submenu-" + parent.keyName + "-menu");
  submenumainlink.appendChild(submenu);

  var submenuId = document.getElementById("submenu-" + parent.keyName + "-menu");

  for (item of childdata) {
    var line = document.createElement("li");
    line.className = item.submenu ? "nav-item submenu" : "nav-item";
    line.innerHTML = linkHref(item.link, item.title);

    if (item.submenu) {
      submenuId.appendChild(line);
      line.setAttribute("id", "submenu-" + item.keyName);
      subsubmenu(item, item.submenu);
    } else {
      submenuId.appendChild(line);
    }
  }
}

function submenu(parent, childdata) {
  var submenumainlink = document.getElementById("submenu-" + parent.keyName);
  var submenu = document.createElement("ul");
  submenu.className = "dropdown-menu shadow";
  submenu.setAttribute("id", "submenu-" + parent.keyName + "-menu");

  submenumainlink.appendChild(submenu);

  var submenuId = document.getElementById("submenu-" + parent.keyName + "-menu");

  for (item of childdata) {
    var line = document.createElement("li");
    line.className = item.submenu ? "nav-item submenu" : "nav-item";
    line.innerHTML = linkHref(item.link, item.title);

    if (item.submenu) {
      submenuId.appendChild(line);
      line.setAttribute("id", "submenu-" + item.keyName);
      subsubmenu(item, item.submenu);
    } else {
      submenuId.appendChild(line);
    }
  }
}

function createLink(data) {
  for (navLink of data) {
    var line = document.createElement("li");
    line.className = navLink.submenu ? "nav-item submenu" : "nav-item";
    line.innerHTML = linkHref(navLink.link, navLink.title);
    if (navLink.submenu) {
      //submenu(navLink, navLink.submenu);
      line.setAttribute("id", "submenu-" + navLink.keyName);
      nav.appendChild(line);
      submenu(navLink, navLink.submenu);
    } else {
      nav.appendChild(line);
    }
  }
}

/**
 * Подгрузка JSON из файла
 */
fetch("./json/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    createLink(data);
    // console.log(data);
  })
  .then(() => {
    selectTheme();
  })
  .catch((err) => {
    // Do something for an error here
  });

// (c) 2020-2021 Written by Simon Köhler in Panama
// github.com/koehlersimon
// simon-koehler.com

// No JavaScript needed for this example anymore!

document.addEventListener('click',function(e){
  // Hamburger menu
  if(e.target.classList.contains('hamburger-toggle')){
    e.target.children[0].classList.toggle('active');
  }
})