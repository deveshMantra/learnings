class FactoryPattern {

    create(dbName) {
        switch (dbName) {
            case "MONGO_DB":
                return new mongoDb();
                break;
            case "POST_GRES_SQL":
                return new postGresSql();
                break;
        }
    }
}


class mongoDb {
    constructor(dbUrl = 'mongoDbURL') {
        this.dbUrl = dbUrl;
    }

    getAllData() {
        console.log('i will get from mongodb url', this.dbUrl);
    }
}

class postGresSql {
    constructor(dbUrl = 'postGresURL') {
        this.dbUrl = dbUrl;
    }

    getAllData() {
        console.log('i will get from postgressql with url', this.dbUrl);
    }
}

const dbInstance = new FactoryPattern();
const mongoDbInstance = dbInstance.create('MONGO_DB');
const postGresSqlInstance = dbInstance.create('POST_GRES_SQL');
mongoDbInstance.getAllData();
postGresSqlInstance.getAllData();


