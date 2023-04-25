export class Country {
    private readonly _name: string;
    private readonly _slug: string;
    private readonly _iso2: string

    constructor(name: string, slug: string, iso2: string) {
        this._name = name;
        this._slug = slug;
        this._iso2 = iso2;
    }

    get name(): string {
        return this._name;
    }

    get slug(): string {
        return this._slug;
    }

    get iso2(): string {
        return this._iso2;
    }
}
