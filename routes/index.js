__path = process.cwd()

const router = require('express').Router();
const route = router;
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const { fetchJson } = require('../lib/myfunc');

route.get('/', (req, res) => {
    res.sendFile(__path + '/index.html')
});

router.get('/api/shorturl', async (req, res, next) => {
	var url = req.query.url
	if (!url) return res.json({ message: 'Enter Params URL' })
	
	let data = await fetchJson(`https://danzzapi.xyz/api/shortlink/bitly?url=${url}&apikey=danzz`)
	res.json({
	status: true,
	author: 'Danzz Coding',
	result: data.result
	})
})

route.get('*', (req, res) => {
    res.status(404).json({
        method : req.method,
        message : 'Error',
        status : false,
        code : 401,
    });
});

module.exports = route;
