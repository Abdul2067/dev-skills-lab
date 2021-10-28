import * as skillsDb from "../data/skills-db.js"

function index(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render("skills/index", {
      skills: skills,
      error: error,
      time: req.time
    })
  })
}

function show(req, res) {
  skillsDb.findById(req.params.id, function(error, skill) {
    res.render("skills/show", {
      skill: skill,
      error: error
    })
  })
  // console.log(req.params.id)
}

function newSkill(req, res) {
  res.render("skills/new")
}

function create(req, res) {
  skillsDb.create(req.body, function(error, skill) {
    res.redirect("/skills")
  })
}

export {
  index,
  show,
  newSkill as new,
  create,
}