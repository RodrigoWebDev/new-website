import ProjectsJson from "../../data/projects.json"

const images = [];
ProjectsJson.map((item) => {
    images.push(item);
})

export default images;