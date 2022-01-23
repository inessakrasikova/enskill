var nav = document.getElementById("navigation");
/**
 * Формирование ссылок на пункты меню
 */
function linkHref1(link, name) {
  return `<a class="dropdown-item" href="#">${name}</a>`;
}

function linkHref2(link, name) {
  return `<a class="dropdown-item dropdown-toggle" href="#">${name}</a>`;
}
function linkHref(link, name) {
  return `<a href="#" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-theme="${link}">${name}</a>`;
}

/**
 * Создаёт элементы топика
 * @param parent
 * @param childdata
 */
function subsubmenu(parent, childdata) {
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

/**
 * Создаёт список топиков по теме
 * @param parent
 * @param childdata
 */
function submenu(parent, childdata) {
  var submenumainlink = document.getElementById("submenu-" + parent.keyName);
  var submenu = document.createElement("ul");
  submenu.className = "dropdown-menu shadow";
  submenu.setAttribute("id", "submenu-" + parent.keyName + "-menu");

  submenumainlink.appendChild(submenu);

  var submenuId = document.getElementById("submenu-" + parent.keyName + "-menu");

  for (item of childdata) {
    var line = document.createElement("li");
    if (item.submenu) {

      line.className = item.submenu ? "nav-item submenu" : "nav-item";
      line.innerHTML = linkHref(item.link, item.title);
      submenuId.appendChild(line);
      line.setAttribute("id", "submenu-" + item.keyName);
      subsubmenu(item, item.submenu);
    } else {
      line.innerHTML = linkHref2(item.link, item.title);
      submenuId.appendChild(line);
    }
  }
}

/**
 * Создаёт список тем
 * @param data
 */
function createLink(data) {
  for (navLink of data) {
    var line = document.createElement("li");
    if (navLink.submenu) {
      line.className = navLink.submenu ? "dropstart" : "nav-item";
      line.innerHTML = linkHref(navLink.link, navLink.title);
      line.setAttribute("id", "submenu-" + navLink.keyName);
      nav.appendChild(line);
      submenu(navLink, navLink.submenu);
    } else {
      line.innerHTML = linkHref1(navLink.link, navLink.title);
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