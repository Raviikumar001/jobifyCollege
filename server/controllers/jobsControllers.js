

const createJob= async(req,res)=> {
    res.send('create Job');
}


const getAllJobs= async(req,res)=> {
    res.send('get All Job');
}

const updateJob= async(req,res)=> {
    res.send('update Job');
}

const deleteJob= async(req,res)=> {
    res.send('delete Job');
}


const showStats= async(req,res)=> {
    res.send('showstats ');
}


export {createJob, getAllJobs, updateJob ,deleteJob, showStats}