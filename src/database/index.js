
import mongoose from 'mongoose';



class Database {

    constructor() {
        this.init();
        this.mongo();
    }
    init() {
       
    }
    mongo() {
        this.mongoConnection = mongoose.connect('mongodb://localhost:27017/sms_hub', {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
    }

    
}

export default new Database();
