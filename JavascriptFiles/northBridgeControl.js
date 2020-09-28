const command = process.argv[2];

function extendBridge(command) {
    if (command == "EXTEND") {
        console.log("Extending bridge!");
    }
}

extendBridge(command);