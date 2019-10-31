const peopleContainer = document.querySelector(".people");
fetch("https://randomuser.me/api/?results=21")
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        `Looks like there was a problem. Status Code: ${response.status}`
      );
      return;
    }
    response.json().then(function(data) {
      getPortrait(data);
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

const getPortrait = res => {
  for (let i = 0; i < res.results.length; i++) {
    const portrait = document.createElement("div");
    portrait.setAttribute("class", "portrait");
    portrait.style.backgroundImage = `url('${res.results[i].picture.medium}')`;
    peopleContainer.appendChild(portrait);
    switch (i) {
      case 0:
        portrait.setAttribute("id", "first-photo");
        break;
      case res.results.length - 1:
        portrait.setAttribute("id", "last-photo");
        break;
    }
  }
};
