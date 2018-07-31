import _ from 'lodash';

class Database {
    constructor() {
        this.db = [{ username: 'root', password: '11111' }];
    }

    findUser(user) {
        const result = _.find(
            this.db,
            ({ username, password }) => !!(username === user.username && password === user.password)
        );

        if (!result) {
            return { status: false, message: 'Invalid username or password' };
        }
        return { status: true, message: '', user };
    }
}

const database = new Database();

export default database;
