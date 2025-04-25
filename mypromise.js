class MyPromise {
  /**
   * @param {any} value
   */
  constructor(exec) {
    this.value = null;
    this.reason = null;
    this.Resolved = null;
    this.Rejected = null;

    /**
     * @param {any} value
     */
    const resolve = (value) => {
      this.value = value;
      if (this.Resolved) {
        this.Resolved(value);
      }
    };

    /**
     * @param {any} value
     */
    const reject = (value) => {
      this.reason = value;
      if (this.Rejected) {
        this.Rejected(value);
      }
    };

    try {
      exec(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(res) {
    return new MyPromise((resolve, reject) => {
      const handle = (value) => {
        try {
          const result = res(value);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      };
      if (this.value) {
        handle(this.value);
      } else {
        this.Resolved = handle;
        this.Rejected = reject;
      }
    });
  }
  catch(rej) {
    return new MyPromise((resolve, reject) => {
      const handle = (value) => {
        try {
          const result = rej(value);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      };
      if (this.reason) {
        handle(this.reason);
      } else {
        this.Rejected = handle;
        this.Resolved = resolve;
      }
    });
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("working");
  }, 1000);
});

promise
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("error ", err);
  });
