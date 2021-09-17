import { NativeModules } from 'react-native';

type JsiPocType = {
  multiply(a: number, b: number): Promise<number>;
};

const { JsiPoc } = NativeModules;

export default JsiPoc as JsiPocType;
