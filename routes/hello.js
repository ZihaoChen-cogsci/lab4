
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.ucserNam;
  res.render('hello', {
    "name": nameToShow,
  });
};
