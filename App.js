import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.height*.4);
const imageWidth = dimensions.width;

//var SwitchVar = 5;

export default function App() {

  let [SwitchVar, setSwitchVar]  =  React.useState(1);

const SwitchVariables = {
  Pictures: {
    UICPicture: require('./images/UIC.jpg'),
    EDTPicture: require('./images/EDT.jpg'),
    TennisPicture: require('./images/Tennis.jpg'),
    FunPicture: require('./images/Fun.jpg'),
    ThanksPicture: require('./images/Thanks.jpg')
  },
  Paragraphs: {
    UICParagraph: `Matt has a degree in Computer Hardware Engineering from The University of Illinois at Chicago.  He took classes such as Physics, VLSI Design and Microchip Manufacturing.  He was also a member of Engineering Design Team, where he competed in various robotics competitions and learned about topics ranging from embedded engineering to neural networks.`,
    EDTParagraph: `While at The University of Illinois at Chicago, Matt was a member of Engineering Design Team.  He worked mainly on the Intelligent Ground Vehicle Competition (IGVC), where he helped with embedded design.  He also designed PCBs for the team, and gained exposure to Tensorflow.  The team placed third in Design.`,
    TennisParagraph: 'Matt was a highly successful tennis player in high school, having defeated top ten opponents in the country, winning a national doubles tournament, and defeating eventual Junior French Open Champion Bjorn Fratangelo.',
    FunParagraph: 'In his free time, Matt enjoys playing guitar, reading books, watching movies, and developing software.',
    ThanksParagraph:  '                           Thanks for reading!!'
  }

};

  var PicSwitchVar;
  var ParSwitchVar;

  switch(SwitchVar) {
    case(1):
     PicSwitchVar = SwitchVariables.Pictures.UICPicture;
     ParSwitchVar = SwitchVariables.Paragraphs.UICParagraph;
     break;
    case(2):
    PicSwitchVar = SwitchVariables.Pictures.EDTPicture;
    ParSwitchVar = SwitchVariables.Paragraphs.EDTParagraph;
    break;
    case(3):
    PicSwitchVar = SwitchVariables.Pictures.TennisPicture;
    ParSwitchVar = SwitchVariables.Paragraphs.TennisParagraph;
    break;
    case(4):
    PicSwitchVar = SwitchVariables.Pictures.FunPicture;
    ParSwitchVar = SwitchVariables.Paragraphs.FunParagraph;
    break;
    case(5):
    PicSwitchVar = SwitchVariables.Pictures.ThanksPicture;
    ParSwitchVar = SwitchVariables.Paragraphs.ThanksParagraph;
    break;

  }

  function IncreaseTracker() {
    console.log("In Function");
    if(SwitchVar == '5'){
      console.log("In If");
      setSwitchVar(SwitchVar = 1);;
    } else {
      console.log("In Else");
      setSwitchVar(++SwitchVar);
      console.log(SwitchVar);

    }
  }

  function DecreaseTracker() {
    console.log("In Function");
    if(SwitchVar == '1'){
      console.log("In If");
      setSwitchVar(SwitchVar = 5);;
    } else {
      console.log("In Else");
      setSwitchVar(--SwitchVar);
      console.log(SwitchVar);

    }
  }

  return (
    <View style={styles.container}>
      <Image
      style ={{
        height: imageHeight,
        width: imageWidth,
      }}
      source = {PicSwitchVar} />
      <View style = {{
        bottom: 120,
        marginHorizontal: 20
      }}>
      <Text>
      {ParSwitchVar}
      </Text>
      </View>
      <View style = {{
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        bottom: 120
      }}>
        <Button
        title="Prev"
        onPress={() => DecreaseTracker()}  />
        <Button
        title="Next"
        onPress={() => IncreaseTracker()}  />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
});
