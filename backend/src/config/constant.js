const MONGO_DB_URL = 'mongodb://localhost:27017/myself';
const DUPLICATE_CODE = {
    errCode: 1,
    errMaster: null,
    errMessage: 'کد وارد شده تکراری است'
};
const UPDATE_DB_ERROR = {
    errCode: 1,
    errMaster: null,
    errMessage: 'بروزرسانی با خطا مواجه شد'
};

module.exports = {
    MONGO_DB_URL,
    DUPLICATE_CODE,
    UPDATE_DB_ERROR
}