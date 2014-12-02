
/*
 * GET a single document listing.
 */

exports.view = function (req, res, thisDocument) {
  res.render('viewer', {
    docId: req.params.did,
    title: thisDocument.name
  });
};