const section = document.getElementById("projects")

let projects = [
  { tag: "Easy", title: "Transparent Login Form", img: "tlf" },
  { tag: "Easy", title: "TResponsive Video Background", img: "rvb" },
]

projects.map((project) => {
  section.innerHTML += `
    <article>
    <div class='tag'>${project.tag}</div>

    <div class='title'>
      <a href="/CSS-RoadMap/${project.title}">${project.title}</a>
    </div>

    <figure>
      <a href="/CSS-RoadMap/${project.title}">
        <img src='img/${project.img}.png' alt = ${project.title}>
      </a>
    </figure>

    <a href="https://github.com/Roopaish/CSS-RoadMap/tree/master/${project.title}" target='_blank' class='code-link'>
      View Project Code →
    </a>

  </article>
`
})
