const{Article,Comments} = require('./data');

Article.sync({alter: true});
Comments.sync({alter: true});