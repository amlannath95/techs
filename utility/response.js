//Displays the data of all techies
async function retrieveData(res, data){
    return await res.send({
        "message" : "Successfully retrieved all data",
        "status" : true,
        "data" : data
    });
}

//Displays the data of the techie specified by id
async function retrieveDataById(res, req, data){
    return await res.send({
        "message" : `Successfully retrieved the data of id: ${req.params.id}`,
        "status" : true,
        "data" : data
    });
}

//Displays the updated data of the techie specified by id
async function updateData(res, req, data){
    return await res.send({
        "message" : `Successfully updated the data of id: ${req.params.id}`,
        "status" : true,
        "data" : data
    });
}

//Deletes the techie specified by id
async function deleteData(res, req){
    return await res.send({
        "message" : `Successfully deleted the id: ${req.params.id}`,
        "status" : true
    });
}

//Creates the techie and displays the data
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

