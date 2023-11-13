module.exports = function (plop) {	
	plop.setGenerator('basics', {
		description: 'this is a skeleton plopfile',
		prompts: [
            {
                type: 'input',
                name: 'name',
                message: '页面名称:'
            }
        ], 
		actions: [{
            type:'add',
            path:'src/views/{{name}}.vue',
            templateFile:'plop-templates/vue.hbs'
        },{
            type:'modify',
            pattern:'<!--addurl-->',
            path:'src/App.vue',
            templateFile:'plop-templates/url.hbs'
        },{
            type:'modify',
            pattern:'//addrouter',
            path:'src/router/index.ts',
            templateFile:'plop-templates/router.hbs'
        }]  
	});
};