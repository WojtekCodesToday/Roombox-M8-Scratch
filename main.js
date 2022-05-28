class RoomBoxM8 {
    getInfo() {
        return {
            "id": "RoomBoxM8",
            "name": "RoomBoxM8",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": Scratch.BlockType.COMMAND,
                    "text": "Hello world!",
                    },
                    "blocks": [{
                    "opcode": "substringy",
                    "blockType": Scratch.BlockType.COMMAND,
                    "text": "Hello world Two!",
                    }
                },
            }],
    };
}
Scratch.extensions.register(new RoomBoxM8());
