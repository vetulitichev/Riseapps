class LocalStorage {
    static clearStorage() {
        localStorage.clear();
    }

    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}

export default LocalStorage;
