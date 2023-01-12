const {Sequelize ,DataTypes} = require('sequelize')

const sequelize = new Sequelize({
    dialect:'mysql',
    host:'localhost',
    username:'root',
    password:'fida@8918',
    database:'blog'
});

const Article = sequelize.define('article',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    upvotes:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
   
});

const Comments =sequelize.define('Comments',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },  
    articleId:{
        type:DataTypes.INTEGER,
        references:{
            model:Article,
            key:'id'
        }
    },
    comments:{
        type:DataTypes.STRING(200),
        allowNull:true,
        
}
});

Article.hasMany(Comments,{
    sourceKey:'id',
    foreignKey:'articleId'
});

Comments.belongsTo(Article,{
    targetKey:'id',
    foreignKey:'articleId'
})


module.exports.Article = Article;
module.exports.Comments = Comments;
