import {Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const Status = ({route, navigation}) => {
  const {name} = route.params;
  const {image} = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        height: '100%',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View>
        {/* title content s */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={image}
              style={{
                width: '90%',
                height: '90%',
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 40,
            }}>
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{
                fontSize: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* title content e */}
      </View>
      <Image source={image} style={{width: '100%', height: 600}} />
    </SafeAreaView>
  );
};

export default Status;

const styles = StyleSheet.create({});
