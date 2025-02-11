// ANCHOR: a
import Buffer "mo:base/Buffer";

let intStorageP = Buffer.Buffer<Int>(0);

intStorageP.add(-3);
intStorageP.add(-2);
intStorageP.add(-1);

let intStorageN = Buffer.Buffer<Int>(0);

intStorageN.add(0);
intStorageN.add(1);
intStorageN.add(3);

let bufferStorage = Buffer.Buffer<Buffer.Buffer<Int>>(1);

bufferStorage.add(intStorageP);
bufferStorage.add(intStorageN);

let flat : Buffer.Buffer<Int> = Buffer.flatten<Int>(bufferStorage);

Buffer.toArray<Int>(flat);
// ANCHOR_END: a
