// data-controller is just a place-holder for some app specific routes that require authentication

const getSecretAnswer = async(req:any, res:any, next:any) => {
    const { first_name, last_name } = req.user // passport-session supplies req.user after log-in
    try {
        const nr = await fetchSecretNr();
        res.json(`Hello ${first_name} ${last_name}! The secret nr from the back-end is: ${nr} 😀`);
    } catch(err){
        return next(err);
    }
}

module.exports = { getSecretAnswer };