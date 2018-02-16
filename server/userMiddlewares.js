module.exports = {
    checkForSession : (req, res, next) => {
        if(!req.session.cart) {//is this where it is checking to see if they have visisted before?
            req.session.cart = []

        }
        next();
    }
}