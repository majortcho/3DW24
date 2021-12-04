const models = require('../models')

module.exports = {
    getAllUsers:function(req, res){
        models.User.findAll(
        ).then(function(user) {
            res.status(201).json({user})
        })
    },
    getOneUser:function(req, res){
        models.findOne({
            where: {title: 'Users'},
            attributes: ['id']
        }).then(function(user) {
            res.status(201).json({user})
        })
    },

    createOneUser:function(req,res){
        User.create({ username: 'fnord', job: 'omnomnom' })
        .then(() => User.findOrCreate({where: {username: 'fnord'}, defaults: {job: 'something else'}}))
        .then(([user, created]) => {
        console.log(user.get({
        plain: true
        }))
        console.log(created)
    })
    },

    deletOneUser:function(req, res){
        models.destroy({
            where: {title: 'Users'},
            attributes: ['id']
        })
    }
};