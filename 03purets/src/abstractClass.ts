abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void

    getReelTime(): number
    {
        //some complex calculation
        return 9;
    }
}

class InstagramLite extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter);
    }

    getSepia(): void
    {
        console.log('sepia');
    }
}

const ak = new InstagramLite('test', 'test', 123);
console.log(ak.getReelTime());