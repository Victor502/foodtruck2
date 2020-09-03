import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

class QRCodeReader extends Component {
  constructor(props) {
    super(props);
    this.handleTorch = this.handleTorch.bind(this);
    this.state = {
      torchOn: false,
    };
  }

  handleTorch() {
    this.setState({torchOn: !this.state.torchOn});
  }
  render() {
    const {torchOn} = this.state;
    return (
      <RNCamera
        style={styles.preview}
        flashMode={
          torchOn
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        onBarCodeRead={this.props.barcodeRecognized}
        ref={cam => (this.camera = cam)}
        captureAudio={false}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.handleTorch}
            style={styles.buttonStyle}>
            <Text style={styles.cancelText}>
              Light {torchOn ? 'off' : 'on'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.onCancelPress}
            style={styles.buttonStyle}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  cancelText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonStyle: {
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 30,
    marginHorizontal: 10,
  },
});

export default QRCodeReader;
