class Channel {
    // ...
    #subscribers
    constructor() {
        this.#subscribers = [];
    }

    addVideo(nome) {
        for(const subscriber of this.#subscribers) {
            subscriber.notify(nome)
        }
    }

    addSubscriber(sub) {
        this.#subscribers.push(sub)
    }
}

class Subscriber {
    notify(video) {
        console.log('Há um novo vídeo chamado ' + video)
    }
}

const sub = new Subscriber();
const channel = new Channel();
channel.addVideo("Video 1");

channel.addSubscriber(sub);
channel.addVideo("Video 2");