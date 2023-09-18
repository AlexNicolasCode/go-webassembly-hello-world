build:
	tinygo build -o ./wasm/main.wasm -target wasm ./wasm/main.go

start:
	go run main.go