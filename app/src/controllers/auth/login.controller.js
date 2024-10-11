exports.login = async (req, res, next) => {
    try {
        res.status(200).json({message: 'correct'});
    } catch (e) {
        return next(e);
    }
}