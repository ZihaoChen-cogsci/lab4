exports.view = function(req, res){
  res.render('index', {
    'name': 'Waiting in Line',
    'image': 'lorempixel.people.1.jpeg',
    'id': 'project1'
  });
};
exports.viewProject = function(req,res){
  var name = req.params.name;
  console.log("The project name is:" + name);
  res.render("project",{
    "projectName": name
  });
}
