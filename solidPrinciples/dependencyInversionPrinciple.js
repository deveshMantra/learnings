/** violating the dependency inversion principle
 * In this example, we have a Database class that manages a collection of items
 * and a UserController class that uses the Database class to create and retrieve users.
 * The UserController class directly depends on the Database class, violating the dependency inversion principle
 * because the high-level UserController class is depending on the low-level Database class.
 */
class Database {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    get(id) {
        return this.items.find((item) => item.id === id);
    }
}

class UserController {
    constructor() {
        this.database = new Database();
    }

    createUser(name) {
        const user = {id: Date.now(), name};
        this.database.add(user);
        return user;
    }

    getUser(id) {
        return this.database.get(id);
    }
}


/**
 * Applying dip here is u see usercontroller just calls interfaces add methond.
 * it does not care it fetches data from mongod database of local storage or sql database or anything
 */
class Database1 {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    get(id) {
        return this.items.find((item) => item.id === id);
    }
}

class DatabaseInterface1 {
    constructor(database) {
        this.database = database;
    }

    add(item) {
        this.database.add(item);
    }

    get(id) {
        return this.database.get(id);
    }
}

class UserController1 {
    constructor(databaseInterface) {
        this.databaseInterface = databaseInterface;
    }

    createUser(name) {
        const user = {id: Date.now(), name};
        this.databaseInterface.add(user);
        return user;
    }

    getUser(id) {
        return this.databaseInterface.get(id);
    }
}