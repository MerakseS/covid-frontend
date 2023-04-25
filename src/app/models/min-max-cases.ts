export class MinMaxCases {
    private readonly _country: string;
    private readonly _minCases: number;
    private readonly _minCasesDate: Date;
    private readonly _maxCases: number;
    private readonly _maxCasesDate: Date

    constructor(country: string, minCases: number, minCasesDate: Date, maxCases: number, maxCasesDate: Date) {
        this._country = country;
        this._minCases = minCases;
        this._minCasesDate = minCasesDate;
        this._maxCases = maxCases;
        this._maxCasesDate = maxCasesDate;
    }

    get country(): string {
        return this._country;
    }

    get minCases(): number {
        return this._minCases;
    }

    get minCasesDate(): Date {
        return this._minCasesDate;
    }

    get maxCases(): number {
        return this._maxCases;
    }

    get maxCasesDate(): Date {
        return this._maxCasesDate;
    }
}
