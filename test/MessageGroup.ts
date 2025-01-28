class MessageGroup {
    constructor(id: number) {
        this.id = id;
    }

    private id: number = 0;


    public recvMessage(msg: { type: string, data: { text: string}}) {
        if (msg.type !== MessageM.MessageType.Text) {
            return;
        }

        const personKeys = ['车找人'];
        let findType = MessageM.FindType.None;
        for (let i = 0; i < personKeys.length; i++) {
            if (msg.data.text.indexOf(personKeys[i]) >= 0) {
                findType = MessageM.FindType.Person;
                break;
            }
        }
        if (!findType) {
            const carKeys = ['人找车'];
            for (let i = 0; i < carKeys.length; i++) {
                if (msg.data.text.indexOf(carKeys[i]) >= 0) {
                    findType = MessageM.FindType.Car;
                    break;
                }
            }
        }

        switch(findType) {
            case MessageM.FindType.Car:
                this.parseCar(msg.data.text);
                break;
            case MessageM.FindType.Person:
                this.parsePerson(msg.data.text);
            default:
                break
        }
    }

    private parsePerson(text: string) {
        /*
        【类型】车找人 （不接送）
        【车型 】豪华别克七座商务车（安全，宽敞，舒适）
        【时间】1月27日（晚上）19:00（晚上）
        【出发地】黄埔区广汕路，6号线黄陂地铁站C出口
        【目的地】兴宁西，市文化广场
        【座位】4-5个/130元
        【电话 微信】15818889933
        */
       const time = text.match(/【时间】(\d{4}-\d{2}-\d{2} \(.*\))/);
       const from = text.match(/【出发地】(.*)/);
       const to = text.match(/【目的地】(.*)/);
       const seat = text.match(/【座位】(\d-\d个)\/(\d+)元/);
       const phone = text.match(/【电话】(\d+)/);
       const wechat = text.match(/【微信】(\d+)/);
    }

    private parseCar(text: string) {

    }
}