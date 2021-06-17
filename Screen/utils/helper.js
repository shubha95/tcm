import {Dimensions} from 'react-native';
const standardWidth = 414.0;
const standardHeight = 896.0;
const myWidth = Dimensions.get("window").width;
const myHeight = Dimensions.get("window").height;

export function widthScale(dimension) {
  return (dimension / standardWidth) * myWidth;
}

    
export function heightScale(dimension) {
  return (dimension / standardHeight) * myHeight;
}



