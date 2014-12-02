
/*
 * GET home page.
 */

exports.index = function (req, res, docList) {
  res.render('index', {list: docList});
};