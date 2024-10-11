exports.register = async (req, res, next) => {
    try {
        res.status(200).json({message: 'register correct'});
    } catch (e) {
        return next(e);
    }
}