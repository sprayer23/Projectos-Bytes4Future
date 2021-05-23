class File {
    #name

    constructor(name) {
        this.#name = name;
    }

    toString() {
        return this.#name;
    }
}

class Directory extends File {
    #files
    constructor(name) {
        super(name);
        this.#files = []
    }

    addFile(file) {
        this.#files.push(file);
    }

    toString() {
        let fileNames = "";
        for(const file of this.#files) {
            fileNames += file.toString() + ', '
        }
        return `${super.toString()} [${fileNames}]`
    }
}

const a = new Directory("a");
const b = new File("b")
const ab = new File("ab")
const aa = new Directory("aa")
a.addFile(b)
a.addFile(aa)
aa.addFile(ab)
// a
//   b
//   aa
//     ab

console.log(a.toString())
// console.log(f.toString())
