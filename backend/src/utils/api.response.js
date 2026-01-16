class ApiResponse{
    constructor(statusCode,data,message = "Success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400; // anything above 400 is treated as error

    }
}
export {ApiResponse}