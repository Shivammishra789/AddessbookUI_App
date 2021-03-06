class addressbookData {
    
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }

    get phone() {
        return this._phone;
    }

    set phone(phone) {
        this._phone = phone;
    }

    get city() {
        return this._city;
    }

    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }

    get zip() {
        return this._zip;
    }

    set zip(zip) {
            this._zip = zip;
        }
        // tostring method overridden
    toString() {
        return 'Name = ' + this.name + ", Phone = " + this.phone + ", Address = " + this.address +
            ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip;
    }
}