async function retrieveData(res, data){
    return await res.send({
        "message" : "Successfully retrieved all data",
        "status" : true,
        "data" : data
    });
}

async function retrieveDataById(res, req, data){
    return await res.send({
        "message" : `Successfully retrieved the data of id: ${req.params.id}`,
        "status" : true,
        "data" : data
    });
}

async function updateData(res, req, data){
    return await res.send({
        "message" : `Successfully updated the data of id: ${req.params.id}`,
        "status" : true,
        "data" : data
    });
}

async function deleteData(res, req){
    return await res.send({
        "message" : `Successfully deleted the id: ${req.params.id}`,
        "status" : true
    });
}

async function createData(res, req, data){
    return await res.send({
        "message" : `Successfully created the id: ${req.params.id}`,
        "status" : true,
        "data" : data
    });
}

module.exports.retrieveData = retrieveData;
module.exports.retrieveDataById = retrieveDataById;
module.exports.updateData = updateData;
module.exports.deleteData = deleteData;
module.exports.createData = createData;

