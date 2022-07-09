class RoomBoxM8 {
    getInfo() {
        return {
            "id": "RoomBoxM8",
            "name": "RoomBoxM8",
             "blocks": [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hello'
        }
      ]
    };
}
      hello() {
    // You can just return a value: any string, boolean, or number will work.
    // If you have to perform an asynchronous action like a request, just return a Promise.
    // The block will wait until the Promise resolves and return the resolved value.
    return 'Hello, world!';
  }
Scratch.extensions.register(new RoomBoxM8());
