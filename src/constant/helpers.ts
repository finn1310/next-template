const Helpers = class {
  checkFileType(type: string) {
    return type.split("/")[0];
  }
};

const helpers = new Helpers();

export { helpers };
