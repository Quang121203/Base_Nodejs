const homeController =(req, res)=>{
    res.send('Helloss World!');
}

const abcController =(req, res)=>{
    res.send('abc');
}

const testController =(req, res)=>{
    res.render('test.ejs');
}

module.exports ={homeController, testController,abcController}