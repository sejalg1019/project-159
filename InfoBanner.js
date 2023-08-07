AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        wtmmtm: {
          banner_url: "./assets/wtmmtmbanner.png",
          title: "Where the Mountain Meets the Moon",
          released_year: "2009",
          description:
            "Where the Mountain Meets the Moon is a fantasy-adventure novel heavily inspired by Chinese folklore and culture. It was written and illustrated by Grace Lin. The novel received numerous awards such as the 2010 Newbery Honor and the 2010 Mythopoeic Fantasy Award for Children's Literature.",
        },
        hwfa: {
          banner_url: "./assets/hwfabanner.png",
          title: "How We Fall Apart",
          released_year: "2021",
          description:
            "How We Fall Apart is a young adult thriller novel focused around four students at an elite prep school. This novel is Katie Zhao's YA debut novel. ",
        },
        tsiaas: {
          banner_url: "./assets/tsiaasbanner.png",
          title: "The Sun Is Also a Star",
          released_year: "2016",
          description:
            "The Sun Is Also a Star is a young adult romance novel written by Nicola Yoon. The novel is a #1 New York Times best seller and won Yoon the John Steptoe New Talent Award. The novel was also adapted into a film by the Warner Brothers in 2019.",
        },
        cwyl: {
          banner_url: "./assets/cwylbanner.png",
          title: "Clap When You Land",
          released_year: "2020",
          description:
            "Clap When You Land is a young adult novel written by Elizabeth Acevedo. It is written in verse, alternating between the perspectives of the two main characters. The novel is a New York Times and IndieBound bestseller. ",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.9,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.65,
        height: 2,
        color: "#fff",
        wrapCount: "35",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });