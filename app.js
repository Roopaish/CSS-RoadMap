const section = document.getElementById("projects")

let projects = [
  { tag: "Easy", title: "Transparent Login Form", img: "tlf" },
  { tag: "Easy", title: "Responsive Video Background", img: "rvb" },
  { tag: "Medium", title: "CSS Only Tooltips", img: "ctt" },
  { tag: "Medium", title: "CSS Only Emoji Art", img: "coea" },
  { tag: "Medium", title: "CSS Face Art", img: "cfa" },
  { tag: "Medium", title: "Advanced Hover Effects", img: "ahe" },
  { tag: "Medium", title: "Animated Page Load", img: "apl" },
  { tag: "Medium", title: "Custom Checkbox and Radio", img: "ccar" },
  { tag: "Medium", title: "3D Flip Button", img: "3fb" },
  { tag: "Medium", title: "Animated Preloaders", img: "ap" },
  { tag: "Hard", title: "Youtube Clone - Redesign", img: "ycr" },
  { tag: "Hard", title: "Godot Landing Page - Redesign", img: "glp" },
]

projects
  .slice(0)
  .reverse()
  .map((project) => {
    section.innerHTML += `
    <article>
    <div class='tag'>${project.tag}</div>

    <div class='title'>
      <a href="/CSS-RoadMap/${project.title}">${project.title}</a>
    </div>
    
    <div class='bottom-align'>
      <figure>
        <a href="/CSS-RoadMap/${project.title}">
          <img src='img/${project.img}.png' alt = ${project.title}>
        </a>
      </figure>

      <a href="https://github.com/Roopaish/CSS-RoadMap/tree/master/${project.title}" target='_blank' class='code-link'>
        View Project Code →
      </a>
    </div>

  </article>
`
  })
