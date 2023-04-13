

class wheatherController {
    static homepage = (req, res) => {
        res.render('index')
    }
    static aboutpage = (req, res) => {
        res.render('about')

    }
    static wheatherpage = (req, res) => {
        res.render('wheather')
    }
    static mainerror404page = (req, res) => {
        console.log(req.params)
        res.render('404error')





    }
    static wheather404errorpage = (req, res) => {

        res.render('404error')
        console.log(req.params)

    }
    static about404errorpage = (req, res) => {
        console.log(req.params)
        res.render('404error')

    }

}

export default wheatherController
