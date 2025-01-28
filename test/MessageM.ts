
enum MessageType {
    Text = 'text'
}
enum FindType {
    None,
    Car,
    Person,
}
class MessageM {
    private static _i: MessageM;
    public static get I() {
        if (this._i) {
            return this._i;
        }
        this._i = new MessageM();
        return this._i;
    }

    public static MessageType = MessageType;
    public static FindType = FindType
}
