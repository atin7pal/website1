let teamarr = [
  {
    id: 1,
    imagelink:
      "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
    name: "Person 1",
    designation: "designation one",
  },
  {
    id: 2,
    imagelink:
      "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
    name: "Person 2",
    designation: "designation two",
  },
  {
    id: 3,
    imagelink:
      "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
    name: "Person 3",
    designation: "designation three",
  },
  {
    id: 4,
    imagelink:
      "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
    name: "Person 4",
    designation: "designation four",
  },
  {
    id: 5,
    imagelink:
      "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
    name: "Person 5",
    designation: "designation five",
  },
];

const teamdisp = document.getElementById("teamrow");

teamarr.forEach((element) => {
  const container = document.createElement("div");
  const avatar = document.createElement("img");
  const membername = document.createElement("h4");
  const memberdsg = document.createElement("h6");

  container.append(avatar);
  container.append(membername);
  container.append(memberdsg);

  teamdisp.append(container);

  avatar.setAttribute("src", element.imagelink);
  membername.innerHTML = element.name;
  memberdsg.innerHTML = element.designation;

  container.setAttribute(
    "class",
    "mainbox autoheight centered lightaccent marginrl"
  );
  avatar.setAttribute("class", "avatar");
  membername.setAttribute("class", "whitefont mainfont centertext margin20");
  memberdsg.setAttribute("class", "whitefont  accentstylefont");
});

function movesection1() {
  gsap.to(window, { duration: 2, scrollTo: "#servicesection" });
}

gsap.registerPlugin(ScrollToPlugin);

function movesectionservice() {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#servicesection",
    offsetY: 20,
  });
}

function movesectionhome() {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#homesection",
    offsetY: 20,
    marginTop: "50px",
  });
}

function movesectioncontact() {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#contactsection",
    offsetY: 20,
  });
}

function movesectionabout() {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#aboutsection",
    offsetY: 0,
    pin: true,
    scrub: 1,
  });
}

function movesectionmain() {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#homesection",
    offsetY: 20,
  });
}

// keep track of previous scroll position
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector(".navbar").classList.add("show");
  } else {
    // user has scrolled down
    document.querySelector(".navbar").classList.remove("show");
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});
