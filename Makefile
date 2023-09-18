build:
	tinygo build -o main.wasm -target wasm ./main.go

start:
	go run main.go