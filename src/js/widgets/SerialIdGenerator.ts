export class SerialIdGenerator {
    private previousId = 0;

    public generateId(): number {
        const nextId = this.previousId + 1;

        this.previousId = nextId;

        return nextId;
    }
}
