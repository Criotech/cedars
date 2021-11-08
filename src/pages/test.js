class GyroJs {
  setGyroPosition(pos) {
    if (pos === null || typeof pos === 'undefined') {
      throw new Error('The position must be defined');
    }
    this.pos = pos;
  }
  constructor() {
    const gyroscopePosition = NativeModules.MyGyroModule.gyroPosition();
    this.setGyroPosition(gyroscopePosition);
  }
}