    const {useState} = React;

    // 🔹 Skill Tiles
    function SkillTiles() {
      const skills = [
        {
          title: "Systems Programming",
          desc: "C, Zig, memory handling, low-level debugging"
        },
        {
          title: "Linux Internals",
          desc: "POSIX APIs, syscalls, kernel interaction"
        },
        {
          title: "Neovim Plugins",
          desc: "Lua-based plugin development & customization"
        }
      ];

      const [active, setActive] = useState(null);

      return (
        <div className="tiles">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`tile ${active === i ? "active" : ""}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              <h4>{skill.title}</h4>
              {active === i && <p>{skill.desc}</p>}
            </div>
          ))}
        </div>
      );
    }

    // 🔹 Preferred Languages
    function PreferredLanguages() {
      return (
        <div className="languages">
          <a href="https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html">
            <img src="assets/C_logo.png"></img>
          </a>
          <a href="https://www.python.org/">
            <img src="assets/Python_logo.png"></img>
          </a>
          <a href="https://ziglang.org/">
            <img src="assets/Zig_logo.png"></img>
          </a>
        </div>
      );
    }

    // 🔹 Spoken Languages (creative chips)
    function SpokenLanguages() {
      const langs = [
        {name: "English", level: "Fluent"},
        {name: "Hindi", level: "Native"}
      ];

      return (
        <div className="lang-chips">
          {langs.map((l, i) => (
            <div key={i} className="chip">
              <span>{l.name}</span>
              <small>{l.level}</small>
            </div>
          ))}
        </div>
      );
    }

    // 🔹 Main Skillset Component
    function SkillsetApp() {
      return (
        <div>
          <h3>Technical Focus</h3>
          <SkillTiles />

          <h3>Preferred Languages</h3>
          <PreferredLanguages />

          <h3>Spoken Languages</h3>
          <SpokenLanguages />
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("skillset-root"))
      .render(<SkillsetApp />);

    // 🚀 Projects Section
    function Projects() {
      const projects = [
        {
          name: "ThemeControl.nvim",
          desc: "Manage and switch between multiple Neovim themes dynamically.",
          link: "https://github.com/lokop5116"
        },
        {
          name: "NvimRunner",
          desc: "Run code directly inside Neovim using integrated terminal.",
          link: "https://github.com/lokop5116"
        },
        {
          name: "FUSEcrypt",
          desc: "Encrypted filesystem using FUSE and OpenSSL.",
          link: "https://github.com/lokop5116"
        },
        {
          name: "SafeSleep",
          desc: "Custom implementation of POSIX sleep without dependencies.",
          link: "https://github.com/lokop5116"
        }
      ];

      return (
        <div className="projects-container">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              className="project-card"
            >
              <div className="project-content">
                <h4>{p.name}</h4>
                <p className="project-desc">{p.desc}</p>
              </div>
              <div className="project-line"></div>
            </a>
          ))}
        </div>
      );
    }

    // Mount it
    ReactDOM.createRoot(document.getElementById("projects-root"))
      .render(<Projects />);

