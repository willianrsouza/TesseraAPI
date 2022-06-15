const emailModel = require('../domain/models/email');


exports.create = async (req, res) => {
    await emailModel.create(req.body).then((emailModel) => {
        res.send(emailModel);
    });
};

exports.findAll = async (req, res) => {
    await emailModel.find({}).then((emailModel) => {
        res.send(emailModel);
    });
};

exports.findById = async (req, res) => {
    const { id } = req.params
    const foundEmail = await emailModel.findById(id)
    res.send(foundEmail)
}

exports.update = async (req, res, next) => {
  await emailModel.findByIdAndUpdate({_id: req.params.id},
    req.body).then(() => {emailModel.findOne({_id: 
    req.params.id}).then((emailModel) => {
      res.send(emailModel);
    });
  }).catch(next);
};

exports.delete = async (req, res, next) => {
  await emailModel.findByIdAndRemove({_id:   
    req.params.id}).then((id) => {
    res.send(id);
  }).catch(next);
};