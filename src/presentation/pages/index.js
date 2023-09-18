const go = new Go();
const init = async () => {
    const { instance } = await WebAssembly.instantiateStreaming(fetch("../../wasm/static/main.wasm"), go.importObject)
    go.run(instance)
    console.log(instance.exports.add(10, 3));
}
init()