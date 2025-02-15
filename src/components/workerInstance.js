const workerInstance = new Worker(new URL("./worker-javascript.js", import.meta.url));
export default workerInstance;