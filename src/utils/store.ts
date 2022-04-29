import { hoursToMs } from '.';

/**
 * LocalStorage wrapper for persistent data
 */
class Store {
  /**
   * Retrieve object data from local memory
   *
   * @param {string} name
   *   Key value of the object
   *
   * @return {any|null}
   *   The object stored in memory, or `null`
   */
  static get(name: string): any | null {
    const objStr = localStorage.getItem(name);
    if (!objStr) {
      return null;
    }

    const obj = JSON.parse(objStr);
    if (obj.hasOwnProperty('ttl')) {
      if (obj.ttl < Date.now()) {
        this.remove(name);
        return null;
      } else {
        return obj.data;
      }
    } else {
      return obj;
    }
  }

  /**
   * Put object data on local memory (this overwrite previous object)
   *
   * @param {string} name
   *   Key value of the object
   * @param {any} obj
   *   Object value to store
   */
  static set(name: string, obj: any) {
    const objStr = JSON.stringify(obj);
    localStorage.setItem(name, objStr);
  }

  /**
   * Remove object data from local memory
   *
   * @param {string} name
   *   Key value of the object
   */
  static remove(name: string) {
    localStorage.removeItem(name);
  }

  /**
   * Put object data on local memory with a ttl
   *
   * @param {string} name
   *   Key value of the object
   * @param {any} obj
   *   Object value to store
   * @param {number} ttl
   *   Time to live of the object (in milliseconds, default=8h)
   */
  static setWithTTL(name: string, obj: any, ttl: number = hoursToMs(8)) {
    const ttlObj = { data: obj, ttl: Date.now() + ttl };
    this.set(name, ttlObj);
  }
}

export default Store;
