
export const queryErrorHandler = (req, res, next) =>{
    if (req.query){
        res.send(filteredBooks)

    }else{
        next(error)
    }
}