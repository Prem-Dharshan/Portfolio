// import details from "../../../details/source.json";

document.querySelectorAll("[data-username]").forEach((element) => {
  element.innerText = details.name;
});

document.querySelectorAll("[data-profile-img]").forEach((element) => {
  element.src = details.profileImg;
  element.setAttribute("alt", "Profile Image");
});

function setAttribute(element, id, text) {
  element.querySelector(id).innerText = text;
}

const about = document.querySelector("#about");

setAttribute(about, "#description", details.about.description);
setAttribute(about, "#occupation", details.about.occupation);
setAttribute(about, "#fromTheFoundersDesk", details.about.fromTheFoundersDesk);

const detailsArray = Object.keys(details.about.details);

about.querySelectorAll("#details-list li span").forEach((ele, i) => {
  ele.innerText = details.about.details[detailsArray[i]];
});

/**
 * Skills
 */

const skills = document.querySelector("#skills");
const skillTemplate = (skill) => {
  return `<div class="progress">
<span class="skill">${skill.name} <i class="val">${skill.progress}%</i></span>
  <div class="progress-bar-wrap">
    <div class="progress-bar" role="progressbar" aria-valuenow="${skill.progress}" aria-valuemin="0" aria-valuemax="100">
</div></div></div>`;
};

for (var skillType of ["softSkills", "hardSkills"]) {
  const skillDiv = skills.querySelector("#" + skillType);
  details.skills[skillType].forEach(
    (skill) => (skillDiv.innerHTML += skillTemplate(skill))
  );
}

/**
 * Certificates
 */

const certificates = document.querySelector("#certificates");
const certificateDiv = certificates.querySelector("[data-flickity]");
const certificateTemplates = (certificate) => {
  return `<div class="px-3" style="width: calc(100% - 2rem); max-width: 920px;">
  <a href="${certificate.verifyLink}">
    <img class="img-fluid rounded"
      src="${certificate.img}" alt="Bg-img">
  </a>
  <div class="flickity-hidden py-4 text-center">
    <h6 class="text-uppercase text-white">
      ${certificate.name}
    </h6>
    <p class="fs-sm text-center text-white-80 mb-0">
      ${certificate.description}
    </p>
  </div>
</div>`;
};

setAttribute(certificates, "#description", details.certificates.description);

details.certificates.list.forEach((certificate) =>
  certificateDiv.innerHTML += certificateTemplates(certificate)
);

/**
 * 
 */
